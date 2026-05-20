import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const spotlights = [
  {
    id: 'spot-tardigrade',
    imgId: 'spot-img-mc020',
    tag: 'Micro-animal',
    title: 'The Indestructible Tardigrade',
    body: 'Known as "water bears," tardigrades are microscopic animals capable of surviving in the vacuum of space, extreme radiation, and temperatures from near absolute zero to 150°C. Under a microscope, their eight stubby legs and barrel-shaped bodies reveal a creature unlike any other on Earth.',
    ratio: '3x2',
    width: 800,
    reverse: false,
  },
  {
    id: 'spot-diatom',
    imgId: 'spot-img-mc021',
    tag: 'Algae',
    title: 'Diatoms: Nature\'s Glass Artists',
    body: 'Diatoms are single-celled algae encased in intricate silica shells called frustules. Each species produces a unique geometric pattern of breathtaking complexity — and they produce about 20% of the oxygen we breathe. Their fossilized remains form diatomaceous earth used in everything from filtration to cosmetics.',
    ratio: '3x2',
    width: 800,
    reverse: true,
  },
  {
    id: 'spot-neuron',
    imgId: 'spot-img-mc022',
    tag: 'Neuroscience',
    title: 'The Neuron: Wiring of Thought',
    body: 'A single human brain contains roughly 86 billion neurons, each forming thousands of connections. Under fluorescence microscopy, these branching cells glow like constellations — a living map of memory, emotion, and consciousness rendered in light.',
    ratio: '3x2',
    width: 800,
    reverse: false,
  },
]

export default function SpotlightSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050a0e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#f59e0b] text-sm font-medium tracking-widest uppercase mb-3">Deep Dives</p>
          <h2 id="spotlight-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Specimen Spotlight
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Extraordinary organisms and structures that redefine our understanding of life and matter.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {spotlights.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,212,170,0.1)]">
                <img
                  alt={item.title}
                  className="w-full h-72 md:h-96 object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-body] [${item.id}-title] [spotlight-heading]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-[#00d4aa]/10 text-[#00d4aa] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-[#00d4aa]/20 mb-4">
                  {item.tag}
                </span>
                <h3 id={`${item.id}-title`} className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  {item.title}
                </h3>
                <p id={`${item.id}-body`} className="text-slate-400 text-lg leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
