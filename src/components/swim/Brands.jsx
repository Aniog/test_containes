const brands = [
  { name: 'Speedo', abbr: 'SP' },
  { name: 'Arena', abbr: 'AR' },
  { name: 'TYR', abbr: 'TYR' },
  { name: 'Aqua Sphere', abbr: 'AQ' },
  { name: 'Finis', abbr: 'FN' },
  { name: 'Zoggs', abbr: 'ZG' },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-sky-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-sky-300 text-sm font-semibold uppercase tracking-widest mb-8">
          Trusted Brands We Carry
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center gap-2 bg-sky-800/60 border border-sky-700 rounded-xl px-5 py-3 hover:bg-sky-700/60 transition"
            >
              <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                {b.abbr.slice(0, 2)}
              </span>
              <span className="text-white font-semibold text-sm">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
