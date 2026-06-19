import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 'how-to-layer-necklaces',
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortless layered look with our guide to mixing lengths, textures, and metals for a curated everyday style.',
    date: 'June 12, 2026',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    readTime: '4 min read',
  },
  {
    id: 'gold-care-guide',
    title: 'How to Care for Your Gold Plated Jewelry',
    excerpt: 'Keep your Velmora pieces looking brand new with these simple care tips. From storage to cleaning, we cover it all.',
    date: 'June 5, 2026',
    category: 'Care Guide',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=600&fit=crop',
    readTime: '3 min read',
  },
  {
    id: 'gift-guide-summer',
    title: 'Summer Gift Guide: Jewelry She\'ll Love',
    excerpt: 'From birthday surprises to "just because" moments, discover the perfect pieces for every occasion this season.',
    date: 'May 28, 2026',
    category: 'Gift Guide',
    image: 'https://images.unsplash.com/photo-1611085583191-a0b3a198b58c?w=800&h=600&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 'behind-the-scenes',
    title: 'Behind the Scenes: Designing the Flora Collection',
    excerpt: 'Take a peek into our design process and discover the inspiration behind our bestselling floral-inspired pieces.',
    date: 'May 15, 2026',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop',
    readTime: '6 min read',
  },
  {
    id: 'earring-styling',
    title: '5 Ways to Style Huggie Earrings',
    excerpt: 'From office to evening, discover how to make huggie earrings your go-to accessory for any occasion.',
    date: 'May 8, 2026',
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=600&fit=crop',
    readTime: '3 min read',
  },
  {
    id: 'sustainable-jewelry',
    title: 'Our Commitment to Sustainable Jewelry',
    excerpt: 'Learn about our approach to responsible sourcing, minimal waste production, and eco-conscious packaging.',
    date: 'April 22, 2026',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=600&fit=crop',
    readTime: '4 min read',
  },
]

export default function JournalPage() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Page header */}
      <section className="section-padding pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-2 sm:mb-3">
            The Journal
          </p>
          <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl text-[var(--velmora-text)] mb-3 sm:mb-4 leading-tight">
            Stories & Style
          </h1>
          <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] max-w-xl">
            Styling tips, care guides, and behind-the-scenes stories from the world of Velmora.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          <Link to={`/journal/${journalPosts[0].id}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={journalPosts[0].image}
                  alt={journalPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="lg:pl-4">
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--velmora-gold)] mb-2 sm:mb-3 block">
                  {journalPosts[0].category}
                </span>
                <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--velmora-text)] mb-3 sm:mb-4 leading-tight group-hover:text-[var(--velmora-gold)] transition-colors">
                  {journalPosts[0].title}
                </h2>
                <p className="text-sm sm:text-base text-[var(--velmora-text-secondary)] leading-relaxed mb-4 sm:mb-6">
                  {journalPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--velmora-text-muted)]">
                  <span>{journalPosts[0].date}</span>
                  <span className="w-1 h-1 bg-[var(--velmora-text-muted)] rounded-full" />
                  <span>{journalPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {journalPosts.slice(1).map(post => (
              <Link key={post.id} to={`/journal/${post.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden mb-3 sm:mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--velmora-gold)] mb-1.5 sm:mb-2 block">
                  {post.category}
                </span>
                <h3 className="serif-heading text-lg sm:text-xl text-[var(--velmora-text)] mb-2 leading-tight group-hover:text-[var(--velmora-gold)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--velmora-text-secondary)] leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--velmora-text-muted)]">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-[var(--velmora-text-muted)] rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 bg-[var(--velmora-bg-secondary)]">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
          <h2 className="serif-heading text-2xl sm:text-3xl text-[var(--velmora-text)] mb-3 sm:mb-4">
            Never Miss a Story
          </h2>
          <p className="text-sm text-[var(--velmora-text-secondary)] mb-6 sm:mb-8">
            Subscribe to our journal for styling tips, new collection launches, and exclusive offers.
          </p>
          <Link to="/" className="btn-outline inline-flex text-xs sm:text-sm">
            Subscribe Now
          </Link>
        </div>
      </section>
    </main>
  )
}
