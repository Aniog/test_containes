import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'The Art of Gifting: Choosing the Perfect Piece',
    excerpt: 'A thoughtful guide to selecting demi-fine jewelry for the ones you love — and for yourself.',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
  },
  {
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'Master the art of necklace layering with our stylist-approved tips and tricks.',
    date: 'June 14, 2026',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=85',
  },
  {
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Extend the life and shine of your Velmora pieces with these simple care routines.',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85',
  },
  {
    title: 'Summer Jewelry Trends for 2026',
    excerpt: 'From sculptural huggies to layered chains — the demi-fine trends we are loving this season.',
    date: 'May 16, 2026',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85',
  },
]

export default function Journal() {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center bg-cream-100">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">Journal</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream-900 leading-tight mb-4">
          Stories & Style
        </h1>
        <p className="text-cream-500 max-w-md mx-auto">
          Discover inspiration, styling tips, and the stories behind our collections.
        </p>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-cream-200 mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-sans text-xs uppercase tracking-wider text-cream-400 mb-2">{article.date}</p>
              <h2 className="font-serif text-2xl text-cream-900 mb-3 group-hover:text-gold transition-colors">
                {article.title}
              </h2>
              <p className="text-cream-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold font-medium">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-cream-100">
        <h2 className="font-serif text-3xl text-cream-900 mb-4">Never Miss a Story</h2>
        <p className="text-cream-500 mb-8 max-w-md mx-auto">Sign up for our newsletter and be the first to know about new collections, events, and stories.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold text-cream-50 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors"
        >
          Subscribe <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  )
}