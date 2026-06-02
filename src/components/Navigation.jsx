import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Monoliths', index: '01' },
  { path: '/spaces', label: 'Spaces', index: '02' },
  { path: '/archive', label: 'Blueprint Archive', index: '03' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ mixBlendMode: 'normal' }}
    >
      {/* Logo — blend-mode difference so it inverts over any bg */}
      <div className="blend-text">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white">
          TECTONIC
        </span>
        <span className="font-mono text-[8px] tracking-[0.3em] text-white opacity-50 ml-3">
          SPATIAL DESIGN
        </span>
      </div>

      {/* Nav links */}
      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="group flex items-center gap-2 no-underline"
                style={{ mixBlendMode: 'difference' }}
              >
                <span className="font-mono text-[8px] text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  {item.index}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-[0.25em] uppercase text-white transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-4 h-px bg-white opacity-60" />
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
