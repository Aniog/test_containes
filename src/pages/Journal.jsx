import React from 'react'

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "How to Style Gold Jewelry for Every Occasion",
      excerpt: "From boardroom meetings to evening soirées, discover the art of layering and mixing metals with confidence.",
      date: "June 12, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "Each design in our collection carries a story — from the sculptural forms of our huggies to the delicate filigree of our earrings.",
      date: "May 28, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Demi-Fine Jewelry",
      excerpt: "Simple rituals to keep your pieces looking radiant for years. A guide to cleaning, storing, and maintaining your Velmora treasures.",
      date: "May 10, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="max-w-2xl mb-14">
          <div className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">NOTES FROM THE STUDIO</div>
          <h1 className="serif text-6xl tracking-[0.03em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <a href="#" key={article.id} className="group block">
              <div className="aspect-[16/10] bg-[#1C1A17] mb-6 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[0.1em] text-[#7A7368] mb-3">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="serif text-2xl tracking-[0.02em] mb-3 group-hover:text-[#8B7355] transition-colors">{article.title}</h3>
              <p className="text-[#2C2823]/80 text-sm leading-relaxed">{article.excerpt}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="btn btn-outline">View All Articles</a>
        </div>
      </div>
    </div>
  )
}

export default Journal
