import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#f0eeff' }}>

      {/* Soft pastel background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Mint green — top left */}
        <div className="absolute blob-a rounded-full" style={{
          top: '-8%', left: '-6%',
          width: 640, height: 640,
          background: 'radial-gradient(circle at 45% 45%, rgba(168,220,200,0.55) 0%, transparent 65%)',
        }} />
        {/* Soft pink — top right */}
        <div className="absolute blob-b rounded-full" style={{
          top: '-5%', right: '-8%',
          width: 560, height: 560,
          background: 'radial-gradient(circle at 55% 40%, rgba(240,190,210,0.50) 0%, transparent 65%)',
        }} />
        {/* Sky blue — bottom center */}
        <div className="absolute blob-c rounded-full" style={{
          bottom: '-10%', left: '30%',
          width: 500, height: 500,
          background: 'radial-gradient(circle at 50% 55%, rgba(180,210,240,0.45) 0%, transparent 65%)',
        }} />
        {/* Lavender — mid left */}
        <div className="absolute blob-b rounded-full" style={{
          top: '45%', left: '-5%',
          width: 380, height: 380,
          background: 'radial-gradient(circle at 45% 50%, rgba(200,185,240,0.40) 0%, transparent 65%)',
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
