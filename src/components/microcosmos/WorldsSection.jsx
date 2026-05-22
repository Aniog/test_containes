import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const worlds = [
  {
    id: 'world-1',
    titleId: 'world-title-1',
    descId: 'world-desc-1',
    title: 'Bacterial World',
    desc: 'Bacteria colony biofilm colorized scanning electron microscope',
    body: 'Bacteria are the oldest life forms on Earth, dating back 3.5 billion years. They inhabit every environment — from boiling hydrothermal vents to frozen Antarctic ice.',
    color: 'from-rose-900/40',
    accent: 'text-rose-400',
    border: 'border-rose-500/30',
    tag: 'Prokaryotes',
  },
  {
    id: 'world-2',
    titleId: 'world-title-2',
    descId: 'world-desc-2',
    title: 'Fungal Kingdom',
    desc: 'Fungi mycelium network spores microscope forest soil',
    body: 'Fungi form vast underground networks — the "wood wide web" — connecting trees and plants across entire forests, transferring nutrients and chemical signals.',
    color: 'from-violet-900/40',
    accent: 'text-violet-400',
    border: 'border-violet-500/30',
    tag: 'Fungi',
  },
  {
    id: 'world-3',
    titleId: 'world-title-3',
    descId: 'world-desc-3',
    title: 'Viral Realm',
    desc: 'Virus particle structure electron microscope colorized',
    body: 'Viruses exist at the boundary of life and chemistry. Smaller than bacteria, they are the most abundant biological entities on Earth — with 10 nonillion estimated to exist.',
    color: 'from-amber-900/40',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    tag: 'Viruses',
  },
]

export default function WorldsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="worlds" ref={containerRef} className="py-20 md:py-28 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-3 block">
            Microbial Worlds
          </span>
          <h2
            id="worlds-heading"
            className="text-3xl md:text-4xl font-bold text-[#f0f8ff]"
          >
            Three Kingdoms of the Micro-Universe
          </h2>
        </div>

        <div className="space-y-8">
          {worlds.map((w, i) => (
            <div
              key={w.id}
              className={`group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border ${w.border} hover:shadow-[0_0_40px_rgba(0,212,200,0.1)] transition-all duration-300 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={w.id}
                  data-strk-img={`[${w.descId}] [${w.titleId}] [worlds-heading]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width={800}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${w.color} to-transparent`} />
              </div>

              {/* Text */}
              <div className="bg-[#050a0e] p-8 md:p-10 flex flex-col justify-center">
                <span className={`text-xs font-medium tracking-widest uppercase ${w.accent} mb-3 block`}>
                  {w.tag}
                </span>
                <h3 id={w.titleId} className="text-2xl md:text-3xl font-bold text-[#f0f8ff] mb-4">
                  {w.title}
                </h3>
                <p id={w.descId} className="sr-only">{w.desc}</p>
                <p className="text-[#c8d8e8] leading-relaxed">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
