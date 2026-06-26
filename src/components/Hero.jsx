import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-stone-50 overflow-hidden"
    >
      {/* faint corner accent */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <p
            id="hero-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-600 mb-6"
          >
            Precision Sheet Metal Folding · Est. Workshop
          </p>

          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-neutral-900 leading-[1.02]"
          >
            Fold metal with{' '}
            <span className="italic text-amber-600">architectural</span> precision.
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            ARTITECT Machinery designs and manufactures double folding machines,
            sheet metal folders, and metal folding systems for fabricators who
            refuse to compromise on the line.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-amber-500 hover:text-neutral-900 transition-colors"
            >
              Explore the machines
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-amber-600 transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              See the process
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Folding length
              </dt>
              <dd className="font-serif text-2xl md:text-3xl text-neutral-900 mt-1">
                up to 4 m
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Sheet thickness
              </dt>
              <dd className="font-serif text-2xl md:text-3xl text-neutral-900 mt-1">
                0.4 – 2.5 mm
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Fold accuracy
              </dt>
              <dd className="font-serif text-2xl md:text-3xl text-neutral-900 mt-1">
                ± 0.05°
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                alt="Sheet metal folding machine close up"
                data-strk-img-id="hero-machine-9f2c1a"
                data-strk-img="[hero-subtitle] [hero-title] [hero-eyebrow]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* floating tag */}
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-white border border-neutral-200 rounded-2xl px-5 py-4 shadow-sm max-w-[220px]">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-medium">
                Flagship Model
              </p>
              <p
                id="hero-tag-model"
                className="font-serif text-xl text-neutral-900 mt-1"
              >
                AF-3200 Double Folder
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                CNC dual-beam, 3.2 m bed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-200" aria-hidden />
    </section>
  )
}
