const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-charcoal text-cream py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-taupe">·</span>
              )}
              <span className="text-xs uppercase tracking-[0.1em] text-cream/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;