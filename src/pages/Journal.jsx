import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const POSTS = [
  {
    id: "p1",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "The art of the curated stack — lengths, weights, and the rule of three.",
    imgId: "journal-layer-velmora-1",
    titleId: "journal-title-p1",
    descId: "journal-desc-p1",
  },
  {
    id: "p2",
    title: "Caring for Gold Plated Jewelry",
    excerpt:
      "Simple rituals to keep your pieces warm, bright, and tarnish-free.",
    imgId: "journal-care-velmora-2",
    titleId: "journal-title-p2",
    descId: "journal-desc-p2",
  },
  {
    id: "p3",
    title: "The Quiet Luxury Edit",
    excerpt:
      "Why understated gold is the statement of the season — and always.",
    imgId: "journal-quiet-velmora-3",
    titleId: "journal-title-p3",
    descId: "journal-desc-p3",
  },
]

export default function Journal() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            Notes & Stories
          </p>
          <h1 className="font-serif text-5xl font-light text-ink sm:text-6xl">
            The Journal
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Styling notes, care rituals, and the stories behind our craft.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {POSTS.map((post, i) => (
            <article
              key={post.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="700"
                  src={PLACEHOLDER}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-gold">
                Styling
              </p>
              <h2
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-gold-deep"
              >
                {post.title}
              </h2>
              <p id={post.descId} className="mt-2 text-sm text-muted">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-ink-soft underline-offset-4 group-hover:underline">
                Read More
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
