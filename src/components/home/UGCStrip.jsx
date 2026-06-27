import { ugcItems } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 overflow-hidden">
      {/* Section Header */}
      <div className="container mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-2">
              Real Moments
            </p>
            <h2
              className="text-2xl md:text-3xl text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Seen on You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Follow @velmorajewelry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 relative group"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Vertical Image Card */}
              <div className="aspect-[9/16] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption Overlay (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    className="text-white text-sm italic"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    "{item.caption}"
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    {item.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />
      </div>

      {/* Mobile View All */}
      <div className="md:hidden text-center mt-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
        >
          Follow @velmorajewelry
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}