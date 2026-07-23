const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-velvet py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
        {TRUST_ITEMS.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            <span className="font-sans text-xs tracking-widest uppercase text-champagne/90">
              {item}
            </span>
            {i < TRUST_ITEMS.length - 1 && (
              <span className="hidden sm:inline text-bark/60 text-xs">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
