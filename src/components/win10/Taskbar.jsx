import { useState, useEffect } from 'react';

const WIN_LOGO = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="0" y="0" width="7" height="7" fill="#f25022"/>
    <rect x="9" y="0" width="7" height="7" fill="#7fba00"/>
    <rect x="0" y="9" width="7" height="7" fill="#00a4ef"/>
    <rect x="9" y="9" width="7" height="7" fill="#ffb900"/>
  </svg>
);

export default function Taskbar({ windows, activeId, onWindowClick, onStartClick, showStart }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }));
      setDate(now.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit', year: 'numeric' }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, height: 40,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)',
      display: 'flex', alignItems: 'center', zIndex: 9000,
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      {/* Start button */}
      <button
        onClick={onStartClick}
        style={{
          width: 48, height: 40, border: 'none', cursor: 'default',
          background: showStart ? 'rgba(255,255,255,0.15)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.1s',
        }}
        onMouseEnter={(e) => { if (!showStart) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
        onMouseLeave={(e) => { if (!showStart) e.currentTarget.style.background = 'transparent'; }}
      >
        {WIN_LOGO}
      </button>

      {/* Search bar */}
      <div style={{
        height: 30, width: 220, background: 'rgba(255,255,255,0.1)',
        borderRadius: 2, display: 'flex', alignItems: 'center',
        padding: '0 10px', gap: 6, marginLeft: 4, cursor: 'text',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <svg width="13" height="13" viewBox="0 0 20 20" fill="rgba(255,255,255,0.5)">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
        </svg>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'Segoe UI, system-ui, sans-serif' }}>
          在这里输入来搜索
        </span>
      </div>

      {/* Task View button */}
      <button style={{ width: 40, height: 40, border: 'none', background: 'transparent', cursor: 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(255,255,255,0.8)">
          <rect x="1" y="1" width="6" height="6" rx="1"/>
          <rect x="9" y="1" width="6" height="6" rx="1"/>
          <rect x="1" y="9" width="6" height="6" rx="1"/>
          <rect x="9" y="9" width="6" height="6" rx="1"/>
        </svg>
      </button>

      {/* Open windows */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginLeft: 4, gap: 2, overflow: 'hidden' }}>
        {windows.map((w) => (
          <TaskbarItem key={w.id} win={w} isActive={activeId === w.id} onClick={() => onWindowClick(w.id)} />
        ))}
      </div>

      {/* System tray */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, paddingRight: 4 }}>
        {/* Tray icons */}
        <TrayBtn title="网络">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
            <path d="M1.5 8.5a15 15 0 0 1 21 0M5 12a11 11 0 0 1 14 0M8.5 15.5a7 7 0 0 1 7 0M12 19h.01"/>
          </svg>
        </TrayBtn>
        <TrayBtn title="音量">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
            <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </TrayBtn>

        {/* Clock */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '0 12px', height: 40, cursor: 'default', gap: 1,
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <span style={{ color: '#fff', fontSize: 12, fontFamily: 'Segoe UI, system-ui, sans-serif', lineHeight: 1.2 }}>{time}</span>
          <span style={{ color: '#fff', fontSize: 11, fontFamily: 'Segoe UI, system-ui, sans-serif', lineHeight: 1.2 }}>{date}</span>
        </div>

        {/* Show desktop */}
        <div style={{ width: 6, height: 40, borderLeft: '1px solid rgba(255,255,255,0.15)', cursor: 'default' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        />
      </div>
    </div>
  );
}

function TaskbarItem({ win, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: 36, minWidth: 44, maxWidth: 160, padding: '0 10px',
        border: 'none', borderRadius: 2, cursor: 'default',
        background: isActive ? 'rgba(255,255,255,0.2)' : hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
        borderBottom: isActive ? '2px solid #0078d4' : '2px solid transparent',
        display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden',
        transition: 'background 0.1s',
      }}
    >
      <span style={{ fontSize: 16, flexShrink: 0 }}>{win.icon}</span>
      <span style={{ color: '#fff', fontSize: 12, fontFamily: 'Segoe UI, system-ui, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {win.title}
      </span>
    </button>
  );
}

function TrayBtn({ children, title }) {
  return (
    <button title={title} style={{ width: 32, height: 40, border: 'none', background: 'transparent', cursor: 'default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      {children}
    </button>
  );
}
