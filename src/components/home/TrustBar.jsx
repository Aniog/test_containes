// Slim strip of trust signals under the hero.
// Stays understated — small uppercase eyebrow text with hairline separators.

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-line">
      <div className="container-wide py-4">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-2 gap-x-6 text-center">
          {ITEMS.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-6 text-ink"
            >
              <span className="font-sans text-[11px] md:text-xs tracking-[0.24em] uppercase text-ink-muted">
                {label}
              </span>
              {i < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block h-3 w-px bg-line"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
