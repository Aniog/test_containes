import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-12 md:py-16 bg-surface overflow-hidden">
      <div className="max-w-content mx-auto px-4 md:px-6 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center">
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-3 px-4 md:px-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-44 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/${post.imageId}/280/500`}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-white italic">
                    {post.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  );
}
