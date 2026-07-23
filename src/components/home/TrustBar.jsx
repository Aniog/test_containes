export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-light py-4 border-b border-velmora-border">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-velmora-gray"
            >
              {index > 0 && (
                <span className="hidden md:inline text-velmora-border">·</span>
              )}
              <span className="uppercase tracking-wider text-xs">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}