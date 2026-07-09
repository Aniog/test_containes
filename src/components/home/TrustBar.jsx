const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-espresso py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:inline text-gold/40 text-xs">·</span>
              )}
              <span className="font-sans text-[11px] tracking-widest uppercase text-cream/80">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
