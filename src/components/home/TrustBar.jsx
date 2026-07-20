function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-primary text-text-light py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustItems.map((item, index) => (
            <div 
              key={item} 
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
            >
              {index > 0 && (
                <span className="hidden md:inline text-text-light/30">·</span>
              )}
              <span className="text-text-light/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;