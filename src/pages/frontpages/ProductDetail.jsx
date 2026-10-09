import { useParams, Link } from "react-router-dom";
import products from "../../Data/products";

function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Produk Tidak Ditemukan
        </h1>

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          Kembali ke Home
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">

      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        ← Kembali ke Produk
      </Link>

      <div className="mt-8 bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2">

jsx
{/* Product Image */}
<div className="bg-gray-100 min-h-[400px] flex items-center justify-center p-6">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full max-h-[500px] object-contain"
    onError={(e) => {
      console.error("Gambar gagal dimuat:", product.image);
    }}
  />
</div>

          {/* Product Information */}
          <div className="p-8 md:p-12">

            <p className="text-sm text-blue-600 font-medium mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-blue-600 mb-6">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Tambah ke Keranjang
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}

export default ProductDetail;