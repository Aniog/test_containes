const STATS = [
  { number: "10+", label: "Years sourcing from China" },
  { number: "1,200+", label: "Verified supplier network" },
  { number: "30+", label: "Product categories covered" },
  { number: "40+", label: "Countries we ship to" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0E2A47] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {s.number}
              </p>
              <p className="mt-2 text-[13.5px] text-white/70 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}