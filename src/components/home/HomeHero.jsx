import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-navy-light/30 rounded-full blur-2xl" />
      </div>

      {/* Math symbols decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[
          { sym: '∑', top: '10%', left: '5%', size: 'text-6xl', opacity: 'opacity-5' },
          { sym: '∫', top: '20%', right: '8%', size: 'text-7xl', opacity: 'opacity-5' },
          { sym: 'π', bottom: '15%', left: '10%', size: 'text-5xl', opacity: 'opacity-5' },
          { sym: '∞', bottom: '25%', right: '6%', size: 'text-6xl', opacity: 'opacity-5' },
          { sym: '∂', top: '50%', left: '2%', size: 'text-5xl', opacity: 'opacity-5' },
          { sym: '√', top: '60%', right: '3%', size: 'text-5xl', opacity: 'opacity-5' },
          { sym: 'Δ', top: '35%', left: '15%', size: 'text-4xl', opacity: 'opacity-5' },
          { sym: 'ℝ', bottom: '40%', right: '15%', size: 'text-4xl', opacity: 'opacity-5' },
        ].map(({ sym, size, opacity, ...pos }, i) => (
          <span
            key={i}
            className={`absolute font-serif text-gold ${size} ${opacity}`}
            style={pos}
          >
            {sym}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        {/* Medal icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
            <span className="text-gold text-4xl font-serif">∮</span>
          </div>
        </div>

        <p className="text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
          Fields Medal
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-ivory leading-tight mb-6">
          菲尔兹奖
        </h1>

        <p className="text-ivory/60 text-lg md:text-xl font-serif italic mb-4">
          数学界的最高荣誉
        </p>

        <p className="text-ivory/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          菲尔兹奖由国际数学联盟颁发，每四年在国际数学家大会上授予
          <span className="text-gold font-semibold"> 2至4位</span> 40岁以下的杰出数学家，
          被誉为数学界的"诺贝尔奖"。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/laureates"
            className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors"
          >
            探索获奖者
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/history"
            className="inline-flex items-center gap-2 border border-gold/50 text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold/10 transition-colors"
          >
            了解历史
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/30">
        <span className="text-xs tracking-widest uppercase">向下滚动</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/30 to-transparent" />
      </div>
    </section>
  );
}
