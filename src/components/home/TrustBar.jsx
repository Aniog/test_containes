const TrustBar = () => {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#1A1A1A] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[#B8860B] text-xs">✦</span>
              <span className="text-xs text-white/80 uppercase tracking-widest">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
