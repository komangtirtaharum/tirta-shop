import { useState } from "react";
import ProductCard from "../../components/ProductCard-temp";
import products from "../../Data/products";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <p className="text-blue-100 mb-2">
            Welcome to
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            TirtaShop
          </h1>

          <p className="text-blue-100 max-w-xl mb-6 leading-relaxed">
            Temukan berbagai fashion dan lifestyle pilihan
            dengan gaya yang simpel, nyaman, dan kekinian.
          </p>

          <a
            href="#produk"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Belanja Sekarang
          </a>

        </div>
      </section>

      <section
        id="produk"
        className="max-w-6xl mx-auto px-4 pb-12"
      >
        <div className="mb-8">
  <h2 className="text-3xl font-bold text-gray-800">
    Produk Pilihan
  </h2>

  <p className="text-gray-500 mt-2">
    Pilihan produk yang cocok untuk gaya sehari-hari.
  </p>

  <input
    type="text"
    placeholder="🔍 Cari produk..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="mt-5 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;