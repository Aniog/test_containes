import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const journalPosts = [
  {
    id: 1,
    title: "How to Layer Necklaces",
    excerpt: "A guide to creating effortless, personal stacks that feel uniquely yours.",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Art of Everyday Luxury",
    excerpt: "Why we believe beautiful things should be worn, not saved for later.",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  },
  {
    id: 3,
    title: "Caring for Your Gold Jewelry",
    excerpt: "Simple rituals to keep your pieces looking their best for years to come.",
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80",
  },
]

export default function Journal() {
  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.15em] text-velmora-gold">STORIES</span>
          <h1 className="serif text-5xl tracking-wide mt-2">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-velmora-surface overflow-hidden mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-xs tracking-wider text-velmora-text-light mb-1">{post.date}</div>
              <h3 className="serif text-xl tracking-wide mb-2 group-hover:text-velmora-gold transition-colors">{post.title}</h3>
              <p className="text-sm text-velmora-text-light leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-wider border-b border-velmora-gold pb-px">READ MORE</span>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-velmora-text-light">
          More stories coming soon.
        </div>
      </div>

      <Footer />
    </div>
  )
}
