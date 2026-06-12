import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
        <div className="md:col-span-6 lg:col-span-6">
          <p
            id="hero-eyebrow"
            className="text-xs uppercase tracking-[0.2em] text-steel mb-6"
          >
            Sheet metal folding machines · Since 1998
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-ink"
          >
            Folding metal,<br />
            <span className="italic text-accent">with intent.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-base md:text-lg text-steel max-w-xl leading-relaxed"
          >
            Artitect Machinery designs and builds double folding machines and
            sheet metal folders that turn flat steel into architecture, ducting
            and panels — bend after bend, to the same exact tolerance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3.5 text-sm tracking-wide hover:bg-graphite transition"
            >
              Explore the machines
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3.5 text-sm tracking-wide hover:bg-ink hover:text-bone transition"
            >
              Talk to an engineer
            </Link>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-6 relative">
          <div className="aspect-[4/5] w-full bg-graphite overflow-hidden border border-ink">
            <img
              alt="Sheet metal folding machine in workshop"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-folder-machine-3a91b2"
              data-strk-img="[hero-subtitle] [hero-title] sheet metal folding machine workshop precision industrial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="hidden md:block absolute -left-10 bottom-10 w-56 bg-paper border border-mist/60 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-steel mb-2">
              Repeatability
            </p>
            <p className="font-serif text-3xl text-ink">±0.05 mm</p>
            <p className="text-xs text-steel mt-1">Across 3 m bed</p>
          </div>
        </div>
      </div>

      <div className="border-t border-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <Stat label="Machines installed" value="2,400+" />
          <Stat label="Countries served" value="38" />
          <Stat label="Years engineering" value="27" />
          <Stat label="Avg. uptime" value="99.2%" />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-serif text-2xl md:text-3xl text-ink">{value}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-steel mt-1">
        {label}
      </p>
    </div>
  )
}
