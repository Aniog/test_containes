import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import PageHero from '@/components/shared/PageHero'
import CTABand from '@/components/shared/CTABand'
import { BLOG_POSTS } from '@/data/content'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
  <div ref={containerRef}>
    <PageHero eyebrow="Blog" title="Practical guides to sourcing from China">
      <p>
        No theory and no hype — practical notes from the factory floor on supplier
        verification, quality control, and shipping, written for overseas buyers.
      </p>
    </PageHero>

    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[3/2] w-full overflow-hidden bg-slate-100">
                <img
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-strk-img-id={`blog-thumb-${post.slug}-f6`}
                  data-strk-img={`[blog-excerpt-${post.slug}] [blog-title-${post.slug}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-800">{post.category}</span>
                  <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
                </div>
                <h2 id={`blog-title-${post.slug}`} className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-800">
                    {post.title}
                  </Link>
                </h2>
                <p id={`blog-excerpt-${post.slug}`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-800 hover:text-blue-900"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      title="Reading about sourcing is a good start. Doing it right is better."
      text="Send us your product details and get a free, practical assessment of your sourcing options."
    />
  </div>
  )
}

export default Blog
