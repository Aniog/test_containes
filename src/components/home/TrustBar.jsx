export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-sand py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={item} 
              className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-velmora-charcoal/70"
            >
              {index > 0 && (
                <span className="hidden md:inline text-velmora-taupe/50">·</span>
              )}
              <span className="text-velmora-gold">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}