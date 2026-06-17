import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const values = [
    {
      n: '01',
      title: 'Precision is a discipline',
      text: 'A folding machine is a measuring instrument that happens to bend metal. We design every joint, gear, and beam with that in mind.',
    },
    {
      n: '02',
      title: 'Quiet over loud',
      text: 'Our machines do their work without theatrics. No flashing displays, no rattling guards — just considered, repeatable performance.',
    },
    {
      n: '03',
      title: 'Built once, serviced forever',
      text: 'We support every machine we have ever shipped. Spare parts, retrofits, and recalibration, decades after the first fold.',
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="relative bg-ink text-paper overflow-hidden isolate">
        <div
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="about-hero-bg-3a8c"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">About Artitect</span>
          </div>
          <h1 id="about-hero-title" className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            A machinery house with the soul of an architecture studio.
          </h1>
          <p id="about-hero-subtitle" className="mt-7 text-lg text-silver max-w-2xl leading-relaxed">
            For four decades, Artitect Machinery has built sheet metal folders for
            people who measure their work in tenths of a millimetre — and who still
            believe industrial machines can be beautiful.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-mist border border-silver/40 overflow-hidden">
              <img
                alt="Artitect engineers at work in the factory"
                data-strk-img-id="about-portrait-img-9d22"
                data-strk-img="[about-story-text] [about-story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-ember" />
              <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Our Story</span>
            </div>
            <h2 id="about-story-title" className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight">
              Founded by fabricators, refined by engineers.
            </h2>
            <p id="about-story-text" className="mt-6 text-steel leading-relaxed text-lg">
              Artitect Machinery was founded in 1984 in a small workshop outside
              Dortmund, building reinforced folders for local sheet metal shops.
              Forty years later, we still build every machine in the same valley —
              now joined by control engineers, software designers, and metallurgists.
            </p>
            <p className="mt-5 text-steel leading-relaxed">
              Our customers fold roof panels, façade cladding, signage, kitchen
              equipment, HVAC ducts, and bespoke architectural metalwork. They
              come back to us not because we are the cheapest, but because our
              machines are the calmest place in their factory.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-ember" />
              <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Principles</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight">
              Three values, hand-tooled into every machine.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.n} className="bg-paper border border-silver/40 p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.3em] text-ember">{v.n}</div>
                <h3 className="mt-4 font-serif text-2xl text-ink font-medium">{v.title}</h3>
                <p className="mt-3 text-steel leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28 border-t border-silver/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-light leading-tight max-w-2xl">
            Ready to see an Artitect machine on your factory floor?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors w-fit"
          >
            Talk to an Engineer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
