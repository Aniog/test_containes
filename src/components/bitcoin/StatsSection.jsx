import { useEffect, useRef, useState } from 'react';

const STATS = [
  {
    label: '总供应量',
    value: 21000000,
    suffix: ' BTC',
    color: 'text-btc-orange',
    border: 'border-btc-orange/30',
    desc: '永远不会超过的上限',
  },
  {
    label: '已挖出',
    value: 19700000,
    suffix: ' BTC',
    color: 'text-btc-green',
    border: 'border-btc-green/30',
    desc: '约占总量 93.8%',
  },
  {
    label: '当前区块高度',
    value: 893421,
    suffix: '',
    color: 'text-btc-cyan',
    border: 'border-btc-cyan/30',
    desc: '自 2009 年以来',
  },
  {
    label: '网络算力',
    value: 650,
    suffix: ' EH/s',
    color: 'text-btc-purple',
    border: 'border-btc-purple/30',
    desc: '史上最高算力',
  },
];

const MILESTONES = [
  { year: '2008', event: '中本聪发布比特币白皮书', price: '$0' },
  { year: '2009', event: '创世区块诞生，第一笔交易', price: '$0' },
  { year: '2010', event: '首次真实交易：10,000 BTC 买两个披萨', price: '$0.01' },
  { year: '2013', event: '首次突破 $1,000', price: '$1,000' },
  { year: '2017', event: '牛市高峰，全球关注', price: '$19,783' },
  { year: '2021', event: '萨尔瓦多将比特币列为法定货币', price: '$68,789' },
  { year: '2024', event: '比特币现货 ETF 在美国获批', price: '$73,750' },
  { year: '2024', event: '第四次减半，奖励降至 3.125 BTC', price: '$60,000+' },
];

const useCountUp = (target, duration = 1500, start = false) => {
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

const StatCard = ({ stat, animate }) => {
  const count = useCountUp(stat.value, 1500, animate);
  return (
    <div
      className={`bg-btc-card border ${stat.border} rounded-lg p-6 text-center transition-all duration-300 hover:bg-btc-surface`}
    >
      <p className="font-mono text-btc-muted text-xs uppercase tracking-widest mb-2">{stat.label}</p>
      <p className={`font-mono text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
        {count.toLocaleString()}
        <span className="text-lg">{stat.suffix}</span>
      </p>
      <p className="text-btc-muted text-xs">{stat.desc}</p>
    </div>
  );
};

const StatsSection = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 px-4 md:px-6 bg-btc-surface relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-btc-purple text-sm uppercase tracking-widest mb-3">
            // 链上数据
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-btc-text mb-4">
            关键<span className="text-btc-purple">数据</span>与历史
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} animate={animate} />
          ))}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-mono text-btc-cyan text-sm uppercase tracking-widest mb-8 text-center">
            &gt; 发展里程碑
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[60px] md:left-1/2 top-0 bottom-0 w-px bg-btc-border" />

            <div className="space-y-6">
              {MILESTONES.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year label */}
                  <div
                    className={`w-[60px] md:w-1/2 flex-shrink-0 ${
                      i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    }`}
                  >
                    <span className="font-mono text-btc-orange font-bold text-sm">{m.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 hidden md:flex items-center justify-center w-4">
                    <div className="w-3 h-3 rounded-full bg-btc-orange border-2 border-btc-bg glow-orange" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 md:w-1/2 bg-btc-card border border-btc-border rounded-lg p-4 ${
                      i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}
                  >
                    <p className="text-btc-text text-sm mb-1">{m.event}</p>
                    <p className="font-mono text-btc-green text-xs">{m.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
