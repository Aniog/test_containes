export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-y border-warm-border bg-ivory">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto gap-6 md:gap-0 md:grid md:grid-cols-4 py-3 md:py-4 -mx-4 md:mx-0 px-4 md:px-0">
          {items.map((item) => (
            <div
              key={item}
              className="flex-shrink-0 flex items-center gap-2 md:justify-center"
            >
              <span className="w-1 h-1 rounded-full bg-gold-accent" />
              <span className="text-xs md:text-sm text-warm-gray whitespace-nowrap tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}