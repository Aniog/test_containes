import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeAbout = () => {
  return (
    <section className="py-20 md:py-28 bg-fog">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 md:grid-cols-12 items-center">
        <div className="md:col-span-6 relative">
          <div className="aspect-[3/4] w-full overflow-hidden border border-mist">
            <img
              alt="ARTITECT workshop interior"
              className="w-full h-full object-cover"
              data-strk-img-id="about-shop-d22f10"
              data-strk-img="[about-subtitle] [about-title] industrial workshop precision engineering"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3Crect width='3' height='4' fill='%23E5E7EB'/%3E%3C/svg%3E"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-6 -right-6 bg-paper border border-mist px-6 py-5 items-center gap-4">
            <p className="font-serif text-4xl text-accent">30</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-graphite leading-tight">
              Years of folding
              <br /> precision since 1995
            </p>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              About ARTITECT
            </span>
          </div>
          <h2 id="about-title" className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink">
            Founded by engineers,
            <br />
            <span className="italic text-accent">refined by craftsmen.</span>
          </h2>
          <p id="about-subtitle" className="mt-8 text-graphite leading-relaxed">
            ARTITECT MACHINERY was founded in 1995 by a small group of mechanical engineers
            who believed industrial machinery could be beautiful, intuitive, and built to last.
            Three decades later, our sheet metal folding machines are running in over forty
            countries — making everything from HVAC ducting to award-winning architectural
            façades.
          </p>
          <p className="mt-5 text-graphite leading-relaxed">
            We remain privately held, deliberately small, and proudly answerable only to the
            people who use our machines every day.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Read our story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
