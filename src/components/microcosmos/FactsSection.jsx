import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '1 Trillion', label: 'Microbial Species', sub: 'estimated on Earth', color: '#00e5ff' },
  { value: '37.2T', label: 'Cells in Human Body', sub: 'each with its own function', color: '#e040fb' },
  { value: '10×', label: 'More Microbes', sub: 'than human cells in your body', color: '#00bfa5' },
  { value: '3.8B', label: 'Years of Evolution', sub: 'microbial life has existed', color: '#7c3aed' },
]

const discoveries = [
  {
    id: 'disc-01',
    year: '1676',
    title: 'First Microbes Observed',
    desc: 'Antonie van Leeuwenhoek discovers "animalcules" using his handcrafted microscope with 270× magnification.',
    imgId: 'disc-img-mc001',
  },
  {
    id: 'disc-02',
    year: '1928',
    title: 'Penicillin Discovered',
    desc: 'Alexander Fleming notices Penicillium mold killing bacteria, launching the antibiotic revolution.',
    imgId: 'disc-img-mc002',
  },
  {
    id: 'disc-03',
    year: '1953',
    title: 'DNA Structure Revealed',
    desc: 'Watson and Crick describe the double helix, unlocking the molecular blueprint of all life.',
    imgId: 'disc-img-mc003',
  },
  {
    id: 'disc-04',
    year: '2003',
    title: 'Human Genome Mapped',
    desc: 'The Human Genome Project completes sequencing 3 billion base pairs, revealing our genetic code.',
    imgId: 'disc-img-mc004',
  },
]

export default function FactsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="facts" ref={containerRef} className="py-24 md:py-32 px-4 bg-[#0d1424]">
      <div className="max-w-7xl mx-auto">

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0f1a2e] border border-[rgba(0,229,255,0.12)] rounded-2xl p-6 text-center hover:border-[rgba(0,229,255,0.3)] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-white font-bold text-sm md:text-base mb-1">{stat.label}</div>
              <div className="text-[#4a6a7a] text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Timeline section */}
        <div className="text-center mb-16">
          <span className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            History of Discovery
          </span>
          <h2
            id="facts-title"
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Milestones in
            <span className="text-[#00e5ff]"> Microbiology</span>
          </h2>
          <p
            id="facts-subtitle"
            className="text-lg text-[#8ab4c8] max-w-xl mx-auto"
          >
            Key discoveries that transformed our understanding of microscopic life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {discoveries.map((disc) => (
            <div
              key={disc.id}
              className="group flex gap-5 bg-[#0f1a2e] border border-[rgba(0,229,255,0.12)] rounded-2xl overflow-hidden hover:border-[rgba(0,229,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-36 md:w-48 flex-shrink-0 overflow-hidden">
                <img
                  alt={disc.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={disc.imgId}
                  data-strk-img={`[disc-${disc.id}-title] [disc-${disc.id}-desc] [facts-subtitle] [facts-title] microscopy history`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1a2e]/30" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-center">
                <div className="text-[#00e5ff] text-2xl font-black mb-1">{disc.year}</div>
                <h3 id={`disc-${disc.id}-title`} className="text-white font-bold text-lg mb-2">{disc.title}</h3>
                <p id={`disc-${disc.id}-desc`} className="text-[#8ab4c8] text-sm leading-relaxed">{disc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden border border-[rgba(0,229,255,0.2)]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="quote-bg-mc001"
            data-strk-bg="[facts-subtitle] [facts-title] microscopic world science wonder"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-[#050810]/80" />
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <div className="text-6xl text-[#00e5ff] font-black mb-4 opacity-40">"</div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-relaxed mb-6">
              The world is not only stranger than we imagine, it is stranger than we can imagine.
            </blockquote>
            <cite className="text-[#00e5ff] font-semibold">— J.B.S. Haldane, Biologist</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
