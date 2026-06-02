import { useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'The Roots', exact: true },
  { to: '/micro-forest', label: 'Micro-Forest' },
  { to: '/the-outlook', label: 'The Outlook' },
];

export default function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);

  // Momentum scroll effect
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    let velocity = 0;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let rafId = null;
    let isScrolling = false;

    const ease = 0.072; // lower = heavier/slower momentum

    const onWheel = (e) => {
      e.preventDefault();
      velocity += e.deltaY * 0.6;
      if (!isScrolling) {
        isScrolling = true;
        animate();
      }
    };

    const animate = () => {
      targetScrollY += velocity;
      velocity *= 0.88; // friction — higher = more momentum

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));

      currentScrollY += (targetScrollY - currentScrollY) * ease;
      window.scrollTo(0, currentScrollY);

      if (Math.abs(velocity) > 0.5 || Math.abs(targetScrollY - currentScrollY) > 0.5) {
        rafId = requestAnimationFrame(animate);
      } else {
        isScrolling = false;
        velocity = 0;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-forest-deep text-fog-white font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canopy-shadow/95 backdrop-blur-sm border-b border-moss-mid">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <Leaf className="w-5 h-5 text-bark-accent group-hover:text-fog-white transition-colors duration-300" />
            <span className="font-display text-lg font-bold tracking-widest text-fog-white uppercase">
              Ancient Canopy
            </span>
          </NavLink>

          {/* Nav links */}
          <ul className="flex items-center gap-8">
            {navLinks.map(({ to, label, exact }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `text-sm tracking-widest uppercase font-body transition-all duration-300 border-b-2 pb-0.5 ${
                      isActive
                        ? 'text-fog-white border-bark-accent'
                        : 'text-mist-grey border-transparent hover:text-fog-white hover:border-moss-mid'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page content */}
      <main ref={mainRef} className="pt-[73px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-canopy-shadow border-t border-moss-mid py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-4 h-4 text-bark-accent" />
            <span className="font-display text-sm tracking-widest text-mist-grey uppercase">
              Ancient Canopy
            </span>
          </div>
          <p className="text-mist-grey text-xs tracking-wider font-body">
            Documenting the old-growth world — one frame at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
