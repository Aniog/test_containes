import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react"

export default function About() {
  return (
    <>
      <header className="relative isolate overflow-hidden bg-espresso pt-32 md:pt-40">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-8a1b2c"
          data-strk-bg="[about-hero-title] [about-hero-tagline] goldsmith workshop hands jewelry making"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso/55 to-espresso/85" />
        <div className="relative z-10 container-velmora pb-20 md:pb-28">
          <div className="max-w-2xl">
            <p
              id="about-hero-tagline"
              className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-champagne-200"
            >
              Our Story
            </p>
            <h1
              id="about-hero-title"
              className="editorial-h1 mt-5"
            >
              Made in small batches.{" "}
              <span className="italic text-champagne-200">Worn for years.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] text-ivory-300/80">
              Velmora started at a single workbench in 2024. Today we work with
              a small team of jewelers, a handful of trusted ateliers, and a
              community of wearers who treat their jewelry like a daily ritual.
            </p>
          </div>
        </div>
      </header>

      <section className="container-velmora py-20 md:py-28">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">What we believe</p>
            <h2 className="editorial-h2 mt-3">
              Fine jewelry should be{" "}
              <span className="italic text-champagne-500">wearable</span>.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-stone-300">
              <p>
                We started Velmora after a decade of admiring beautiful jewelry
                that sat in boxes, unworn — because the wearer was afraid of
                damaging it. We thought: what if it didn't have to be that
                way?
              </p>
              <p>
                Every piece we make is 18K gold plated, hypoallergenic, and
                hand-finished to a standard that holds up to daily life. No
                markups for the brand name. No seasonal drops designed to be
                replaced. Just demi-fine gold, priced honestly.
              </p>
              <p>
                We're a small team, intentionally. We answer our own DMs, pack
                our own orders on slow afternoons, and read every review.
                Thanks for being here.
              </p>
            </div>
            <Link to="/shop" className="btn-primary mt-8">
              Shop the Collection <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { id: "about-img-1-2a", q: "gold jewelry on linen workshop warm light" },
              { id: "about-img-2-3b", q: "hands holding gold jewelry closeup" },
              { id: "about-img-3-4c", q: "gold pieces in artisan studio" },
              { id: "about-img-4-5d", q: "goldsmith working on jewelry bench" },
            ].map((img) => (
              <div
                key={img.id}
                className="relative aspect-[4/5] overflow-hidden bg-ivory"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  data-strk-img-id={img.id}
                  data-strk-img={`[about-hero-title] [about-hero-tagline] ${img.q}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 py-20 md:py-28">
        <div className="container-velmora">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our promise</p>
            <h2 className="editorial-h2 mt-3">
              What you'll always get from Velmora
            </h2>
          </div>
          <ul className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "18K Gold Plated",
                body: "A real, lasting plating — not a flash finish. Holds its color for years of daily wear.",
              },
              {
                icon: ShieldCheck,
                title: "Hypoallergenic",
                body: "Brass or sterling silver cores. Lead-free, nickel-conscious, skin-friendly.",
              },
              {
                icon: Truck,
                title: "Free Shipping",
                body: "Free worldwide shipping on orders over $80, packed in our signature ivory box.",
              },
              {
                icon: RefreshCw,
                title: "30-Day Returns",
                body: "Send it back within 30 days, no questions asked. We cover the return label.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <li key={title} className="text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-sand-300 text-champagne-500">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-espresso">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-300">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
