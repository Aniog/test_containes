import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"

const VALUES = [
  {
    title: "Made by hand",
    body: "Every piece is finished by a small workshop of artisans — the same partners we've worked with since the beginning.",
  },
  {
    title: "Demi-fine, not disposable",
    body: "Sterling silver and 18K gold plating, built to wear daily. The opposite of fast jewelry.",
  },
  {
    title: "Hypoallergenic always",
    body: "Nickel-free, lead-free, and gentle on sensitive ears. We test every piece before it ships.",
  },
  {
    title: "Packaging worth keeping",
    body: "Velvet-lined boxes and suede pouches. The kind of packaging that becomes part of the ritual.",
  },
]

export default function About() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-espresso text-cream pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-200">Our Story</p>
              <h1
                id="about-title"
                className="display-serif text-[44px] sm:text-[64px] lg:text-[88px] mt-4 text-cream"
              >
                Quiet luxury, <span className="italic text-gold-200">made to last.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p
                id="about-quote"
                className="text-[16px] sm:text-[17px] text-cream/80 font-light leading-relaxed"
              >
                Velmora began in 2019 with a single piece of jewelry — a pair of
                gold huggies we couldn't find anywhere at a price that felt
                honest. Six years later, we're still making the same pieces, in
                the same workshops, for the same kind of person.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="bg-cream py-20 sm:py-28">
        <div className="container-editorial space-y-24 sm:space-y-32">
          {/* Big image */}
          <div className="reveal relative aspect-[16/9] overflow-hidden bg-taupe-100">
            <img
              data-strk-img-id="about-image-main-1a2b"
              data-strk-img="[about-title] [velmora fine jewelry studio]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="The Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-[64px] sm:text-[80px] text-gold-500/30 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-[26px] sm:text-[30px] text-espresso mt-3">
                  {v.title}
                </h3>
                <p className="mt-4 text-[15px] text-mocha-500 font-light leading-relaxed max-w-md">
                  {v.body}
                </p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal text-center pt-8">
            <p className="font-serif text-[28px] sm:text-[36px] text-espresso italic max-w-2xl mx-auto leading-snug">
              "We don't do trends. We do treasure."
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Shop the Collection
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
