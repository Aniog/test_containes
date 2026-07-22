export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-sand py-4">
      <div className="container-main">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && <span className="hidden md:inline text-velmora-border">·</span>}
              <span className="text-xs md:text-sm font-medium text-velmora-warm-gray uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
