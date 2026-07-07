import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"

const POSTS = [
  {
    id: "journal-1",
    title: "How to Layer Necklaces Like a Stylist",
    excerpt: "Three simple rules for mixing lengths, textures, and tones.",
    imgId: "journal-1-img",
    category: "Styling",
  },
  {
    id: "journal-2",
    title: "Caring for Gold-Plated Jewelry",
    excerpt: "Keep your pieces brilliant for years with these habits.",
    imgId: "journal-2-img",
    category: "Care",
  },
  {
    id: "journal-3",
    title: "The Quiet Luxury Edit",
    excerpt: "Understated pieces that speak volumes this season.",
    imgId: "journal-3-img",
    category: "Edit",
  },
]

export default function Journal() {
  return (
    <div className="bg-cream pt-20 md:pt-24">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-8 md:py-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">The Journal</p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Stories & Styling</h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-stone">
            Notes on craftsmanship, care, and the art of wearing jewelry.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <img
                  alt={post.title}
                  src={resolveImg(post.imgId)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold">{post.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-ink group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-stone">
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-ink underline hover:text-gold"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
