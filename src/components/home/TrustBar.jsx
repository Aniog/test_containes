const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-cream/30" />
              )}
              <span className="text-xs uppercase tracking-wider text-cream/80">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
