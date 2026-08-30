import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-lg tracking-wide"
          >
            AESTHETIQUE
          </Link>

          {/* Links */}
          <div className="flex gap-6 text-xs tracking-wider text-gray-500">

            <Link to="/" className="hover:text-black">
              Portfolio
            </Link>

            <Link to="/services" className="hover:text-black">
              Services
            </Link>

            <Link to="/philosophy" className="hover:text-black">
              Philosophy
            </Link>

            <Link to="/inquiry" className="hover:text-black">
              Inquiry
            </Link>

            <a href="#" className="hover:text-black">
              Instagram
            </a>

          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2024 AESTHETIQUE. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
