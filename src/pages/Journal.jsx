import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const POSTS = [
  {
    id: "care-101",
    eyebrow: "Jewelry Care",
    title: "How to care for your gold-plated jewelry",
    excerpt: "Three small habits that keep your everyday pieces looking new — without the polishing kit.",
    query: "gold jewelry on linen table flat lay morning light",
  },
  {
    id: "stacking",
    eyebrow: "Styling",
    title: "The art of the ear stack",
    excerpt: "A quiet guide to building an ear stack that feels like you — from the lobe up.",
    query: "ear stack gold jewelry model editorial close up",
  },
  {
    id: "gifting",
    eyebrow: "Gifting",
    title: "A gift that gets remembered",
    excerpt: "Why the best gifts are the ones that become part of someone's everyday.",
    query: "gift box gold jewelry on cream linen ribbon",
  },
  {
    id: "behind",
    eyebrow: "Behind the Studio",
    title: "Notes from the bench",
    excerpt: "A few quiet words from our atelier on the pieces we're most proud of this season.",
    query: "jewelry studio bench tools warm light editorial",
  },
]

export default function Journal() {
  return (
    <section className="pt-32 md:pt-40 pb-24 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">The Velmora Journal</p>
          <h1 className="mt-4 font-serif text-ink text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
            Quiet notes on <span className="italic font-normal">jewelry</span>,<br />
            and the women who wear it.
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {POSTS.map((p) => (
            <article key={p.id} className="group">
              <Link to="/journal" className="block">
                <div className="aspect-[4/3] bg-ink overflow-hidden relative">
                  <img
                    alt={p.title}
                    data-strk-img-id={`journal-${p.id}`}
                    data-strk-img={`[journal-${p.id}-title] ${p.query}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover img-placeholder transition-transform duration-700 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="pt-6">
                  <p
                    id={`journal-${p.id}-title`}
                    className="eyebrow text-gold"
                  >
                    {p.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-ink text-[clamp(1.5rem,2.5vw,2rem)] leading-snug group-hover:text-gold-deep transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-muted text-[15px] leading-relaxed">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 eyebrow text-ink group-hover:text-gold transition-colors">
                    Read More <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
