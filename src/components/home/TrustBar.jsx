const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-bone">
      <div className="container-velmora py-4">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-[11px] uppercase tracking-eyebrow text-ink-soft">
          {TRUST_ITEMS.map((item, idx) => (
            <li key={item} className="flex items-center gap-8">
              <span className="text-ink">{item}</span>
              {idx < TRUST_ITEMS.length - 1 && (
                <span className="hidden md:inline text-line" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}