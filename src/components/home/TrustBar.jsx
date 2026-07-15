export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-charcoal-950 text-cream-300/70 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3.5 flex items-center justify-center md:justify-between flex-wrap gap-x-8 gap-y-2">
        {items.map((item) => (
          <span key={item} className="text-[11px] tracking-wider uppercase whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
