import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 48, suffix: '支', label: '参赛球队', desc: '史上最多' },
  { value: 104, suffix: '场', label: '比赛场次', desc: '精彩对决' },
  { value: 16, suffix: '座', label: '举办城市', desc: '横跨北美' },
  { value: 3, suffix: '国', label: '联合举办', desc: '创造历史' },
  { value: 39, suffix: '天', label: '赛事周期', desc: '6月11日—7月19日' },
  { value: 500, suffix: '万+', label: '预计观众', desc: '现场观赛' },
];

function AnimatedNumber({ target, suffix, duration = 1500 }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let count = 0;
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(count));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-amber-400">
      {current}{suffix}
    </span>
  );
}

export default function KeyFacts() {
  return (
    <section id="stats" className="py-24 px-4 md:px-8 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            赛事数据
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            数字背后的<span className="text-amber-400">世界杯</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            每一个数字都代表着一段历史，每一场比赛都将成为永恒的记忆。
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1a2035] border border-gray-700/50 rounded-2xl p-6 md:p-8 text-center hover:border-amber-400/30 transition-all duration-300"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-white font-bold text-lg mt-2">{stat.label}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Format change */}
          <div className="bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-amber-400/20 rounded-2xl p-8">
            <h3 className="text-white font-black text-xl mb-4">全新赛制</h3>
            <div className="space-y-3">
              {[
                { label: '小组赛', detail: '12组 × 4队，每组前2名晋级，另加8支最佳第三名' },
                { label: '32强淘汰赛', detail: '首次设立32强淘汰赛阶段' },
                { label: '16强至决赛', detail: '单场淘汰制，直至产生冠军' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-amber-400 font-semibold text-sm">{item.label}：</span>
                    <span className="text-slate-300 text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Records */}
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
            <h3 className="text-white font-black text-xl mb-4">历史纪录</h3>
            <div className="space-y-3">
              {[
                { label: '最多参赛队', detail: '48支球队，较2022年增加16支' },
                { label: '最多举办国', detail: '3个国家联合举办，史无前例' },
                { label: '最多举办城市', detail: '16座城市，覆盖范围最广' },
                { label: '最多比赛场次', detail: '104场，较2022年增加40场' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-blue-400 font-semibold text-sm">{item.label}：</span>
                    <span className="text-slate-300 text-sm">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
