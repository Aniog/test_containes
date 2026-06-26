import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/common/PageHeader'
import Badge from '@/components/ui/Badge'
import Icon from '@/components/ui/Icon'
import CtaBanner from '@/components/common/CtaBanner'
import { BLOG_POSTS } from '@/data/siteContent'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing insights"
        description="Clear, no-nonsense guides on sourcing from China — supplier verification, quality control, negotiation, and shipping."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link
            to="/contact"
            className="group mb-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-accent hover:shadow-md lg:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src={PLACEHOLDER}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-3">
                <Badge variant="accent">{featured.category}</Badge>
                <span className="text-xs text-ink-muted">{featured.readTime}</span>
              </div>
              <h2 id={featured.titleId} className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-base leading-relaxed text-ink-muted">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                {format(parseISO(featured.date), 'MMMM d, yyyy')}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read article
                <Icon name="ArrowRight" className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/contact"
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-accent hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="slate">{post.category}</Badge>
                    <span className="text-xs text-ink-muted">{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="mt-3 text-lg font-bold text-ink">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-ink-muted">
                    {format(parseISO(post.date), 'MMM d, yyyy')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a sourcing question we should write about?"
        description="Send it over. In the meantime, get a free quote for your project."
      />
    </div>
  )
}
