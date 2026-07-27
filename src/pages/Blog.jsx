import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CtaBand from '@/components/shared/CtaBand'
import { BLOG_POSTS } from '@/data/site'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const [featured, ...rest] = BLOG_POSTS

  return (
    <div ref={containerRef}>
      <section className="bg-primary-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-200">Blog</p>
          <h1 id="blog-hero-title" className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Practical Guides for China Importers
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            No fluff, no recycled listicles. Field notes on sourcing, verification, QC, and shipping from the team that does this work every day.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100 lg:aspect-auto lg:h-full">
              <img
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-strk-img-id={`blog-featured-${featured.id}`}
                data-strk-img={`[blog-featured-excerpt] [blog-featured-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {featured.category}
              </span>
              <h2 id="blog-featured-title" className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {featured.title}
              </h2>
              <p id="blog-featured-excerpt" className="mt-3 leading-relaxed text-slate-600">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {format(parseISO(featured.date), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-600">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </article>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={`blog-post-${post.id}`}
                    data-strk-img={`[blog-excerpt-${post.id}] [blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                    {post.category}
                  </span>
                  <h2 id={`blog-title-${post.id}`} className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                    {post.title}
                  </h2>
                  <p id={`blog-excerpt-${post.id}`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500">
            New guides are published monthly. Have a topic you want covered?{' '}
            <Link to="/contact" className="font-semibold text-primary-600 hover:text-primary-700">
              Let us know
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Reading about sourcing is step one"
        text="When you're ready to act, send us your product brief — we'll turn it into a concrete sourcing plan."
      />
    </div>
  )
}
