import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import CTABand from '@/components/shared/CTABand'
import { BLOG_POSTS } from '@/data/content'
import strkImgConfig from '@/strk-img-config.json'

const BlogPost = () => {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!post) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900">Article not found</h1>
          <p className="mt-4 text-slate-600">The article you are looking for does not exist.</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the blog
          </Link>
        </div>
      </section>
    )
  }

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div ref={containerRef}>
      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-900">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">{post.category}</span>
            <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
          <h1 id={`post-title-${post.slug}`} className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {post.title}
          </h1>
          <p id={`post-lede-${post.slug}`} className="mt-5 text-lg leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            <img
              alt={post.title}
              className="aspect-[16x9] w-full object-cover"
              data-strk-img-id={`blog-hero-${post.slug}-g7`}
              data-strk-img={`[post-lede-${post.slug}] [post-title-${post.slug}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="mt-10 space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-700 md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8">
            <h2 className="text-xl font-bold text-slate-900">Need help applying this to your supply chain?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We run supplier verification, inspections, and shipping coordination for
              overseas buyers every week. Tell us about your product and get a free
              assessment.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
            >
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to={`/blog/${other.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                  {other.category}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 group-hover:text-blue-800">
                  {other.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-800">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  )
}

export default BlogPost
