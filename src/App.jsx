import { useState, useCallback, useRef } from 'react';
import { FileSystemProvider, useFS } from './context/FileSystemContext';
import Window from './components/win10/Window';
import Taskbar from './components/win10/Taskbar';
import StartMenu from './components/win10/StartMenu';
import FileExplorer from './components/win10/FileExplorer';
import Notepad from './components/win10/Notepad';
import ContextMenu from './components/win10/ContextMenu';

const makeId = () => Math.random().toString(36).slice(2, 10);

const DESKTOP_ICONS = [
  { id: 'mypc',    label: '此电脑', icon: '💻', action: 'explorer' },
  { id: 'recycle', label: '回收站', icon: '🗑️', action: null },
  { id: 'docs',    label: '文档',   icon: '📄', action: 'explorer-documents' },
];

// Module-level map: survives React re-renders, tracks last click time per icon
const iconLastClick = {};

function Desktop() {
  const { getNode } = useFS();
  const [windows, setWindows] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [showStart, setShowStart] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [ctxMenu, setCtxMenu] = useState(null);
  const zCounter = useRef(100);

  const bringToFront = useCallback((id) => {
    zCounter.current += 1;
    setWindows((ws) => ws.map((w) => w.id === id ? { ...w, zIndex: zCounter.current } : w));
    setActiveId(id);
  }, []);

  const openExplorer = useCallback((startFolder = 'this-pc') => {
    const id = makeId();
    zCounter.current += 1;
    setWindows((ws) => [...ws, {
      id, type: 'explorer', startFolder,
      title: '文件资源管理器', icon: '📁',
      minimized: false, zIndex: zCounter.current,
      x: 80 + ws.length * 24, y: 60 + ws.length * 24,
    }]);
    setActiveId(id);
  }, []);

  const openNotepad = useCallback((fileId) => {
    const existing = windows.find((w) => w.type === 'notepad' && w.fileId === fileId);
    if (existing) { bringToFront(existing.id); return; }
    const node = getNode(fileId);
    const id = makeId();
    zCounter.current += 1;
    setWindows((ws) => [...ws, {
      id, type: 'notepad', fileId,
      title: (node?.name || 'Untitled') + ' - 记事本', icon: '📝',
      minimized: false, zIndex: zCounter.current,
      x: 140 + ws.length * 24, y: 80 + ws.length * 24,
    }]);
    setActiveId(id);
  }, [windows, getNode, bringToFront]);

  const closeWindow = useCallback((id) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
    setActiveId((cur) => cur === id ? null : cur);
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((ws) => ws.map((w) => w.id === id ? { ...w, minimized: true } : w));
    setActiveId((cur) => cur === id ? null : cur);
  }, []);

  const handleTaskbarClick = useCallback((id) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    if (win.minimized) {
      setWindows((ws) => ws.map((w) => w.id === id ? { ...w, minimized: false } : w));
      bringToFront(id);
    } else if (activeId === id) {
      minimizeWindow(id);
    } else {
      bringToFront(id);
    }
  }, [windows, activeId, bringToFront, minimizeWindow]);

  const handleIconOpen = useCallback((icon) => {
    if (icon.action === 'explorer') openExplorer('this-pc');
    else if (icon.action === 'explorer-documents') openExplorer('documents');
  }, [openExplorer]);

  const handleDesktopContextMenu = (e) => {
    e.preventDefault();
    setCtxMenu({
      x: e.clientX, y: e.clientY,
      items: [
        { label: '查看', icon: '👁️', disabled: true },
        { label: '排序方式', icon: '↕️', disabled: true },
        { label: '刷新', icon: '🔄', onClick: () => {} },
        'separator',
        { label: '新建文件夹', icon: '📁', disabled: true },
        'separator',
        { label: '显示设置', icon: '🖥️', disabled: true },
        { label: '个性化', icon: '🎨', disabled: true },
      ],
    });
  };

  return (
    <div
      style={{
        width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative',
        background: 'linear-gradient(135deg, #0a3d62 0%, #1a5276 30%, #154360 60%, #0d2137 100%)',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        userSelect: 'none',
      }}
      onContextMenu={handleDesktopContextMenu}
      onClick={() => { setShowStart(false); setSelectedIcon(null); setCtxMenu(null); }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      {/* Desktop icons */}
      <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {DESKTOP_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            isSelected={selectedIcon === icon.id}
            onSelect={() => setSelectedIcon(icon.id)}
            onOpen={() => handleIconOpen(icon)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          isActive={activeId === win.id}
          isMinimized={win.minimized}
          zIndex={win.zIndex}
          initialX={win.x}
          initialY={win.y}
          initialW={win.type === 'notepad' ? 680 : 900}
          initialH={win.type === 'notepad' ? 500 : 580}
          onFocus={bringToFront}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
        >
          {win.type === 'explorer' && <FileExplorer onOpenFile={openNotepad} />}
          {win.type === 'notepad' && <Notepad fileId={win.fileId} />}
        </Window>
      ))}

      <Taskbar
        windows={windows}
        activeId={activeId}
        onWindowClick={handleTaskbarClick}
        onStartClick={(e) => { e.stopPropagation(); setShowStart((s) => !s); }}
        showStart={showStart}
      />

      {showStart && (
        <StartMenu
          onClose={() => setShowStart(false)}
          onOpenExplorer={() => { openExplorer('this-pc'); setShowStart(false); }}
        />
      )}

      {ctxMenu && (
        <ContextMenu x={ctxMenu.x} y={ctxMenu.y} items={ctxMenu.items} onClose={() => setCtxMenu(null)} />
      )}
    </div>
  );
}

function DesktopIcon({ icon, isSelected, onSelect, onOpen }) {
  const handleClick = (e) => {
    e.stopPropagation();
    const now = Date.now();
    const last = iconLastClick[icon.id] || 0;
    iconLastClick[icon.id] = now;
    if (now - last < 500) {
      iconLastClick[icon.id] = 0;
      onOpen();
    } else {
      onSelect();
    }
  };

  const handleDblClick = (e) => {
    e.stopPropagation();
    iconLastClick[icon.id] = 0;
    onOpen();
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      style={{
        width: 72, display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '6px 4px', borderRadius: 2, cursor: 'default',
        background: isSelected ? 'rgba(0,120,212,0.4)' : 'transparent',
        border: isSelected ? '1px solid rgba(0,120,212,0.6)' : '1px solid transparent',
      }}
      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
    >
      <span style={{ fontSize: 36 }}>{icon.icon}</span>
      <span style={{
        color: '#fff', fontSize: 11, textAlign: 'center', marginTop: 3,
        textShadow: '0 1px 3px rgba(0,0,0,0.8)', lineHeight: 1.3,
        wordBreak: 'break-word',
      }}>{icon.label}</span>
    </div>
  );
}

export default function App() {
  return (
    <FileSystemProvider>
      <Desktop />
    </FileSystemProvider>
  );
}
