const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-ink text-white">
      <div className="section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto whitespace-nowrap">
          {trustItems.map((item, i) => (
            <span
              key={item}
              className="text-[11px] md:text-xs tracking-wider uppercase text-white/70"
            >
              {item}
              {i < trustItems.length - 1 && (
                <span className="ml-6 md:ml-12 text-white/20">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}