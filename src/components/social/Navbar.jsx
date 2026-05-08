import { useState } from 'react';
import { Home, Search, Bell, MessageCircle, Compass, Leaf } from 'lucide-react';

const NAV = [
  { icon: Home,          label: '首页' },
  { icon: Compass,       label: '发现' },
  { icon: MessageCircle, label: '消息', badge: 4 },
  { icon: Bell,          label: '通知', badge: 2 },
];

export default function Navbar({ active, setActive }) {
  const [focused, setFocused] = useState(false);

  return (
    <header className="lg-surface fixed inset-x-0 top-0 z-50 h-14">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-5 gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, rgba(134,210,185,0.90) 0%, rgba(160,190,230,0.90) 100%)',
            border: '1px solid rgba(255,255,255,0.70)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60), 0 2px 8px rgba(134,210,185,0.30)',
          }}>
            <Leaf className="w-3.5 h-3.5" style={{ color: '#1a5a48' }} />
          </div>
          <span className="font-semibold text-base hidden sm:block" style={{ color: '#3d3660', letterSpacing: '-0.02em' }}>
            Lumina
          </span>
        </div>

        {/* Search */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full lg-input transition-all duration-300 ${focused ? 'w-56' : 'w-36'}`}>
          <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#a09ac0' }} />
          <input
            className="bg-transparent text-sm outline-none w-full"
            style={{ color: '#3d3660' }}
            placeholder="搜索..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-0.5">
          {NAV.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              title={label}
              className={`relative p-2 rounded-xl transition-all duration-150 ${active === label ? 'lg-btn-primary' : 'lg-btn-ghost'}`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {badge && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[15px] h-[15px] px-0.5 rounded-full text-[9px] font-semibold flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #f0a8c0, #c8a8e0)',
                    border: '1.5px solid rgba(255,255,255,0.80)',
                    color: '#5a2060',
                    boxShadow: '0 1px 4px rgba(200,140,200,0.30)',
                  }}
                >
                  {badge}
                </span>
              )}
            </button>
          ))}

          {/* Avatar */}
          <div className="ml-1.5 flex-shrink-0 cursor-pointer story-ring">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: 'rgba(200,185,240,0.50)', color: '#4a3880' }}
            >
              我
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
