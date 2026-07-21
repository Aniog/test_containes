export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[#1A1A1A] text-white py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-[#C9A962]">·</span>}
              <span className="text-xs uppercase tracking-widest">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}