import React from 'react'

const journalPosts = [
  {
    id: 1,
    title: "How to Style Gold Jewelry for Every Season",
    excerpt: "From the warm tones of autumn to the bright light of summer, discover how to make your gold pieces work year-round.",
    date: "JULY 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 2,
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to creating dimension and interest with multiple chains—without ever looking overdone.",
    date: "JUNE 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: 3,
    title: "Why We Choose 18K Gold Plating",
    excerpt: "The science and sensibility behind our material choices, and what it means for everyday wear.",
    date: "MAY 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: 4,
    title: "Gifting Jewelry: A Thoughtful Guide",
    excerpt: "How to choose a piece that feels personal, meaningful, and right—whether for someone else or yourself.",
    date: "APRIL 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[3px] text-[#A67C52]">STORIES</span>
          <h1 className="font-serif text-4xl tracking-wide mt-2">The Journal</h1>
          <p className="text-[#4A4640] mt-3 max-w-md mx-auto">Notes on craft, style, and the quiet moments that jewelry becomes part of.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {journalPosts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-[#E5E0D8] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center gap-3 text-xs tracking-[1.5px] text-[#8B8178] mb-2">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl tracking-wide mb-3 group-hover:text-[#A67C52] transition-colors">{post.title}</h2>
              <p className="text-[#4A4640] leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm tracking-[1.5px] text-[#A67C52] border-b border-[#A67C52]/30 pb-0.5 group-hover:border-[#A67C52]">READ MORE</span>
            </article>
          ))}
        </div>

        <div className="text-center mt-16 text-sm text-[#8B8178]">
          More stories coming soon.
        </div>
      </div>
    </div>
  )
}
