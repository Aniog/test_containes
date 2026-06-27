export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section
      className="py-4 md:py-6 border-b"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs md:text-sm tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {index > 0 && (
                <span
                  className="hidden md:inline w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
              )}
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}