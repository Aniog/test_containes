import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '3.5B', label: 'Years of microbial life on Earth', icon: '🌍' },
  { value: '10¹²', label: 'Microbes in the human gut', icon: '🧬' },
  { value: '50%', label: 'Of Earth\'s oxygen from microbes', icon: '🌿' },
  { value: '1M+', label: 'Species yet to be discovered', icon: '🔭' },
]

export default function StatsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Quote banner with background */}
        <div className="relative overflow-hidden rounded-3xl mb-20 border border-teal-500/20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="quote-bg-mc001"
            data-strk-bg="[quote-text] [quote-author]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
          />
          <div className="absolute inset-0 bg-gray-950/85" />
          <div className="relative z-10 py-20 px-8 md:px-16 text-center max-w-4xl mx-auto">
            <div className="text-teal-400 text-5xl mb-6 font-serif">"</div>
            <blockquote
              id="quote-text"
              className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The world is not only stranger than we imagine — it is stranger than we can imagine. And most of that strangeness lives in the microscopic realm.
            </blockquote>
            <p id="quote-author" className="text-teal-400 font-semibold tracking-wide">
              — Inspired by J.B.S. Haldane
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800/40 border border-gray-700/40 rounded-2xl p-8 text-center hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-teal-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom image strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'strip1', title: 'Cyanobacteria', desc: 'Ancient oxygen producers' },
            { id: 'strip2', title: 'Amoeba', desc: 'Shape-shifting predator' },
            { id: 'strip3', title: 'Spirogyra', desc: 'Spiral green algae' },
            { id: 'strip4', title: 'Stentor', desc: 'Trumpet-shaped ciliate' },
          ].map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl border border-gray-700/40 aspect-square">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={`strip-img-mc-${item.id}`}
                data-strk-img={`[strip-desc-${item.id}] [strip-title-${item.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`strip-title-${item.id}`} className="text-white text-sm font-semibold">{item.title}</p>
                <p id={`strip-desc-${item.id}`} className="text-teal-300 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
