import { ugcPosts } from '../../data/products';

const UGCStrip = () => {
  return (
    <section className="py-16 lg:py-20 bg-cream-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-3">
            Real Style
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 px-4 sm:px-6 overflow-x-auto hide-scrollbar pb-4">
          {ugcPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 relative overflow-hidden group"
            >
              {/* Vertical Image */}
              <div className="aspect-ugc bg-charcoal-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm italic text-cream-50 mb-1">
                  {post.caption}
                </p>
                <p className="font-sans text-xs text-cream-300">
                  {post.author}
                </p>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <div className="flex-shrink-0 w-48 sm:w-56 md:w-64 relative overflow-hidden flex items-center justify-center bg-charcoal-800 group cursor-pointer">
            <div className="text-center">
              <p className="font-serif text-lg text-cream-50 mb-2">
                Follow Us
              </p>
              <p className="font-sans text-xs text-cream-300 tracking-wider uppercase">
                @velmorajewels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCStrip;
