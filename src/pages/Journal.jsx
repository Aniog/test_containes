import React from "react"
import { Link } from "react-router-dom"
import { getImgUrl } from "@/lib/imgConfig"


const posts = [
  {
    id: "journal-1",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to building a layered look that feels effortless, not overdone.",
    imgId: "journal-1-a1",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Five habits to keep your pieces warm, bright, and beautiful for years.",
    imgId: "journal-2-a1",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Quiet Luxury Edit",
    excerpt: "Why understated gold jewelry is the defining look of the season.",
    imgId: "journal-3-a1",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  return (
    <div className="bg-cream pt-16 md:pt-20 min-h-screen">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Notes</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink">The Journal</h1>
        <p className="text-stone text-sm mt-4 max-w-md mx-auto">
          Styling notes, care guides, and stories from the studio.
        </p>
      </div>

      <div className="max-w-editorial mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={getImgUrl(post.imgId)}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
              </div>
              <p className="text-xs uppercase tracking-widest2 text-gold mt-5">Styling</p>
              <h2
                id={post.titleId}
                className="font-serif text-2xl text-ink mt-2 group-hover:text-gold transition-colors"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="text-stone text-sm mt-3 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-xs uppercase tracking-widest2 text-ink underline underline-offset-4">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center pb-24">
        <Link
          to="/shop"
          className="inline-block border border-ink text-ink text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
