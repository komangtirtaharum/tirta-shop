import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      
      <div className="h-52 bg-gray-100 flex items-center justify-center">
        <img
  src={product.image}
  alt={product.name}
  className="w-full h-full object-contain"
/>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-1">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-blue-600 font-bold mb-4">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Lihat Produk
        </Link>
      </div>

    </div>
  );
}

export default ProductCard;