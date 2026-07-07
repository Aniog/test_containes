const TrustBar = () => {
  const trustPoints = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-cream-100 py-4 border-y border-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {trustPoints.map((point, index) => (
            <div key={point} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 bg-gold rounded-full" />
              )}
              <span className="text-xs sm:text-sm text-taupe tracking-wide text-center">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
