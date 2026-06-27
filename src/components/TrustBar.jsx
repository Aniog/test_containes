export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div 
      className="py-4 border-b"
      style={{ 
        backgroundColor: 'var(--color-velmora-cream-dark)',
        borderColor: 'var(--color-velmora-border)'
      }}
    >
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-velmora-text-muted">·</span>
              )}
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-velmora-text-muted)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}