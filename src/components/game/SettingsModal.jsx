import { useState } from 'react';

const Toggle = ({ value, onChange }) => (
  <button
    onClick={() => onChange(!value)}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all"
    style={{
      backgroundColor: value ? '#4db84d' : '#ccc',
      border: 'none',
      minWidth: 72,
    }}
  >
    <span className="text-xs font-bold text-white">{value ? 'ON' : 'OFF'}</span>
    <div
      className="rounded-full transition-all"
      style={{
        width: 22,
        height: 22,
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
        transform: value ? 'translateX(0)' : 'translateX(0)',
      }}
    />
  </button>
);

const SettingsModal = ({ onClose, onReset }) => {
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(3px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative rounded-3xl mx-5 w-full"
        style={{
          maxWidth: 360,
          backgroundColor: '#fff8f0',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 pt-6 pb-4"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div style={{ width: 32 }} />
          <h2 className="text-xl font-bold" style={{ color: '#3d2b1f' }}>设置</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all active:scale-90"
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            <span style={{ color: '#8a6a5a', fontSize: 20, fontWeight: 700, lineHeight: 1 }}>✕</span>
          </button>
        </div>

        {/* Toggle Cards */}
        <div className="flex gap-4 px-6 pt-6 pb-4 justify-center">
          {/* Sound */}
          <div
            className="flex flex-col items-center gap-3 rounded-2xl p-5"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              flex: 1,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 15h6l8-7v24l-8-7H8V15z" fill="#8a5a4a" />
              <path d="M26 14c2 2 3 4 3 6s-1 4-3 6" stroke="#8a5a4a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
            <Toggle value={sound} onChange={setSound} />
          </div>

          {/* Vibration */}
          <div
            className="flex flex-col items-center gap-3 rounded-2xl p-5"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              flex: 1,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="12" y="8" width="16" height="24" rx="3" stroke="#8a5a4a" strokeWidth="2.5" fill="none" />
              <circle cx="20" cy="28" r="1.5" fill="#8a5a4a" />
              <path d="M6 14c-2 2-2 10 0 12M34 14c2 2 2 10 0 12" stroke="#8a5a4a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
            <Toggle value={vibration} onChange={setVibration} />
          </div>
        </div>

        {/* Feedback Button */}
        <div className="px-6 pb-3">
          <button
            className="w-full py-4 rounded-full text-base font-semibold transition-all active:scale-98"
            style={{
              backgroundColor: '#fff',
              border: '2px solid #c8a080',
              color: '#c8a080',
            }}
          >
            反馈
          </button>
        </div>

        {/* Reset Button */}
        <div className="px-6 pb-6">
          <button
            onClick={() => { onReset(); onClose(); }}
            className="w-full py-4 rounded-full text-base font-bold text-white transition-all active:scale-98"
            style={{
              background: 'linear-gradient(135deg, #f0a030, #e08020)',
              border: 'none',
              boxShadow: '0 4px 16px rgba(224,128,32,0.4)',
            }}
          >
            重启
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
