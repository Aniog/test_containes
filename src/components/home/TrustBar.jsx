export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 py-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[11px] md:text-xs tracking-wider uppercase text-white/50 font-light">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="w-px h-3 bg-white/15 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
