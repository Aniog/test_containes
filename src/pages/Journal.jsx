export default function Journal() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-cream-50">
      <div className="bg-cream-100 py-12 md:py-16 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">Inspiration</p>
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal-800" style={{ fontWeight: 400 }}>
          The Journal
        </h1>
        <div className="hairline max-w-24 mx-auto mt-6" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'How to Build the Perfect Ear Stack', date: 'June 2026', query: 'ear stack gold earrings styling' },
            { title: 'The Art of Layering Necklaces', date: 'May 2026', query: 'layered necklaces styling gold' },
            { title: 'Caring for Your Gold-Plated Jewelry', date: 'April 2026', query: 'jewelry care cleaning gold' },
            { title: 'Gift Guide: Jewelry for Every Occasion', date: 'March 2026', query: 'jewelry gift box elegant packaging' },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-cream-200 overflow-hidden mb-4">
                <img
                  data-strk-img-id={`journal-post-${i}`}
                  data-strk-img={post.query}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover product-img-zoom"
                />
              </div>
              <p className="text-xs text-gold-500 tracking-wider uppercase mb-2">{post.date}</p>
              <h3 className="font-serif text-xl text-charcoal-800 group-hover:text-gold-600 transition-colors" style={{ fontWeight: 500 }}>
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
