export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div
      className="py-4 border-b border-[#E8E4DE]"
      style={{ backgroundColor: 'var(--color-ivory)' }}
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-[#E8E4DE]">·</span>
              )}
              <span className="text-xs font-sans tracking-wider text-[#8A8A8A] uppercase">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}