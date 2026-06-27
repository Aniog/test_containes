const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

export default function TrustBar() {
  return (
    <section className="bg-[var(--color-ivory)] border-y border-[var(--color-sand)]">
      <div className="container py-4">
        <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={item} 
              className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-warm-gray)]"
            >
              {/* Checkmark icon */}
              <svg 
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-gold)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="uppercase tracking-[0.1em]">{item}</span>
              
              {/* Separator - hide on last item and on mobile */}
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline text-[var(--color-sand)] ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
