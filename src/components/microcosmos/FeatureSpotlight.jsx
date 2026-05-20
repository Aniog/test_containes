import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function FeatureSpotlight() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Row 1: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Featured Discovery</p>
            <h2 id="spot1-title" className="text-3xl md:text-4xl font-black text-slate-50 mb-5 leading-tight">
              The Human Microbiome: A Universe Within
            </h2>
            <p id="spot1-sub" className="text-slate-400 leading-relaxed mb-6">
              Your body hosts over 38 trillion microbial cells — outnumbering your own cells. This vast community of bacteria, fungi, and viruses forms a complex ecosystem that influences your immune system, mood, and even behavior.
            </p>
            <ul className="space-y-3">
              {['Gut bacteria produce 90% of serotonin', 'Skin microbiome protects against pathogens', 'Oral microbiome contains 700+ species'].map((fact, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#00d4c8] flex-shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#00d4c8]/20">
            <img
              alt="Human microbiome"
              className="w-full object-cover"
              data-strk-img-id="spot1-img-mc002"
              data-strk-img="[spot1-sub] [spot1-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            />
          </div>
        </div>

        {/* Row 2: image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-[#00d4c8]/20 order-2 md:order-1">
            <img
              alt="Extremophile bacteria"
              className="w-full object-cover"
              data-strk-img-id="spot2-img-mc003"
              data-strk-img="[spot2-sub] [spot2-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Extreme Life</p>
            <h2 id="spot2-title" className="text-3xl md:text-4xl font-black text-slate-50 mb-5 leading-tight">
              Extremophiles: Life at the Limits
            </h2>
            <p id="spot2-sub" className="text-slate-400 leading-relaxed mb-6">
              Some microorganisms thrive in conditions that would instantly destroy any other life — boiling hydrothermal vents, acidic hot springs, frozen Antarctic ice, and even the vacuum of space. These extremophiles redefine the boundaries of biology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Thermophiles', desc: 'Survive above 80°C' },
                { label: 'Acidophiles', desc: 'Thrive at pH < 3' },
                { label: 'Halophiles', desc: 'Live in salt flats' },
                { label: 'Radiotrophs', desc: 'Feed on radiation' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0d1f3c] rounded-xl p-4 border border-[#00d4c8]/15">
                  <p className="text-[#00d4c8] font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
