export default function Journal() {
  const articles = [
    { title: 'The Art of Layering Gold', excerpt: 'How to stack, combine, and curate your jewelry for maximum impact.' },
    { title: 'Caring for Gold-Plated Jewelry', excerpt: 'Simple habits to keep your pieces gleaming for years.' },
    { title: 'The Return of the Ear Cuff', excerpt: 'Why the sculptural ear cuff is this season\'s defining accessory.' },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Journal</h1>
          <p className="mt-3 text-sm font-sans text-charcoal-500">Stories, guides, and inspiration from the world of Velmora.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-warm-100 overflow-hidden mb-5">
                <div className="w-full h-full bg-warm-200 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-serif text-lg text-charcoal-900 mb-2">{a.title}</h3>
              <p className="text-sm font-sans text-charcoal-500 leading-relaxed">{a.excerpt}</p>
              <span className="mt-3 inline-block text-xs font-sans uppercase tracking-[0.15em] text-charcoal-700 underline underline-offset-4 cursor-pointer">Read More</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}