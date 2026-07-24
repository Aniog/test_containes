export default function Journal() {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal text-center">
          The Journal
        </h1>
        <p className="font-sans text-sm text-velmora-warmgray mt-4 text-center max-w-lg mx-auto">
          Stories, styling tips, and behind-the-scenes looks at how we create our collections.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'How to Layer Necklaces Like a Stylist', date: 'July 18, 2026' },
            { title: 'The Complete Guide to Caring for Gold-Plated Jewelry', date: 'July 10, 2026' },
            { title: '5 Pieces That Transition from Office to Evening', date: 'June 28, 2026' },
            { title: 'Meet the Artisan: Our Production Partner in Istanbul', date: 'June 15, 2026' },
            { title: 'Why We Choose Small-Batch Production', date: 'June 2, 2026' },
            { title: 'Gift Guide: Jewelry for Every Personality', date: 'May 20, 2026' },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-velmora-sand overflow-hidden mb-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`journal-${i}`}
                  data-strk-img={`[journal-title-${i}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <span id={`journal-title-${i}`} className="sr-only">
                  {post.title} jewelry editorial
                </span>
              </div>
              <p className="font-sans text-[11px] uppercase tracking-widest text-velmora-warmgray">
                {post.date}
              </p>
              <h3 className="font-serif text-lg text-velmora-charcoal mt-1 group-hover:text-velmora-gold transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}