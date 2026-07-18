import React from 'react'
import { Link } from 'react-router-dom'

const journalPosts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Every Season",
    excerpt: "From summer's bare skin to winter's layered textures, discover how to make your gold pieces work year-round.",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to creating dimension and interest with multiple chains, without ever looking overdone.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The difference between fine and demi-fine, and why our approach offers the best of both worlds.",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
]

function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.15em] uppercase text-vel-gold mb-2">Stories</div>
          <h1 className="section-title">The Journal</h1>
          <p className="text-vel-muted mt-3">Notes on craft, style, and the pieces we live in.</p>
        </div>

        <div className="space-y-12">
          {journalPosts.map((post) => (
            <article key={post.id} className="group grid md:grid-cols-5 gap-6 md:gap-10 items-center">
              <div className="md:col-span-2 aspect-[16/10] bg-vel-bg-alt overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:col-span-3">
                <time className="text-xs tracking-widest text-vel-muted">{post.date}</time>
                <h2 className="serif text-2xl mt-2 mb-3 tracking-[-0.01em] group-hover:text-vel-gold-dark transition-colors">
                  {post.title}
                </h2>
                <p className="text-vel-muted leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm tracking-widest text-vel-gold-dark group-hover:underline">Read More →</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn btn-outline">Shop the Collection</Link>
        </div>
      </div>
    </div>
  )
}

export default Journal