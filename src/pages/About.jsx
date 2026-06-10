import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Restraint', body: 'We design with what is essential. A simpler machine is a more reliable one.' },
  { title: 'Precision', body: 'Every fold is a measurement. Every measurement is a promise we keep.' },
  { title: 'Longevity', body: 'A folder is not a consumable. We build for the next generation of operators.' },
]

const milestones = [
  { year: '1998', label: 'Workshop founded in the industrial district' },
  { year: '2006', label: 'First DuoFold double folding machine shipped' },
  { year: '2014', label: 'Architectural-grade DuoElite line introduced' },
  { year: '2022', label: 'Quiet hydraulic platform reaches under 72 dB' },
]

const About = () => {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-bone border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-brand" />
            <span id="about-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">About</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <h1 id="about-title" className="lg:col-span-7 font-serif font-light text-5xl md:text-7xl leading-[1.05] text-ink">
              Patient engineering.
              <br />
              Quiet machines.
            </h1>
            <p id="about-subtitle" className="lg:col-span-5 text-graphite text-lg leading-relaxed">
              For nearly three decades, Artitect has built a single category of
              machine — folders — and refined them until each fold feels
              effortless to the operator.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="bg-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden border border-mist bg-bone">
              <img
                alt="Artitect Machinery workshop"
                data-strk-img-id="about-workshop-img"
                data-strk-img="[about-story-desc] [about-story-title] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-brand" />
              <span className="text-xs uppercase tracking-widest2 text-steel">Our story</span>
            </div>
            <h2 id="about-story-title" className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              We make folders. Only folders.
            </h2>
            <p id="about-story-desc" className="mt-6 text-graphite text-lg leading-relaxed">
              Artitect Machinery was founded by a small team of engineers and
              tradespeople who believed sheet metal folders had become noisy,
              over-featured, and difficult to maintain. We set out to design a
              quieter, more honest machine — one with fewer moving parts,
              better tolerances, and an interface an operator could trust within
              an hour of training.
            </p>
            <p className="mt-4 text-graphite text-lg leading-relaxed">
              Today our double folding machines, sheet metal folders, and metal
              folder machines are used by fabricators in 42 countries — from
              architectural cladding workshops to industrial production lines.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bone py-20 md:py-28 border-y border-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-brand" />
            <span className="text-xs uppercase tracking-widest2 text-steel">Principles</span>
          </div>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight max-w-3xl">
            Three ideas guide every machine we build.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-mist border border-mist">
            {values.map((v, i) => (
              <div key={v.title} className="bg-canvas p-10">
                <div className="font-serif text-amber-brand text-3xl">0{i + 1}</div>
                <h3 className="mt-4 font-serif text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-graphite leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-brand" />
              <span className="text-xs uppercase tracking-widest2 text-steel">Milestones</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight">
              A quiet, deliberate path.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="border-t border-mist">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-8 py-6 border-b border-mist">
                  <div className="font-serif text-3xl text-ink w-24 shrink-0">{m.year}</div>
                  <div className="text-graphite text-lg leading-relaxed pt-2">{m.label}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-canvas py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
            Visit our workshop.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-canvas text-canvas px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-canvas hover:text-ink transition-colors"
          >
            Arrange a tour
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
