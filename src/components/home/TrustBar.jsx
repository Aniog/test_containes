export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-velmora-sand py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-velmora-taupe">·</span>}
              <span className="font-sans text-xs md:text-sm tracking-wider uppercase text-velmora-charcoal">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
