import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'
import { cn } from '@/lib/utils'

const categories = ['All', 'Sourcing', 'Quality Control', 'Logistics', 'Compliance']

const posts = [
  {
    slug: 'verify-chinese-factory',
    category: 'Sourcing',
    title: 'How to Verify a Chinese Factory Before You Pay a Deposit',
    excerpt:
      'A practical checklist: business license checks, manufacturer vs. trader red flags, and what a real on-site audit should cover — with examples from recent audits.',
    date: '2026-07-14',
    readTime: '8 min read',
    imgId: 'blog-verify-3a72d9',
  },
  {
    slug: 'aql-explained',
    category: 'Quality Control',
    title: 'AQL Explained: How Pre-Shipment Inspections Actually Work',
    excerpt:
      'What AQL 2.5 means in practice, how sample sizes are chosen, and how to read an inspection report so you can make a confident ship-or-rework decision.',
    date: '2026-06-30',
    readTime: '10 min read',
    imgId: 'blog-aql-6e41b5',
  },
  {
    slug: 'golden-sample',
    category: 'Quality Control',
    title: 'Why a Golden Sample Is Your Cheapest Insurance Policy',
    excerpt:
      'Most quality disputes come from vague specifications. Here is how to build a golden sample and specification sheet that factories can actually follow.',
    date: '2026-06-12',
    readTime: '6 min read',
    imgId: 'blog-golden-9c25f8',
  },
  {
    slug: 'fob-vs-exw',
    category: 'Logistics',
    title: 'FOB vs. EXW vs. DDP: Choosing the Right Incoterm for China Orders',
    excerpt:
      'The incoterm you choose decides who controls freight, who pays for what, and where risk transfers. A decision framework for first-time and scaling importers.',
    date: '2026-05-28',
    readTime: '7 min read',
    imgId: 'blog-incoterms-1f83c6',
  },
  {
    slug: 'consolidate-shipments',
    category: 'Logistics',
    title: 'Buying from Multiple Factories? How Consolidation Cuts Landed Costs',
    excerpt:
      'Shared containers, unified document packages, and coordinated QC trips — how multi-factory consolidation works and when it is worth it.',
    date: '2026-05-09',
    readTime: '6 min read',
    imgId: 'blog-consolidate-4d67a1',
  },
  {
    slug: 'ce-certification-china',
    category: 'Compliance',
    title: 'CE Certification for Chinese Electronics: What Importers Must Check',
    excerpt:
      'How to verify a test report is real, which directives apply to your product, and why "CE" on a datasheet is a starting point — not proof.',
    date: '2026-04-21',
    readTime: '9 min read',
    imgId: 'blog-ce-7b52e4',
  },
]

const Blog = () => {
  const containerRef = useRef(null)
  const [active, setActive] = useState('All')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)
  const [featured, ...rest] = filtered

  return (
    <div ref={containerRef}>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Blog"
            title="Practical notes on sourcing from China"
            description="No fluff, no recycled listicles — field experience from factory floors, inspection sites, and container yards, written for importers."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === cat
                    ? 'bg-brand-600 text-white'
                    : 'border border-line bg-white text-slate-body hover:border-brand-300 hover:text-brand-700',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured && (
            <article className="group grid overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2">
              <div className="aspect-[16/9] overflow-hidden bg-paper lg:aspect-auto lg:h-full">
                <img
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[blog-${featured.slug}-excerpt] [blog-${featured.slug}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                    {featured.category}
                  </span>
                  <span className="text-sm text-slate-500">Featured</span>
                </div>
                <h2 id={`blog-${featured.slug}-title`} className="mt-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {featured.title}
                </h2>
                <p id={`blog-${featured.slug}-excerpt`} className="mt-4 text-base leading-relaxed text-slate-body">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(featured.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </article>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-paper">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.slug}-excerpt] [blog-${post.slug}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                    {post.category}
                  </span>
                  <h3 id={`blog-${post.slug}-title`} className="mt-3 text-lg font-semibold leading-snug text-ink">
                    {post.title}
                  </h3>
                  <p id={`blog-${post.slug}-excerpt`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-body">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-line bg-paper p-8 md:p-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-ink md:text-2xl">
                  Get sourcing insights in your inbox
                </h2>
                <p className="mt-2 text-base text-slate-body">
                  One practical email per month. No spam, unsubscribe anytime.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    console.log('[SSourcing China] Newsletter signup:', email)
    setDone(true)
  }

  if (done) {
    return (
      <p className="rounded-lg bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
        Subscribed — check your inbox to confirm.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Subscribe <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  )
}

export default Blog
