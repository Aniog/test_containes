import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Every Season",
    excerpt: "From the warm tones of autumn to the crisp light of winter, discover how to wear gold year-round.",
    date: "July 8, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to creating dimension and interest with multiple chains, without ever looking overdone.",
    date: "June 22, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plate",
    excerpt: "The science and soul behind our material choices, and why demi-fine is more than a compromise.",
    date: "June 5, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Caring for Your Jewelry: A Simple Ritual",
    excerpt: "Three minutes a week is all it takes to keep your pieces looking as beautiful as the day you received them.",
    date: "May 18, 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&h=500&fit=crop",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-2">STORIES & REFLECTIONS</p>
          <h1 className="font-serif text-5xl tracking-wide">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <Link to={`/journal/${post.id}`} className="block">
                <div className="aspect-[16/10] bg-[#E5DFD3] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#8A7F6D] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-serif text-2xl tracking-wide mb-3 group-hover:text-[#C5A46E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#5C5346] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm tracking-[1px] text-[#C5A46E]">READ MORE →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#8A7F6D]">More stories coming soon.</p>
        </div>
      </div>
    </div>
  )
}
