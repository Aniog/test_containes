import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const milestones = [
  { year: '1998', text: 'Founded in Brescia by three former tooling engineers.' },
  { year: '2006', text: 'First in-house CNC double folder ships to a Swiss cladding contractor.' },
  { year: '2014', text: 'Open new 6,500 m² assembly hall and calibration lab.' },
  { year: '2021', text: 'Launch of the AD-720 platform — our most refined machine to date.' },
  { year: '2026', text: 'Serving fabricators in 38 countries.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Intro */}
      <section className="border-b border-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p
              id="about-eyebrow"
              className="text-xs uppercase tracking-[0.2em] text-steel mb-5"
            >
              About Artitect Machinery
            </p>
            <h1
              id="about-title"
              className="font-serif text-4xl md:text-6xl font-medium text-ink leading-[1.05]"
            >
              We build the machines<br />
              that <span className="italic text-accent">build the buildings.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p
              id="about-subtitle"
              className="text-base md:text-lg text-steel leading-relaxed"
            >
              For nearly three decades, we&apos;ve done one thing: design the
              quietest, most precise sheet metal folders in Europe. We do it
              for fabricators who measure their craft in tenths of a
              millimeter.
            </p>
          </div>
        </div>
      </section>

      {/* Image + values */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-mist/60 bg-graphite">
              <img
                alt="Artitect Machinery assembly hall"
                className="w-full h-full object-cover"
                data-strk-img-id="about-hall-bf21a0"
                data-strk-img="[about-title] [about-subtitle] machinery assembly factory hall industrial Italy"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="space-y-10">
              <Value
                title="Engineered, not assembled."
                body="Frames, beams, control software — designed in-house. We don&apos;t bolt other people&apos;s parts together; we draw, cast and machine our own."
              />
              <Value
                title="Calibrated by hand."
                body="Every machine is dialled in by a senior technician on our calibration floor before it leaves the building. No exceptions."
              />
              <Value
                title="Supported for life."
                body="Spares for machines we built in 2002 still ship from stock. Our oldest customer&apos;s folder is 21 years old and still in daily production."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-mist mb-5">
            The story so far
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight max-w-2xl">
            Twenty-seven years, one workshop.
          </h2>

          <div className="mt-14 border-t border-graphite">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid grid-cols-12 gap-6 py-8 border-b border-graphite"
              >
                <div className="col-span-3 md:col-span-2 font-serif text-2xl md:text-3xl text-accent">
                  {m.year}
                </div>
                <div className="col-span-9 md:col-span-10 text-base text-mist leading-relaxed pt-2">
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-ink px-6 py-3 text-sm tracking-wide hover:bg-bone transition"
            >
              Visit our workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Value({ title, body }) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <p className="mt-2 text-steel leading-relaxed">{body}</p>
    </div>
  )
}
