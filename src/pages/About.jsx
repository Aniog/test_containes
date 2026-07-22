import { Link } from "react-router-dom"
import { ArrowRight, Sparkles, Award, Heart, Globe } from "lucide-react"
import { TESTIMONIALS } from "@/data/products"
import Newsletter from "@/components/layout/Newsletter"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"

const VALUES = [
  {
    icon: Sparkles,
    title: "Crafted, not made",
    body: "Every piece is finished by hand in small batches, with the same techniques used by ateliers four times our price.",
  },
  {
    icon: Award,
    title: "Honest materials",
    body: "18K gold plating over hypoallergenic bases. No nickel, no lead, no shortcuts. Ever.",
  },
  {
    icon: Heart,
    title: "Made to be worn",
    body: "Jewelry that lives in your bag, on your skin, in your daily. We design for the morning rush, not the museum case.",
  },
  {
    icon: Globe,
    title: "Conscious, by default",
    body: "Recycled metals where possible, plastic-free packaging, and a 1% pledge to women's artisan collectives worldwide.",
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] bg-espresso-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-strk-img-id="about-hero"
            data-strk-img="[about-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1600"
            alt="Inside the Velmora atelier"
            loading="eager"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 overlay-top" />
        </div>
        <div className="relative z-10 mx-auto max-w-editorial px-5 md:px-10 min-h-[80vh] flex flex-col justify-end pb-16 md:pb-24">
          <p className="eyebrow text-gold-300">Our Story</p>
          <h1
            id="about-title"
            className="mt-5 font-serif text-cream-50 text-5xl md:text-7xl lg:text-[88px] leading-[1.02] text-balance max-w-3xl"
          >
            Fine jewelry, <span className="italic">without</span> the markup.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section ref={makeStrkImageLoaderRef()} className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <p className="eyebrow text-center">Est. 2019 · New York</p>
          <p
            id="about-lede"
            className="mt-8 font-serif text-2xl md:text-3xl text-espresso-800 leading-snug text-balance"
          >
            Velmora started in a Brooklyn studio with a single ear cuff and a
            simple belief — that fine gold jewelry shouldn't cost a season's
            rent to be worth keeping.
          </p>
          <p className="mt-6 text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
            Our founder, Lena, was a goldsmith by training and a self-described
            "patient shopper" by habit. She loved the work of fine houses and
            resented the price tag. So she and two partners built one of their
            own — sourcing the same hand-set crystals and 18K gold plating used
            by the legacy brands, working with the same finishing ateliers in
            Jaipur and Istanbul, and selling only what they could stand behind.
          </p>
          <p className="mt-4 text-ink-muted text-base md:text-lg leading-relaxed text-pretty">
            Seven years on, we're still small. We still finish every piece by
            hand. And we still pass the savings to you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">What We Stand For</p>
            <h2
              id="about-values-title"
              className="mt-3 font-serif text-4xl md:text-5xl text-espresso-800"
            >
              Four things, <span className="italic">always</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-start">
                <Icon className="h-6 w-6 text-gold-500" strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl text-espresso-800">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed text-pretty">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote pull */}
      <section className="bg-espresso-800 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
          <p className="font-serif italic text-3xl md:text-4xl text-cream-50 leading-snug text-balance">
            "We don't make disposable jewelry. We make the pieces you'll still
            be reaching for in ten years — at a price you can reach for today."
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-widest3 text-gold-300">
            — Lena Marsh, Founder
          </p>
        </div>
      </section>

      {/* Testimonials reuse */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">As Treasured By You</p>
            <h2
              id="about-reviews-title"
              className="mt-3 font-serif text-4xl md:text-5xl text-espresso-800"
            >
              Letters from the community
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="bg-cream-100 p-8 md:p-10 flex flex-col h-full"
              >
                <blockquote className="font-serif text-xl md:text-[22px] text-espresso-800 leading-snug text-pretty flex-1">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-espresso-800/10 text-sm text-espresso-800 font-medium">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-12 md:py-16 text-center">
        <Link to="/shop" className="btn-primary">
          Shop the Collection
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
        </Link>
      </section>

      <Newsletter />
    </>
  )
}
