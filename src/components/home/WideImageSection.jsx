import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const wideImages = [
  {
    id: 'ocean-micro',
    title: 'Ocean Microorganisms',
    description: 'Phytoplankton and zooplankton forming the base of marine food chains',
    imgId: 'wide-ocean-e5f1g8',
    titleId: 'wide-ocean-title',
    descId: 'wide-ocean-desc',
  },
  {
    id: 'soil-micro',
    title: 'Soil Ecosystem',
    description: 'A teaspoon of healthy soil contains billions of microorganisms working in harmony',
    imgId: 'wide-soil-h3i7j2',
    titleId: 'wide-soil-title',
    descId: 'wide-soil-desc',
  },
]

const WideImageSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="wide-section-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            Worlds Within Worlds
          </h2>
          <p id="wide-section-subtitle" className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Panoramic views into ecosystems invisible to the naked eye
          </p>
        </div>

        <div className="space-y-12">
          {wideImages.map((item) => (
            <div key={item.id} className="rounded-2xl overflow-hidden border border-slate-700/50">
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [wide-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-slate-800/50">
                <h3 id={item.titleId} className="text-xl font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-400">
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

export default WideImageSection
