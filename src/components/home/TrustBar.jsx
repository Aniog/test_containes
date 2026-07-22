const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const TrustBar = () => {
  return (
    <div className="bg-velmora-sand/30 border-y border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 py-4">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-velmora-taupe"
            >
              {index < trustItems.length - 1 && (
                <span className="hidden sm:inline text-velmora-sand">·</span>
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
