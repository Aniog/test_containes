const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-cream py-4 border-y border-softGray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <div className="hidden sm:block w-px h-4 bg-softGray/30" />
              )}
              <span className="font-sans text-xs sm:text-sm text-warmGray tracking-wide whitespace-nowrap">
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
