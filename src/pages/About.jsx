import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    title: 'Mechanical honesty',
    body: 'Every machine is built on a stress-relieved frame, calibrated by hand and signed off by name. No shortcuts in the parts you cannot see.',
  },
  {
    title: 'Operator-first design',
    body: 'Controls are designed in the workshop, with operators, not in a marketing brief. The result is equipment that feels obvious to use.',
  },
  {
    title: 'A long relationship',
    body: 'We sell folders that we expect to service for decades. Our spare parts and engineering support are not optional add-ons.',
  },
]

const timeline = [
  { year: '1986', title: 'Founded', body: 'Established as a small workshop manufacturing manual folders for local fabricators.' },
  { year: '1998', title: 'First double folder', body: 'Launched the original A-series, introducing twin-beam folding to mid-size workshops.' },
  { year: '2011', title: 'CNC platform', body: 'Adopted a fully digital back-gauge and control platform across the range.' },
  { year: '2024', title: 'Global service', body: 'Opened regional service hubs across Europe, North America and Asia.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
              About ARTITECT
            </span>
            <h1
              id="about-title"
              className="mt-5 font-serif text-4xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight"
            >
              A workshop of engineers, building machines for workshops of engineers.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p
              id="about-intro"
              className="text-base md:text-lg text-stone-600 leading-relaxed"
            >
              ARTITECT Machinery is an independent manufacturer of sheet metal
              folding equipment. We are not the largest builder of folders, and
              we are not trying to be. We make a small range, very well, for
              fabricators who can tell the difference.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[3/4] overflow-hidden border border-stone-200 bg-stone-100">
              <img
                alt="ARTITECT workshop floor with sheet metal folders in assembly"
                className="w-full h-full object-cover"
                data-strk-img-id="about-workshop-photo-2f4d8a"
                data-strk-img="[about-intro] [about-title] precision machine workshop assembly floor"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
              Our values
            </span>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-stone-900 leading-tight tracking-tight">
              Three principles, refined over four decades.
            </h2>
            <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
              {values.map((v) => (
                <div key={v.title} className="py-7">
                  <h3 className="font-serif text-xl text-stone-900">{v.title}</h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-xl">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
              Milestones
            </span>
            <h2 className="mt-5 font-serif text-3xl md:text-5xl text-stone-900 leading-tight tracking-tight">
              A quiet history of getting it right.
            </h2>
          </div>
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((t) => (
              <li key={t.year} className="bg-white border border-stone-200 p-8">
                <div className="font-serif text-3xl text-amber-800">{t.year}</div>
                <h3 className="mt-4 font-serif text-xl text-stone-900">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight leading-tight">
                Visit our workshop.
              </h3>
              <p className="mt-4 text-stone-600 max-w-2xl leading-relaxed">
                We welcome customers who would like to see a folder being built
                or test a sample fold on their own material. Tours are scheduled
                weekly by appointment.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
              >
                Book a visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
