import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const scales = [
  { id: 'scale-01', imgId: 'scale-img-mc030', label: '1 mm', title: 'Dust Mite', desc: 'Barely visible to the naked eye, dust mites inhabit every home.' },
  { id: 'scale-02', imgId: 'scale-img-mc031', label: '100 µm', title: 'Human Hair', desc: 'A cross-section of a single strand reveals its layered structure.' },
  { id: 'scale-03', imgId: 'scale-img-mc032', label: '10 µm', title: 'Red Blood Cell', desc: 'Biconcave discs that carry oxygen through our bloodstream.' },
  { id: 'scale-04', imgId: 'scale-img-mc033', label: '1 µm', title: 'Bacterium', desc: 'Single-celled organisms that outnumber human cells 10 to 1.' },
]

export default function ScaleSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00d4aa] text-sm font-medium tracking-widest uppercase mb-3">Perspective</p>
          <h2 id="scale-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Journey Through Scale
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the barely visible to the impossibly small — each order of magnitude reveals a new universe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scales.map((item) => (
            <div
              key={item.id}
              className="bg-[#0d1f2d] border border-slate-700/50 rounded-2xl overflow-hidden group hover:border-[#7c3aed]/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-desc] [${item.id}-title] [scale-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-3 left-3 bg-[#7c3aed] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.label}
                </div>
              </div>
              <div className="p-5">
                <h3 id={`${item.id}-title`} className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p id={`${item.id}-desc`} className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
