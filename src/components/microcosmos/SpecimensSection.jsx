import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const specimens = [
  {
    id: 'spec-1',
    titleId: 'spec-title-1',
    descId: 'spec-desc-1',
    title: 'Radiolaria',
    desc: 'Ancient single-celled organisms with intricate silica skeletons, forming geometric lattice structures of breathtaking complexity.',
    tag: 'Protozoa',
    imgId: 'spec-img-mc001',
    ratio: '3x2',
    width: 800,
  },
  {
    id: 'spec-2',
    titleId: 'spec-title-2',
    descId: 'spec-desc-2',
    title: 'Tardigrade',
    desc: 'The indestructible "water bear" — a microscopic animal that survives extreme radiation, vacuum of space, and temperatures near absolute zero.',
    tag: 'Micro-animal',
    imgId: 'spec-img-mc002',
    ratio: '3x2',
    width: 800,
  },
  {
    id: 'spec-3',
    titleId: 'spec-title-3',
    descId: 'spec-desc-3',
    title: 'Diatoms',
    desc: 'Photosynthetic algae encased in ornate glass-like shells called frustules, each one a unique masterpiece of natural engineering.',
    tag: 'Algae',
    imgId: 'spec-img-mc003',
    ratio: '3x2',
    width: 800,
  },
  {
    id: 'spec-4',
    titleId: 'spec-title-4',
    descId: 'spec-desc-4',
    title: 'Pollen Grains',
    desc: 'Under electron microscopy, pollen transforms into alien spacecraft — spiky, sculpted, and wildly varied across plant species.',
    tag: 'Botany',
    imgId: 'spec-img-mc004',
    ratio: '3x2',
    width: 800,
  },
  {
    id: 'spec-5',
    titleId: 'spec-title-5',
    descId: 'spec-desc-5',
    title: 'Neurons',
    desc: 'The branching dendrites of nerve cells, illuminated by fluorescent dyes, reveal the electric forests of the human brain.',
    tag: 'Neuroscience',
    imgId: 'spec-img-mc005',
    ratio: '3x2',
    width: 800,
  },
  {
    id: 'spec-6',
    titleId: 'spec-title-6',
    descId: 'spec-desc-6',
    title: 'Butterfly Wing Scales',
    desc: 'Thousands of overlapping nano-scale tiles create the iridescent colors of butterfly wings through structural interference of light.',
    tag: 'Entomology',
    imgId: 'spec-img-mc006',
    ratio: '3x2',
    width: 800,
  },
]

export default function SpecimensSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="bg-[#0a1a24] py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Featured Specimens
          </p>
          <h2
            id="specimens-title"
            className="text-3xl md:text-4xl font-bold text-[#f0faf8] mb-4"
          >
            Wonders of the Microscopic World
          </h2>
          <p className="text-[#94b8b0] max-w-2xl mx-auto">
            Each specimen tells a story millions of years in the making — a testament to nature's endless capacity for beauty and ingenuity at the smallest scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specimens.map((s) => (
            <div
              key={s.id}
              className="group bg-[#0d2233] border border-[rgba(0,212,170,0.15)] rounded-2xl overflow-hidden hover:border-[#00d4aa]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,170,0.15)]"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  id={s.imgId}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}] [specimens-title]`}
                  data-strk-img-ratio={s.ratio}
                  data-strk-img-width={s.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/80 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-medium tracking-widest uppercase bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]/30 px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={s.titleId} className="text-lg font-semibold text-[#f0faf8] mb-2">
                  {s.title}
                </h3>
                <p id={s.descId} className="text-sm text-[#94b8b0] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
