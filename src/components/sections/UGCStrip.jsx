import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-surface)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-accent)] mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            @velmorajewelry
          </h2>
        </div>
      </div>
      
      {/* Scrollable Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10 pointer-events-none" />
        
        {/* Scrollable Row */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 md:w-56 aspect-[9/16] rounded-[var(--radius-lg)] overflow-hidden relative group"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-white/90 italic">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
