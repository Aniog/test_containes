const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4">
          {items.map((item, i) => (
            <span key={item} className="text-xs text-taupe uppercase tracking-widest">
              {i > 0 && <span className="inline-block mx-4 text-hairline">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
