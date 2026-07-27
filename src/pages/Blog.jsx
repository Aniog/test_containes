import { useEffect, useRef, useState } from 'react'
import PageHero from '@/components/shared/PageHero'
import { blogPosts } from '@/data/site'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { format, parseISO } from 'date-fns'
import { cn } from '@/lib/utils'

export default function Blog() {
  const [category, setCategory] = useState('All')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category])

  const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]
  const posts = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category)

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing knowledge for global buyers"
        subtitle="Guides on supplier verification, quality control, and shipping — written by our team on the ground in China."
        bgQueryId="blog-hero-bg-6f7g8h"
        bgQueryText="shipping containers port logistics China export"
      />

      <section ref={containerRef} className="section-pad bg-canvas">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                  category === c
                    ? 'border-navy bg-navy text-white'
                    : 'border-slate-300 bg-white text-muted hover:border-steel hover:text-steel'
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="badge bg-amber/10 text-amber-dark">{post.category}</span>
                    <span>{format(parseISO(post.date), 'MMM d, yyyy')}</span>
                  </div>
                  <h2 id={post.titleId} className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-steel">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <div className="mt-auto pt-4 text-xs text-muted">{post.readTime}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
