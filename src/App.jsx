import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#f5f0ff' }}>
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute blob-a rounded-full" style={{
          top: '-10%', left: '-8%', width: 620, height: 620,
          background: 'radial-gradient(circle at 45% 45%, rgba(62,200,160,0.55) 0%, transparent 65%)',
        }} />
        <div className="absolute blob-b rounded-full" style={{
          top: '-6%', right: '-10%', width: 540, height: 540,
          background: 'radial-gradient(circle at 55% 40%, rgba(238,96,176,0.52) 0%, transparent 65%)',
        }} />
        <div className="absolute blob-c rounded-full" style={{
          bottom: '-8%', left: '28%', width: 480, height: 480,
          background: 'radial-gradient(circle at 50% 55%, rgba(80,170,240,0.50) 0%, transparent 65%)',
        }} />
        <div className="absolute blob-b rounded-full" style={{
          top: '42%', left: '-6%', width: 360, height: 360,
          background: 'radial-gradient(circle at 45% 50%, rgba(155,110,240,0.45) 0%, transparent 65%)',
          animationDelay: '-8s',
        }} />
      </div>

      <div className="relative z-10">
        <Navbar active={active} setActive={setActive} />
        <Social />
      </div>
    </div>
  );
}
