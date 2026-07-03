import { Link } from "react-router-dom"
import { PLACEHOLDER } from "@/components/ui/StrkImage"

const POSTS = [
  {
    imgId: "journal-1-velmora",
    titleId: "journal-title-1",
    descId: "journal-desc-1",
    category: "Styling",
    title: "How to Layer Gold Necklaces",
    excerpt: "A simple guide to building a layered look that feels effortless.",
    desc: "layered gold necklaces on the neck styling editorial",
  },
  {
    imgId: "journal-2-velmora",
    titleId: "journal-title-2",
    descId: "journal-desc-2",
    category: "Care",
    title: "Caring for Gold Plated Jewelry",
    excerpt: "Keep your pieces glowing with these simple daily habits.",
    desc: "gold jewelry care cleaning soft cloth editorial",
  },
  {
    imgId: "journal-3-velmora",
    titleId: "journal-title-3",
    descId: "journal-desc-3",
    category: "Gifting",
    title: "The Art of the Thoughtful Gift",
    excerpt: "Choosing jewelry for someone you love, without the guesswork.",
    desc: "gold jewelry gift box elegant presentation editorial",
  },
]

export default function Journal() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-8xl px-5 py-16 text-center md:px-8 md:py-20">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Notes from the Studio
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          The Journal
        </h1>
        <div className="mx-auto mt-6 h-px w-12 bg-gold" />
      </div>

      <div className="mx-auto max-w-8xl px-5 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {POSTS.map((post) => (
            <article key={post.imgId} className="group">
              <div className="overflow-hidden bg-cream">
                <img
                  alt={post.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src={PLACEHOLDER}
                />
              </div>
              <div className="pt-5">
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold">
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
                  className="mt-2 font-sans text-sm leading-relaxed text-taupe"
                >
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="mt-4 inline-block font-sans text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold"
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
