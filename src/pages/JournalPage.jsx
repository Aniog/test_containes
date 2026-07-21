import React from 'react'

const JournalPage = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Learn how to create stunning layered looks with our guide to necklace stacking.',
      date: 'July 15, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the New Luxury',
      excerpt: 'Discover why more women are choosing accessible luxury over traditional fine jewelry.',
      date: 'July 8, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'
    },
    {
      id: 3,
      title: 'Jewelry Care 101: Keep Your Pieces Shining',
      excerpt: 'Simple tips to maintain your jewelry\'s beauty for years to come.',
      date: 'June 28, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-4">Journal</h1>
          <p className="text-[#78716C] max-w-xl mx-auto">
            Stories, style guides, and inspiration for the modern jewelry lover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-[#F5F5F4] rounded-xl overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-[#78716C]">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-xl text-[#1C1917] group-hover:text-[#C9A96E] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-[#78716C] leading-relaxed">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JournalPage
