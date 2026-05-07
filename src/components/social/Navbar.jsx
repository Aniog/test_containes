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
          <div className="w-7 h-7 rounded-lg lg-btn-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="text-shimmer font-bold text-lg hidden sm:block tracking-tight">Lumina</span>
        </div>

        {/* Search */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl lg-input transition-all duration-300 ${focused ? 'w-64' : 'w-44'}`}>
          <Search className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
          <input
            className="bg-transparent text-sm text-white/80 placeholder-white/30 outline-none w-full"
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
              className={`relative p-2 rounded-xl transition-all duration-200 font-medium text-sm
                ${active === label ? 'lg-btn-primary' : 'lg-btn-ghost'}`}
              title={label}
            >
              <Icon className="w-[18px] h-[18px]" />
              {badge && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-0.5 rounded-full bg-pink-500 text-white text-[9px] font-bold flex items-center justify-center border border-white/20">
                  {badge}
                </span>
              )}
            </button>
          ))}

          {/* Avatar */}
          <div className="ml-1 story-ring w-8 h-8 rounded-full cursor-pointer flex-shrink-0">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
              我
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}