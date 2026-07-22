export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-velmora-black text-white py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs tracking-widest uppercase">
          {items.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              {index > 0 && <span className="w-1 h-1 bg-velmora-gold rounded-full" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
