import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import CtaBand from '@/components/common/CtaBand'
import { blogPosts } from '@/data/site'
import { format, parseISO } from 'date-fns'

export default function Blog() {
  const containerRef = useRef(null)
  const [featured, ...rest] = blogPosts

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guidance for sourcing from China"
        description="Field-tested advice on supplier verification, quality control, shipping, and negotiation — written by our sourcing team."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 items-center rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="overflow-hidden rounded-lg bg-slate-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-slate px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                {featured.category}
              </span>
              <h2
                id={featured.titleId}
                className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-brand-ink"
              >
                {featured.title}
              </h2>
              <p
                id={featured.descId}
                className="mt-3 text-base leading-relaxed text-brand-muted"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {format(parseISO(featured.date), 'MMM d, yyyy')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-600"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-navy">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 id={post.titleId} className="text-lg font-bold text-brand-ink">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-brand-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
