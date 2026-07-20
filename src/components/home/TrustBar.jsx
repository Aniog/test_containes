export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-[var(--velmora-cream)] py-4 border-y border-[var(--velmora-gray-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--velmora-gray-400)]" />
              )}
              <span className="text-sm text-[var(--velmora-taupe)] tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
