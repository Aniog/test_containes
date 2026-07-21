import React from "react"
import { Link } from "react-router-dom"
import { StockImage } from "@/components/StockImage"

const VALUES = [
  {
    title: "Honest Materials",
    text: "A 2.5-micron layer of 18k gold over recycled brass, five times thicker than standard plating, priced honestly.",
  },
  {
    title: "Made for Daily Life",
    text: "Hypoallergenic, nickel-free and tarnish-resistant. Designed to be slept in, showered around, and lived in.",
  },
  {
    title: "Considered, Not Seasonal",
    text: "We release small edits a few times a year. No churn, no trend-chasing, only pieces meant to stay.",
  },
]

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative">
        <div className="relative flex min-h-[62vh] items-end bg-ink">
          <StockImage
            imgId="about-hero-2f7e"
            query="warm atelier scene artisan hands holding delicate gold necklace soft window light editorial"
            ratio="16x9"
            width={1600}
            alt="Inside the Velmora atelier"
            eager
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D9C39A]">
              Our Story
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-[#F7F1E5] md:text-6xl">
              Jewelry for the everyday <span className="italic text-[#E4CD9E]">heirloom</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <div className="space-y-6 font-serif text-xl font-light leading-relaxed text-foreground md:text-2xl">
          <p>
            Velmora began with a drawer full of faded, green-tinted &ldquo;gold&rdquo; jewelry &mdash; and the belief
            that women deserved better between fast fashion and fine.
          </p>
          <p>
            We spent two years perfecting a demi-fine standard: 18k gold plated five times thicker
            than the industry norm, over recycled brass, finished by hand in small batches. Every
            piece is hypoallergenic, nickel-free, and priced between $30 and $120.
          </p>
          <p>
            The result is jewelry that behaves like an heirloom, worn daily, gifted often, and
            kept for years.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-surface/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-center font-serif text-3xl font-light text-foreground md:text-4xl">
            What We <span className="italic text-accent-deep">Stand For</span>
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v, i) => (
              <div key={v.title} className="border-t border-line pt-7">
                <p className="font-serif text-lg italic text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[13px] font-medium uppercase tracking-[0.24em] text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="inline-block bg-accent px-9 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground transition-colors duration-300 hover:bg-accent-deep"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
