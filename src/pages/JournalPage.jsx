const articles = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'The art of the curated chain stack — our definitive guide to mixing lengths, textures, and pendants.',
    tone: 'from-espresso-100 to-espresso-200',
  },
  {
    id: 2,
    title: 'The Anatomy of an Ear Stack',
    excerpt: 'From helix to lobe, how to build a cohesive ear story that reflects your personal style.',
    tone: 'from-espresso-200 to-gold-600',
  },
  {
    id: 3,
    title: 'Caring for Gold-Plated Jewelry',
    excerpt: 'Simple habits to keep your pieces luminous for years — what to avoid and what to embrace.',
    tone: 'from-gold-600 to-espresso-100',
  },
  {
    id: 4,
    title: 'The Art of Gifting Jewelry',
    excerpt: 'How to choose the perfect piece for someone you love — and why it always matters.',
    tone: 'from-espresso-50 to-gold-500',
  },
];

export default function JournalPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl lg:text-5xl tracking-widest uppercase text-espresso">
            The Journal
          </h1>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
          <p className="mt-5 text-warm text-sm max-w-md mx-auto">
            Stories, guides, and dispatches from the world of Velmora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className={`aspect-[16/9] bg-gradient-to-br ${article.tone} flex items-center justify-center`}>
                <div className="text-center opacity-25">
                  <span className="text-cream/50 text-6xl font-serif">✦</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-xs text-warm uppercase tracking-super mb-2">Style Guide</p>
                <h2 className="font-serif text-xl tracking-widest uppercase text-espresso group-hover:text-gold-500 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-warm mt-2 leading-relaxed">{article.excerpt}</p>
                <span className="mt-3 inline-block text-xs uppercase tracking-super text-gold border-b border-gold pb-0.5">
                  Read More
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
