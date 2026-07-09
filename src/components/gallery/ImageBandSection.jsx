import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const images = [
  {
    id: 'band-cell-division',
    title: 'Cell Division',
    desc: 'Fluorescent microscopy of mitosis cell division process',
    imgId: 'band-celldiv-2a7f9c',
    titleId: 'band-cell-division-title',
    descId: 'band-cell-division-desc',
  },
  {
    id: 'band-snowflake',
    title: 'Snowflake Crystal',
    desc: 'Macro photography of a single snowflake ice crystal',
    imgId: 'band-snowflake-8d3b1e',
    titleId: 'band-snowflake-title',
    descId: 'band-snowflake-desc',
  },
  {
    id: 'band-plankton',
    title: 'Plankton',
    desc: 'Bioluminescent marine plankton glowing in dark ocean water',
    imgId: 'band-plankton-5c9a4f',
    titleId: 'band-plankton-title',
    descId: 'band-plankton-desc',
  },
  {
    id: 'band-fungus',
    title: 'Fungal Spores',
    desc: 'Colorful microscopic fungal spores releasing into the air',
    imgId: 'band-fungus-7e2d6b',
    titleId: 'band-fungus-title',
    descId: 'band-fungus-desc',
  },
  {
    id: 'band-mineral',
    title: 'Mineral Thin Section',
    desc: 'Polarized light microscopy of a thin rock section showing mineral crystals',
    imgId: 'band-mineral-1f8c3a',
    titleId: 'band-mineral-title',
    descId: 'band-mineral-desc',
  },
]

const ImageBandSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-12 bg-midnight overflow-hidden">
      <div className="flex gap-4 animate-none">
        {images.map((img) => (
          <div key={img.id} className="flex-shrink-0 w-72 md:w-96 relative group">
            <div className="relative rounded-xl overflow-hidden">
              <img
                alt={img.title}
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.descId}] [${img.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 id={img.titleId} className="font-heading text-sm font-semibold text-text-primary">
                  {img.title}
                </h4>
                <p id={img.descId} className="text-text-secondary text-xs mt-1">
                  {img.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageBandSection
