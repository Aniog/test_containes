import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { value: '8.7M', label: 'Species on Earth', sub: 'estimated total' },
  { value: '1μm', label: 'Average Bacterium', sub: 'in diameter' },
  { value: '37T', label: 'Human Body Cells', sub: 'in one person' },
  { value: '99%', label: 'Microbial Life', sub: 'yet undiscovered' },
]

const facts = [
  {
    id: 'fact1',
    titleId: 'fact-title-1',
    descId: 'fact-desc-1',
    imgId: 'fact-img-1-a1b2c3',
    number: '01',
    title: 'Bacteria Outnumber Stars',
    desc: 'There are an estimated 10³⁰ bacteria on Earth — more than all the stars in the observable universe combined. A single gram of soil contains up to one billion bacteria.',
    color: '#00d4ff',
  },
  {
    id: 'fact2',
    titleId: 'fact-title-2',
    descId: 'fact-desc-2',
    imgId: 'fact-img-2-d4e5f6',
    number: '02',
    title: 'Viruses Are Everywhere',
    desc: 'Every day, 800 million viruses per square meter fall from the sky. The ocean contains 10³¹ viruses — if laid end to end, they would stretch 100 million light years.',
    color: '#7c3aed',
  },
  {
    id: 'fact3',
    titleId: 'fact-title-3',
    descId: 'fact-desc-3',
    imgId: 'fact-img-3-g7h8i9',
    number: '03',
    title: 'Diatoms Feed the World',
    desc: 'Microscopic diatoms produce between 20-50% of the oxygen we breathe and form the foundation of aquatic food chains that ultimately feed billions of people.',
    color: '#10b981',
  },
  {
    id: 'fact4',
    titleId: 'fact-title-4',
    descId: 'fact-desc-4',
    imgId: 'fact-img-4-j0k1l2',
    number: '04',
    title: 'Tardigrades in Space',
    desc: 'Tardigrades are the only animals known to survive direct exposure to outer space. They can withstand radiation 1,000 times the lethal dose for humans.',
    color: '#f59e0b',
  },
]

export default function Facts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="facts" ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-[#0f1f3d] border border-[#1e3a5f]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Mind-Blowing Science
          </span>
          <h2
            id="facts-section-title"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Incredible Micro Facts
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto mb-6 rounded-full" />
          <p
            id="facts-section-desc"
            className="text-slate-300 text-lg max-w-2xl mx-auto"
          >
            The microscopic world is full of astonishing truths that challenge our understanding of life itself.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group flex gap-6 p-6 rounded-2xl bg-[#0f1f3d] border border-[#1e3a5f] hover:border-opacity-60 transition-all duration-300"
              style={{ '--fact-color': fact.color }}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden border border-[#1e3a5f]">
                <img
                  alt={fact.title}
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div
                  className="text-4xl font-black mb-2 opacity-20"
                  style={{ color: fact.color }}
                >
                  {fact.number}
                </div>
                <h3
                  id={fact.titleId}
                  className="text-white font-bold text-lg mb-2 leading-tight"
                >
                  {fact.title}
                </h3>
                <p
                  id={fact.descId}
                  className="text-slate-400 text-sm leading-relaxed"
                >
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center p-10 rounded-2xl bg-gradient-to-r from-[#0f1f3d] via-[#0a1628] to-[#0f1f3d] border border-[#1e3a5f]">
          <div className="text-6xl text-[#00d4ff]/20 font-serif mb-4">"</div>
          <blockquote className="text-xl md:text-2xl text-white font-light italic max-w-3xl mx-auto leading-relaxed mb-6">
            The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.
          </blockquote>
          <cite className="text-slate-400 text-sm not-italic">— Albert Einstein</cite>
        </div>
      </div>
    </section>
  )
}
