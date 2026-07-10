export default function TrustBar() {
  const trustItems = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-secondary text-primary py-4 border-b border-primary/10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              {index > 0 && (
                <span className="hidden md:inline w-1 h-1 bg-accent rounded-full" />
              )}
              <span className="text-caption uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}