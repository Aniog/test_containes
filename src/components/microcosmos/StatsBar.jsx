const stats = [
  { value: '8.7M', label: 'Species on Earth', sub: 'estimated total' },
  { value: '37T', label: 'Cells in the Human Body', sub: 'approximately' },
  { value: '10¹⁴', label: 'Microbes per Human', sub: 'bacteria & archaea' },
  { value: '0.001mm', label: 'Smallest Bacterium', sub: 'Mycoplasma genitalium' },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-[#0a1520] border-y border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl md:text-5xl font-black text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </p>
              <p className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</p>
              <p className="text-[#4a7a8a] text-xs uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
