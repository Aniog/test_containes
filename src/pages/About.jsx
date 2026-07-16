import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Gem, ShieldCheck, Leaf, Heart } from "lucide-react"

const values = [
  { icon: Gem, title: "18K Gold Plated", text: "A thick layer of 18K gold over sterling silver, built to last." },
  { icon: ShieldCheck, title: "Hypoallergenic", text: "Nickel-free and kind to sensitive skin, tested for daily wear." },
  { icon: Leaf, title: "Small Batches", text: "Made in limited runs to reduce waste and keep quality high." },
  { icon: Heart, title: "Made to Gift", text: "Every order arrives in signature Velmora packaging, ready to give." },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div className="pt-20 md:pt-24">
      <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-03"
          data-strk-bg="[about-intro] [about-title] gold jewelry artisan studio warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-canvas/80">Our Story</p>
          <h1 id="about-title" className="mt-4 font-serif text-5xl text-canvas md:text-6xl">
            Quietly Made,
            <br />
            Loudly Loved
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <p id="about-intro" className="font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
          Velmora was founded on a simple idea: that luxury should feel
          personal, not performative. We design demi-fine gold jewelry for the
          moments you reach for it every day.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-stone md:text-[15px]">
          From our studio to your jewelry box, every piece is hand-finished in
          18K gold plating over sterling silver. We work in small batches with
          materials chosen for their longevity and their kindness to skin —
          because the pieces you live in deserve to be made with care.
        </p>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                <v.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
