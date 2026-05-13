import { useState, useRef, useCallback } from 'react';

const HOME_URL = 'https://www.bing.com';

const BOOKMARKS = [
  { label: 'Bing', url: 'https://www.bing.com', icon: '🔍' },
  { label: 'GitHub', url: 'https://github.com', icon: '🐙' },
  { label: 'Wikipedia', url: 'https://www.wikipedia.org', icon: '📖' },
  { label: 'YouTube', url: 'https://www.youtube.com', icon: '▶️' },
];

function normalizeUrl(input) {
  const trimmed = input.trim();
  if (!trimmed) return HOME_URL;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[\w-]+\.\w{2,}/.test(trimmed)) return `https://${trimmed}`;
  return `https://www.bing.com/search?q=${encodeURIComponent(trimmed)}`;
}

export default function EdgeBrowser() {
  const [url, setUrl] = useState(HOME_URL);
  const [inputVal, setInputVal] = useState(HOME_URL);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([HOME_URL]);
  const [histIdx, setHistIdx] = useState(0);
  const iframeRef = useRef(null);

  const navigate = useCallback((target) => {
    const normalized = normalizeUrl(target);
    setUrl(normalized);
    setInputVal(normalized);
    setLoading(true);
    const newHist = [...history.slice(0, histIdx + 1), normalized];
    setHistory(newHist);
    setHistIdx(newHist.length - 1);
  }, [history, histIdx]);

  const goBack = () => {
    if (histIdx > 0) {
      const prev = history[histIdx - 1];
      setHistIdx(histIdx - 1);
      setUrl(prev);
      setInputVal(prev);
      setLoading(true);
    }
  };

  const goForward = () => {
    if (histIdx < history.length - 1) {
      const next = history[histIdx + 1];
      setHistIdx(histIdx + 1);
      setUrl(next);
      setInputVal(next);
      setLoading(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') navigate(inputVal);
  };

  const handleRefresh = () => {
    setLoading(true);
    // Force iframe reload by toggling url
    const cur = url;
    setUrl('about:blank');
    setTimeout(() => setUrl(cur), 50);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', fontFamily: 'Segoe UI, system-ui, sans-serif' }}>

      {/* Toolbar */}
      <div style={{ background: '#f3f3f3', borderBottom: '1px solid #d0d0d0', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        <NavBtn disabled={histIdx === 0} onClick={goBack} title="后退">‹</NavBtn>
        <NavBtn disabled={histIdx >= history.length - 1} onClick={goForward} title="前进">›</NavBtn>
        <NavBtn onClick={handleRefresh} title="刷新">↻</NavBtn>
        <NavBtn onClick={() => navigate(HOME_URL)} title="主页">🏠</NavBtn>

        {/* Address bar */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid #0078d4', borderRadius: 16, padding: '2px 12px', gap: 6, margin: '0 4px' }}>
          <span style={{ fontSize: 12, color: '#0078d4' }}>🔒</span>
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={(e) => e.target.select()}
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 13, color: '#000', background: 'transparent' }}
          />
          {loading && <span style={{ fontSize: 11, color: '#888' }}>⏳</span>}
        </div>

        <NavBtn onClick={() => navigate(inputVal)} title="转到">→</NavBtn>
        <div style={{ width: 1, height: 20, background: '#d0d0d0', margin: '0 2px' }} />
        <NavBtn title="更多选项" disabled>⋯</NavBtn>
      </div>

      {/* Bookmarks bar */}
      <div style={{ background: '#fafafa', borderBottom: '1px solid #e0e0e0', padding: '2px 8px', display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0, overflowX: 'auto' }}>
        {BOOKMARKS.map((bm) => (
          <button
            key={bm.url}
            onClick={() => navigate(bm.url)}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              padding: '2px 10px', border: '1px solid transparent', borderRadius: 3,
              background: 'transparent', cursor: 'default', fontSize: 12, color: '#333',
              fontFamily: 'Segoe UI, system-ui, sans-serif', whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#e5e5e5'; e.currentTarget.style.borderColor = '#c8c8c8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
          >
            <span>{bm.icon}</span>
            <span>{bm.label}</span>
          </button>
        ))}
      </div>

      {/* iframe */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {loading && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #0078d4 0%, #50b0f0 50%, #0078d4 100%)', backgroundSize: '200% 100%', animation: 'edgeLoad 1.2s linear infinite', zIndex: 10 }} />
        )}
        <iframe
          ref={iframeRef}
          src={url}
          title="Edge Browser"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>

      <style>{`
        @keyframes edgeLoad {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

function NavBtn({ children, onClick, disabled, title }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid transparent', borderRadius: 4,
        background: 'transparent', cursor: disabled ? 'default' : 'default',
        fontSize: 16, color: disabled ? '#aaa' : '#333',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.background = '#e5e5e5'; e.currentTarget.style.borderColor = '#c8c8c8'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}
    >
      {children}
    </button>
  );
}
