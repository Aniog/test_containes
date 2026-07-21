import { ugcPosts } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mb-8">
        <p
          className="text-sm tracking-[0.2em] text-[var(--champagne-gold)] mb-3 text-center"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          @VELMORA ON INSTAGRAM
        </p>
        <h2
          className="text-2xl md:text-3xl text-[var(--deep-espresso)] text-center"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Spacer for center alignment on larger screens */}
          <div className="hidden md:block md:w-[calc((100vw-1280px)/2)]" />
          
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 md:w-64 aspect-[9/16] rounded-lg overflow-hidden relative group cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-espresso)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="text-sm text-[var(--ivory-cream)] italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {post.caption}
                </p>
              </div>
            </div>
          ))}

          {/* Spacer for center alignment */}
          <div className="hidden md:block md:w-[calc((100vw-1280px)/2)]" />
        </div>

        {/* Fade Edges (mobile) */}
        <div className="absolute top-0 left-0 bottom-4 w-8 bg-gradient-to-r from-[var(--ivory-cream)] to-transparent pointer-events-none md:hidden" />
        <div className="absolute top-0 right-0 bottom-4 w-8 bg-gradient-to-l from-[var(--ivory-cream)] to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  );
};

export default UGCSection;
