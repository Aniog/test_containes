export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[#1a1a1a] text-[#faf8f5] py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={feature} className="flex items-center gap-2">
              {index > 0 && <span className="text-[#c9a962]/40">·</span>}
              <span className="text-xs tracking-[0.1em] uppercase">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
