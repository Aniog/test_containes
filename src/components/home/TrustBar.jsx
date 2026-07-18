const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-[#E8E3D9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3.5 overflow-x-auto whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={item}
              className="text-[11px] md:text-xs tracking-[0.06em] uppercase text-[#78716C] font-medium"
            >
              {i > 0 && (
                <span className="mr-6 md:mr-12 text-[#D4D4D4]">·</span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
