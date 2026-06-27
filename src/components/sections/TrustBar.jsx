export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];
  
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-secondary)] tracking-wide"
            >
              {index > 0 && (
                <span className="hidden md:inline text-[var(--color-border)]">·</span>
              )}
              <span className="whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
