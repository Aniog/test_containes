export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div
      className="py-4 border-b"
      style={{
        backgroundColor: 'var(--color-ivory)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span
                  className="hidden md:inline w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-muted-light)' }}
                />
              )}
              <span
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-muted)' }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}