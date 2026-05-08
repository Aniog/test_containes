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
    <header className="nav-glass fixed inset-x-0 top-0 z-50 h-14">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-5 gap-4">

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, #3ec8a0, #50aae0)',
            boxShadow: '0 2px 10px rgba(62,200,160,0.38)',
          }}>
            <Leaf className="w-3.5 h-3.5" style={{ color: '#fff' }} />
          </div>
          <span className="font-bold text-base hidden sm:block" style={{ color: '#2a2060', letterSpacing: '-0.03em' }}>
            Lumina
          </span>
        </div>

        {/* Search */}
        <div className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${focused ? 'w-56' : 'w-36'}`}
          style={{ background: 'rgba(140,110,220,0.08)', border: '1px solid rgba(140,110,220,0.14)' }}>
          <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#a898c8' }} />
          <input
            className="bg-transparent text-sm outline-none w-full"
            style={{ color: '#2a2060' }}
            placeholder="搜索..."
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        <nav className="flex items-center gap-0.5">
          {NAV.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              title={label}
              className="relative p-2 rounded-xl transition-all duration-150"
              style={{
                background: active === label ? 'rgba(62,200,160,0.15)' : 'transparent',
                color: active === label ? '#1a7a58' : '#8878b8',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Icon className="w-[18px] h-[18px]" />
              {badge && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[15px] h-[15px] px-0.5 rounded-full text-[9px] font-bold flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#f060a0,#a060e0)', color:'#fff', boxShadow:'0 1px 5px rgba(200,80,200,0.38)' }}>
                  {badge}
                </span>
              )}
            </button>
          ))}

          <div className="ml-2 story-ring cursor-pointer flex-shrink-0">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'rgba(155,110,240,0.40)', color: '#2a0868' }}>
              我
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
