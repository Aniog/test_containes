import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Nav from "@/components/Nav"
import StockImage from "@/components/StockImage"
import { useReveal } from "@/hooks/useReveal"

const values = [
  {
    title: "Crafted, not mass-made",
    body: "Every Velmora piece is hand-finished in small batches at family-run workshops we know by name.",
  },
  {
    title: "Honest materials",
    body: "18K gold plate over recycled brass or sterling silver. Hypoallergenic, always. No mystery metals.",
  },
  {
    title: "Priced to be worn",
    body: "We cut the middleman, the ad budget, and the markups. The result: demi-fine at the price it deserves to be.",
  },
  {
    title: "Made to last",
    body: "We design for the everyday, the heirloom, the gift that earns its place. Pieces you'll reach for in five years.",
  },
]

const stats = [
  { value: "2019", label: "Founded" },
  { value: "1%", label: "Donated to charity" },
  { value: "30d", label: "Returns, no questions" },
  { value: "4.9", label: "Avg. review" },
]

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const introRef = useReveal()
  const valuesRef = useReveal(0.05)
  const ctaRef = useReveal()

  return (
    <>
      <Nav forceSolid />
      <main className="bg-ivory-100">
        {/* Hero */}
        <section className="pt-32 sm:pt-40 pb-20 sm:pb-24">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
            <div ref={introRef} className="reveal max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-5">Our story</p>
              <h1 className="font-serif text-espresso-800 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.015em]">
                Quiet luxury,
                <br />
                <span className="display-italic text-gold-500">made honestly.</span>
              </h1>
              <p className="mt-8 text-base sm:text-lg text-taupe-600 leading-relaxed font-light max-w-2xl mx-auto">
                Velmora began in 2019, in a small studio in Lisbon, with a single
                idea: that fine jewelry shouldn't be reserved for someone else,
                someday. We design demi-fine gold pieces to live in — and to last.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial image */}
        <section className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 sm:pb-28">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-ivory-200">
            <StockImage
              id="about-hero-img"
              query="[about-hero-subtitle] [about-hero-title]"
              ratio="21x9"
              width="2000"
              alt="Founder working on jewelry at her studio"
              className="absolute inset-0"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <p className="sr-only" id="about-hero-title">Atelier</p>
          <p className="sr-only" id="about-hero-subtitle">The studio</p>
        </section>

        {/* Values */}
        <section className="bg-ivory-200/40 py-20 sm:py-28">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
            <div ref={valuesRef} className="reveal text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow mb-3">What we believe</p>
              <h2 className="font-serif text-4xl sm:text-5xl text-espresso-800">
                Four small promises.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {values.map((v) => (
                <div key={v.title}>
                  <span className="block font-serif text-5xl text-gold-400 mb-4 leading-none">
                    ·
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-800 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-taupe-600 leading-relaxed font-light">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-espresso-800 text-ivory py-16 sm:py-20">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-5xl sm:text-6xl text-ivory leading-none">
                    {s.value}
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-ivory-200/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 text-center">
          <div ref={ctaRef} className="reveal max-w-2xl mx-auto px-5 sm:px-8">
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso-800">
              Find your everyday piece.
            </h2>
            <p className="mt-5 text-taupe-600 font-light">
              Designed to live in. Priced to be worn.
            </p>
            <Link to="/shop" className="btn-primary mt-9">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
