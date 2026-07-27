import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link, useParams, Navigate } from 'react-router-dom'
import { CalendarDays, Clock3, ArrowLeft, ArrowRight } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import CTABand from '@/components/CTABand'
import StrkImage from '@/components/StrkImage'
import { BLOG_POSTS } from '@/data/content'

export default function BlogPost() {
  const { postId } = useParams()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [postId])
  const post = BLOG_POSTS.find((p) => p.id === postId)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const others = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div ref={containerRef}>
      <article className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">{post.category}</p>
          <h1 id={`post-${post.id}-title`} className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </p>
          <p id={`post-${post.id}-excerpt`} className="mt-6 border-l-4 border-accent bg-paper px-5 py-4 text-base leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-line">
            <StrkImage
              imgId={`post-${post.id}-img`}
              query={`[post-${post.id}-excerpt] [post-${post.id}-title]`}
              ratio="16x9"
              width="1200"
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-8 space-y-5">
            {post.content.map((block, i) =>
              block.type === 'h3' ? (
                <h3 key={i} className="pt-3 text-xl font-bold text-ink">
                  {block.text}
                </h3>
              ) : (
                <p key={i} className="text-base leading-relaxed text-slate-600">
                  {block.text}
                </p>
              )
            )}
          </div>
          <div className="mt-12 rounded-xl border border-line bg-paper p-6 md:p-8">
            <h2 className="text-xl font-bold text-ink">Need help applying this to your product?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Send us your sourcing question or project details. A specialist replies
              within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-white"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
      <section className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.id}`}
                className="group rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  )
}
