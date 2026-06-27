const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[var(--color-surface-alt)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={item} 
              className="flex items-center gap-2 text-xs md:text-sm tracking-wider uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              {index > 0 && (
                <span className="hidden md:inline text-[var(--color-border)]">·</span>
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;