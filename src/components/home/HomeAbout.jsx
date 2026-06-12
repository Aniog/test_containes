import { Link } from 'react-router-dom'

export default function HomeAbout() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-mist relative overflow-hidden">
            <img
              alt="Artitect workshop"
              id="about-image"
              data-strk-img-id="about-workshop-7a8e2d"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-ink text-paper p-8 max-w-[240px] hidden md:block">
            <div className="font-display text-5xl text-ember-soft leading-none mb-3">38</div>
            <div className="text-xs tracking-widest uppercase text-paper/70">
              Years of metal-folding craft
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">
            Our Atelier
          </p>
          <h2 id="about-title" className="font-display font-light text-ink text-4xl md:text-5xl leading-tight mb-8">
            Quietly built. <span className="italic text-ember">Plainly excellent.</span>
          </h2>
          <p id="about-desc" className="text-steel text-lg leading-relaxed mb-6">
            Artitect Machinery began in 1987 in a small atelier outside Manchester,
            with a single double folder and a stubborn belief that a folding
            machine could be both a working tool and a beautiful object.
          </p>
          <p className="text-steel leading-relaxed mb-10">
            Today our small team of engineers and metalsmiths still builds every
            machine to order. Each one is hand-finished, calibrated, and signed
            before it leaves the workshop. We make fewer machines, more carefully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-ink text-paper text-xs tracking-widest uppercase hover:bg-ember transition-colors duration-300"
            >
              Read our story
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-ink text-ink text-xs tracking-widest uppercase hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              Visit the workshop
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
