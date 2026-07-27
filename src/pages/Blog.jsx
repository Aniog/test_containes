import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { CalendarDays, Clock3, ArrowRight } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import CTABand from '@/components/CTABand'
import StrkImage from '@/components/StrkImage'
import { BLOG_POSTS } from '@/data/content'

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Blog</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          Practical notes on sourcing from China
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          Short, practical articles on supplier verification, quality control, payments
          and shipping — written from daily experience on the factory floor.
        </p>
      </div>
    </section>
  )
}

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div ref={containerRef}>
      <PageHero />
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featured.id}`}
            className="group grid overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
          >
            <div className="aspect-[16/9] overflow-hidden bg-slate-100 lg:aspect-auto">
              <StrkImage
                imgId={`blog-${featured.id}-img`}
                query={`[blog-${featured.id}-excerpt] [blog-${featured.id}-title]`}
                ratio="16x9"
                width="1000"
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Featured · {featured.category}
              </p>
              <h2 id={`blog-${featured.id}-title`} className="mt-3 text-2xl font-bold tracking-tight text-ink group-hover:text-brand md:text-3xl">
                {featured.title}
              </h2>
              <p id={`blog-${featured.id}-excerpt`} className="mt-3 text-sm leading-relaxed text-slate-600">
                {featured.excerpt}
              </p>
              <p className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {format(parseISO(featured.date), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </p>
            </div>
          </Link>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <StrkImage
                    imgId={`blog-${post.id}-img`}
                    query={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                    ratio="3x2"
                    width="700"
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{post.category}</p>
                  <h2 id={`blog-${post.id}-title`} className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p id={`blog-${post.id}-excerpt`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  )
}
