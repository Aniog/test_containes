import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-accent" />
            <p id="hero-eyebrow" className="text-xs uppercase tracking-[0.35em] text-accent">
              Sheet Metal Folding · Precision Machinery
            </p>
          </div>
          <h1
            id="hero-title"
            className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-graphite leading-[1.05] tracking-tight"
          >
            The fold,<br />
            <span className="italic text-accent">perfected.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-base md:text-lg text-muted-ink max-w-xl leading-relaxed"
          >
            ARTITECT Machinery builds double folding machines and sheet metal folders
            that turn raw steel, aluminum and zinc into architectural precision —
            cycle after cycle, micron after micron.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-graphite text-bone px-7 py-4 text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-steel transition-colors"
            >
              Explore Machines
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-graphite text-graphite px-7 py-4 text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-graphite hover:text-bone transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="font-serif text-3xl text-graphite">±0.1mm</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-ink">Bend accuracy</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-graphite">4m</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-ink">Max sheet length</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-graphite">30+ yrs</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-ink">Folding heritage</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-cloud">
            <img
              alt="Precision sheet metal folding machine"
              data-strk-img-id="home-hero-folder-a7f2c1"
              data-strk-img="[hero-subtitle] [hero-title] industrial sheet metal folding machine"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-graphite text-bone px-8 py-6 max-w-[260px]">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Model Spotlight</p>
            <p className="mt-2 font-serif text-xl leading-tight">Artitect DF-4000 Double Folder</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5" />
    </section>
  )
}

export default HomeHero
