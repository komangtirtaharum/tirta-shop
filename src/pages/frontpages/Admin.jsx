
import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(savedOrders);
  }, []);

  const updateStatus = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const formatPrice = (price) =>
    `Rp ${Number(price || 0).toLocaleString("id-ID")}`;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">
        Admin - Kelola Pesanan
      </h1>

      <p className="text-gray-500 mb-6">
        Total pesanan: {orders.length}
      </p>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          Belum ada pesanan masuk.
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl p-6 shadow-sm border"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
                <h2 className="font-bold text-lg">
                  Pesanan #{order.id}
                </h2>

                <span className="text-sm text-gray-500">
                  {order.date || "-"}
                </span>
              </div>

              <div className="space-y-2">
                <p>
                  <b>Nama pelanggan:</b>{" "}
                  {order.customerName || "-"}
                </p>

                <p>
                  <b>Nomor HP:</b> {order.phone || "-"}
                </p>

                <p>
                  <b>Alamat:</b> {order.address || "-"}
                </p>

                <div>
                  <b>Produk yang dipesan:</b>

                  <ul className="list-disc pl-6 mt-2">
                    {(order.items || []).map((item, index) => (
                      <li key={`${item.id || item.name}-${index}`}>
                        {item.name} — {formatPrice(item.price)}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg font-bold text-blue-600 pt-2">
                  Total: {formatPrice(order.total)}
                </p>

                <div className="pt-3">
                  <label
                    htmlFor={`status-${order.id}`}
                    className="block font-medium mb-2"
                  >
                    Status pesanan
                  </label>

                  <select
                    id={`status-${order.id}`}
                    value={order.status || "Menunggu Konfirmasi"}
                    onChange={(e) =>
                      updateStatus(order.id, e.target.value)
                    }
                    className="border rounded-lg p-3 w-full sm:w-auto"
                  >
                    <option>Menunggu Konfirmasi</option>
                    <option>Diproses</option>
                    <option>Dikirim</option>
                    <option>Selesai</option>
                    <option>Dibatalkan</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Admin;