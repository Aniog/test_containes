import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  const posts = [
    {
      id: 1,
      title: "How to Layer Necklaces Like a Stylist",
      excerpt: "The art of mixing lengths, textures, and metals for an effortlessly polished look.",
      date: "JULY 2026",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    {
      id: 2,
      title: "The Meaning Behind Our Signature Pieces",
      excerpt: "From the Golden Sphere to the Flora Nectar — the stories that inspired our icons.",
      date: "JUNE 2026",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    {
      id: 3,
      title: "Caring for Your Gold Jewelry",
      excerpt: "Simple rituals to keep your pieces looking radiant for years to come.",
      date: "MAY 2026",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
  ]

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-[#A68B5B] mb-2">STORIES & INSPIRATION</p>
          <h1 className="serif text-4xl tracking-[-0.01em]">The Journal</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={post.id} className="group">
              <div className="aspect-[16/10] bg-[#F5F2ED] overflow-hidden mb-6">
                <img 
                  src={post.img} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <p className="text-xs tracking-[0.15em] text-[#A68B5B] mb-2">{post.date}</p>
              <h2 className="serif text-2xl tracking-[-0.01em] mb-3 group-hover:text-[#A68B5B] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#5C5651] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm tracking-[0.1em] text-[#A68B5B]">READ MORE →</span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="text-sm tracking-[0.1em] border-b border-[#A68B5B] pb-0.5 hover:text-[#A68B5B]">
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Journal
