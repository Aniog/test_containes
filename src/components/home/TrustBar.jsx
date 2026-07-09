const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-espresso py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:inline text-gold/40 text-xs">·</span>
              )}
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/70">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
