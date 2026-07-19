const POINTS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust"
      className="bg-paper border-b border-stone"
    >
      <div className="container-7xl py-4 md:py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-14">
        {POINTS.map((p, i) => (
          <div key={p} className="flex items-center gap-8 md:gap-14">
            <p className="text-[10px] md:text-[11px] uppercase tracking-eyebrow text-ink-soft font-medium">
              {p}
            </p>
            {i < POINTS.length - 1 && (
              <span aria-hidden="true" className="text-gold">
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
