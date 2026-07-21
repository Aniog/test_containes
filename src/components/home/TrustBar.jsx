const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

const TrustBar = () => {
  return (
    <section className="bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={item}
              className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-text-secondary)] tracking-wide"
            >
              <svg 
                className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
