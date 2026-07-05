const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-1">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden md:block w-px h-3 bg-ivory/20" />
              )}
              <span className="font-manrope text-[10px] uppercase tracking-[0.15em] text-ivory/70">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
