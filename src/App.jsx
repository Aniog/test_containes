import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>

      {/* Subtle background — two soft blobs only */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute blob-a rounded-full"
          style={{
            top: '-15%', left: '-10%',
            width: 700, height: 700,
            background: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute blob-b rounded-full"
          style={{
            bottom: '-10%', right: '-8%',
            width: 600, height: 600,
            background: 'radial-gradient(circle at 60% 60%, rgba(168,85,247,0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar active={active} setActive={setActive} />
        <Social />
      </div>
    </div>
  );
}
