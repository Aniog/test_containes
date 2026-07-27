import { useEffect, useRef } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { blogPosts } from '@/data/content'
import PageHeader from '@/components/sections/PageHeader'
import CtaBanner from '@/components/sections/CtaBanner'

const formatDate = (iso) => {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Blog() {
  const ref = useRef(null)
  const [featured, ...rest] = blogPosts

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        subtitle="Guides and tips on supplier verification, quality control, shipping, and importing from China — written for buyers, not theory."
      />

      <section ref={ref} className="bg-surface">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Featured post */}
          <article className="grid gap-8 lg:grid-cols-2 lg:items-center rounded-xl border border-border-base bg-white overflow-hidden shadow-sm">
            <div className="aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-7 lg:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary-accent">
                  {featured.category}
                </span>
                <span className="text-muted">
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2
                id={featured.titleId}
                className="mt-4 text-2xl lg:text-3xl font-bold text-ink"
              >
                {featured.title}
              </h2>
              <p
                id={featured.descId}
                className="mt-3 text-base leading-relaxed text-slate-body"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" />
                <span>{featured.readTime}</span>
              </div>
            </div>
          </article>

          {/* Rest of posts */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border-base bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary-accent">
                      {post.category}
                    </span>
                    <span className="text-muted">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="mt-3 text-lg font-semibold text-ink">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm leading-relaxed text-slate-body flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-accent">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need help applying these insights?"
        subtitle="Turn reading into action. Tell us what you want to source and we will help you take the next step."
      />
    </>
  )
}
