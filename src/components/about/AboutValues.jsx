const VALUES = [
  {
    title: "Precision before everything",
    body: "We hold ± 0.05° repeatability on every double folder we ship — and we measure each one before it leaves us.",
  },
  {
    title: "Built to be repaired",
    body: "Every subassembly is modular, every wire is labeled, and every part is kept on the shelf for at least 20 years.",
  },
  {
    title: "Honest specifications",
    body: "Working thicknesses we publish are tested in our shop with the same operator your shop will use — not a marketing maximum.",
  },
];

const MILESTONES = [
  { year: "1986", text: "ARTITECT founded in Sheffield with two engineers and one folding machine." },
  { year: "1994", text: "First export — a sheet metal folder shipped to a panel shop in Stockholm." },
  { year: "2003", text: "ATF series double folders launched. Architectural sheet metal becomes our specialty." },
  { year: "2014", text: "MFM-2500 CNC metal folder introduced. Recipe libraries, automatic angle correction, OPC-UA." },
  { year: "2026", text: "Forty years of folding. 4,200 machines installed in 62 countries." },
];

export default function AboutValues() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
            How we work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight">
            Three principles we{" "}
            <span className="italic text-brass">refuse to compromise</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-px bg-mist md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-paper p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-sm text-steel leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
              Milestones
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink leading-tight">
              Forty years, in five lines.
            </h2>
          </div>
          <ol className="lg:col-span-8 border-l border-mist pl-8 space-y-8">
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[33px] top-2 h-px w-4 bg-brass" />
                <div className="font-serif text-2xl text-brass">{m.year}</div>
                <p className="mt-2 text-base text-steel leading-relaxed max-w-xl">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
