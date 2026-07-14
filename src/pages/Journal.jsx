import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'how-to-style-huggies',
    title: 'How to Style Huggies for Every Occasion',
    excerpt: 'From the boardroom to the weekend — three ways to wear your everyday hoops.',
    category: 'Styling',
  },
  {
    id: 'gold-care-guide',
    title: 'The Gold Jewelry Care Guide',
    excerpt: 'Simple rituals to keep your gold plated pieces glowing for years.',
    category: 'Care',
  },
  {
    id: 'gifting-edit',
    title: 'The Velmora Gifting Edit',
    excerpt: 'Thoughtful pieces for the milestones that matter most.',
    category: 'Gifting',
  },
]

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20 bg-cream min-h-screen">
      <div className="border-b border-champagne/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">The Journal</h1>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Styling notes, care rituals, and stories from the Velmora studio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[4/3] bg-sand mb-5" />
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{post.category}</p>
              <h2 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="text-muted mt-2 text-sm leading-relaxed">{post.excerpt}</p>
              <Link
                to="/journal"
                className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
