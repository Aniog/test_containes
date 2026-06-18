import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '10M×', label: 'Max Magnification', desc: 'Electron microscopes can magnify objects up to 10 million times' },
  { value: '1 µm', label: 'Bacterial Size', desc: 'Average bacterium is about 1 micrometer — 1000× smaller than a millimeter' },
  { value: '37T', label: 'Human Cells', desc: 'The human body contains approximately 37 trillion cells' },
  { value: '99%', label: 'Invisible Life', desc: 'Over 99% of microbial species on Earth have never been studied' },
]

const showcaseImages = [
  {
    id: 'show-01', imgId: 'showcase-img-mc040', titleId: 'show-title-01', descId: 'show-desc-01',
    title: 'Red Blood Cells', desc: 'Human erythrocytes under scanning electron microscope showing biconcave disc shape',
  },
  {
    id: 'show-02', imgId: 'showcase-img-mc041', titleId: 'show-title-02', descId: 'show-desc-02',
    title: 'Spirogyra Algae', desc: 'Freshwater green algae with characteristic spiral chloroplasts visible under light microscope',
  },
  {
    id: 'show-03', imgId: 'showcase-img-mc042', titleId: 'show-title-03', descId: 'show-desc-03',
    title: 'Dust Mite', desc: 'Household dust mite magnified 200 times, revealing its eight-legged arachnid body structure',
  },
  {
    id: 'show-04', imgId: 'showcase-img-mc043', titleId: 'show-title-04', descId: 'show-desc-04',
    title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystals photographed under polarized light microscopy showing vivid colors',
  },
]

export default function StatsShowcaseSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0f1f38] border border-teal-900/40 rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-teal-400 mb-2">{s.value}</div>
              <div className="text-white font-semibold text-sm mb-2">{s.label}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Showcase grid */}
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">Under the Lens</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Microscopy Showcase</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            A curated selection of the most visually striking microscopy images from our archive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {showcaseImages.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl border border-teal-900/30 hover:border-teal-500/50 transition-all duration-300 aspect-square"
            >
              <img
                alt={img.title}
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.descId}] [${img.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={img.titleId} className="text-white font-bold text-sm mb-1">{img.title}</h3>
                <p id={img.descId} className="text-slate-300 text-xs leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
