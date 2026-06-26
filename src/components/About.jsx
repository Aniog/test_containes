export default function About() {
  return (
    <section id="about" className="bg-stone-50 py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <p
            id="about-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-600 mb-4"
          >
            About ARTITECT
          </p>
          <h2
            id="about-title"
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05]"
          >
            We build folders the way our customers build buildings — patiently,
            and to last.
          </h2>
          <div className="mt-6 space-y-5 text-lg text-neutral-600 leading-relaxed">
            <p id="about-p1">
              ARTITECT Machinery began in a single workshop bay, repairing
              folders other manufacturers had given up on. After two decades of
              servicing the trade, we knew exactly which compromises were
              quietly killing accuracy on the floor — and which details made a
              folder last for thirty years.
            </p>
            <p id="about-p2">
              Today we design and assemble every double folder, sheet metal
              folder, and long-bed folding machine ourselves. Frames are
              welded, normalised, and machined in-house. CNC controls are
              calibrated by the same engineer who will train your operators.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Years in trade
              </dt>
              <dd className="font-serif text-3xl md:text-4xl text-neutral-900 mt-2">
                22
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Machines installed
              </dt>
              <dd className="font-serif text-3xl md:text-4xl text-neutral-900 mt-2">
                640+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Countries served
              </dt>
              <dd className="font-serif text-3xl md:text-4xl text-neutral-900 mt-2">
                34
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-neutral-500">
                Frame guarantee
              </dt>
              <dd className="font-serif text-3xl md:text-4xl text-neutral-900 mt-2">
                5 yrs
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <figure className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img
              alt="Inside the ARTITECT workshop"
              data-strk-img-id="about-workshop-2a8c91"
              data-strk-img="[about-p1] [about-title] [about-eyebrow]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-auto"
            />
            <figcaption className="px-6 py-5 border-t border-neutral-200">
              <p
                id="about-figcaption"
                className="text-sm text-neutral-500 leading-relaxed"
              >
                Final assembly bay — every machine spends two weeks here being
                calibrated, run, and finished by hand before it ships.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
