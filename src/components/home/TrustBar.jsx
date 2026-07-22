const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-ivory border-b border-line">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-3.5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-12 text-[10px] md:text-[11px] uppercase tracking-wider-3 font-sans font-medium text-ink/80">
          {ITEMS.map((it, i) => (
            <li key={it} className="flex items-center gap-6 md:gap-12">
              <span>{it}</span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden="true" className="hidden md:inline-block w-1 h-1 rounded-full bg-gold" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
