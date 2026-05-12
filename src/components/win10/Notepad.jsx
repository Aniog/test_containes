import { useState, useRef, useEffect } from 'react';
import { useFS } from '../../context/FileSystemContext';

const FONTS = ['Consolas', 'Courier New', 'Arial', 'Times New Roman', 'Segoe UI'];
const SIZES = [9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 36, 48, 72];

export default function Notepad({ fileId }) {
  const { getNode, saveFileContent } = useFS();
  const node = getNode(fileId);
  const [text, setText] = useState(node?.content || '');
  const [font, setFont] = useState('Consolas');
  const [fontSize, setFontSize] = useState(14);
  const [wordWrap, setWordWrap] = useState(true);
  const [modified, setModified] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (node) setText(node.content || '');
  }, [fileId]);

  const handleChange = (e) => {
    setText(e.target.value);
    setModified(true);
  };

  const handleSave = () => {
    saveFileContent(fileId, text);
    setModified(false);
    setStatusMsg('已保存');
    setTimeout(() => setStatusMsg(''), 2000);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      e.preventDefault();
      textareaRef.current?.select();
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = textareaRef.current;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const newText = text.substring(0, start) + '    ' + text.substring(end);
      setText(newText);
      setModified(true);
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = start + 4; });
    }
  };

  const getCaretInfo = () => {
    const ta = textareaRef.current;
    if (!ta) return { line: 1, col: 1 };
    const before = text.substring(0, ta.selectionStart);
    const lines = before.split('\n');
    return { line: lines.length, col: lines[lines.length - 1].length + 1 };
  };

  const [caret, setCaret] = useState({ line: 1, col: 1 });
  const updateCaret = () => setCaret(getCaretInfo());

  const menus = {
    文件: [
      { label: '新建', shortcut: 'Ctrl+N', onClick: () => { setText(''); setModified(false); } },
      { label: '打开...', shortcut: 'Ctrl+O', disabled: true },
      { label: '保存', shortcut: 'Ctrl+S', onClick: handleSave },
      { label: '另存为...', shortcut: 'Ctrl+Shift+S', disabled: true },
      'separator',
      { label: '页面设置...', disabled: true },
      { label: '打印...', shortcut: 'Ctrl+P', disabled: true },
      'separator',
      { label: '退出', disabled: true },
    ],
    编辑: [
      { label: '撤销', shortcut: 'Ctrl+Z', onClick: () => document.execCommand('undo') },
      'separator',
      { label: '剪切', shortcut: 'Ctrl+X', onClick: () => document.execCommand('cut') },
      { label: '复制', shortcut: 'Ctrl+C', onClick: () => document.execCommand('copy') },
      { label: '粘贴', shortcut: 'Ctrl+V', onClick: () => document.execCommand('paste') },
      { label: '删除', shortcut: 'Del', onClick: () => { const ta = textareaRef.current; const s = ta.selectionStart; const e = ta.selectionEnd; if (s !== e) { const t = text.slice(0, s) + text.slice(e); setText(t); setModified(true); } } },
      'separator',
      { label: '全选', shortcut: 'Ctrl+A', onClick: () => textareaRef.current?.select() },
      { label: '时间/日期', shortcut: 'F5', onClick: () => { const now = new Date(); const ts = now.toLocaleString('zh-CN'); const ta = textareaRef.current; const s = ta.selectionStart; setText(text.slice(0, s) + ts + text.slice(ta.selectionEnd)); setModified(true); } },
    ],
    格式: [
      { label: `自动换行 ${wordWrap ? '✓' : ''}`, onClick: () => setWordWrap(!wordWrap) },
      { label: '字体...', disabled: true },
    ],
    查看: [
      { label: '状态栏', disabled: true },
      { label: '放大', disabled: true },
      { label: '缩小', disabled: true },
    ],
    帮助: [
      { label: '查看帮助', disabled: true },
      'separator',
      { label: '关于记事本', disabled: true },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>

      {/* Menu bar */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#f3f3f3', borderBottom: '1px solid #d0d0d0', flexShrink: 0, position: 'relative' }}>
        {Object.entries(menus).map(([name, items]) => (
          <MenuBarItem
            key={name}
            label={name}
            items={items}
            isOpen={openMenu === name}
            onOpen={() => setOpenMenu(openMenu === name ? null : name)}
            onClose={() => setOpenMenu(null)}
          />
        ))}
        {/* Font & size controls */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '0 8px' }}>
          <select value={font} onChange={(e) => setFont(e.target.value)}
            style={{ fontSize: 11, border: '1px solid #ccc', borderRadius: 2, padding: '1px 4px', background: '#fff', cursor: 'default' }}>
            {FONTS.map((f) => <option key={f}>{f}</option>)}
          </select>
          <select value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ fontSize: 11, border: '1px solid #ccc', borderRadius: 2, padding: '1px 4px', width: 50, background: '#fff', cursor: 'default' }}>
            {SIZES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Text area */}
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={updateCaret}
        onKeyUp={updateCaret}
        spellCheck={false}
        style={{
          flex: 1, resize: 'none', border: 'none', outline: 'none',
          padding: '4px 8px', fontSize: fontSize,
          fontFamily: font + ', monospace',
          whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
          overflowX: wordWrap ? 'hidden' : 'auto',
          overflowY: 'auto',
          lineHeight: 1.5, color: '#000', background: '#fff',
        }}
      />

      {/* Status bar */}
      <div style={{ height: 22, background: '#f3f3f3', borderTop: '1px solid #d0d0d0', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: 12, color: '#555', flexShrink: 0, gap: 16 }}>
        <span>第 {caret.line} 行，第 {caret.col} 列</span>
        <span>{text.length} 个字符</span>
        {modified && <span style={{ color: '#e81123' }}>● 未保存</span>}
        {statusMsg && <span style={{ color: '#107c10' }}>{statusMsg}</span>}
        <span style={{ marginLeft: 'auto' }}>UTF-8</span>
        <span>{wordWrap ? '自动换行' : '不换行'}</span>
      </div>
    </div>
  );
}

