import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import CTAButton from './CTAButton.jsx?ssourcing=20260728'

const PageHeader = ({ eyebrow, title, description, imageId, imageQuery, caption }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [imageId, imageQuery])

  return (
    <section ref={containerRef} className="bg-white py-16 text-slate-950 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">{eyebrow}</p>
          <h1 id={`${imageId}-title`} className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p id={`${imageId}-desc`} className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            {description}
          </p>
          <CTAButton href="/contact" className="mt-8">Get a Free Sourcing Quote</CTAButton>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <img
            alt={caption}
            className="h-72 w-full object-cover sm:h-80"
            data-strk-img-id={imageId}
            data-strk-img={imageQuery || `[${imageId}-desc] [${imageId}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={getStrkImageUrl(imageId)}
          />
          <p className="border-t border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700">{caption}</p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
