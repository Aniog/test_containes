export default function TrustBar() {
  const features = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[#F5F1EB] py-4 border-y border-[#E8E2D9]">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm font-sans text-[#3D3833]"
            >
              {/* Gold dot accent */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
              <span>{feature}</span>
              {/* Separator - hidden on mobile, visible on md+ */}
              {index < features.length - 1 && (
                <span className="hidden md:inline mx-6 text-[#E8E2D9]">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
