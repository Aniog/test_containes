import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/shared/PageHero'
import { Section } from '@/components/ui/Section'
import CtaBanner from '@/components/shared/CtaBanner'
import { BLOG_POSTS } from '@/content'
import { format, parseISO } from 'date-fns'
import { Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function Blog() {
  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))]
  const [active, setActive] = useState('All')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const posts =
    active === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === active)

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Sourcing insights and guides"
        description="Practical articles on supplier verification, quality control, and shipping from China — written for buyers, not theory."
      />

      <Section>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={containerRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={PLACEHOLDER}
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-accent uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-border">•</span>
                  <span>{format(parseISO(post.date), 'MMM d, yyyy')}</span>
                </div>
                <h3 id={post.titleId} className="mt-3 text-lg font-bold text-foreground leading-snug">
                  {post.title}
                </h3>
                <p id={post.descId} className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Have a sourcing question?"
        description="We are happy to help. Send us your product details and we will get back to you within one business day."
      />
    </>
  )
}
