export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-bg-secondary border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-velmora-border">·</span>}
              <span className="text-xs md:text-sm font-sans text-velmora-text-secondary uppercase tracking-wider">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}