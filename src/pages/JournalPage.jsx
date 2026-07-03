import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    id: "post-1",
    title: "How to stack huggies without overthinking it",
    excerpt:
      "A short guide to building a considered ear stack — with three looks you can wear to dinner.",
    date: "Jun 24, 2026",
    read: "4 min read",
    href: "/journal/stacking-huggies",
    img: {
      id: "journal-1",
      query: "[journal-1-title] gold huggies ear stack editorial portrait",
      ratio: "4x5",
      width: 900,
      alt: "Editorial close-up of stacked huggies",
    },
  },
  {
    id: "post-2",
    title: "Behind the collection: the Florals, reimagined",
    excerpt:
      "Notes from our studio on the new Majestic Flora — and why we re-cut the chain three times.",
    date: "Jun 11, 2026",
    read: "6 min read",
    href: "/journal/majestic-flora",
    img: {
      id: "journal-2",
      query: "[journal-2-title] floral crystal gold necklace atelier editorial",
      ratio: "4x5",
      width: 900,
      alt: "Floral necklace detail",
    },
  },
  {
    id: "post-3",
    title: "Gold plated vs. gold filled: what's the difference?",
    excerpt:
      "A transparent answer — and how to make either last for years.",
    date: "May 28, 2026",
    read: "5 min read",
    href: "/journal/gold-plated-vs-filled",
    img: {
      id: "journal-3",
      query: "[journal-3-title] gold jewelry care polishing close up editorial",
      ratio: "4x5",
      width: 900,
      alt: "Gold jewelry care",
    },
  },
  {
    id: "post-4",
    title: "Gifting, considered: the pieces that always land",
    excerpt:
      "A small but well-curated gift guide for the women who already have everything.",
    date: "May 14, 2026",
    read: "3 min read",
    href: "/journal/gifting-considered",
    img: {
      id: "journal-4",
      query: "[journal-4-title] gold jewelry gift box editorial",
      ratio: "4x5",
      width: 900,
      alt: "Gold jewelry gift box",
    },
  },
]

export default function JournalPage() {
  return (
    <main className="pt-24 md:pt-28">
      <header className="container-site pb-10 md:pb-16 border-b border-line">
        <p className="eyebrow">The Velmora Journal</p>
        <h1
          id="journal-title"
          className="display text-4xl md:text-6xl mt-3"
        >
          Stories, notes, and small guides
        </h1>
        <p
          id="journal-subtitle"
          className="mt-3 text-ink-secondary max-w-xl"
        >
          On jewelry, materials, and the small rituals that go with wearing
          them.
        </p>
      </header>

      <div className="container-site py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 md:gap-y-20">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link to={post.href} className="block">
                <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-surface">
                  <img
                    data-strk-img-id={post.img.id}
                    data-strk-img={post.img.query}
                    data-strk-img-ratio={post.img.ratio}
                    data-strk-img-width={String(post.img.width)}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-ink-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read}</span>
                  </div>
                  <h2
                    id={post.img.id + "-title"}
                    className="font-serif text-2xl md:text-3xl mt-3 text-ink-primary group-hover:text-accent transition-colors duration-300"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 text-ink-secondary text-sm leading-relaxed max-w-prose">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center text-[12px] uppercase tracking-name font-medium text-ink-primary group-hover:text-accent transition-colors duration-300">
                    Read
                    <ArrowRight
                      className="ml-2 h-3.5 w-3.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
