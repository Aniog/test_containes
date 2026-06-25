import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-3">
            Real Moments
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-charcoal)]">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] relative group overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-[var(--color-ivory)] text-sm italic">
                  "{post.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--color-ivory)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-ivory)] to-transparent pointer-events-none" />
      </div>

      {/* Instagram CTA */}
      <div className="text-center mt-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--color-stone)] hover:text-[var(--color-gold)] transition-colors"
        >
          @velmorajewelry on Instagram
        </a>
      </div>
    </section>
  );
}
