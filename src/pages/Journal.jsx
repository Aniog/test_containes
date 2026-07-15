import React from 'react'

const journalEntries = [
  {
    id: 1,
    title: 'The Art of Layering Necklaces',
    excerpt: 'Master the effortlessly chic layered look with our guide to stacking chains, pendants, and chokers.',
    date: 'July 10, 2026',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop',
    category: 'Styling',
  },
  {
    id: 2,
    title: 'Why 18K Gold Plated Is the Smart Choice',
    excerpt: 'Discover the benefits of demi-fine jewelry and why 18K gold plating offers the perfect balance of quality and value.',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Building Your Everyday Jewelry Collection',
    excerpt: 'A curated guide to the essential pieces every woman needs — versatile, timeless, and always elegant.',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=400&fit=crop',
    category: 'Guide',
  },
]

export default function Journal() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-cream-200/30 border-b border-cream-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="font-sans text-[10px] uppercase tracking-mega-wide text-gold-600 mb-4">Velmora Journal</p>
          <h1 className="section-heading">Stories & Style</h1>
          <p className="section-subheading">Inspiration for your jewelry journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {journalEntries.map(entry => (
            <article key={entry.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden bg-cream-200 mb-4">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-gold-600 mb-2">
                {entry.category} · {entry.date}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-slate-850 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                {entry.title}
              </h3>
              <p className="font-sans text-sm text-slate-850/50 leading-relaxed">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
