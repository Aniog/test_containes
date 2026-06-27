import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"
import { Link } from "react-router-dom"

const VALUES = [
  {
    id: "value-1",
    title: "Made by hand",
    body: "Every Velmora piece is finished, set, and inspected by hand in our atelier.",
  },
  {
    id: "value-2",
    title: "Honest materials",
    body: "18K gold plating over hypoallergenic brass or sterling silver — never mystery metal.",
  },
  {
    id: "value-3",
    title: "Worn-in, not worn-out",
    body: "Designed for daily rituals, with a tarnish-resistant coating that keeps its finish.",
  },
  {
    id: "value-4",
    title: "Conscious packaging",
    body: "Recyclable, plastic-free boxes printed on FSC-certified paper. Reusable pouches included.",
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24 text-center">
          <span className="eyebrow">Our Story</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
            Quietly made.<br />Meant to be lived in.
          </h1>
          <p className="mt-6 text-sm md:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Velmora is a small, independent demi-fine jewelry house founded in 2021.
            We make 18K gold-plated jewelry that looks like an heirloom, costs like a
            gift, and wears like an everyday companion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden bg-espresso-deep">
              <img
                data-strk-img-id="about-portrait"
                data-strk-img="founder portrait woman atelier jewelry warm natural light"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                alt="Velmora founder in the atelier"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
              It started with one pair of huggies.
            </h2>
            <div className="mt-6 space-y-4 text-base text-espresso-soft leading-relaxed">
              <p>
                The first Velmora piece was a single pair of chunky gold huggies, made
                on a kitchen table in Lisbon for a friend who couldn’t find jewelry
                that was both warm and well-made under $50.
              </p>
              <p>
                Four years later, we ship to 42 countries and work with a small
                atelier of seven artisans. We still finish every piece by hand.
              </p>
              <p>
                We believe the jewelry you wear closest to your skin should be made
                with the same care as the jewelry you’ll pass down.
              </p>
            </div>
            <Link to="/shop" className="btn btn-primary mt-9 inline-flex">
              Shop the Collection
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-soft border-y border-hairline py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">What we believe</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-espresso tracking-tight">
              Our Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {VALUES.map((v, idx) => (
              <Reveal key={v.id} delay={idx * 80}>
                <div className="h-full bg-white border border-hairline p-7 md:p-8">
                  <span className="font-serif text-3xl text-gold-deep">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-espresso">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-espresso-soft leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}