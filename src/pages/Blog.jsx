import { useEffect, useRef } from 'react'
import { format, parseISO } from 'date-fns'
import { Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero.jsx'
import CtaBand from '@/components/CtaBand.jsx'
import { BLOG_POSTS } from '@/data/site.js'

export default function Blog() {
  const containerRef = useRef(null)
  const [featured, ...rest] = BLOG_POSTS

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for importing from China"
        subtitle="No fluff — field notes on supplier verification, quality control, shipping, and sourcing strategy from the team on the ground."
        id="blog-title"
        subId="blog-subtitle"
        bgId="blog-hero-bg-n1"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 lg:aspect-auto lg:h-full">
              <img
                alt={featured.title}
                data-strk-img-id={`${featured.imgId}-featured`}
                data-strk-img={`[${featured.id}-excerpt] [${featured.id}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-medium text-brand-700">
                  {featured.category}
                </span>
                <span className="text-slate-500">{format(parseISO(featured.date), 'MMMM d, yyyy')}</span>
                <span className="inline-flex items-center gap-1 text-slate-500"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
              </div>
              <h2 id={`${featured.id}-title`} className="mt-4 text-2xl font-bold leading-snug tracking-tight text-slate-900 md:text-3xl">
                {featured.title}
              </h2>
              <p id={`${featured.id}-excerpt`} className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                {featured.excerpt}
              </p>
              <span className="mt-5 text-sm font-semibold text-brand-600">Read article →</span>
            </div>
          </article>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.id}-excerpt] [${p.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-medium text-brand-700">
                      {p.category}
                    </span>
                    <span className="text-slate-500">{format(parseISO(p.date), 'MMM d, yyyy')}</span>
                  </div>
                  <h3 id={`${p.id}-title`} className="mt-3 text-base font-semibold leading-snug text-slate-900">
                    {p.title}
                  </h3>
                  <p id={`${p.id}-excerpt`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />{p.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer answers specific to your product?"
        subtitle="Guides are general. Your inquiry gets a reply tailored to your product, volume, and timeline — within one business day."
      />
    </div>
  )
}
