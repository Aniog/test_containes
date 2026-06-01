import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/memories';

const STAT_ITEMS = [
  { label: 'Memories Preserved', value: STATS.totalMemories, suffix: '', format: 'M' },
  { label: 'Contributors', value: STATS.contributors, suffix: '', format: 'M' },
  { label: 'Languages', value: STATS.languages, suffix: '', format: 'K' },
  { label: 'Years of History', value: STATS.yearsSpanned, suffix: '', format: 'raw' },
  { label: 'Eras Documented', value: STATS.eras, suffix: '', format: 'raw' },
  { label: 'Connections Formed', value: STATS.connectionsFormed, suffix: '', format: 'M' },
];

function formatStat(value, format) {
  if (format === 'M') return `${(value / 1_000_000).toFixed(1)}M`;
  if (format === 'K') return `${(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString();
}

function AnimatedNumber({ target, format, duration = 2000 }) {
  const [current, setCurrent] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startRef.current = null;
    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return <span>{formatStat(current, format)}</span>;
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-nebula-radial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-3">
            Archive Statistics
          </p>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
            The Scale of Human Memory
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {STAT_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className="text-center p-6 rounded-2xl bg-space-800/60 border border-slate-700/40 backdrop-blur-sm"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div className="font-cinzel text-3xl md:text-4xl font-bold text-nebula-400 mb-2">
                {visible ? (
                  <AnimatedNumber target={item.value} format={item.format} />
                ) : '0'}
              </div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
