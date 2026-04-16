const stats = [
  { value: '$1.8T', label: 'Projected AI Market by 2030', sub: 'Global economic impact' },
  { value: '97M', label: 'New Jobs Created by AI', sub: 'World Economic Forum estimate' },
  { value: '85%', label: 'Business Leaders', sub: 'Believe AI gives competitive edge' },
  { value: '10x', label: 'Faster Drug Discovery', sub: 'With AI-assisted research' },
];

const AIStats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-950 via-[#0d0f2b] to-violet-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            AI in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-3">
                {value}
              </div>
              <div className="text-white font-semibold text-lg mb-1">{label}</div>
              <div className="text-slate-400 text-sm">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStats;
