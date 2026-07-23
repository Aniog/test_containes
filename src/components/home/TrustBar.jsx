const TrustBar = () => {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[var(--color-charcoal)] py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className="flex items-center gap-2 text-white/80"
            >
              {/* Check Icon */}
              <svg 
                className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              
              <span 
                className="text-xs tracking-widest uppercase whitespace-nowrap"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {feature}
              </span>
              
              {/* Divider (except last) */}
              {index < features.length - 1 && (
                <span className="hidden md:block w-px h-4 bg-white/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
