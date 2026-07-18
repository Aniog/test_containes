const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-surface/50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <ul className="flex flex-wrap items-center justify-center lg:justify-between gap-y-3 py-4 text-[11px] sm:text-[12px] font-sans uppercase tracking-button text-ivory-muted">
          {items.map((it, idx) => (
            <li key={it} className="flex items-center">
              <span className="text-gold/80 mr-2">·</span>
              <span>{it}</span>
              {idx < items.length - 1 && (
                <span className="hidden lg:inline text-ivory-dim ml-6">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
