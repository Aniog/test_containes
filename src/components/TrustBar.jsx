export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-velmora-ivory py-4 md:py-5">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline text-velmora-stone">·</span>
              )}
              <span className="text-xs md:text-sm font-sans tracking-wider text-velmora-graphite uppercase">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}