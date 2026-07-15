export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-warm-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center md:justify-between gap-6 md:gap-0 py-3 overflow-x-auto">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-6 flex-shrink-0">
              <span className="text-[10px] tracking-widest uppercase text-cream-300 whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block text-cream-400/20">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}