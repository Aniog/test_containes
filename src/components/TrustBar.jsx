export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-cream py-4 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center text-sm text-velmora-charcoal">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full mr-2" />
              <span className="uppercase tracking-wider text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
