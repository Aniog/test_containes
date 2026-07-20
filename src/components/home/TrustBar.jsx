export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-charcoal-100 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 sm:gap-10 py-3 overflow-x-auto whitespace-nowrap">
          {items.map((item) => (
            <span
              key={item}
              className="text-[11px] font-sans font-medium tracking-widest uppercase text-charcoal-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
