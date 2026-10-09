
import { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );
    setOrders(savedOrders);
  }, []);

  const formatPrice = (price) =>
    `Rp ${Number(price || 0).toLocaleString("id-ID")}`;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Pesanan Saya
      </h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <p className="text-gray-500">
            Kamu belum memiliki pesanan.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="font-bold">
                    Pesanan #{order.id}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {order.date || ""}
                  </p>
                </div>

                <span className="h-fit bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {order.status || "Menunggu Konfirmasi"}
                </span>
              </div>

              <div className="my-4 space-y-2">
                {(order.items || []).map((item, index) => (
                  <div
                    key={`${item.id || item.name}-${index}`}
                    className="flex justify-between gap-3"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>
                      {formatPrice(
                        (item.price || 0) * (item.quantity || 1)
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 font-bold flex justify-between">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyOrders;