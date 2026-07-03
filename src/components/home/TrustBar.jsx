export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <div className="bg-velmora-sand/50 py-4 border-y border-velmora-sand/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <span 
              key={feature} 
              className="text-xs md:text-sm tracking-wider text-velmora-taupe flex items-center"
            >
              {index > 0 && <span className="hidden md:inline text-velmora-taupe/30 mx-4">·</span>}
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
