import { useRef, useState, useEffect, useCallback } from 'react';

const TASKBAR_H = 40;

export default function Window({
  id, title, icon, children,
  initialX = 120, initialY = 80,
  initialW = 860, initialH = 560,
  minW = 400, minH = 280,
  isActive, onFocus, onClose, onMinimize,
  isMinimized, zIndex,
}) {
  const [pos, setPos] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ w: initialW, h: initialH });
  const [maximized, setMaximized] = useState(false);
  const [prevState, setPrevState] = useState(null);

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizing = useRef(false);
  const resizeDir = useRef('');
  const resizeStart = useRef({});

  const handleTitleMouseDown = useCallback((e) => {
    if (maximized) return;
    if (e.button !== 0) return;
    onFocus(id);
    dragging.current = true;
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  }, [maximized, pos, id, onFocus]);

  const handleTitleDblClick = useCallback(() => toggleMaximize(), []);

  const toggleMaximize = useCallback(() => {
    if (maximized) {
      setPos(prevState.pos);
      setSize(prevState.size);
      setPrevState(null);
      setMaximized(false);
    } else {
      setPrevState({ pos, size });
      setMaximized(true);
    }
  }, [maximized, pos, size, prevState]);

  const handleResizeMouseDown = useCallback((e, dir) => {
    if (maximized) return;
    e.preventDefault();
    e.stopPropagation();
    onFocus(id);
    resizing.current = true;
    resizeDir.current = dir;
    resizeStart.current = { x: e.clientX, y: e.clientY, pos: { ...pos }, size: { ...size } };
  }, [maximized, pos, size, id, onFocus]);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (dragging.current) {
        const nx = e.clientX - dragOffset.current.x;
        const ny = e.clientY - dragOffset.current.y;
        const maxY = window.innerHeight - TASKBAR_H - 30;
        setPos({ x: Math.max(0, Math.min(nx, window.innerWidth - 100)), y: Math.max(0, Math.min(ny, maxY)) });
      }
      if (resizing.current) {
        const dx = e.clientX - resizeStart.current.x;
        const dy = e.clientY - resizeStart.current.y;
        const dir = resizeDir.current;
        const { pos: sp, size: ss } = resizeStart.current;
        let nx = sp.x, ny = sp.y, nw = ss.w, nh = ss.h;
        if (dir.includes('e')) nw = Math.max(minW, ss.w + dx);
        if (dir.includes('s')) nh = Math.max(minH, ss.h + dy);
        if (dir.includes('w')) { nw = Math.max(minW, ss.w - dx); nx = sp.x + ss.w - nw; }
        if (dir.includes('n')) { nh = Math.max(minH, ss.h - dy); ny = sp.y + ss.h - nh; }
        setPos({ x: nx, y: ny });
        setSize({ w: nw, h: nh });
      }
    };
    const onMouseUp = () => { dragging.current = false; resizing.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => { window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mouseup', onMouseUp); };
  }, [minW, minH]);

  if (isMinimized) return null;

  const style = maximized
    ? { position: 'fixed', left: 0, top: 0, width: '100vw', height: `calc(100vh - ${TASKBAR_H}px)`, zIndex }
    : { position: 'fixed', left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex };

  const resizeHandles = ['n','s','e','w','ne','nw','se','sw'];
  const cursorMap = { n:'ns-resize', s:'ns-resize', e:'ew-resize', w:'ew-resize', ne:'nesw-resize', nw:'nwse-resize', se:'nwse-resize', sw:'nesw-resize' };
  const posMap = {
    n:  { top:0, left:4, right:4, height:4 },
    s:  { bottom:0, left:4, right:4, height:4 },
    e:  { right:0, top:4, bottom:4, width:4 },
    w:  { left:0, top:4, bottom:4, width:4 },
    ne: { top:0, right:0, width:8, height:8 },
    nw: { top:0, left:0, width:8, height:8 },
    se: { bottom:0, right:0, width:8, height:8 },
    sw: { bottom:0, left:0, width:8, height:8 },
  };

  return (
    <div
      style={{ ...style, display: 'flex', flexDirection: 'column', boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.45)' : '0 4px 16px rgba(0,0,0,0.3)', border: isActive ? '1px solid #0078d4' : '1px solid #888', background: '#fff', userSelect: 'none' }}
      onMouseDown={() => onFocus(id)}
    >
      {/* Resize handles */}
      {!maximized && resizeHandles.map((dir) => (
        <div key={dir} style={{ position:'absolute', cursor: cursorMap[dir], zIndex:10, ...posMap[dir] }}
          onMouseDown={(e) => handleResizeMouseDown(e, dir)} />
      ))}

      {/* Title bar */}
      <div
        style={{ height: 32, background: isActive ? '#fff' : '#f0f0f0', display:'flex', alignItems:'center', flexShrink:0, borderBottom:'1px solid #e0e0e0', cursor: maximized ? 'default' : 'move' }}
        onMouseDown={handleTitleMouseDown}
        onDoubleClick={handleTitleDblClick}
      >
        <span style={{ marginLeft:8, fontSize:14, display:'flex', alignItems:'center', gap:6, color:'#000', fontFamily:'Segoe UI, system-ui, sans-serif', fontWeight:400, flex:1, overflow:'hidden', whiteSpace:'nowrap' }}>
          {icon && <span style={{ fontSize:16 }}>{icon}</span>}
          {title}
        </span>
        {/* Window controls */}
        <WinBtn label="─" title="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize(id); }} hoverBg="#e5e5e5" />
        <WinBtn label={maximized ? '❐' : '□'} title={maximized ? 'Restore' : 'Maximize'} onClick={(e) => { e.stopPropagation(); toggleMaximize(); }} hoverBg="#e5e5e5" />
        <WinBtn label="✕" title="Close" onClick={(e) => { e.stopPropagation(); onClose(id); }} hoverBg="#e81123" hoverColor="#fff" isClose />
      </div>

      {/* Content */}
      <div style={{ flex:1, overflow:'hidden', display:'flex', flexDirection:'column' }}>
        {children}
      </div>
    </div>
  );
}

function WinBtn({ label, title, onClick, hoverBg, hoverColor = '#000', isClose }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: isClose ? 46 : 46, height: 32, border:'none', background: hovered ? hoverBg : 'transparent',
        color: hovered ? hoverColor : '#000', cursor:'default', fontSize: label === '─' ? 18 : 13,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
        fontFamily:'Segoe UI, system-ui, sans-serif', lineHeight:1,
      }}
    >
      {label}
    </button>
  );
}
