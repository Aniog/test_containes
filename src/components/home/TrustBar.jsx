const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian text-ivory py-3 overflow-hidden">
      <div className="flex items-center justify-center flex-wrap gap-0">
        {trustItems.map((item, i) => (
          <span key={item} className="flex items-center">
            <span className="font-inter text-[10px] tracking-[0.18em] uppercase text-ivory/80 px-4 md:px-6 whitespace-nowrap">
              {item}
            </span>
            {i < trustItems.length - 1 && (
              <span className="text-gold/50 text-xs">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
