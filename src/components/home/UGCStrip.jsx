import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-accent text-xs tracking-widest uppercase mb-2 text-center">
          Real Style
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-center">
          SEEN ON YOU
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64"
            >
              <div className="relative aspect-[9/16] bg-bg-warm overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-white text-sm italic leading-snug mb-1">
                    "{post.caption}"
                  </p>
                  <p className="text-white/60 text-xs">
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
