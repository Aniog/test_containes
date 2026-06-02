import { useState, useRef, useEffect } from 'react';
import { Menu, X, Gamepad2, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PLATFORMS, PLATFORM_ORDER } from '@/lib/platformConfig';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Articles', to: '/articles' },
  { label: 'Reviews', to: '/reviews' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  const isPlatformActive = PLATFORM_ORDER.some((k) => pathname === `/${k}`);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPlatformsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1f14]/95 backdrop-blur border-b border-[#4a3020]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-[#f0ebe0] font-black text-xl tracking-tight">
          <Gamepad2 className="w-7 h-7 text-[#e8650a]" />
          <span>SteamVault</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition ${
                  isActive(link.to)
                    ? 'text-[#f0ebe0] border-b-2 border-[#e8650a] pb-0.5'
                    : 'text-[#c4b49e] hover:text-[#f0ebe0]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Platforms dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setPlatformsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition ${
                isPlatformActive
                  ? 'text-[#f0ebe0] border-b-2 border-[#e8650a] pb-0.5'
                  : 'text-[#c4b49e] hover:text-[#f0ebe0]'
              }`}
            >
              Platforms
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${platformsOpen ? 'rotate-180' : ''}`} />
            </button>

            {platformsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden shadow-2xl border border-[#4a3020] bg-[#2c1f14]">
                {PLATFORM_ORDER.map((key) => {
                  const p = PLATFORMS[key];
                  const active = pathname === `/${key}`;
                  return (
                    <Link
                      key={key}
                      to={`/${key}`}
                      onClick={() => setPlatformsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 transition hover:bg-white/5"
                      style={{ borderLeft: active ? `3px solid ${p.accent}` : '3px solid transparent' }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: p.navDot }}
                      />
                      <span className="text-sm font-medium" style={{ color: active ? p.accent : '#c4b49e' }}>
                        {p.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </li>
        </ul>

        <a
          href="https://store.steampowered.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex bg-[#e8650a] hover:bg-[#c9540a] text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
        >
          Visit Steam
        </a>

        <button
          className="md:hidden text-[#c4b49e] hover:text-[#f0ebe0]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2c1f14] border-t border-[#4a3020] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`block text-sm font-medium transition ${
                    isActive(link.to) ? 'text-[#f0ebe0]' : 'text-[#c4b49e] hover:text-[#f0ebe0]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile platforms accordion */}
            <li>
              <button
                onClick={() => setMobilePlatformsOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-medium transition w-full text-left ${
                  isPlatformActive ? 'text-[#f0ebe0]' : 'text-[#c4b49e] hover:text-[#f0ebe0]'
                }`}
              >
                Platforms
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${mobilePlatformsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePlatformsOpen && (
                <ul className="mt-2 ml-3 flex flex-col gap-2 border-l border-[#4a3020] pl-3">
                  {PLATFORM_ORDER.map((key) => {
                    const p = PLATFORMS[key];
                    return (
                      <li key={key}>
                        <Link
                          to={`/${key}`}
                          className="flex items-center gap-2 text-sm font-medium transition"
                          style={{ color: pathname === `/${key}` ? p.accent : '#c4b49e' }}
                          onClick={() => { setOpen(false); setMobilePlatformsOpen(false); }}
                        >
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.navDot }} />
                          {p.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>

          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-center bg-[#e8650a] hover:bg-[#c9540a] text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
          >
            Visit Steam
          </a>
        </div>
      )}
    </nav>
  );
}
