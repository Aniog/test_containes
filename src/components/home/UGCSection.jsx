import { ugcPosts } from '../../data/products';

const UGCSection = () => {
  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            Styled by You
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">
            @velmorajewelry
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 lg:px-16 scrollbar-hide">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] relative group cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm text-ivory italic leading-snug">
                    "{post.caption}"
                  </p>
                  <span className="text-xs text-ivory/70 mt-2 block">
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Fade Indicators */}
        <div className="absolute top-0 bottom-4 left-0 w-8 bg-gradient-to-r from-cream to-transparent pointer-events-none md:hidden" />
        <div className="absolute top-0 bottom-4 right-0 w-8 bg-gradient-to-l from-cream to-transparent pointer-events-none md:hidden" />
      </div>
    </section>
  );
};

export default UGCSection;
