import { useState, useEffect, useRef } from 'react';

const LOCK_PASSWORD = '1234';

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export default function LockScreen({ onUnlock }) {
  const [phase, setPhase] = useState('clock'); // 'clock' | 'login'
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);
  const now = useClock();

  const timeStr = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateStr = now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  const handleScreenClick = () => {
    if (phase === 'clock') {
      setPhase('login');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === LOCK_PASSWORD) {
      onUnlock();
    } else {
      setError('密码不正确，请重试。');
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      onClick={phase === 'clock' ? handleScreenClick : undefined}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'linear-gradient(160deg, #0d1b2a 0%, #1b2838 40%, #0a1628 70%, #162032 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Segoe UI, system-ui, sans-serif',
        cursor: phase === 'clock' ? 'pointer' : 'default',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Background blur circles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,120,212,0.15) 0%, transparent 70%)', top: '-100px', left: '-100px' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,160,240,0.1) 0%, transparent 70%)', bottom: '-80px', right: '-80px' }} />
      </div>

      {phase === 'clock' ? (
        <ClockView timeStr={timeStr} dateStr={dateStr} />
      ) : (
        <LoginView
          timeStr={timeStr}
          dateStr={dateStr}
          password={password}
          setPassword={setPassword}
          error={error}
          shake={shake}
          inputRef={inputRef}
          onSubmit={handleSubmit}
          onBack={() => { setPhase('clock'); setPassword(''); setError(''); }}
        />
      )}
    </div>
  );
}

function ClockView({ timeStr, dateStr }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ fontSize: 96, fontWeight: 200, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
        {timeStr}
      </div>
      <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>
        {dateStr}
      </div>
      <div style={{ marginTop: 60, color: 'rgba(255,255,255,0.4)', fontSize: 13, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <div style={{ fontSize: 20 }}>↑</div>
        <div>单击以解锁</div>
      </div>
    </div>
  );
}

function LoginView({ timeStr, dateStr, password, setPassword, error, shake, inputRef, onSubmit, onBack }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {/* Mini clock */}
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 36, fontWeight: 200, color: '#fff', letterSpacing: '-1px' }}>{timeStr}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{dateStr}</div>
      </div>

      {/* Avatar */}
      <div style={{
        width: 100, height: 100, borderRadius: '50%',
        background: 'linear-gradient(135deg, #0078d4, #50b0f0)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 48, marginBottom: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}>
        👤
      </div>

      <div style={{ color: '#fff', fontSize: 18, fontWeight: 400, marginBottom: 20 }}>Administrator</div>

      {/* Password form */}
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            display: 'flex', alignItems: 'center',
            animation: shake ? 'lockShake 0.4s ease' : 'none',
          }}
        >
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            placeholder="密码"
            autoComplete="current-password"
            style={{
              width: 240, padding: '8px 40px 8px 14px',
              background: 'rgba(255,255,255,0.15)',
              border: error ? '1px solid #ff6b6b' : '1px solid rgba(255,255,255,0.3)',
              borderRadius: 2, color: '#fff', fontSize: 14,
              outline: 'none', fontFamily: 'Segoe UI, system-ui, sans-serif',
            }}
            onFocus={(e) => { e.target.style.background = 'rgba(255,255,255,0.2)'; e.target.style.borderColor = '#0078d4'; }}
            onBlur={(e) => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.borderColor = error ? '#ff6b6b' : 'rgba(255,255,255,0.3)'; }}
          />
          <button
            type="submit"
            style={{
              marginLeft: -36, width: 32, height: 32,
              background: password ? '#0078d4' : 'transparent',
              border: 'none', borderRadius: '0 2px 2px 0',
              color: password ? '#fff' : 'rgba(255,255,255,0.4)',
              fontSize: 14, cursor: 'default', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            →
          </button>
        </div>

        {error && (
          <div style={{ color: '#ff9999', fontSize: 12, textAlign: 'center', maxWidth: 240 }}>
            {error}
          </div>
        )}

        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 4 }}>
          提示：默认密码为 <span style={{ color: 'rgba(255,255,255,0.8)' }}>1234</span>
        </div>
      </form>

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          marginTop: 32, background: 'transparent', border: 'none',
          color: 'rgba(255,255,255,0.5)', fontSize: 12, cursor: 'default',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
      >
        ← 返回
      </button>

      <style>{`
        @keyframes lockShake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
