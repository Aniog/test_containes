import { useState } from 'react';
import { Home, Search, Bell, MessageCircle, Compass, Zap } from 'lucide-react';

const NAV = [
  { icon: Home,          label: '首页' },
  { icon: Compass,       label: '发现' },
  { icon: MessageCircle, label: '消息', badge: 4 },
  { icon: Bell,          label: '通知', badge: 9 },
];

export default function Navbar({ active, setActive }) {
  const [focused, setFocused] = useState(false);

  return (
    <header className="lg-surface fixed inset-x-0 top-0 z-50 h-14">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4 gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(160,100,255,0.9), rgba(220,60,140,0.9))',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 12px rgba(140,60,220,0.5)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <Zap className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="text-shimmer font-bold text-lg hidden sm:block" style={{ letterSpacing: '-0.03em' }}>
            Lumina
          </span>
        </div>

        {/* Search — glass pill */}
        <div
          className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full lg-input transition-all duration-300 ${focused ? 'w-60' : 'w-40'}`}
        >
          <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.35)' }} />
          <input
            className="bg-transparent text-sm outline-none w-full"
            style={{ color: 'rgba(255,255,255,0.85)', caretColor: '#a78bfa' }}
            placeholder="搜索..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        {/* Nav icons */}
        <nav className="flex items-center gap-1">
          {NAV.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              title={label}
              className={`relative p-2 rounded-xl transition-all duration-200 ${
                active === label ? 'lg-btn-primary' : 'lg-btn-ghost'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {badge && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 6px rgba(244,63,94,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {badge}
                </span>
              )}
            </button>
          ))}

          {/* Avatar */}
          <div
            className="ml-1 flex-shrink-0 cursor-pointer"
            style={{
              padding: '2.5px',
              background: 'conic-gradient(from 0deg, #f59e0b, #ec4899, #8b5cf6, #06b6d4, #f59e0b)',
              borderRadius: '9999px',
              boxShadow: '0 0 10px rgba(139,92,246,0.45)',
            }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                border: '2px solid #04000f',
              }}
            >
              我
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}