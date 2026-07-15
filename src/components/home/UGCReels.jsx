import { ugcPosts } from '@/data/products';

export default function UGCReels() {
  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-3">
            Community
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
          {ugcPosts.map(post => (
            <div
              key={post.id}
              className="flex-shrink-0 w-40 sm:w-52 md:w-60"
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm text-ivory italic leading-relaxed">
                    "{post.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges on mobile */}
        <div className="absolute top-0 left-0 bottom-4 w-4 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-4 w-4 bg-gradient-to-l from-cream to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Instagram handle */}
      <div className="text-center mt-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm text-taupe hover:text-gold transition-colors"
        >
          <span className="w-4 h-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg" />
          Follow @velmorajewelry
        </a>
      </div>
    </section>
  );
}
