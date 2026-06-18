import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const articles = [
  {
    id: 'sci-01', imgId: 'sci-img-mc030', titleId: 'sci-title-01', descId: 'sci-desc-01',
    title: 'How Electron Microscopes Work',
    desc: 'Electron microscopes use beams of electrons instead of light to achieve magnifications up to 10 million times, revealing atomic-scale structures.',
    tag: 'Technology', date: 'Jun 2026',
  },
  {
    id: 'sci-02', imgId: 'sci-img-mc031', titleId: 'sci-title-02', descId: 'sci-desc-02',
    title: 'The Role of Microbiome in Human Health',
    desc: 'Trillions of microorganisms living in and on our bodies form a complex ecosystem that influences immunity, digestion, and even mental health.',
    tag: 'Health', date: 'May 2026',
  },
  {
    id: 'sci-03', imgId: 'sci-img-mc032', titleId: 'sci-title-03', descId: 'sci-desc-03',
    title: 'Extremophiles: Life at the Limits',
    desc: 'Microorganisms thriving in boiling hot springs, acidic lakes, and frozen tundra challenge our understanding of where life can exist.',
    tag: 'Astrobiology', date: 'Apr 2026',
  },
]

export default function ScienceSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">Latest Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Science & Discovery</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Cutting-edge research illuminating the hidden mechanisms that govern all life on Earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.id}
              className="group bg-[#0f1f38] border border-teal-900/40 hover:border-teal-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(20,184,166,0.12)] flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  alt={a.title}
                  data-strk-img-id={a.imgId}
                  data-strk-img={`[${a.descId}] [${a.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                <span className="absolute top-3 left-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {a.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-slate-500 text-xs mb-2">{a.date}</span>
                <h3 id={a.titleId} className="text-white font-bold text-lg mb-3 leading-snug">{a.title}</h3>
                <p id={a.descId} className="text-slate-400 text-sm leading-relaxed flex-1">{a.desc}</p>
                <a href="#" className="mt-4 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors inline-flex items-center gap-1">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
