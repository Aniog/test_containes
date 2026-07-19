import { ugcPosts } from '@/data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container-wide mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">@velmorajewelry</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Worn & Loved</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-4">
        {ugcPosts.map((post) => (
          <div key={post.id} className="flex-shrink-0 w-48 md:w-56 relative group">
            <div className="aspect-[9/16] rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="serif-heading text-white text-lg italic">{post.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
