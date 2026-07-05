export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-[#1a1a1a] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 bg-[#d4af37] rounded-full" />
              )}
              <span className="text-white/70 text-xs tracking-[0.15em] uppercase whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
