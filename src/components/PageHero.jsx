import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const PageHero = ({ eyebrow, title, description, imageId, imageAlt, visualContext, imageQuery, children }) => {
  const heroRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [imageId])

  return (
    <section ref={heroRef} className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p id={`${imageId}-eyebrow`} className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
          <h1 id={`${imageId}-title`} className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">{title}</h1>
          <p id={`${imageId}-description`} className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
          <p id={`${imageId}-visual-context`} className="sr-only" aria-hidden="true">{visualContext || imageAlt}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
            {children}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/80">
          <img
            alt={imageAlt}
            className="h-[360px] w-full object-cover md:h-[440px]"
            data-strk-img-id={imageId}
            data-strk-img={imageQuery || `[${imageId}-visual-context] [${imageId}-description] [${imageId}-title] [${imageId}-eyebrow]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  )
}

export default PageHero
