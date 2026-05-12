import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: '活跃创作者', desc: '来自全球各地' },
  { value: 98, suffix: '%', label: '用户满意度', desc: '持续保持高水准' },
  { value: 150, suffix: '+', label: '覆盖国家', desc: '全球化创作社区' },
  { value: 5, suffix: 'M+', label: '作品总数', desc: '每天持续增长' },
];

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatCard = ({ value, suffix, label, desc, animate }) => {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="text-center px-6 py-8">
      <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      <div className="text-purple-400 text-sm">{desc}</div>
    </div>
  );
};

const StatsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-gradient-to-br from-purple-900 to-violet-950 py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-800/50 border border-purple-600/40 text-purple-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            平台数据
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            数字背后的
            <span className="bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"> 真实力量</span>
          </h2>
          <p className="text-purple-300 text-base max-w-xl mx-auto">
            每一个数字都代表着真实的创作者故事与无数个灵感瞬间。
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-purple-900/40 border border-purple-700/40 rounded-2xl backdrop-blur-sm shadow-lg shadow-purple-950/50"
            >
              <StatCard {...s} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
