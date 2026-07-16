import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layering in spring to bold statement pieces in winter—discover the art of seasonal styling.",
      date: "July 12, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries intention. Learn the stories and inspirations behind our most beloved styles.",
      date: "June 28, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking their best for years to come. A guide to proper storage and cleaning.",
      date: "June 15, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    }
  ]

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.15em] text-[#8B7355]">STORIES & INSPIRATION</span>
        <h1 className="serif text-7xl tracking-[-0.02em] mt-3">The Journal</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <article key={article.id} className="group">
            <Link to="#" className="block">
              <div className="aspect-[16/10] bg-[#F8F5F1] overflow-hidden mb-6">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#6B665F] mb-3">
                <span>{article.date}</span>
                <span className="w-px h-3 bg-[#E5DFD3]" />
                <span>{article.readTime}</span>
              </div>
              <h3 className="serif text-2xl tracking-[-0.01em] mb-3 group-hover:text-[#8B7355] transition-colors">{article.title}</h3>
              <p className="text-[#6B665F] leading-relaxed">{article.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[0.08em] border-b border-[#2C2825] pb-px group-hover:border-[#8B7355]">Read Article →</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t text-center">
        <p className="text-[#6B665F]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        <a href="#" className="btn-outline mt-6 inline-block">@velmora</a>
      </div>
    </div>
  )
}

export default Journal