import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/museum", label: "The Museum" },
    { to: "/about", label: "About" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080c18]/90 backdrop-blur-md border-b border-slate-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-2xl">⚗️</span>
            <div>
              <span
                className="text-[#c084fc] font-bold text-lg tracking-widest uppercase"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Fictum
              </span>
              <span className="text-slate-400 text-xs block leading-none tracking-widest uppercase">
                Museum of Impossible Inventions
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-[#c084fc]"
                    : "text-slate-400 hover:text-white"
                }`}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/museum"
              className="bg-[#c084fc] text-[#080c18] text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#e9d5ff] transition-colors tracking-wider uppercase"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              Enter Museum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1629] border-t border-slate-700/40 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wider uppercase py-2 transition-colors ${
                isActive(link.to) ? "text-[#c084fc]" : "text-slate-300 hover:text-white"
              }`}
              style={{ fontFamily: "Cinzel, serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/museum"
            onClick={() => setMenuOpen(false)}
            className="bg-[#c084fc] text-[#080c18] text-sm font-bold px-4 py-3 rounded-lg text-center tracking-wider uppercase"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Enter Museum
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
