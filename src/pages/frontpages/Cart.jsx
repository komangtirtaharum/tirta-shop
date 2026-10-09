
import { Link } from "react-router-dom";

function Cart({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  if (cart.length === 0) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <div className="text-6xl mb-4">🛒</div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Keranjang Masih Kosong
          </h1>

          <p className="text-gray-500 mb-6">
            Yuk pilih produk yang kamu suka.
          </p>

          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Mulai Belanja
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Keranjang Belanja
      </h1>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={`${item.id || item.name}-${index}`}
            className="bg-white rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-3xl">{item.icon || "👕"}</span>
                )}
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-blue-600 font-medium">
                  Rp {Number(item.price || 0).toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Total</span>

          <span className="text-2xl font-bold text-blue-600">
            Rp {total.toLocaleString("id-ID")}
          </span>
        </div>

        <Link
          to="/checkout"
          className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Lanjut Checkout
        </Link>
      </div>
    </section>
  );
}

export default Cart;