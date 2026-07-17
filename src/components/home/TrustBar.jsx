const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-ivory py-4 border-b border-border">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="font-sans text-xs md:text-sm text-warm-gray tracking-wide">
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