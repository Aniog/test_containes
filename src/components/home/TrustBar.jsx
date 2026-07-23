const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-border bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-velmora-text-secondary text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}