import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Discover</p>
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            The World Beneath Our Eyes
          </h2>
          <p id="about-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            Every drop of water, every grain of soil, every breath of air contains an entire universe of living organisms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt="Microscopic water organisms"
              data-strk-img-id="about-img1-kd82nf"
              data-strk-img="[about-card1-desc] [about-card1-title] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 id="about-card1-title" className="text-xl font-bold text-white mb-1">Aquatic Microlife</h3>
              <p id="about-card1-desc" className="text-slate-300 text-sm">Diatoms, algae, and protozoa thriving in freshwater ecosystems</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt="Cellular structures under microscope"
              data-strk-img-id="about-img2-pq93xz"
              data-strk-img="[about-card2-desc] [about-card2-title] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 id="about-card2-title" className="text-xl font-bold text-white mb-1">Cellular Architecture</h3>
              <p id="about-card2-desc" className="text-slate-300 text-sm">The intricate structures of plant and animal cells revealed through electron microscopy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img
              alt="Bacteria colonies"
              data-strk-img-id="about-img3-wm47bc"
              data-strk-img="[about-card3-desc] [about-card3-title] [about-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 id="about-card3-title" className="text-lg font-bold text-white">Bacteria</h3>
              <p id="about-card3-desc" className="text-slate-300 text-xs">Colorful bacterial colonies growing in petri dishes</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img
              alt="Virus particles"
              data-strk-img-id="about-img4-rt56vx"
              data-strk-img="[about-card4-desc] [about-card4-title] [about-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 id="about-card4-title" className="text-lg font-bold text-white">Viruses</h3>
              <p id="about-card4-desc" className="text-slate-300 text-xs">Electron microscope images of virus particles and their geometric structures</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-square">
            <img
              alt="Crystal formations"
              data-strk-img-id="about-img5-hn29ky"
              data-strk-img="[about-card5-desc] [about-card5-title] [about-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 id="about-card5-title" className="text-lg font-bold text-white">Crystals</h3>
              <p id="about-card5-desc" className="text-slate-300 text-xs">Mineral crystals and snowflakes under polarized light microscopy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
