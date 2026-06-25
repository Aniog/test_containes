import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const wonders = [
  {
    id: 'w01',
    title: 'Fluorescent Neurons',
    desc: 'Brain cells illuminated with fluorescent proteins, revealing the neural network',
    titleId: 'wonder-w01-title',
    descId: 'wonder-w01-desc',
    imgId: 'wonder-img-w01-mc040',
  },
  {
    id: 'w02',
    title: 'Salt Crystal Formation',
    desc: 'Sodium chloride crystallizing under polarized light microscopy',
    titleId: 'wonder-w02-title',
    descId: 'wonder-w02-desc',
    imgId: 'wonder-img-w02-mc041',
  },
  {
    id: 'w03',
    title: 'Dust Mite Portrait',
    desc: 'The eight-legged creature living in every home, magnified 200 times',
    titleId: 'wonder-w03-title',
    descId: 'wonder-w03-desc',
    imgId: 'wonder-img-w03-mc042',
  },
  {
    id: 'w04',
    title: 'Mitosis in Progress',
    desc: 'A cell dividing — chromosomes aligning in the dance of life',
    titleId: 'wonder-w04-title',
    descId: 'wonder-w04-desc',
    imgId: 'wonder-img-w04-mc043',
  },
  {
    id: 'w05',
    title: 'Peacock Feather Barbule',
    desc: 'The iridescent nanostructure responsible for the peacock\'s brilliant colors',
    titleId: 'wonder-w05-title',
    descId: 'wonder-w05-desc',
    imgId: 'wonder-img-w05-mc044',
  },
  {
    id: 'w06',
    title: 'Volcanic Ash Particle',
    desc: 'A single grain of volcanic ash, jagged and glassy under the electron microscope',
    titleId: 'wonder-w06-title',
    descId: 'wonder-w06-desc',
    imgId: 'wonder-img-w06-mc045',
  },
  {
    id: 'w07',
    title: 'Spider Silk Strand',
    desc: 'The strongest natural fiber known, thinner than a human hair',
    titleId: 'wonder-w07-title',
    descId: 'wonder-w07-desc',
    imgId: 'wonder-img-w07-mc046',
  },
  {
    id: 'w08',
    title: 'Cyanobacteria Bloom',
    desc: 'Ancient photosynthetic bacteria that first oxygenated Earth\'s atmosphere',
    titleId: 'wonder-w08-title',
    descId: 'wonder-w08-desc',
    imgId: 'wonder-img-w08-mc047',
  },
]

const WondersSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#0a0f1e] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-xs font-mono tracking-widest uppercase mb-4">Wonders of the Micro World</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nature's Hidden Marvels</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Eight extraordinary microscopic subjects that will forever change how you see the world around you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wonders.map((wonder) => (
            <div
              key={wonder.id}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  alt={wonder.title}
                  data-strk-img-id={wonder.imgId}
                  data-strk-img={`[${wonder.descId}] [${wonder.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>
              <div className="p-4">
                <h3 id={wonder.titleId} className="text-white font-semibold text-sm mb-1 leading-tight">{wonder.title}</h3>
                <p id={wonder.descId} className="text-slate-500 text-xs leading-relaxed line-clamp-2">{wonder.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WondersSection
