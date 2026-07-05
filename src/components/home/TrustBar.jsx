export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-brand-charcoal py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-8 px-5 flex-wrap">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-4 md:gap-8">
            <span className="font-sans text-[11px] md:text-xs tracking-wider uppercase text-brand-cream/80 whitespace-nowrap">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="hidden md:inline text-brand-cream/30">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
