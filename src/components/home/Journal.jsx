const articles = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Everyday Wear",
    excerpt: "Five simple ways to make demi-fine jewelry feel intentional from morning to evening.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    date: "Jul 18, 2026",
  },
  {
    id: 2,
    title: "The Story Behind Our 18K Gold Plating Process",
    excerpt: "Why we chose warm gold plating, how it’s applied, and how to care for it.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    date: "Jul 10, 2026",
  },
  {
    id: 3,
    title: "Gift Guide: Jewelry She’ll Actually Wear",
    excerpt: "Thoughtful picks for birthdays, anniversaries, and just-because moments.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    date: "Jun 28, 2026",
  },
];

const Journal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl text-stone-900">Journal</h2>
            <p className="mt-2 text-sm text-stone-500">Stories, guides, and inspiration.</p>
          </div>
          <a href="#" className="text-xs tracking-[0.2em] uppercase text-amber-800 hover:text-amber-900">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <a href="#" className="block">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs text-stone-500 tracking-wide">{article.date}</p>
                  <h3 className="mt-2 font-serif text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
