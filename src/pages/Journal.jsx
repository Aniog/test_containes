import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    title: "How to Care for Gold-Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces looking new for years.",
    date: "June 12, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Meaning Behind Our Heirloom Set",
    excerpt: "Why we designed a piece meant to be passed down.",
    date: "May 28, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The balance of beauty, durability, and accessibility.",
    date: "May 3, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
  },
  {
    id: 4,
    title: "A Letter from Our Founder",
    excerpt: "On building a brand that values quiet over noise.",
    date: "April 15, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.12em] uppercase text-[#6B635C]">Stories & Reflections</span>
          <h1 className="serif-heading text-5xl mt-2">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <article key={article.id} className="group">
              <Link to={`/journal/${article.id}`} className="block">
                <div className="aspect-[16/10] bg-[#EDE8E0] overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B635C] tracking-[0.08em] uppercase mb-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="serif-heading text-2xl mb-2 group-hover:text-[#B89778] transition-colors">{article.title}</h3>
                <p className="text-[#1A1A1A]">{article.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B635C]">More stories coming soon. Follow us on Instagram for daily inspiration.</p>
        </div>
      </div>
    </div>
  )
}
