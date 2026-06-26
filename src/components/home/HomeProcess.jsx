import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    n: '01',
    title: 'Specify',
    body: 'Share your panel sizes, materials and finish targets. Our engineers translate them into a configuration.',
  },
  {
    n: '02',
    title: 'Configure',
    body: 'Select length, clamping, blade geometry and control package. We build to fit your shop, not the catalogue.',
  },
  {
    n: '03',
    title: 'Commission',
    body: 'Installation, calibration and operator training are included. Each machine ships fully tested and signed off.',
  },
]

export default function HomeProcess() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span
            id="home-process-eyebrow"
            className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium"
          >
            How we work
          </span>
          <h2
            id="home-process-title"
            className="mt-5 font-serif text-3xl md:text-5xl text-stone-900 leading-tight tracking-tight"
          >
            From your specification to a working folder, considered at every step.
          </h2>

          <div className="mt-10 aspect-[4/3] overflow-hidden border border-stone-200 bg-stone-100">
            <img
              alt="Engineer inspecting a sheet metal folder"
              className="w-full h-full object-cover"
              data-strk-img-id="home-process-photo-3b6c1d"
              data-strk-img="[home-process-title] sheet metal fabrication engineer workshop"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="divide-y divide-stone-200 border-y border-stone-200">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-12 gap-6 py-10">
                <div className="col-span-2 md:col-span-2">
                  <span className="font-serif text-3xl text-amber-800">{s.n}</span>
                </div>
                <div className="col-span-10 md:col-span-10">
                  <h3 className="font-serif text-2xl text-stone-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base text-stone-600 leading-relaxed max-w-lg">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
