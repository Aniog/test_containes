const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="bg-ivory border-b border-ink/10">
      <div className="container-shell">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 py-4 md:py-3 text-center">
          {ITEMS.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-3 text-[10px] tracking-wider-3 uppercase text-ink-soft"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden md:inline-block w-px h-3 bg-ink/15 mr-3"
                />
              )}
              <span className="text-champagne-deep">·</span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
