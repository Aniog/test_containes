const stats = [
  { value: '50+', label: 'Bike Models' },
  { value: '12K+', label: 'Happy Riders' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Years of Craft' },
];

const StatsBar = () => {
  return (
    <section id="stats" className="bg-[#0f3460] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-[#e94560] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
