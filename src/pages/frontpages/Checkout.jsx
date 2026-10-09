
import { Link } from "react-router-dom";

function Checkout({ cart, onClearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const order = {
      id: Date.now(),
      customerName: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price || 0),
        quantity: 1,
      })),
      total,
      date: new Date().toLocaleString("id-ID"),
      status: "Menunggu Konfirmasi",
    };

    const orders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([...orders, order])
    );

    if (onClearCart) onClearCart();

    alert("Pesanan berhasil dibuat!");
    window.location.href = "/my-orders";
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">
          Keranjang masih kosong
        </h1>
        <Link to="/" className="text-blue-600">
          Kembali Belanja
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4">
          Ringkasan Pesanan
        </h2>

        {cart.map((item, index) => (
          <div
            key={`${item.id || item.name}-${index}`}
            className="flex justify-between gap-4 mb-3"
          >
            <span>{item.name}</span>
            <span>
              Rp {Number(item.price || 0).toLocaleString("id-ID")}
            </span>
          </div>
        ))}

        <hr className="my-4" />

        <p className="font-bold text-lg mb-6">
          Total: Rp {total.toLocaleString("id-ID")}
        </p>

        <form onSubmit={handleOrder} className="space-y-4">
          <input
            name="name"
            placeholder="Nama lengkap"
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Nomor HP"
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            name="address"
            placeholder="Alamat lengkap"
            className="w-full border rounded-lg p-3"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Buat Pesanan
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;