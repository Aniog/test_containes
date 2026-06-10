import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import { BLOG_POSTS } from '@/data/content.js'

const ALL_CATEGORY = 'All'

export default function Blog() {
  const [activeCat, setActiveCat] = useState(ALL_CATEGORY)
  const categories = [
    ALL_CATEGORY,
    ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
  ]
  const posts =
    activeCat === ALL_CATEGORY
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCat)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical guides for sourcing from China"
        description="Short, no-fluff articles written by our team — covering factory verification, quality control, shipping, and the small details that decide whether an order goes smoothly."
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = c === activeCat
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-brand-ink bg-brand-ink text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-brand-accent/40 hover:shadow-md"
              >
                <div
                  className="aspect-[16/10] w-full bg-brand-mist"
                  data-strk-img-id={`blog-${post.slug}-img-77b8`}
                  data-strk-img={`[blog-${post.slug}-title] [blog-${post.slug}-cat] ${post.category.toLowerCase()} ${post.title.toLowerCase()}`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                  alt={post.title}
                />
                <div className="flex flex-1 flex-col p-5">
                  <span
                    id={`blog-${post.slug}-cat`}
                    className="text-xs font-semibold uppercase tracking-wider text-brand-accent"
                  >
                    {post.category}
                  </span>
                  <h3
                    id={`blog-${post.slug}-title`}
                    className="mt-2 text-lg font-semibold leading-snug text-brand-ink"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <div className="mt-4 flex flex-1 items-end justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
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

          {posts.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
              No articles in this category yet.
            </div>
          )}
        </div>
      </section>

      <section className="section-pad-sm bg-brand-mist">
        <div className="container-page">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
              Want insights like this in your inbox?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
              We send a short, practical note every few weeks — no spam, no sales pitches. Just the things we wish more importers knew.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
              />
              <button type="submit" className="btn-primary">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              By subscribing you agree to receive occasional emails from SSourcing China. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
