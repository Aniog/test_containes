import { Link } from "react-router-dom"
import { useStrkImages } from "@/lib/useStrkImages"


const POSTS = [
  {
    id: "journal-1",
    title: "How to Style Gold Huggies",
    excerpt: "Three ways to wear your everyday huggies, from minimal to stacked.",
    category: "Styling",
    imgId: "journal-styling-huggies-1a",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
  },
  {
    id: "journal-2",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Simple rituals to keep your pieces glowing for years to come.",
    category: "Care",
    imgId: "journal-care-gold-2b",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
  },
  {
    id: "journal-3",
    title: "The Art of Gifting Fine Jewelry",
    excerpt: "Choosing a piece that says everything words cannot.",
    category: "Gifting",
    imgId: "journal-gifting-art-3c",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      <div className="mx-auto max-w-8xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest3 text-taupe">
            Stories & Guides
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            The Journal
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link to="/journal" className="block overflow-hidden bg-sand/40 aspect-[4/3]">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="pt-5">
                <p className="text-[11px] uppercase tracking-widest2 text-gold">
                  {post.category}
                </p>
                <h2
                  id={post.titleId}
                  className="mt-2 font-serif text-2xl text-ink"
                >
                  {post.title}
                </h2>
                <p
                  id={post.descId}
                  className="mt-2 text-sm leading-relaxed text-taupe"
                >
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="mt-4 inline-block text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
