import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#ebe5ff' }}>

      {/* Vivid pastel background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Mint — top left */}
        <div className="absolute blob-a rounded-full" style={{
          top: '-8%', left: '-6%',
          width: 640, height: 640,
          background: 'radial-gradient(circle at 45% 45%, rgba(80,210,170,0.62) 0%, transparent 65%)',
        }} />
        {/* Pink — top right */}
        <div className="absolute blob-b rounded-full" style={{
          top: '-5%', right: '-8%',
          width: 560, height: 560,
          background: 'radial-gradient(circle at 55% 40%, rgba(238,130,185,0.58) 0%, transparent 65%)',
        }} />
        {/* Sky blue — bottom center */}
        <div className="absolute blob-c rounded-full" style={{
          bottom: '-10%', left: '30%',
          width: 500, height: 500,
          background: 'radial-gradient(circle at 50% 55%, rgba(100,175,240,0.55) 0%, transparent 65%)',
        }} />
        {/* Lavender — mid left */}
        <div className="absolute blob-b rounded-full" style={{
          top: '45%', left: '-5%',
          width: 380, height: 380,
          background: 'radial-gradient(circle at 45% 50%, rgba(165,130,240,0.50) 0%, transparent 65%)',
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
