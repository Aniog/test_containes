import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 4,
  opacity: Math.random() * 0.5 + 0.1,
}));

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rings = Array.from({ length: 5 }, (_, i) => ({
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
      baseRadius: 60 + i * 55,
      speed: 0.003 + i * 0.001,
      phase: (i * Math.PI * 2) / 5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      rings.forEach((ring) => {
        const radius = ring.baseRadius + Math.sin(t * ring.speed * 100 + ring.phase) * 8;
        const alpha = 0.08 + Math.sin(t + ring.phase) * 0.04;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050d1a]">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1f3a_0%,_#050d1a_70%)]" />

      {/* Animated rings canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#00d4ff] animate-pulse-glow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Central glow orb */}
      <div className="absolute w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          Explore the Invisible World
        </div>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-white">Micro</span>
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff, #00ffcc)' }}
          >
            Cosmos
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#8ab4c8] max-w-2xl mx-auto mb-4 leading-relaxed">
          A universe exists beneath the threshold of human sight.
        </p>
        <p className="text-lg text-[#4a6a7a] max-w-xl mx-auto mb-12">
          Billions of organisms, invisible to the naked eye, form the foundation of all life on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToNext}
            className="bg-[#00d4ff] text-[#050d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#00ffcc] transition-all duration-300 text-base cursor-pointer"
          >
            Begin Exploring
          </button>
          <a
            href="#gallery"
            className="border border-[#00d4ff]/50 text-[#00d4ff] font-medium px-8 py-4 rounded-full hover:bg-[#00d4ff]/10 transition-all duration-300 text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#4a6a7a] hover:text-[#00d4ff] transition-colors animate-float cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
