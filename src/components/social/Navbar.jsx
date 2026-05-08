import { useState } from 'react';
import { Home, Compass, Bell, Search, Leaf } from 'lucide-react';

export default function Navbar({ active, setActive }) {
  const [q, setQ] = useState('');

  return (
    <header className="nav fixed inset-x-0 top-0 z-50 h-13" style={{ height: 52 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', gap: 16 }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div style={{ width: 28, height: 28, borderRadius: 10, background: '#6c5ce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Leaf size={14} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#111118', letterSpacing: '-0.03em' }}>Lumina</span>
        </div>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 240, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(108,92,231,0.07)', borderRadius: 9999, padding: '6px 14px', border: '1px solid rgba(108,92,231,0.10)' }}>
          <Search size={13} color="#b0a8c8" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="搜索"
            style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: '#111118', width: '100%', fontFamily: 'inherit' }}
          />
        </div>

        {/* Nav icons */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {[
            { icon: Home,    label: '首页' },
            { icon: Compass, label: '发现' },
            { icon: Bell,    label: '通知', badge: 2 },
          ].map(({ icon: Icon, label, badge }) => (
            <button key={label} onClick={() => setActive(label)} title={label}
              style={{
                position: 'relative', padding: '7px 10px', borderRadius: 10, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                background: active === label ? 'rgba(108,92,231,0.10)' : 'transparent',
                color: active === label ? '#6c5ce7' : '#b0a8c8',
                transition: 'all 0.12s',
              }}>
              <Icon size={18} />
              {badge && (
                <span style={{ position: 'absolute', top: 4, right: 6, width: 14, height: 14, borderRadius: 9999, background: '#e83878', color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #f7f5ff' }}>
                  {badge}
                </span>
              )}
            </button>
          ))}

          {/* Avatar */}
          <div style={{ marginLeft: 6, width: 30, height: 30, borderRadius: 9999, background: 'rgba(108,92,231,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#6c5ce7', cursor: 'pointer', flexShrink: 0 }}>
            我
          </div>
        </nav>
      </div>
    </header>
  );
}
