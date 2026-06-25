const industries = [
  { name: "Architectural facade & cladding", desc: "Long folds, consistent radii, premium finish" },
  { name: "HVAC & ductwork", desc: "Daily-duty throughput on standard gauges" },
  { name: "Electrical enclosures", desc: "Tight tolerances on small boxed parts" },
  { name: "Sign & display fabrication", desc: "Crisp letterforms and shaped panels" },
  { name: "Roofing & rainwater systems", desc: "Long-format galvanised and aluminium" },
  { name: "Custom metal furniture", desc: "Bespoke geometry for premium clients" },
];

export default function HomeIndustries() {
  return (
    <section className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bp-grid-dark opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
              Industries we serve
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
              From workshop bench to factory floor.
            </h2>
          </div>
          <p className="text-paper/70 leading-relaxed">
            Wherever a clean, repeatable bend matters, ARTITECT machines are at
            work — quietly, reliably, shift after shift.
          </p>
        </div>

        <div className="grid gap-px bg-paper/10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, idx) => (
            <div key={industry.name} className="bg-ink p-8 flex gap-5">
              <span className="font-display text-brass text-sm">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl text-paper">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-paper/60 leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
