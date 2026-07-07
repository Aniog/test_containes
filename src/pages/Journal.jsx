import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const posts = [
  {
    id: "p1",
    title: "How to Style Gold Huggies for Every Occasion",
    excerpt:
      "From the boardroom to the weekend — three ways to wear our most-loved silhouette.",
    category: "Styling",
    titleId: "journal-p1-title",
    descId: "journal-p1-desc",
    imgId: "journal-p1-img",
  },
  {
    id: "p2",
    title: "The Truth About 18K Gold Plating",
    excerpt:
      "What demi-fine really means, and how to keep your pieces glowing for years.",
    category: "Materials",
    titleId: "journal-p2-title",
    descId: "journal-p2-desc",
    imgId: "journal-p2-img",
  },
  {
    id: "p3",
    title: "A Gift Guide for the Woman Who Has Everything",
    excerpt:
      "Considered, quiet, and impossible to forget — our edit for gifting season.",
    category: "Gifting",
    titleId: "journal-p3-title",
    descId: "journal-p3-desc",
    imgId: "journal-p3-img",
  },
]

export default function Journal() {
  const containerRef = useStrkImages([])
  useScrollReveal()

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="container-editorial border-b border-ink/10 py-12 text-center md:py-16">
        <p className="eyebrow">Notes</p>
        <h1 className="mt-3 font-serif text-5xl font-light text-ink md:text-6xl">
          The Journal
        </h1>
        <p className="mt-4 font-serif text-lg italic text-stone">
          Styling, materials, and the art of gifting.
        </p>
      </div>

      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post) => (
            <article key={post.id} className="reveal group">
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-deep">
                <img
                  src={PLACEHOLDER}
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
              </div>
              <p className="mt-5 font-sans text-[11px] uppercase tracking-widest text-gold">
                {post.category}
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl font-light leading-snug text-ink"
              >
                {post.title}
              </h2>
              <p
                id={post.descId}
                className="mt-3 font-serif text-base italic leading-relaxed text-stone"
              >
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="group/link mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ink transition-colors hover:text-gold"
              >
                Read More
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
