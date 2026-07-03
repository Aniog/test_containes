const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-light-gray py-4 border-b border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index < features.length - 1 && (
                <span className="hidden md:block w-1 h-1 bg-velmora-gold rounded-full" />
              )}
              <span className="text-xs md:text-sm font-medium text-velmora-warm-gray tracking-wide">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;