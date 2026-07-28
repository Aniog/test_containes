import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ButtonLink from './ButtonLink'

function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  theme = 'light',
  idPrefix,
  visualCue = 'china factory quality inspection shipping coordination',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const dark = theme === 'dark'

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden ${dark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'}`}
    >
      <p id={`${idPrefix}-visual-cue`} className="hidden">
        {visualCue}
      </p>
      <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900' : 'bg-gradient-to-br from-white via-slate-50 to-slate-100'}`} />
      <div className={`absolute -left-24 top-0 h-64 w-64 rounded-full blur-3xl ${dark ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
      <div className={`absolute -right-16 bottom-0 h-72 w-72 rounded-full blur-3xl ${dark ? 'bg-cyan-400/10' : 'bg-cyan-400/5'}`} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div className="max-w-3xl">
          <p className={`text-sm font-medium uppercase tracking-[0.18em] ${dark ? 'text-emerald-300' : 'text-emerald-700'}`}>
            {eyebrow}
          </p>
          <h1 id={`${idPrefix}-title`} className={`mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-slate-950'}`}>
            {title}
          </h1>
          <p id={`${idPrefix}-description`} className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={primaryCta.to} variant={dark ? 'primary' : 'primary'}>
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink to={secondaryCta.to} variant={dark ? 'dark' : 'secondary'}>
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <div className={`rounded-3xl border p-5 shadow-xl shadow-slate-950/10 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
          <img
            className="h-[320px] w-full rounded-[1.5rem] object-cover"
            alt="Sourcing quality control visit"
            data-strk-img-id={`${idPrefix}-hero-img-f4c91e`}
            data-strk-img={`[${idPrefix}-visual-cue]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="grid gap-4 px-2 pb-2 pt-5 sm:grid-cols-3">
            <div>
              <p className={`text-xs font-medium uppercase tracking-[0.18em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Focus
              </p>
              <p className={`mt-2 text-sm font-medium ${dark ? 'text-white' : 'text-slate-900'}`}>
                Reliable suppliers
              </p>
            </div>
            <div>
              <p className={`text-xs font-medium uppercase tracking-[0.18em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Control
              </p>
              <p className={`mt-2 text-sm font-medium ${dark ? 'text-white' : 'text-slate-900'}`}>
                Quality and timelines
              </p>
            </div>
            <div>
              <p className={`text-xs font-medium uppercase tracking-[0.18em] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                Outcome
              </p>
              <p className={`mt-2 text-sm font-medium ${dark ? 'text-white' : 'text-slate-900'}`}>
                Clear sourcing decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
