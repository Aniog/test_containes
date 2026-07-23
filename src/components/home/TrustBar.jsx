const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velvet-900 py-3.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {items.map((item, i) => (
            <span
              key={item}
              className="text-[11px] md:text-xs tracking-widest uppercase text-velvet-400 font-medium"
            >
              {item}
              {i < items.length - 1 && (
                <span className="ml-6 md:ml-12 text-velvet-700">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
