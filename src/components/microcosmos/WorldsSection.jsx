import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const worlds = [
  {
    id: 'world-bacteria',
    titleId: 'world-title-1',
    subtitleId: 'world-sub-1',
    title: 'Bacteria',
    subtitle: 'The Ancient Architects',
    description: 'Among the oldest life forms on Earth, bacteria have shaped our planet for over 3.5 billion years. From deep-sea vents to the human gut, they thrive in every environment imaginable.',
    tag: 'Prokaryotes',
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'world-cells',
    titleId: 'world-title-2',
    subtitleId: 'world-sub-2',
    title: 'Eukaryotic Cells',
    subtitle: 'Complex Life Units',
    description: 'With a true nucleus and intricate organelles, eukaryotic cells are the building blocks of all complex life — from single-celled amoeba to the trillions of cells in the human body.',
    tag: 'Eukaryotes',
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'world-fungi',
    titleId: 'world-title-3',
    subtitleId: 'world-sub-3',
    title: 'Fungi & Spores',
    subtitle: 'Nature\'s Decomposers',
    description: 'Fungi form vast underground networks, break down organic matter, and produce spores of extraordinary beauty. Their mycelial webs connect entire forests in a living internet.',
    tag: 'Mycology',
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'world-algae',
    titleId: 'world-title-4',
    subtitleId: 'world-sub-4',
    title: 'Algae & Diatoms',
    subtitle: 'Microscopic Jewels',
    description: 'Diatoms construct intricate glass-like shells of silica, creating some of the most geometrically perfect structures in nature. They produce over 20% of Earth\'s oxygen.',
    tag: 'Phytoplankton',
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'world-viruses',
    titleId: 'world-title-5',
    subtitleId: 'world-sub-5',
    title: 'Viruses',
    subtitle: 'The Edge of Life',
    description: 'Neither fully alive nor inert, viruses occupy a fascinating boundary. Their crystalline protein coats and precise molecular machinery challenge our very definition of life.',
    tag: 'Virology',
    imgRatio: '4x3',
    imgWidth: 800,
  },
  {
    id: 'world-protozoa',
    titleId: 'world-title-6',
    subtitleId: 'world-sub-6',
    title: 'Protozoa',
    subtitle: 'Microscopic Predators',
    description: 'Amoebas, paramecia, and flagellates hunt, evade, and reproduce in a drop of pond water. These single-celled hunters display behaviors that rival complex animals.',
    tag: 'Protists',
    imgRatio: '4x3',
    imgWidth: 800,
  },
]

export default function WorldsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="explore" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">Microscopic Kingdoms</p>
          <h2 id="worlds-heading" className="text-4xl md:text-5xl font-black text-slate-50 mb-4">
            Six Invisible Worlds
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Each realm of the microcosmos holds its own laws, beauty, and secrets waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className="group bg-[#0d1f3c] rounded-2xl overflow-hidden border border-[#00d4c8]/20 hover:border-[#00d4c8]/50 transition-all duration-300 shadow-[0_0_30px_rgba(0,212,200,0.05)] hover:shadow-[0_0_40px_rgba(0,212,200,0.12)]"
            >
              <div className="overflow-hidden relative">
                <img
                  alt={world.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`${world.id}-img-mc`}
                  data-strk-img={`[${world.subtitleId}] [${world.titleId}] [worlds-heading]`}
                  data-strk-img-ratio={world.imgRatio}
                  data-strk-img-width={world.imgWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#00d4c8]/20 border border-[#00d4c8]/40 text-[#00d4c8] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {world.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p id={world.subtitleId} className="text-xs text-[#00d4c8] uppercase tracking-widest mb-1">{world.subtitle}</p>
                <h3 id={world.titleId} className="text-xl font-bold text-slate-50 mb-3">{world.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{world.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
