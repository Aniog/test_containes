const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-linen border-b border-warm-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-0 divide-x divide-warm-gray-light">
          {items.map(item => (
            <span
              key={item}
              className="font-inter text-xs tracking-widest uppercase text-warm-gray px-5 md:px-8 py-3 text-center"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
