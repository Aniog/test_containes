export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-warm-cream py-4 border-y border-light-gray">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-muted-gold">·</span>
              )}
              <span className="font-sans text-xs md:text-sm uppercase tracking-extra-wide text-taupe">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
