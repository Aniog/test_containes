export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-charcoal py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-velmora-cream/70 text-sm tracking-wide">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}