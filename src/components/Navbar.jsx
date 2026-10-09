import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          TirtaShop
        </Link>
        <Link to="/my-orders">Pesanan Saya</Link>
<Link to="/admin">Admin</Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;