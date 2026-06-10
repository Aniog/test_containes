import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/products', label: 'Products We Source' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-sm border-b border-[#DDE2EC]' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="SSourcing China home">
          <span className="w-9 h-9 rounded-md bg-[#0B2545] text-white flex items-center justify-center font-bold text-base tracking-tight">
            SS
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-[#0B2545] text-[15px] tracking-tight">SSourcing China</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#6B7A90] font-semibold">Sourcing Agent</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-[14.5px] font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-[#0B2545] bg-[#EEF1F6]'
                    : 'text-[#3D4A5C] hover:text-[#0B2545] hover:bg-[#F8F9FB]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button to="/contact" variant="primary" size="md" showArrow>
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[#0B2545]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#DDE2EC] bg-white">
          <nav className="container-x py-3 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `py-3 px-2 text-[15px] font-medium border-b border-[#EEF1F6] last:border-b-0 ${
                    isActive ? 'text-[#0B2545]' : 'text-[#3D4A5C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
              <Button to="/contact" variant="primary" size="md" showArrow className="w-full">
                Get a Free Sourcing Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
