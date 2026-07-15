const TrustBar = () => {
  const benefits = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-foreground text-background py-4">
      <div className="container-padding">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm tracking-wider">
          {benefits.map((benefit, index) => (
            <span key={index} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full" />
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
