const articles = [
  { title: 'The Art of Layering Necklaces', date: 'July 2026', image: '#8a6c4f' },
  { title: 'How to Style Huggies for Every Occasion', date: 'June 2026', image: '#6c5a3f' },
  { title: 'Caring for Gold-Plated Jewelry', date: 'May 2026', image: '#9a7c5f' },
  { title: 'The Return of the Ear Cuff', date: 'April 2026', image: '#7d624f' },
];

export default function JournalPage() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="container-wide section-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-sand-500 mb-4">The Journal</p>
          <h1 className="font-serif text-3xl md:text-5xl text-velvet-800 font-light tracking-wide mb-4">
            Stories & Style
          </h1>
          <p className="text-sand-500 text-sm max-w-lg mx-auto">
            Discover styling guides, care tips, and the inspiration behind our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div
                className="aspect-[4/3] rounded-sm overflow-hidden mb-4"
                style={{
                  backgroundColor: article.image,
                  backgroundImage: `linear-gradient(135deg, ${article.image} 0%, #5c3f2e 100%)`,
                }}
              />
              <p className="font-sans text-[10px] tracking-wide uppercase text-sand-500 mb-2">{article.date}</p>
              <h3 className="font-serif text-lg tracking-wide text-velvet-800 group-hover:text-velvet-500 transition-colors">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
