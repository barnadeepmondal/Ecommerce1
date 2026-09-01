import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto h-20 px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-serif text-xl tracking-wide text-black"
        >
          AESTHETIQUE
        </Link>


        {/* Desktop Navigation */}
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


        {/* Desktop Consultation Button */}
        <Link
          to="/inquiry"
          className="hidden md:block bg-black text-white px-7 py-3 text-xs font-semibold tracking-wider hover:bg-gray-800 transition"
        >
          CONSULTATION
        </Link>


        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >

          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>

        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">

          <div className="px-6 py-6 flex flex-col gap-6">

            <Link
              to="/"
              onClick={closeMenu}
              className={`text-xs tracking-[0.15em] uppercase ${
                location.pathname === "/"
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/philosophy"
              onClick={closeMenu}
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
              onClick={closeMenu}
              className={`text-xs tracking-[0.15em] uppercase ${
                location.pathname === "/inquiry"
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              Inquiry
            </Link>

            <Link
              to="/inquiry"
              onClick={closeMenu}
              className="bg-black text-white px-6 py-3 text-xs font-semibold tracking-wider text-center"
            >
              CONSULTATION
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;