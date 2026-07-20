export default function UGCStrip({ posts }) {
  return (
    <section className="py-16 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-ultra-wide text-gold-600 uppercase mb-3">
            Community
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Scrolling Strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {posts.map((post) => (
            <div 
              key={post.id}
              className="relative flex-shrink-0 w-40 md:w-56 aspect-[9/16] overflow-hidden group"
            >
              <img 
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-cream-50 italic leading-snug">
                  "{post.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="flex justify-center mt-6 md:hidden">
        <p className="text-xs text-charcoal-400">Swipe to explore</p>
      </div>
    </section>
  );
}
