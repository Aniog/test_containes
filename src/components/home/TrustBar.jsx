export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-velmora-sand py-4 md:py-5 border-b border-velmora-taupe/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {index < features.length - 1 && (
                <span className="hidden md:inline w-1 h-1 bg-velmora-taupe rounded-full" />
              )}
              <span className="text-xs md:text-sm tracking-wider text-velmora-charcoal/70 uppercase">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}