export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section
      className="py-4 border-y"
      style={{
        backgroundColor: 'var(--color-ivory)',
        borderColor: 'var(--color-champagne)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span
                  className="hidden md:block w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-sand)' }}
                />
              )}
              <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--color-walnut)' }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}