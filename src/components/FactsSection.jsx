import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const facts = [
  {
    id: 'fact-1',
    number: '01',
    title: 'Tardigrades in Space',
    body: 'Tardigrades have survived exposure to the vacuum of outer space, cosmic radiation, and temperatures near absolute zero. They are the most resilient animals known to science.',
    imgId: 'fact-img-mc040',
    imgQuery: 'tardigrade water bear extreme survival microscope',
  },
  {
    id: 'fact-2',
    number: '02',
    title: 'Diatoms & Oxygen',
    body: 'Microscopic diatoms in the ocean produce approximately 20–25% of all the oxygen on Earth — more than all the world\'s rainforests combined.',
    imgId: 'fact-img-mc041',
    imgQuery: 'diatom ocean phytoplankton microscope colorful',
  },
  {
    id: 'fact-3',
    number: '03',
    title: 'Your Microbiome',
    body: 'The human body hosts approximately 38 trillion microbial cells — roughly equal to the number of human cells. These microbes are essential for digestion, immunity, and even mood.',
    imgId: 'fact-img-mc042',
    imgQuery: 'human gut microbiome bacteria colorful illustration',
  },
  {
    id: 'fact-4',
    number: '04',
    title: 'Ancient Survivors',
    body: 'Scientists have revived bacteria from 250-million-year-old salt crystals. Microbes can enter a dormant state and survive for geological timescales.',
    imgId: 'fact-img-mc043',
    imgQuery: 'ancient bacteria spore dormant crystal microscope',
  },
]

export default function FactsSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
            Did You Know?
          </span>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-4">
            Astonishing Microbial Facts
          </h2>
          <p id="facts-desc" className="text-slate-400 text-lg max-w-2xl mx-auto">
            The microscopic world is full of surprises that challenge our understanding of life, survival, and the planet we call home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-[#0f1f38] border border-[#1e3a5f] rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-[#00e5c8]/40 transition-colors duration-300"
            >
              <div className="md:w-48 flex-shrink-0 aspect-square md:aspect-auto overflow-hidden">
                <img
                  alt={fact.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`${fact.imgQuery} [facts-desc] [facts-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-4xl font-black text-[#00e5c8]/20 leading-none mb-2">{fact.number}</span>
                <h3 id={fact.id} className="text-lg font-bold text-sky-50 mb-3">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
