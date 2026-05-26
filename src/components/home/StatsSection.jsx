import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Trophy, value: 104, suffix: '', label: '场比赛', color: 'text-[#FFD700]', bg: 'bg-[#FFD700]/10' },
  { icon: Users, value: 48, suffix: '', label: '参赛球队', color: 'text-[#C8102E]', bg: 'bg-[#C8102E]/10' },
  { icon: Globe, value: 16, suffix: '', label: '举办城市', color: 'text-[#003DA5]', bg: 'bg-[#003DA5]/20' },
  { icon: Zap, value: 5, suffix: '亿+', label: '预计观众', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

function AnimatedNumber({ target, suffix, active }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {current}
      {suffix}
    </span>
  );
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
    <section id="stats" ref={ref} className="bg-[#0A0E1A] py-20 px-4">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mb-16 max-w-4xl mx-auto" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">数据一览</span>
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-white mt-2 tracking-wide">
            史上最大规模世界杯
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color, bg }) => (
            <div
              key={label}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className={`font-['Bebas_Neue'] text-5xl ${color} leading-none mb-2`}>
                <AnimatedNumber target={value} suffix={suffix} active={visible} />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
