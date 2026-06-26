import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '25+', label: 'Years of experience' },
  { value: '40+', label: 'Countries served' },
  { value: '5,000+', label: 'Machines installed' },
  { value: '24/7', label: 'Technical support' },
]

const points = [
  'In-house engineering and manufacturing',
  'Custom tooling and automation options',
  'Worldwide installation and training',
  'Genuine spare parts guaranteed',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
            <img
              alt="ARTITECT MACHINERY factory floor"
              data-strk-img-id="about-factory-2b8e1f"
              data-strk-img="[about-heading] [about-lead]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl bg-amber-500 px-6 py-5 shadow-xl">
            <p className="text-3xl font-extrabold text-slate-900">ISO 9001</p>
            <p className="text-sm font-semibold text-slate-900/80">
              Certified Quality
            </p>
          </div>
        </div>

        <div>
          <p className="text-amber-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            About Us
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            A Heritage of Metal Folding Expertise
          </h2>
          <p
            id="about-lead"
            className="mt-5 text-lg text-slate-300 leading-relaxed"
          >
            For over two decades, ARTITECT MACHINERY has designed and
            manufactured sheet metal folding equipment trusted by fabricators
            worldwide. We combine traditional craftsmanship with modern
            servo-electric technology to build machines that perform year after
            year.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-sm">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
