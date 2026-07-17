const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-center flex-wrap gap-0 divide-x divide-gold/20">
          {items.map((item) => (
            <span
              key={item}
              className="font-sans text-[11px] tracking-widest uppercase text-taupe-light px-5 py-3 text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
