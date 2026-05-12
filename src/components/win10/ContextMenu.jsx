import { useEffect, useRef } from 'react';

export default function ContextMenu({ x, y, items, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  // Clamp to viewport
  const menuW = 200;
  const menuH = items.length * 28 + 8;
  const cx = Math.min(x, window.innerWidth - menuW - 4);
  const cy = Math.min(y, window.innerHeight - menuH - 44);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', left: cx, top: cy,
        width: menuW, background: '#f2f2f2',
        border: '1px solid #c8c8c8',
        boxShadow: '2px 4px 12px rgba(0,0,0,0.25)',
        zIndex: 9500, padding: '4px 0',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item, i) =>
        item === 'separator' ? (
          <div key={i} style={{ height: 1, background: '#d0d0d0', margin: '3px 0' }} />
        ) : (
          <ContextItem key={i} item={item} onClose={onClose} />
        )
      )}
    </div>
  );
}

function ContextItem({ item, onClose }) {
  const handleClick = () => {
    onClose();
    item.onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      disabled={item.disabled}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '4px 20px', border: 'none',
        background: 'transparent', cursor: item.disabled ? 'default' : 'default',
        textAlign: 'left', fontSize: 13,
        color: item.disabled ? '#aaa' : '#000',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
      }}
      onMouseEnter={(e) => { if (!item.disabled) e.currentTarget.style.background = '#0078d4'; if (!item.disabled) e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = item.disabled ? '#aaa' : '#000'; }}
    >
      {item.icon && <span style={{ fontSize: 14, width: 16, textAlign: 'center' }}>{item.icon}</span>}
      <span>{item.label}</span>
      {item.shortcut && <span style={{ marginLeft: 'auto', fontSize: 11, color: 'inherit', opacity: 0.6 }}>{item.shortcut}</span>}
    </button>
  );
}
