const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-sand py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
              <span className="font-sans text-xs md:text-sm text-velmora-charcoal tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;