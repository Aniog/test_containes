import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const discoveries = [
  {
    id: 'extremophile',
    titleId: 'discovery-extremophile-title',
    descId: 'discovery-extremophile-desc',
    yearId: 'discovery-extremophile-year',
    title: 'Deep-Sea Extremophiles',
    year: '1977',
    description:
      'Thriving near hydrothermal vents at temperatures exceeding 100 degrees Celsius, extremophiles proved that life can flourish in conditions once thought impossible.',
    imgId: 'discovery-extremophile-img-n4p7r1',
    align: 'left',
  },
  {
    id: 'gut-microbiome',
    titleId: 'discovery-gut-microbiome-title',
    descId: 'discovery-gut-microbiome-desc',
    yearId: 'discovery-gut-microbiome-year',
    title: 'The Human Gut Microbiome',
    year: '2007',
    description:
      'The Human Microbiome Project revealed that our bodies host trillions of microbes essential for digestion, immunity, and even mental health.',
    imgId: 'discovery-gut-microbiome-img-c2k9s5',
    align: 'right',
  },
  {
    id: 'crispr',
    titleId: 'discovery-crispr-title',
    descId: 'discovery-crispr-desc',
    yearId: 'discovery-crispr-year',
    title: 'CRISPR Gene Editing',
    year: '2012',
    description:
      'Scientists repurposed a bacterial immune defense mechanism into one of the most powerful tools in modern genetics and medicine.',
    imgId: 'discovery-crispr-img-e8v3b6',
    align: 'left',
  },
  {
    id: 'microplastics',
    titleId: 'discovery-microplastics-title',
    descId: 'discovery-microplastics-desc',
    yearId: 'discovery-microplastics-year',
    title: 'Microplastics in the Ocean',
    year: '2004',
    description:
      'Research revealed that tiny plastic fragments pervade every ocean, entering the food chain and accumulating in marine organisms at every trophic level.',
    imgId: 'discovery-microplastics-img-g1f5h9',
    align: 'right',
  },
]

const Discoveries = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="discoveries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-cosmos-primary">
            Breakthroughs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-cosmos-text">
            Landmark <span className="text-cosmos-secondary">Discoveries</span>
          </h2>
          <div className="section-glow-line mb-6" />
          <p className="text-cosmos-muted max-w-2xl mx-auto text-lg">
            Pioneering moments that transformed our understanding of the microscopic world.
          </p>
        </div>

        {/* Discovery items */}
        <div className="space-y-24">
          {discoveries.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="glow-card overflow-hidden">
                  <div className="img-overlay aspect-[16/10]">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}] microscopic science`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <span
                  id={item.yearId}
                  className="text-6xl md:text-7xl font-extralight text-cosmos-primary/20 stat-glow block mb-2"
                >
                  {item.year}
                </span>
                <h3 id={item.titleId} className="text-2xl md:text-3xl font-bold text-cosmos-text mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted leading-relaxed text-base">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-cosmos-primary text-sm font-medium">
                  <span className="w-8 h-px bg-cosmos-primary" />
                  Discovery #{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discoveries
