const TrustBar = () => {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[var(--color-ivory)] py-4">
      <div className="container-narrow">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-gold)]" />
              )}
              <span 
                className="text-xs font-sans tracking-wider uppercase"
                style={{ color: 'var(--color-muted)' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;