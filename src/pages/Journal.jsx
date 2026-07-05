import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const posts = [
  {
    id: "j1",
    title: "How to Style Huggies for Every Day",
    excerpt:
      "The art of the everyday stack — from a single dome to a curated ear constellation.",
    imgId: "journal-1",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "j2",
    title: "Caring for Gold-Plated Jewelry",
    excerpt:
      "Five simple habits to keep your pieces luminous for years, not months.",
    imgId: "journal-2",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "j3",
    title: "The Quiet Luxury Edit",
    excerpt:
      "Why understated gold is the defining mood of modern fine jewelry.",
    imgId: "journal-3",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const containerRef = useStrkImages([])
  const revealRef = useReveal([])

  return (
    <div
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="pt-20"
    >
      <div className="mx-auto max-w-8xl px-5 py-16 text-center md:px-10 md:py-20">
        <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
          The Journal
        </p>
        <h1 className="mt-3 font-serif text-4xl text-espresso-900 md:text-6xl">
          Notes from the Studio
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-espresso-500">
          Styling guides, care notes, and stories behind the pieces.
        </p>
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="reveal group">
              <div className="relative aspect-[4/3] overflow-hidden bg-espresso-100">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2
                id={post.titleId}
                className="mt-5 font-serif text-2xl text-espresso-900"
              >
                {post.title}
              </h2>
              <p
                id={post.descId}
                className="mt-2 font-sans text-sm leading-relaxed text-espresso-600"
              >
                {post.excerpt}
              </p>
              <Link
                to="/journal"
                className="group mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-gold-600 transition-colors hover:text-espresso-900"
              >
                Read More
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
