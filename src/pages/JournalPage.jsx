export default function JournalPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-velmora-accent font-medium mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-text">
            Style Notes
          </h1>
          <p className="mt-4 text-sm text-velmora-text-muted max-w-md mx-auto">
            Stories, styling tips, and behind-the-scenes looks at how we craft each piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'How to Layer Necklaces Like a Stylist', date: 'June 15, 2026', excerpt: 'The art of layering is all about balance. Start with a delicate choker, add a mid-length pendant, and finish with a long chain for dimension.' },
            { title: 'Caring for Your Gold-Plated Jewelry', date: 'May 28, 2026', excerpt: 'With the right care, your demi-fine pieces can last for years. Here is our complete guide to cleaning, storing, and protecting your collection.' },
            { title: 'The Making of the Majestic Flora Nectar', date: 'May 10, 2026', excerpt: 'From sketch to finished piece, follow the journey of our bestselling necklace through our London atelier.' },
            { title: '5 Ways to Style Huggies for Every Occasion', date: 'April 22, 2026', excerpt: 'Small but mighty — huggies are the most versatile earrings in your jewelry box. Here are five fresh ways to wear them.' },
          ].map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-velmora-cream overflow-hidden mb-4">
                <img
                  data-strk-img-id={`journal-img-${idx}`}
                  data-strk-img={`[journal-title-${idx}] [journal-excerpt-${idx}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-velmora-text-muted mb-2">{post.date}</p>
              <h2 id={`journal-title-${idx}`} className="font-serif text-xl md:text-2xl tracking-wide text-velmora-text group-hover:opacity-70 transition-opacity">
                {post.title}
              </h2>
              <p id={`journal-excerpt-${idx}`} className="mt-2 text-sm text-velmora-text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
