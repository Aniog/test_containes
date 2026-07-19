import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useStrkImages } from "@/hooks/useStrkImages"

const posts = [
  {
    id: "journal-1",
    imgId: "journal-1-a1",
    titleId: "journal-1-title",
    descId: "journal-1-desc",
    category: "Styling",
    title: "How to Layer Gold Necklaces",
    desc: "A guide to layering fine gold chains for an effortless, lived-in look.",
  },
  {
    id: "journal-2",
    imgId: "journal-2-b2",
    titleId: "journal-2-title",
    descId: "journal-2-desc",
    category: "Care",
    title: "Caring for Gold Plated Jewelry",
    desc: "Simple rituals to keep your pieces glowing for years to come.",
  },
  {
    id: "journal-3",
    imgId: "journal-3-c3",
    titleId: "journal-3-title",
    descId: "journal-3-desc",
    category: "Gifting",
    title: "The Art of the Thoughtful Gift",
    desc: "Choosing jewelry that says what words cannot.",
  },
]

export default function Journal() {
  const ref = useStrkImages([])

  return (
    <div ref={ref}>
      <div className="border-b border-hairline bg-cream pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            Notes from the Studio
          </p>
          <h1 className="mt-3 font-serif text-5xl text-espresso md:text-6xl">
            The Journal
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                {p.category}
              </p>
              <h2
                id={p.titleId}
                className="mt-2 font-serif text-2xl text-espresso"
              >
                {p.title}
              </h2>
              <p id={p.descId} className="mt-2 text-sm leading-relaxed text-stone">
                {p.desc}
              </p>
              <Link
                to="/journal"
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:text-gold"
              >
                Read More
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
