import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

function PageHero({
  eyebrow,
  title,
  titleId,
  description,
  descriptionId,
  primaryAction,
  secondaryAction,
  imageId,
  visualCue = 'Factory verification, supplier search, quality inspection, production follow-up, and export shipping coordination in China',
}) {
  const sectionRef = useRef(null)
  const visualCueId = `${imageId}-visual`

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [descriptionId, imageId, titleId, visualCue])

  return (
    <section ref={sectionRef} className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            {eyebrow}
          </span>
          <div className="space-y-4">
            <h1 id={titleId} className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p id={descriptionId} className="max-w-2xl text-lg leading-8 text-slate-700">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryAction ? (
              <Link
                to={primaryAction.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {secondaryAction ? (
              <Link
                to={secondaryAction.to}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
          <p id={visualCueId} className="sr-only">
            {visualCue}
          </p>
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id={imageId}
            data-strk-bg={`[${visualCueId}] [${descriptionId}] [${titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/40 to-transparent" />
          <div className="relative flex h-full flex-col justify-end gap-3 p-8 text-white">
            <p className="max-w-md text-sm font-medium uppercase tracking-[0.18em] text-blue-100">
              Supplier search, verification, quality control, production follow-up, and shipping coordination
            </p>
            <p className="max-w-md text-base leading-7 text-slate-100">
              Professional support for overseas buyers sourcing from China.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
