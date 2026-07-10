export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-velmora-sand/30 py-4 border-y border-velmora-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-velmora-taupe/40">·</span>
              )}
              <span className="text-xs md:text-sm uppercase tracking-widest text-velmora-taupe">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}