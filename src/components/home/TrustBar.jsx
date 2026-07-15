const TrustBar = () => {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-surface border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-velmora-accent text-sm">✦</span>
              <span className="text-xs md:text-sm tracking-wider uppercase text-velmora-secondary">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
