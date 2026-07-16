import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Season",
      excerpt: "From delicate layers in spring to bold statements in winter—our guide to wearing gold year-round.",
      date: "July 12, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      category: "Styling",
    },
    {
      id: 2,
      title: "The Art of Layering Necklaces",
      excerpt: "Creating dimension and interest with multiple chains. A step-by-step approach to the perfect stack.",
      date: "July 5, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "How-To",
    },
    {
      id: 3,
      title: "Why We Choose 18K Gold Plating",
      excerpt: "Behind the materials: the difference between fine, demi-fine, and fashion jewelry—and why we land in the middle.",
      date: "June 28, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      category: "Craft",
    },
    {
      id: 4,
      title: "The Jewelry Edit: What to Pack for a Weekend Away",
      excerpt: "Three pieces. Endless combinations. Our minimalist packing list for travel.",
      date: "June 20, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      category: "Travel",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <div className="mb-12">
          <span className="text-xs tracking-[0.15em] text-[#C5A46E]">STORIES</span>
          <h1 className="font-serif text-5xl mt-1">The Journal</h1>
          <p className="text-[#5C5349] mt-3 max-w-md">Notes on craft, styling, and the quiet luxury of everyday adornment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-[#F5F1E9] mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-widest text-[#8A7F70] mb-2">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl mb-3 group-hover:text-[#C5A46E] transition-colors">{article.title}</h2>
                <p className="body-text text-[#5C5349] text-sm">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#EDE8E0] text-center">
          <p className="text-sm text-[#5C5349]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  )
}

export default Journal
