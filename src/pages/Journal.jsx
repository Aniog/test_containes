import { Link } from "react-router-dom"

const POSTS = [
  {
    id: "post-1",
    title: "How to Care for Gold-Plated Jewelry",
    excerpt:
      "Five small rituals to keep your demi-fine pieces warm, year after year.",
    read: "4 min",
    category: "Care",
  },
  {
    id: "post-2",
    title: "The Huggie, Reimagined",
    excerpt:
      "Why our chunky Golden Sphere huggies became our most-loved silhouette.",
    read: "6 min",
    category: "Design",
  },
  {
    id: "post-3",
    title: "Layering, the Velmora Way",
    excerpt:
      "Three ways to layer the Halo Thread and Majestic Flora necklaces.",
    read: "3 min",
    category: "Styling",
  },
]

export default function Journal() {
  return (
    <div className="bg-ink text-bone pt-24 md:pt-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-12 md:py-20">
        <p
          id="journal-eyebrow"
          className="text-[11px] tracking-widest3 uppercase text-bone/60"
        >
          The Journal
        </p>
        <h1
          id="journal-title"
          className="mt-3 font-serif text-[44px] md:text-[80px] leading-[1.05] max-w-3xl"
        >
          Stories, styling, and quiet obsessions.
        </h1>
      </div>

      <div className="mx-auto max-w-editorial px-6 md:px-10 pb-24">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {POSTS.map((p) => (
            <li key={p.id} className="border-t border-bone/15 pt-6">
              <p className="text-[11px] tracking-widest2 uppercase text-bone/55">
                {p.category} · {p.read}
              </p>
              <h2 className="mt-4 font-serif text-[28px] leading-tight text-bone">
                {p.title}
              </h2>
              <p className="mt-3 text-[15px] text-bone/70 leading-relaxed">
                {p.excerpt}
              </p>
              <Link
                to="#"
                className="mt-5 inline-flex text-[12px] tracking-widest2 uppercase text-bone/85 hover:text-gold"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
