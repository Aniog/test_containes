export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-deep border-b border-velmora-borderDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center md:justify-between py-3 gap-4 md:gap-8 overflow-x-auto">
          {items.map((item, i) => (
            <span key={i} className="text-xs tracking-widest uppercase text-velmora-sand whitespace-nowrap flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
