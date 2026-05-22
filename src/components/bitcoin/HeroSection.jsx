import { useEffect, useState } from 'react';

const TERMINAL_LINES = [
  '> Initializing Bitcoin node...',
  '> Connecting to peer network...',
  '> Syncing blockchain: 100%',
  '> Block height: #893,421',
  '> Network hashrate: 650 EH/s',
  '> Status: ONLINE ✓',
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= TERMINAL_LINES.length) return;
    const line = TERMINAL_LINES[currentLine];
    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setTyped((prev) => prev + line[charIndex]);
        setCharIndex((i) => i + 1);
      }, 30);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setTyped('');
        setCharIndex(0);
        setCurrentLine((l) => l + 1);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [currentLine, charIndex, typed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-btc-bg"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f7931a 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating Bitcoin symbol */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
        <div
          className="text-[200px] font-mono font-bold text-btc-orange opacity-5 animate-float"
          style={{ lineHeight: 1 }}
        >
          ₿
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center py-24">
        {/* Left: Text */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-btc-green animate-pulse-slow" />
            <span className="font-mono text-btc-green text-xs uppercase tracking-widest">
              NETWORK ONLINE
            </span>
          </div>

          <h1 className="font-mono text-5xl md:text-7xl font-bold text-btc-text mb-4 leading-tight">
            <span className="text-btc-orange text-glow-orange">₿</span>itcoin
          </h1>

          <p className="font-mono text-btc-cyan text-lg md:text-xl mb-2 tracking-wide">
            去中心化数字货币
          </p>
          <p className="text-btc-dim text-base md:text-lg mb-8 leading-relaxed max-w-lg">
            世界上第一个点对点电子现金系统。无需银行，无需信任，
            只需数学与密码学。由中本聪于 2009 年创造。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#intro"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono text-sm px-6 py-3 bg-btc-orange text-black font-bold rounded hover:shadow-[0_0_20px_rgba(247,147,26,0.5)] transition-all duration-300"
            >
              &gt; 开始了解
            </a>
            <a
              href="#tech"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#tech')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-mono text-sm px-6 py-3 border border-btc-cyan text-btc-cyan rounded hover:bg-btc-cyan/10 transition-all duration-300"
            >
              &gt; 技术原理
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['#去中心化', '#区块链', '#P2P', '#密码学', '#开源'].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-btc-muted border border-btc-border px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="bg-btc-card border border-btc-border rounded-lg overflow-hidden glow-cyan">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-btc-surface border-b border-btc-border">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            <span className="font-mono text-btc-muted text-xs ml-2">bitcoin-node ~ terminal</span>
          </div>
          {/* Terminal body */}
          <div className="p-4 font-mono text-sm min-h-[220px]">
            {visibleLines.map((line, i) => (
              <div key={i} className="mb-1">
                <span
                  className={
                    line.includes('✓')
                      ? 'text-btc-green'
                      : line.includes('>')
                      ? 'text-btc-cyan'
                      : 'text-btc-dim'
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            {currentLine < TERMINAL_LINES.length && (
              <div className="text-btc-cyan">
                {typed}
                <span className="cursor-blink text-btc-orange">█</span>
              </div>
            )}
            {currentLine >= TERMINAL_LINES.length && (
              <div className="mt-2 text-btc-orange">
                $ <span className="cursor-blink">█</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-btc-muted text-xs">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-btc-orange to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
