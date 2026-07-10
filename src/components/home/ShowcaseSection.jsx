import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const showcaseItems = [
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    description: 'Thousands of tiny overlapping scales create iridescent colors through light diffraction rather than pigment.',
    imgId: 'showcase-butterfly-m3n8p1',
    titleId: 'showcase-butterfly-title',
    descId: 'showcase-butterfly-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    description: 'Each snowflake forms a unique hexagonal crystal structure as water molecules bond in freezing temperatures.',
    imgId: 'showcase-snowflake-q5r2s7',
    titleId: 'showcase-snowflake-title',
    descId: 'showcase-snowflake-desc',
  },
  {
    id: 'plant-cell',
    title: 'Plant Cell Division',
    description: 'Mitosis captured in real-time showing chromosomes separating during cellular reproduction.',
    imgId: 'showcase-plantcell-t9u4v6',
    titleId: 'showcase-plantcell-title',
    descId: 'showcase-plantcell-desc',
  },
]

const ShowcaseSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="showcase-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Featured Discoveries
          </h2>
          <p id="showcase-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Remarkable close-up views that reveal the hidden complexity of everyday objects
          </p>
        </div>

        <div className="space-y-16">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-slate-700/50">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [showcase-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-2/5">
                <h3 id={item.titleId} className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-lg text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
