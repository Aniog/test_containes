import { ugcImages } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="container mb-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Styled by You
          </p>
          <h2 className="heading-3 text-[var(--color-charcoal)]">Real Jewelry, Real Style</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-10 pointer-events-none" />

        {/* Scrollable Track */}
        <div
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-52 aspect-[9/16] rounded-lg overflow-hidden relative group"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif italic text-white text-sm mb-1">
                  &ldquo;{item.caption}&rdquo;
                </p>
                <p className="text-xs text-white/70">
                  {item.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-8">
        <p className="text-sm text-[var(--color-warm-gray)]">
          Share your style with{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline"
          >
            @velmorajewelry
          </a>
        </p>
      </div>
    </section>
  );
}
