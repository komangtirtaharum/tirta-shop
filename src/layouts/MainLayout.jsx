import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children, cartCount }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <Navbar cartCount={cartCount} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;