const stats = [
  { value: '28', label: '赛季胜场', suffix: '场' },
  { value: '112.4', label: '场均得分', suffix: '分' },
  { value: '3', label: '总冠军', suffix: '次' },
  { value: '18,000', label: '球迷容量', suffix: '人' },
];

const StatsBar = () => {
  return (
    <section className="bg-court-dark border-y border-court-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-end gap-1 mb-1">
                <span className="font-heading font-black text-hoop-orange leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                  {stat.value}
                </span>
                <span className="text-hoop-orange font-heading font-bold text-xl mb-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-400 font-body text-sm uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
