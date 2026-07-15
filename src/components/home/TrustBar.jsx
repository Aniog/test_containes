export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-velvet-100 py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs md:text-sm font-sans text-velvet-700 tracking-wide"
            >
              {index > 0 && (
                <span className="hidden sm:inline text-velvet-300">·</span>
              )}
              <span className="w-1.5 h-1.5 bg-champagne rounded-full" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
