import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function HomeHero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink text-cream"
    >
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="home-hero-bg-a3f9c1"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/60 to-ink/90"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-10 items-end min-h-[640px] py-32">
        <div className="lg:col-span-8">
          <p className="eyebrow text-gold">Sheet Metal Folding Machines</p>
          <h1
            id="home-hero-title"
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-cream"
          >
            Precision folding,
            <br />
            <span className="text-gold italic font-normal">engineered</span> to last.
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-8 max-w-xl text-base md:text-lg text-cream/75 leading-relaxed"
          >
            ARTITECT MACHINERY builds double folding machines, double folders, and a
            complete range of sheet metal folders for fabricators who measure
            success in thousandths of a millimeter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="btn bg-cream text-ink hover:bg-gold hover:text-ink">
              Explore the lineup
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn border border-cream/30 text-cream hover:bg-cream hover:text-ink">
              Request a quote
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <dl className="grid grid-cols-2 gap-8 border-t border-cream/15 pt-8">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-eyebrow text-cream/50">Years</dt>
              <dd className="mt-2 font-display text-4xl text-cream">25+</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-eyebrow text-cream/50">Installs</dt>
              <dd className="mt-2 font-display text-4xl text-cream">3,200</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-eyebrow text-cream/50">Countries</dt>
              <dd className="mt-2 font-display text-4xl text-cream">48</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-eyebrow text-cream/50">Warranty</dt>
              <dd className="mt-2 font-display text-4xl text-cream">24<span className="text-base align-top text-cream/50 ml-1">mo</span></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