function MenuBarItem({ label, items, isOpen, onOpen, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={onOpen}
        style={{
          padding: '4px 10px', border: 'none', background: isOpen ? '#0078d4' : 'transparent',
          color: isOpen ? '#fff' : '#000', cursor: 'default', fontSize: 13,
          fontFamily: 'Segoe UI, system-ui, sans-serif',
        }}
        onMouseEnter={(e) => { if (!isOpen) { e.currentTarget.style.background = '#e5e5e5'; } }}
        onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.background = 'transparent'; }}
      >
        {label}
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, minWidth: 180,
          background: '#f2f2f2', border: '1px solid #c8c8c8',
          boxShadow: '2px 4px 12px rgba(0,0,0,0.2)', zIndex: 9999, padding: '4px 0',
        }}>
          {items.map((item, i) =>
            item === 'separator' ? (
              <div key={i} style={{ height: 1, background: '#d0d0d0', margin: '3px 0' }} />
            ) : (
              <button
                key={i}
                disabled={item.disabled}
                onClick={() => { onClose(); item.onClick?.(); }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '4px 20px', border: 'none',
                  background: 'transparent', cursor: 'default', textAlign: 'left',
                  fontSize: 13, color: item.disabled ? '#aaa' : '#000',
                  fontFamily: 'Segoe UI, system-ui, sans-serif',
                }}
                onMouseEnter={(e) => { if (!item.disabled) { e.currentTarget.style.background = '#0078d4'; e.currentTarget.style.color = '#fff'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = item.disabled ? '#aaa' : '#000'; }}
              >
                <span>{item.label}</span>
                {item.shortcut && <span style={{ fontSize: 11, opacity: 0.6, marginLeft: 24 }}>{item.shortcut}</span>}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
