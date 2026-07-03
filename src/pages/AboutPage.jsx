import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Heart, Leaf } from "lucide-react"

const VALUES = [
  {
    id: "quality",
    icon: Sparkles,
    title: "Quiet Quality",
    body: "Demi-fine means fine enough to feel substantial, accessible enough to be worn daily. Every piece is hand-finished in 18K gold plating over brass or sterling silver.",
  },
  {
    id: "intention",
    icon: Heart,
    title: "Made with Intention",
    body: "We design in small batches, in our own studio, with thoughtful proportions. No loud logos. No seasonal noise. Just considered jewelry, made to be lived in.",
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Considered Sourcing",
    body: "Recycled metals where possible, recyclable packaging always, and a 30-day return policy that keeps unworn pieces in circulation.",
  },
]

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative">
        <div className="container-site py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <p className="eyebrow" id="about-eyebrow">
                Our Story
              </p>
              <h1
                id="about-title"
                className="display text-4xl md:text-6xl mt-4 text-balance"
              >
                Jewelry that lives{" "}
                <span className="text-accent italic">with you.</span>
              </h1>
              <p
                id="about-body"
                className="mt-6 text-ink-secondary text-base md:text-lg leading-relaxed max-w-xl"
              >
                Velmora began as a notebook sketch and a single pair of
                huggies. Today it is a small studio of makers, designers and
                editors committed to one thing: demi-fine jewelry, made
                beautifully, priced honestly, and meant to be kept.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/shop" className="btn-primary">
                  Shop the Collection
                  <ArrowRight className="ml-3 h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link to="/journal" className="btn-outline">
                  Read the Journal
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <div
                  data-strk-bg-id="about-hero-img"
                  data-strk-bg="[about-body] [about-title] gold jewelry atelier hands editorial portrait"
                  data-strk-bg-ratio="4x5"
                  data-strk-bg-width="1400"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p className="eyebrow" id="values-eyebrow">
              What We Stand For
            </p>
            <h2
              id="values-title"
              className="display text-3xl md:text-5xl mt-3"
            >
              Three small promises
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.id}
                  className="bg-base border border-line p-8 md:p-10"
                >
                  <Icon
                    className="h-7 w-7 text-accent"
                    strokeWidth={1.5}
                  />
                  <h3
                    id={`value-${v.id}-title`}
                    className="font-serif text-2xl mt-6 text-ink-primary"
                  >
                    {v.title}
                  </h3>
                  <p
                    id={`value-${v.id}-body`}
                    className="mt-3 text-ink-secondary text-sm leading-relaxed"
                  >
                    {v.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
