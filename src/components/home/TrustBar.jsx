export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[var(--color-sand)] py-4 border-b border-[var(--color-taupe)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 bg-[var(--color-gold)] rounded-full" />
              )}
              <span className="text-xs tracking-widest uppercase text-[var(--color-charcoal)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}