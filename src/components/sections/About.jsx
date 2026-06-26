import { stats } from '@/data/catalog'

export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              25 Years of Folding Machine Expertise
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                ARTITECT MACHINERY has spent over two decades engineering
                sheet-metal folding equipment for fabricators who cannot afford
                downtime. What began as a specialist workshop is today a global
                supplier of double folders and metal folding machines.
              </p>
              <p>
                Our machines are built in-house from welded steel frames through
                to final calibration, giving us complete control over quality.
                Every folder ships with CNC angle control and is backed by a
                worldwide service network.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id}>
                  <div className="text-3xl font-extrabold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <img
                alt="ARTITECT MACHINERY factory floor"
                className="h-full w-full object-cover"
                data-strk-img-id="about-factory-2b8c1d"
                data-strk-img="[about-caption] [about-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <p id="about-heading" className="sr-only">
              ARTITECT MACHINERY factory floor with sheet metal folding machines
            </p>
            <p id="about-caption" className="sr-only">
              industrial manufacturing facility assembling metal folding machines
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
