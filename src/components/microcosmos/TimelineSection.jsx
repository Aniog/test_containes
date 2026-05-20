import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const timeline = [
  {
    year: '1674',
    titleId: 'tl-title-1',
    subtitleId: 'tl-sub-1',
    title: 'First Microbes Observed',
    subtitle: 'Antonie van Leeuwenhoek',
    desc: 'Using a hand-crafted microscope with 270× magnification, van Leeuwenhoek became the first person to observe and describe microorganisms, calling them "animalcules".',
    imgRatio: '3x2',
    imgWidth: 600,
  },
  {
    year: '1857',
    titleId: 'tl-title-2',
    subtitleId: 'tl-sub-2',
    title: 'Germ Theory of Disease',
    subtitle: 'Louis Pasteur',
    desc: 'Pasteur\'s landmark experiments proved that microorganisms cause fermentation and disease, overturning the theory of spontaneous generation and founding modern microbiology.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
  {
    year: '1928',
    titleId: 'tl-title-3',
    subtitleId: 'tl-sub-3',
    title: 'Discovery of Penicillin',
    subtitle: 'Alexander Fleming',
    desc: 'Fleming noticed that Penicillium mold killed surrounding bacteria, leading to the development of antibiotics — one of the most transformative medical discoveries in history.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
  {
    year: '1953',
    titleId: 'tl-title-4',
    subtitleId: 'tl-sub-4',
    title: 'DNA Double Helix',
    subtitle: 'Watson, Crick & Franklin',
    desc: 'The discovery of DNA\'s structure revealed how genetic information is stored and replicated at the molecular level, unlocking the secrets of life itself.',
    imgRatio: '3x2',
    imgWidth: 600,
  },
]

export default function TimelineSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-3">History of Discovery</p>
          <h2 id="timeline-heading" className="text-4xl md:text-5xl font-black text-slate-50 mb-4">
            Milestones in Microbiology
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            From the first glimpse through a lens to decoding the genome — the story of how we learned to see the invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="group bg-[#0d1f3c] rounded-2xl overflow-hidden border border-[#00d4c8]/20 hover:border-[#00d4c8]/40 transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="md:w-48 flex-shrink-0 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={`tl-${item.year}-img-mc`}
                  data-strk-img={`[${item.subtitleId}] [${item.titleId}] [timeline-heading]`}
                  data-strk-img-ratio={item.imgRatio}
                  data-strk-img-width={item.imgWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-3xl font-black text-[#00d4c8]/30 mb-1">{item.year}</span>
                <p id={item.subtitleId} className="text-xs text-[#00d4c8] uppercase tracking-wider mb-1">{item.subtitle}</p>
                <h3 id={item.titleId} className="text-lg font-bold text-slate-50 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
