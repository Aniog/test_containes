import { useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(98, 126, 234, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0b1e]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#627eea]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(98,126,234,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(98,126,234,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[#627eea]/10 border border-[#627eea]/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[#8b9ff5] text-sm font-medium">全球第二大加密货币</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          以太坊
          <br />
          <span className="bg-gradient-to-r from-[#627eea] to-[#a855f7] bg-clip-text text-transparent">
            Ethereum
          </span>
        </h1>

        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#627eea] to-[#a855f7] flex items-center justify-center shadow-[0_0_60px_rgba(98,126,234,0.4)] animate-pulse">
            <span className="text-white font-bold text-5xl md:text-6xl">Ξ</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          去中心化的世界计算机
        </p>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          以太坊是一个开源的区块链平台，支持智能合约和去中心化应用（DApps），
          正在重塑金融、艺术、游戏和互联网的未来。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#what-is-eth"
            className="flex items-center gap-2 bg-gradient-to-r from-[#627eea] to-[#a855f7] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-[0_0_30px_rgba(98,126,234,0.3)]"
          >
            深入了解 <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://ethereum.org/zh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#627eea]/50 text-[#8b9ff5] font-semibold px-8 py-4 rounded-full hover:bg-[#627eea]/10 transition-all duration-200"
          >
            官方文档 <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: '市值排名', value: '#2', sub: '全球加密货币' },
            { label: '活跃节点', value: '6,000+', sub: '全球分布' },
            { label: '智能合约', value: '50M+', sub: '已部署' },
            { label: '日交易量', value: '$10B+', sub: '链上交易' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#141530]/80 border border-[#627eea]/20 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs">向下滚动</span>
        <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#627eea] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
