import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Stylist',
    excerpt: 'The art of the necklace stack — from delicate chains to statement pendants. Our guide to effortless layering.',
    category: 'Style Guide',
    date: 'June 2026',
  },
  {
    id: 2,
    title: 'Caring for Your Gold-Plated Jewelry',
    excerpt: 'Simple tips to keep your Velmora pieces looking radiant for years to come.',
    category: 'Care Guide',
    date: 'May 2026',
  },
  {
    id: 3,
    title: 'The Perfect Gift: A Velmora Guide',
    excerpt: 'Not sure what to choose? Our curated gift guide makes gifting effortless.',
    category: 'Gifting',
    date: 'April 2026',
  },
];

export default function JournalPage() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="flex items-center gap-2 text-xs text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">Journal</span>
        </nav>

        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
            From the Studio
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
            The Velmora Journal
          </h1>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="space-y-8">
          {posts.map(post => (
            <article
              key={post.id}
              className="group grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-white border border-velmora-border/50 hover:border-velmora-gold/30 transition-all cursor-pointer"
            >
              <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-velmora-warm to-velmora-sand flex items-center justify-center">
                <span className="text-3xl text-velmora-gold/30">✦</span>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-velmora-gold">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-velmora-taupe rounded-full" />
                  <span className="text-[10px] tracking-wider uppercase text-velmora-muted">
                    {post.date}
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl text-velmora-charcoal mb-3 group-hover:text-velmora-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-velmora-muted leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-xs tracking-[0.15em] uppercase font-medium text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 self-start group-hover:text-velmora-gold group-hover:border-velmora-gold transition-colors">
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
