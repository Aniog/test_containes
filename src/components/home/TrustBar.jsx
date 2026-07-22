const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:inline-block w-px h-3 bg-gold/40" />
              )}
              <span className="font-inter text-[11px] uppercase tracking-widest text-gold-light">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
