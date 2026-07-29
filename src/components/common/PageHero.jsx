import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PageHero = ({
  eyebrow,
  title,
  description,
  titleId,
  descriptionId,
  backgroundId,
  children,
}) => {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) {
      return undefined
    }

    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <section ref={heroRef} className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <div
            className="absolute inset-0 opacity-50"
            data-strk-bg-id={backgroundId}
            data-strk-bg={`[${descriptionId}] [${titleId}]`}
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              {eyebrow}
            </p>
            <h1 id={titleId} className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p id={descriptionId} className="mt-6 max-w-3xl text-base leading-7 text-slate-200 md:text-xl">
              {description}
            </p>
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
