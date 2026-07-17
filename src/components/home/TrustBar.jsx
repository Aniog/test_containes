const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-ivory py-4 border-b border-pebble">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-champagne" />
              )}
              <span className="text-xs md:text-sm font-medium text-stone uppercase tracking-wider">
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