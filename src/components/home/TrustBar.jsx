export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-charcoal-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gold-500/50" />
              )}
              <span className="font-sans text-xs tracking-widest uppercase text-cream-200/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
