export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-[#FBF9F6] border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs md:text-sm text-[#78716C] tracking-[0.1em] uppercase font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
