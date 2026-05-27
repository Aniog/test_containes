import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-1',
    icon: '🔬',
    title: 'Electron Microscopy',
    desc: 'Ultra-high resolution imaging reveals structures at the nanometer scale, unveiling the architecture of life itself.',
    imgId: 'about-img-mc001',
    imgQuery: '[about-feat-1-title] electron microscope bacteria cell structure',
  },
  {
    id: 'feat-2',
    icon: '🧬',
    title: 'DNA & Genetics',
    desc: 'The double helix blueprint of all living organisms, encoding billions of years of evolutionary history.',
    imgId: 'about-img-mc002',
    imgQuery: '[about-feat-2-title] DNA double helix genetics molecular biology',
  },
  {
    id: 'feat-3',
    icon: '🦠',
    title: 'Microbial Life',
    desc: 'Bacteria, archaea, and protists form the foundation of all ecosystems on Earth — and beyond.',
    imgId: 'about-img-mc003',
    imgQuery: '[about-feat-3-title] microbial life bacteria microscope colorful',
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 px-4 bg-[#050810]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What is MicroCosmos
          </span>
          <h2
            id="about-title"
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            A Universe Within
            <br />
            <span className="text-[#00e5ff]">Every Drop</span>
          </h2>
          <p
            id="about-subtitle"
            className="text-lg text-[#8ab4c8] max-w-2xl mx-auto leading-relaxed"
          >
            Beneath the threshold of human vision lies an entire cosmos teeming with life. MicroCosmos is your window into this invisible world — where single cells wage wars, form alliances, and build civilizations.
          </p>
        </div>

        {/* Large feature image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-80 md:h-[500px] border border-[rgba(0,229,255,0.15)]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="about-hero-bg-mc001"
            data-strk-bg="[about-subtitle] [about-title] microscopic world cells organisms"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 via-transparent to-[#050810]/40" />
          <div className="absolute bottom-8 left-8 md:left-12">
            <p className="text-[#00e5ff] text-sm font-semibold tracking-widest uppercase mb-2">Featured</p>
            <h3 className="text-2xl md:text-4xl font-black text-white">The Hidden Universe</h3>
            <p className="text-[#8ab4c8] mt-2 max-w-md">Over 1 trillion species of microorganisms inhabit our planet</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="group bg-[#0d1424] border border-[rgba(0,229,255,0.15)] rounded-2xl overflow-hidden hover:border-[rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.12)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={f.title}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={f.imgId}
                  data-strk-img={f.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 id={`about-feat-${f.id.split('-')[1]}-title`} className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[#8ab4c8] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
