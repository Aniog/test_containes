import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import { BLOG_POSTS } from '@/data/content'

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for sourcing from China"
        description="Clear, no-nonsense articles on supplier verification, quality control, and shipping to help you import with confidence."
        bgId="blog-hero-bg-6e5f"
        queryIds="[blog-hero-desc] [blog-hero-title]"
      />
      <span id="blog-hero-title" className="hidden">Sourcing from China blog</span>
      <span id="blog-hero-desc" className="hidden">
        Articles on supplier verification, quality inspection, freight, and working with a sourcing agent.
      </span>

      <section ref={ref} className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/9] w-full bg-muted">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="mt-2 text-lg font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-2 flex-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Have a sourcing question?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              If you have a specific product or supplier in mind, request a free quote and our team will help directly.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-base font-semibold text-cta-foreground shadow-sm transition hover:bg-amber-400"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
