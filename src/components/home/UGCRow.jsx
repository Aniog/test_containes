import { ugcPosts } from '@/data/products';

export default function UGCRow() {
  return (
    <section className="py-12 bg-warm-cream">
      <div className="container-main mb-8">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
            Styled By You
          </p>
          <h2 className="section-title text-2xl md:text-3xl">@velmorajewels</h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-6 md:px-12 pb-4" style={{ width: 'max-content' }}>
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white text-sm italic mb-1">
                  "{post.caption}"
                </p>
                <p className="text-white/70 text-xs">
                  {post.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
