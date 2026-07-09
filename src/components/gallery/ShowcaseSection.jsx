import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcases = [
  {
    id: 'showcase-blood',
    title: 'Red Blood Cells',
    desc: 'Scanning electron microscope image of red blood cells flowing through a blood vessel',
    imgId: 'showcase-blood-5a8c3d',
    titleId: 'showcase-blood-title',
    descId: 'showcase-blood-desc',
  },
  {
    id: 'showcase-virus',
    title: 'Viral Structures',
    desc: 'Colorized transmission electron microscopy of virus particles attacking a host cell',
    imgId: 'showcase-virus-9b2f7e',
    titleId: 'showcase-virus-title',
    descId: 'showcase-virus-desc',
  },
  {
    id: 'showcase-butterfly',
    title: 'Butterfly Wing Scales',
    desc: 'Extreme close-up of iridescent scales on a butterfly wing creating structural color',
    imgId: 'showcase-butterfly-1d6e4a',
    titleId: 'showcase-butterfly-title',
    descId: 'showcase-butterfly-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-glow font-heading text-sm tracking-widest uppercase mb-3 block">Showcase</span>
          <h2 id="showcase-section-title" className="font-heading text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Stunning Close-Ups
          </h2>
          <p id="showcase-section-subtitle" className="text-text-secondary text-lg max-w-2xl mx-auto">
            Award-winning microscopy images that reveal the hidden beauty of nature
          </p>
        </div>

        <div className="space-y-12">
          {showcases.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-3/5 relative rounded-2xl overflow-hidden group">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none" />
              </div>
              <div className="w-full md:w-2/5 space-y-4">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-primary text-xs font-medium">Image #{index + 1}</span>
                </div>
                <h3 id={item.titleId} className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
                <button className="text-primary hover:text-glow transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                  View Full Resolution
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
