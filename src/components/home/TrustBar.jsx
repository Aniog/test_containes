const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-charcoal border-y border-stone/20">
      <div className="container py-4 md:py-5">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-warm-gray"
            >
              {index > 0 && (
                <span className="hidden md:inline text-stone">·</span>
              )}
              <span className="text-ivory/70">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;