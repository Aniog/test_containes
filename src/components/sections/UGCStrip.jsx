import { ugcPosts } from '@/data/products';

export default function UGCStrip() {
  return (
    <section className="section-padding bg-brand-bg-primary overflow-hidden">
      <div className="container-main mb-8">
        <h2 className="serif-heading text-2xl md:text-3xl text-brand-text-primary text-center">
          Seen on You
        </h2>
        <p className="mt-2 text-brand-text-secondary text-center">
          Tag us @velmora to be featured
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative">
        <div
          className="flex gap-4 px-4 md:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer">
                <img
                  src={post.image}
                  alt={`Instagram post by ${post.author}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-sm italic text-brand-text-primary mb-1">
                    "{post.caption}"
                  </p>
                  <p className="text-xs text-brand-gold">
                    @{post.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-brand-bg-primary to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-brand-bg-primary to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
