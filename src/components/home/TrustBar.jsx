const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-cream-200 py-4 border-y border-charcoal-800/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 bg-gold-500 rounded-full" />
              )}
              <span className="font-sans text-xs sm:text-sm text-charcoal-800 tracking-wide whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
