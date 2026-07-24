const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-charcoal-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-gold-500" />
              )}
              <span className="text-cream-100/80 text-xs font-sans tracking-wide whitespace-nowrap">
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
