import { Link } from "react-router-dom"
import { useReveal } from "@/lib/useReveal"

const posts = [
  {
    id: "how-to-style-huggies",
    title: "How to Style Huggies for Every Day",
    excerpt: "Three ways to wear the close-set hoop, from desk to dinner.",
    category: "Styling",
  },
  {
    id: "caring-for-gold-plated-jewelry",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years.",
    category: "Care",
  },
  {
    id: "the-art-of-layering",
    title: "The Art of Layering Necklaces",
    excerpt: "A guide to building a considered, personal necklace stack.",
    category: "Styling",
  },
]

export default function Journal() {
  useReveal()
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Notes</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink-800">The Journal</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="reveal group cursor-pointer">
              <div className="aspect-[4/3] bg-sand mb-5 overflow-hidden">
                <div className="w-full h-full bg-ink-100 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs uppercase tracking-widest3 text-gold mb-2">{post.category}</p>
              <h2 className="font-serif text-2xl text-ink-800 group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-xs uppercase tracking-widest2 text-ink-700 border-b border-gold pb-0.5">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
