const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian py-3">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:gap-x-10">
          {trustItems.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:inline text-gold/40 text-xs">·</span>
              )}
              <span className="font-sans text-[11px] uppercase tracking-widest text-ivory/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
