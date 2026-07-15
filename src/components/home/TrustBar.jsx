const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-espresso-light border-b border-ivory/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-0 divide-x divide-ivory/10">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex-1 min-w-[140px] flex items-center justify-center py-3 px-4"
            >
              <span className="font-sans text-[10px] uppercase tracking-widest text-ivory/70 text-center whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
