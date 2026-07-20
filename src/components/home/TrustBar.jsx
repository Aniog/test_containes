export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-sand py-4 border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <span
              key={item}
              className="text-xs uppercase tracking-widest text-velmora-warm-gray flex items-center gap-2"
            >
              {index > 0 && <span className="hidden md:inline text-velmora-gold-light/30">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}