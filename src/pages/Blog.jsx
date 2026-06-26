import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { format, parseISO } from 'date-fns'
import { ArrowRight, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import { BLOG_POSTS } from '@/data/content.js'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        breadcrumb="Blog"
        title="Practical insights for B2B buyers importing from China"
        desc="No clickbait. Field notes, frameworks and checklists written by our sourcing team for buyers, brand owners and Amazon sellers."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured && (
            <article className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow grid lg:grid-cols-5">
              <div className="aspect-[16/9] lg:aspect-auto lg:col-span-3 overflow-hidden bg-slate-100">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}] ${featured.category} china sourcing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7 md:p-10 lg:col-span-2 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-red-600">
                  Featured · {featured.category}
                </span>
                <h2 id={featured.titleId} className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="mt-3 text-base text-slate-600 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                  <span>{format(parseISO(featured.date), 'MMM d, yyyy')}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          )}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article
                key={p.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}] ${p.category}`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-red-600">
                    {p.category}
                  </span>
                  <h3 id={p.titleId} className="mt-2 text-lg font-semibold text-slate-900 leading-snug">
                    {p.title}
                  </h3>
                  <p id={p.descId} className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{format(parseISO(p.date), 'MMM d, yyyy')}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
