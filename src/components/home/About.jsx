import { Check } from 'lucide-react'

const HIGHLIGHTS = [
  'Stress-relieved, machined-steel bridges on every machine',
  'Closed-loop angle feedback for repeatable production',
  'CNC controls with offline programming and job libraries',
  'Direct factory, regional service depots and 24/7 phone support',
]

export default function About() {
  return (
    <section className="bg-ink-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">About the brand</p>
            <h2 className="mt-4 section-title">
              A machine-tool maker
              <br />
              that thinks like a fabricator.
            </h2>
            <div className="mt-6 h-px w-16 bg-copper-500" aria-hidden="true" />
            <p className="mt-8 lead text-steel-700">
              ARTITECT MACHINERY was founded by two tool-and-die men who
              were tired of replacing forming equipment every decade. They
              set out to build folding machinery with the same standards
              they held for the dies they made: heavy frames, simple
              controls, and an obsessive respect for accuracy.
            </p>
            <p className="mt-5 text-base text-steel-600 leading-relaxed">
              Three decades later we ship to forty-one countries from a
              single vertically integrated plant. Every bridge is stress
              relieved, every way is hand-scraped, and every control
              panel leaves the floor with a fabricator's name on the
              job library.
            </p>
          </div>

          <div className="lg:col-span-7">
            <figure className="relative aspect-[4/3] rounded-md overflow-hidden bg-ink-900 shadow-lift">
              <img
                alt="ARTITECT engineering team inspecting a folding machine bridge on the factory floor"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="about-bridge-7c1f33"
                data-strk-img="[about-eyebrow] [about-caption] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p
                  id="about-caption"
                  className="text-xs uppercase tracking-widest-2 text-copper-500"
                >
                  Inside the plant
                </p>
                <p
                  id="about-title"
                  className="mt-2 font-display text-2xl text-ink-50"
                >
                  Hand-scraped ways, machined in-house.
                </p>
              </figcaption>
            </figure>

            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-steel-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-copper-100 text-copper-700 shrink-0"
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
