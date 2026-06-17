export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">About ARTITECT</p>
          <h2
            id="about-title"
            className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink"
          >
            A workshop philosophy, <br />
            built into every machine.
          </h2>
          <div className="w-12 h-px bg-accent mt-6 mb-8" />

          <div className="space-y-5 text-steel leading-relaxed text-base md:text-lg">
            <p id="about-desc">
              ARTITECT MACHINERY was founded on a simple belief: a folding machine
              should disappear into the work. No fighting the beam. No second guesses
              on the angle. Just clean, repeatable bends — every shift, every year.
            </p>
            <p>
              From our manufacturing floor in Bursa, we craft double folders and sheet
              metal folders for fabricators in over forty countries. Each unit is
              assembled, calibrated, and signed off by the engineer who built it.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-mist pt-8">
            <div>
              <div className="font-display text-3xl text-ink">1998</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-steel">Founded</div>
            </div>
            <div>
              <div className="font-display text-3xl text-ink">2,400+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-steel">Machines built</div>
            </div>
            <div>
              <div className="font-display text-3xl text-ink">40</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-steel">Countries</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2">
          <div className="relative aspect-[4/5] bg-bone overflow-hidden">
            <img
              alt="ARTITECT manufacturing floor"
              data-strk-img-id="about-floor-img-3e8b"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 hidden md:block w-32 h-32 border border-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
