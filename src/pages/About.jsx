import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '1986', title: 'Founded in Modena', desc: 'A small team of engineers and architects sets up shop with a single press brake and a sketch pad.' },
  { year: '1994', title: 'First double folder', desc: 'The Atlas series is born — folding without flipping, a quiet revolution in our part of the trade.' },
  { year: '2006', title: 'CNC at the core', desc: 'Every machine ships with our own touch-driven CNC, designed by operators, for operators.' },
  { year: '2018', title: 'Studio line', desc: 'The MF range brings architectural precision to small workshops and prototype studios.' },
  { year: '2024', title: 'Forty-two countries', desc: 'Artitect machines now serve fabricators across six continents — and we still answer the phone.' },
]

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-paper">
      {/* Header */}
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p
              id="about-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-bronze"
            >
              About ARTITECT
            </p>
            <h1
              id="about-title"
              className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink max-w-4xl"
            >
              We build folding machines the way an architect designs a building.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p
              id="about-subtitle"
              className="text-base md:text-lg text-steel leading-relaxed"
            >
              Slowly. Deliberately. With every line, every edge, and every
              tolerance considered before it is committed to steel.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] bg-mist overflow-hidden">
              <img
                alt="Artitect engineering"
                data-strk-img-id="about-story-img-c7e418"
                data-strk-img="[about-story-desc] [about-story-title] [about-title] precision metal craftsmanship engineering studio"
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze">
              Our story
            </p>
            <h2
              id="about-story-title"
              className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink"
            >
              A machine should disappear into its work.
            </h2>
            <p
              id="about-story-desc"
              className="mt-6 text-base md:text-lg text-steel leading-relaxed"
            >
              That is the brief our founder gave the first Artitect team in
              1986, and it is still the brief today. Our folding machines are
              not the loudest in the room. They are the ones the operator
              quietly trusts at the end of a long shift — the ones whose bends
              are still square at midnight, whose interfaces still make sense
              after twenty years.
            </p>
            <p className="mt-4 text-base md:text-lg text-steel leading-relaxed">
              We design for the people who actually fold metal: the
              architect's fabricator, the family-run sheet-metal shop, the
              prototyping studio that needs a single beautiful bend at three
              in the morning. Everything else follows from there.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-mist border-y border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            Milestones
          </p>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink max-w-2xl">
            Four decades of folding.
          </h2>

          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-line border border-line">
            {milestones.map((m) => (
              <li key={m.year} className="bg-paper p-8">
                <p className="font-serif text-3xl text-bronze">{m.year}</p>
                <h3 className="mt-3 text-base font-medium text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {m.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-ink max-w-3xl mx-auto">
            Come and visit the workshop.
          </h2>
          <p className="mt-6 text-base md:text-lg text-steel max-w-2xl mx-auto leading-relaxed">
            We host fabricators, architects, and engineers in Modena throughout
            the year. Tell us when you would like to come.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-ink text-white hover:bg-bronze transition-colors px-6 py-3.5 text-sm font-medium tracking-wide"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
