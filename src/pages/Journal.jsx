import { Link } from 'react-router-dom'

export default function Journal() {
  const posts = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the effortless stacked look with our styling guide.',
      date: 'July 10, 2026',
    },
    {
      id: 2,
      title: 'Gold Care 101: Keep Your Pieces Shining',
      excerpt: 'Simple steps to maintain the brilliance of your demi-fine jewelry.',
      date: 'July 3, 2026',
    },
    {
      id: 3,
      title: '5 Huggie Earring Combinations to Try',
      excerpt: 'From minimal to statement, find your perfect ear stack.',
      date: 'June 25, 2026',
    },
  ]

  return (
    <div className="bg-cream pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-espresso">Journal</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border-t border-warm-200 pt-8">
              <p className="font-sans text-xs text-warm-400 tracking-wide">{post.date}</p>
              <h2 className="font-serif text-xl md:text-2xl text-espresso mt-2 hover:text-gold transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="font-sans text-sm text-warm-500 mt-2">{post.excerpt}</p>
              <span className="inline-block mt-3 font-sans text-xs tracking-product uppercase text-gold hover:text-gold-hover cursor-pointer transition-colors">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
