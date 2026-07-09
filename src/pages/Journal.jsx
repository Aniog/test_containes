import { Link } from 'react-router-dom'

const articles = [
  {
    id: 'how-to-layer-necklaces',
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our guide to creating the perfect stack for any neckline.',
    category: 'Styling Tips',
    date: 'June 15, 2026',
    readTime: '5 min read',
  },
  {
    id: 'ear-cuff-guide',
    title: 'The Ultimate Ear Cuff Guide',
    excerpt: 'Everything you need to know about wearing ear cuffs — no piercing required. Plus, our favorite ways to style them.',
    category: 'Styling Tips',
    date: 'May 28, 2026',
    readTime: '4 min read',
  },
  {
    id: 'gold-jewelry-care',
    title: 'How to Care for Your Gold Plated Jewelry',
    excerpt: 'Keep your Velmora pieces looking their best with our simple care guide. A little attention goes a long way.',
    category: 'Care Guide',
    date: 'May 10, 2026',
    readTime: '3 min read',
  },
]

export default function Journal() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-ivory">
      <div className="section-padding py-10 md:py-16 text-center border-b border-brand-taupe/10">
        <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
          The Velmora Journal
        </p>
        <h1 className="section-title text-3xl md:text-heading">
          Style & Stories
        </h1>
        <p className="font-sans text-sm text-brand-taupe mt-3 max-w-lg mx-auto">
          Styling inspiration, care tips, and behind-the-scenes from the Velmora studio.
        </p>
      </div>

      <div className="section-padding py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-brand-warm mb-5 overflow-hidden">
                <div className="w-full h-full bg-brand-warm group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-brand-gold">
                    {article.category}
                  </span>
                  <span className="font-sans text-[0.6rem] text-brand-taupe">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-xl text-brand-charcoal mb-2 group-hover:text-brand-gold transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans text-sm text-brand-taupe leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="font-sans text-xs text-brand-taupe mt-3">
                  {article.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
