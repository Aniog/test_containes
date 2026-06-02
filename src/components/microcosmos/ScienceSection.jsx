import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const TECHNIQUES = [
  {
    id: 'sem',
    titleId: 'sci-sem-title',
    descId: 'sci-sem-desc',
    imgId: 'sci-img-sem-y5z6',
    title: 'Scanning Electron Microscopy',
    desc: 'SEM uses a focused beam of electrons to scan the surface of a specimen, producing detailed 3D-like images with extraordinary depth of field at nanometer resolution.',
    resolution: '1–20 nm',
    magnification: 'Up to 500,000×',
  },
  {
    id: 'fluorescence',
    titleId: 'sci-fluorescence-title',
    descId: 'sci-fluorescence-desc',
    imgId: 'sci-img-fluorescence-a7b8',
    title: 'Fluorescence Microscopy',
    desc: 'Fluorescent dyes or proteins label specific cellular structures, which then emit light when excited by specific wavelengths, revealing the architecture of living cells.',
    resolution: '200–300 nm',
    magnification: 'Up to 1,000×',
  },
  {
    id: 'confocal',
    titleId: 'sci-confocal-title',
    descId: 'sci-confocal-desc',
    imgId: 'sci-img-confocal-c9d0',
    title: 'Confocal Laser Scanning',
    desc: 'By using a pinhole aperture to eliminate out-of-focus light, confocal microscopy creates sharp optical sections that can be stacked into stunning 3D reconstructions.',
    resolution: '180–250 nm',
    magnification: 'Up to 1,500×',
  },
]

export default function ScienceSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">The Science</p>
          <h2 id="science-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We See the Invisible
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern microscopy techniques have revolutionized our understanding of life at the cellular and molecular level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {TECHNIQUES.map((tech) => (
            <div
              key={tech.id}
              className="bg-gray-950 border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:border-teal-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  alt={tech.title}
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [science-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={tech.titleId} className="text-white font-bold text-lg mb-3 leading-tight">{tech.title}</h3>
                <p id={tech.descId} className="text-gray-400 text-sm leading-relaxed mb-5">{tech.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Resolution</div>
                    <div className="text-teal-400 font-semibold text-sm">{tech.resolution}</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-3">
                    <div className="text-xs text-gray-500 mb-1">Magnification</div>
                    <div className="text-teal-400 font-semibold text-sm">{tech.magnification}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width feature image */}
        <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 h-72 md:h-96">
          <img
            alt="Laboratory microscopy research science"
            data-strk-img-id="sci-lab-img-e1f2g3"
            data-strk-img="[science-section-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Our Mission</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Making Science Accessible to Everyone
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We believe that the microscopic world belongs to everyone. Through stunning imagery and accessible science communication, we inspire curiosity and wonder in people of all ages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
