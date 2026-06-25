import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Ship } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/products", label: "Products We Source" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#D9E2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5" aria-label="SSourcing China home">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#0B2545] text-white">
              <Ship className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base lg:text-lg font-bold text-[#0B2545]">SSourcing China</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#64748B]">Sourcing Agent</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#C8102E]"
                      : "text-[#13315C] hover:text-[#C8102E]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2.5 rounded-md bg-[#C8102E] hover:bg-[#A30D26] text-white text-sm font-semibold transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[#0B2545] hover:bg-[#EEF2F7]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-[#D9E2EC] -mx-4 sm:-mx-6 px-4 sm:px-6 pt-3">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-[#EEF2F7] text-[#C8102E]"
                        : "text-[#13315C] hover:bg-[#EEF2F7]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[#C8102E] hover:bg-[#A30D26] text-white text-sm font-semibold"
              >
                Get a Free Sourcing Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
