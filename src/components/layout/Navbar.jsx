import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bone/90 backdrop-blur border-b border-bone-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-xl md:text-2xl tracking-tight text-ink">
              ARTITECT
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-steel-soft group-hover:text-accent transition">
              Machinery
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm tracking-wide text-steel hover:text-ink transition relative py-1",
                    isActive && "text-ink",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={cn(
                        "absolute left-0 -bottom-0.5 h-px bg-accent transition-all",
                        isActive ? "w-full" : "w-0",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-ink text-bone hover:bg-accent transition px-6 py-3 text-xs uppercase tracking-[0.2em]"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-bone-soft bg-bone">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base text-steel hover:text-ink transition",
                    isActive && "text-ink",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.2em] inline-block w-fit"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
