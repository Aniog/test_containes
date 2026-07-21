import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"


export default function About() {
  const ref = useRef(null)
  useEffect(() => {
      if (!ref.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-7a8b9c"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-ivory/80 text-[11px] uppercase tracking-widest2 mb-4">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-ivory text-5xl md:text-7xl font-light leading-tight">
            Made to be lived in
          </h1>
          <p id="about-hero-subtitle" className="mt-5 text-ivory/85 max-w-lg leading-relaxed">
            Velmora is a demi-fine jewelry studio built on a simple idea: gold
            should be worn, not waited for.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Est. 2021</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-snug">
            We design warm, considered gold jewelry for the everyday — crafted in
            small batches and finished by hand.
          </h2>
          <p className="mt-8 text-stone leading-relaxed">
            Every Velmora piece begins as a sketch in our studio and ends in your
            hands, finished in 18K gold plate over brass. We test for
            hypoallergenic wear and tarnish resistance, and we ship in recyclable
            packaging — because fine shouldn't mean wasteful.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            By selling directly to you, we keep our prices honest and our quality
            high. No middlemen, no markups for markups' sake.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium px-9 py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { t: "18K Gold Plated", d: "Warm, durable gold over brass, finished by hand." },
            { t: "Hypoallergenic", d: "Nickel and lead free — safe for sensitive skin." },
            { t: "Made in Small Batches", d: "Considered production, less waste, better quality." },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-2xl text-ink mb-3">{f.t}</h3>
              <p className="text-stone leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
