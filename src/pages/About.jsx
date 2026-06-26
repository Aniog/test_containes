import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Hammer, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Compass,
    title: 'Precision as principle',
    text: 'Every machine is calibrated against a master gauge before it leaves our floor. No exceptions.',
  },
  {
    icon: Hammer,
    title: 'Built like architecture',
    text: 'Welded, stress-relieved, and machined as one — our frames are designed for decades, not warranties.',
  },
  {
    icon: Heart,
    title: 'Served like family',
    text: 'Remote diagnostics, on-site engineers, and lifetime spare parts support — anywhere you fabricate.',
  },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p
              id="about-hero-eyebrow"
              className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold"
            >
              About ARTITECT
            </p>
            <h1
              id="about-hero-title"
              className="mt-4 font-serif text-4xl md:text-6xl font-medium text-slate-900 leading-[1.05]"
            >
              Engineering the<br />
              <span className="italic text-slate-700">architecture of folding.</span>
            </h1>
            <p
              id="about-hero-subtitle"
              className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              ARTITECT MACHINERY was founded in 2003 by a small team of mechanical
              engineers who believed sheet metal folders deserved the same care
              given to fine architecture. Two decades later, that belief still
              shapes every machine we ship.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 bg-amber-500/10 rounded-3xl -rotate-1" aria-hidden />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 ring-1 ring-slate-900/5">
                <img
                  alt="ARTITECT machinery workshop"
                  data-strk-img-id="about-hero-img-7d20a4"
                  data-strk-img="[about-hero-subtitle] [about-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">Our Story</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug">
              From a single workshop, to forty countries.
            </h2>
          </div>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              We started with a single double folder and a stubborn idea — that
              precision is a discipline, not a luxury. Our first customers were
              small fabricators who wanted bends sharp enough to leave a shadow
              line, on machines quiet enough to think next to.
            </p>
            <p>
              Today, ARTITECT machines fold panels for HVAC plants, electrical
              enclosures, architectural cladding, kitchen interiors, and a long
              list of industries we never planned for. What hasn't changed is the
              workshop discipline behind every machine.
            </p>
            <p>
              We still build in-house. We still test every machine before it ships.
              And we still answer the phone when our customers call.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">What We Stand For</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug">
              Three principles, behind every fold.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-slate-200 p-7 hover:shadow-sm transition"
              >
                <div className="h-11 w-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">By the numbers</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium leading-snug">
              Two decades of folding, in figures.
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-amber-400 transition"
            >
              See the machines
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { v: '22+', l: 'Years building folders' },
              { v: '40', l: 'Countries served' },
              { v: '8,500', l: 'Machines in operation' },
              { v: '±0.05mm', l: 'Standard repeatability' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl md:text-5xl text-white">{s.v}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
