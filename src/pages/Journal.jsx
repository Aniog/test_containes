import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import Nav from "@/components/Nav"
import StockImage from "@/components/StockImage"
import { useReveal } from "@/hooks/useReveal"

const featured = {
  id: "journal-1",
  category: "Style Notes",
  date: "May 14, 2026",
  title: "How to Layer Necklaces Without Trying Too Hard",
  excerpt:
    "Three rules from our design team — plus the exact pieces to start with.",
  query: "woman wearing layered delicate gold necklaces cream sweater soft natural window light editorial portrait",
}

const articles = [
  {
    id: "j-2",
    category: "Behind the Scenes",
    date: "Apr 22, 2026",
    title: "Inside the workshop: a day in Porto",
    excerpt: "A photo essay from the family-run atelier where our huggies are finished by hand.",
    query: "goldsmith working on jewelry in warm light studio hands closeup editorial",
  },
  {
    id: "j-3",
    category: "Care Guide",
    date: "Mar 30, 2026",
    title: "Five things to never do with gold-plated jewelry",
    excerpt: "Tiny habits that keep your Velmora pieces glowing for years.",
    query: "gold jewelry on linen surface soft morning light minimal still life",
  },
  {
    id: "j-4",
    category: "Style Notes",
    date: "Feb 12, 2026",
    title: "The case for a single, sculptural ear cuff",
    excerpt: "Why one considered piece beats a curated stack — sometimes.",
    query: "closeup of woman wearing single sculptural gold ear cuff editorial portrait soft light",
  },
  {
    id: "j-5",
    category: "Gifting",
    date: "Jan 8, 2026",
    title: "A quieter way to gift, this year",
    excerpt: "Small-batch, considered, and made to be worn every day.",
    query: "gold jewelry gift box with ribbon warm beige background editorial still life",
  },
]

export default function Journal() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const gridRef = useReveal(0.05)

  return (
    <>
      <Nav forceSolid />
      <main className="bg-ivory-100">
        {/* Header */}
        <section className="pt-32 sm:pt-40 pb-14 sm:pb-20">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <p className="eyebrow mb-3">The Journal</p>
            <h1 className="font-serif text-espresso-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.015em]">
              Notes on quiet
              <br />
              <span className="display-italic text-gold-500">luxury.</span>
            </h1>
            <p className="mt-6 text-taupe-600 max-w-md mx-auto font-light">
              Style, craft, and the small things that make a piece yours.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
          <Link
            to="#"
            className="group block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-ivory-200">
              <StockImage
                id="journal-featured"
                query={featured.query}
                ratio="16x10"
                width="1600"
                alt={featured.title}
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover transition-transform duration-[1.2s] ease-elegant group-hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-500 mb-3">{featured.category}</p>
              <h2 className="font-serif text-espresso-800 text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight group-hover:text-gold-500 transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-taupe-600 font-light leading-relaxed">
                {featured.excerpt}
              </p>
              <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-taupe-500">
                {featured.date} · 5 min read
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-espresso-800 group-hover:text-gold-500 transition-colors">
                Read article
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        </section>

        <hr className="hairline max-w-screen-2xl mx-auto" />

        {/* Grid */}
        <section className="py-20 sm:py-24">
          <div
            ref={gridRef}
            className="reveal max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12"
          >
            <h2 className="font-serif text-3xl text-espresso-800 mb-12">More to read</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {articles.map((a) => (
                <Link key={a.id} to="#" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200 mb-6">
                    <StockImage
                      id={`journal-${a.id}`}
                      query={a.query}
                      ratio="4x5"
                      width="800"
                      alt={a.title}
                      className="absolute inset-0"
                      imgClassName="w-full h-full object-cover transition-transform duration-[1.2s] ease-elegant group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow text-gold-500 mb-2">{a.category}</p>
                  <h3 className="font-serif text-2xl text-espresso-800 leading-snug group-hover:text-gold-500 transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-taupe-600 font-light leading-relaxed">
                    {a.excerpt}
                  </p>
                  <p className="mt-4 text-[10px] tracking-[0.22em] uppercase text-taupe-500">
                    {a.date} · 4 min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
