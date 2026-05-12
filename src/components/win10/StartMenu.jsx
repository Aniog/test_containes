import { useEffect, useRef } from 'react';

const PINNED = [
  { name: 'File Explorer', icon: '📁' },
  { name: 'Edge',          icon: '🌐' },
  { name: 'Settings',      icon: '⚙️' },
  { name: 'Store',         icon: '🛍️' },
  { name: 'Mail',          icon: '✉️' },
  { name: 'Calendar',      icon: '📅' },
];

export default function StartMenu({ onClose, onOpenExplorer }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <div ref={ref} style={{
      position: 'fixed', bottom: 40, left: 0,
      width: 460, background: 'rgba(32,32,32,0.97)',
      backdropFilter: 'blur(30px)',
      boxShadow: '0 -2px 20px rgba(0,0,0,0.6)',
      zIndex: 8999, fontFamily: 'Segoe UI, system-ui, sans-serif',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Search */}
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.1)', borderRadius: 4,
          padding: '6px 12px', border: '1px solid rgba(255,255,255,0.15)',
        }}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="rgba(255,255,255,0.5)">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
          </svg>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>搜索应用、设置和文档</span>
        </div>
      </div>

      {/* Pinned section */}
      <div style={{ padding: '4px 16px 8px' }}>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginBottom: 8 }}>已固定</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
          {PINNED.map((app) => (
            <StartAppBtn
              key={app.name}
              icon={app.icon}
              name={app.name}
              onClick={app.name === 'File Explorer' ? () => { onOpenExplorer(); onClose(); } : onClose}
            />
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '4px 16px' }} />

      {/* Recommended */}
      <div style={{ padding: '8px 16px' }}>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginBottom: 8 }}>推荐</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['最近打开的文件', '文档', '图片'].map((item) => (
            <button key={item} onClick={onClose} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 8px', border: 'none', background: 'transparent',
              borderRadius: 4, cursor: 'default', textAlign: 'left',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ fontSize: 18 }}>📄</span>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13 }}>{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* User / Power row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 16px', borderTop: '1px solid rgba(255,255,255,0.08)',
        marginTop: 4,
      }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', background: 'transparent', cursor: 'default', padding: '4px 8px', borderRadius: 4 }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#0078d4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14 }}>U</div>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontFamily: 'Segoe UI, system-ui, sans-serif' }}>User</span>
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, border: 'none', background: 'transparent', cursor: 'default', padding: '6px 10px', borderRadius: 4, color: 'rgba(255,255,255,0.8)', fontSize: 13, fontFamily: 'Segoe UI, system-ui, sans-serif' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <span>⏻</span> 电源
        </button>
      </div>
    </div>
  );
}

function StartAppBtn({ icon, name, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 4, padding: '10px 6px', border: 'none', background: 'transparent',
      borderRadius: 4, cursor: 'default',
    }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <span style={{ fontSize: 26 }}>{icon}</span>
      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontFamily: 'Segoe UI, system-ui, sans-serif', textAlign: 'center', lineHeight: 1.3 }}>{name}</span>
    </button>
  );
}
