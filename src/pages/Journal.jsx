import { Link } from "react-router-dom"
import { strkImgUrl } from "@/lib/strk-images"
import { useStrkImages } from "@/hooks/useStrkImages"
import Reveal from "@/components/ui/Reveal"

const posts = [
  {
    id: "journal-1",
    title: "How to Style Gold Huggies for Every Day",
    excerpt:
      "The art of the everyday stack — three simple ways to wear your huggies from desk to dinner.",
    category: "Styling",
    date: "June 2026",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
    imgId: "journal-1-img",
  },
  {
    id: "journal-2",
    title: "Caring for 18K Gold Plated Jewelry",
    excerpt:
      "A simple ritual to keep your pieces glowing — what to avoid, and how to store them right.",
    category: "Care",
    date: "May 2026",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
    imgId: "journal-2-img",
  },
  {
    id: "journal-3",
    title: "The Gift of Heirloom: Choosing a Set",
    excerpt:
      "Why a coordinated set makes the most memorable gift — and how to choose one they'll keep forever.",
    category: "Gifting",
    date: "May 2026",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
    imgId: "journal-3-img",
  },
]

export default function Journal() {
  const containerRef = useStrkImages([])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="border-b border-sand">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
            Stories & Guides
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-charcoal md:text-5xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone">
            Styling notes, care rituals, and the stories behind our pieces.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="group">
                <div className="img-zoom aspect-[4/3] overflow-hidden bg-cream-deep">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src={strkImgUrl(post.imgId)}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-gold">
                    <span>{post.category}</span>
                    <span className="text-sand">·</span>
                    <span className="text-stone">{post.date}</span>
                  </div>
                  <h2
                    id={post.titleId}
                    className="mt-3 font-serif text-2xl text-charcoal transition-colors group-hover:text-gold-deep"
                  >
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-3 text-sm leading-relaxed text-stone">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/shop"
                    className="mt-4 inline-block text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:text-gold"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
