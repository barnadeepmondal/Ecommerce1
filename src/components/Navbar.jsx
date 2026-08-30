import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-20 px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl tracking-wide text-black"
        >
          AESTHETIQUE
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={`text-xs tracking-[0.15em] uppercase ${
              location.pathname === "/"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Portfolio
          </Link>

          <Link
            to="/services"
            className={`text-xs tracking-[0.15em] uppercase ${
              location.pathname === "/services"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Services
          </Link>

          <Link
            to="/philosophy"
            className={`text-xs tracking-[0.15em] uppercase ${
              location.pathname === "/philosophy"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Philosophy
          </Link>

          <Link
            to="/inquiry"
            className={`text-xs tracking-[0.15em] uppercase ${
              location.pathname === "/inquiry"
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            Inquiry
          </Link>

        </div>

        {/* Button */}
        <Link
          to="/consultation"
          className="bg-black text-white px-7 py-3 text-xs font-semibold tracking-wider hover:bg-gray-800 transition"
        >
          CONSULTATION
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
