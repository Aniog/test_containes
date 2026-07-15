import { ugcPosts } from '../../data/products';

export default function UGCStrip() {
  return (
    <section className="py-12 md:py-16 bg-velvet-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-2">
            Community
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative">
        <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden relative group"
            >
              <img
                src={post.image}
                alt={`Styled by ${post.handle}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream italic mb-1 line-clamp-2">
                  "{post.caption}"
                </p>
                <p className="text-xs text-cream/70 font-sans">
                  {post.handle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-velvet-100 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
