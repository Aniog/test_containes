import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import StockImage from '@/components/shared/StockImage'
import InquiryForm from '@/components/shared/InquiryForm'
import { blogPosts } from '@/data/content'

const featuredId = 'how-to-verify'

export default function Blog() {
  const categories = useMemo(() => {
    const set = new Set(['All'])
    blogPosts.forEach((p) => set.add(p.category))
    return Array.from(set)
  }, [])

  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return blogPosts
    return blogPosts.filter((p) => p.category === active)
  }, [active])

  const featured = blogPosts.find((p) => p.id === featuredId) || blogPosts[0]

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for overseas buyers sourcing from China"
        description="Working notes from real sourcing projects — covering supplier verification, QC, freight, and the small details that decide whether an order goes smoothly."
        image={{
          imgId: 'blog-hero-bg-8e2a3d',
          query: '[blog-hero-title]',
        }}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-page">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-mist rounded-2xl overflow-hidden">
            <div className="lg:col-span-7">
              <StockImage
                imgId={`blog-featured-${featured.id}-img`}
                query={`[blog-featured-${featured.id}-title]`}
                ratio="3x2"
                width={1100}
                alt=""
                className="w-full h-full"
                rounded="rounded-none"
              />
            </div>
            <div className="lg:col-span-5 p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                Featured &middot; {featured.category}
              </p>
              <h2
                id={`blog-featured-${featured.id}-title`}
                className="mt-3 text-2xl md:text-3xl font-bold text-brand-ink leading-tight"
              >
                {featured.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-brand-muted leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {format(parseISO(featured.date), 'MMM d, yyyy')}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-2"
              >
                Read the article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <SectionHeader
              eyebrow="Latest Articles"
              title="More from the SSourcing blog"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = active === c
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    className={`h-9 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-brand-ink text-white'
                        : 'bg-brand-mist text-brand-muted hover:bg-brand-line'
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((post, idx) => (
              <article
                key={post.id}
                className="bg-white border border-brand-line rounded-xl overflow-hidden flex flex-col hover:shadow-md hover:border-brand-ink/30 transition-all"
              >
                <StockImage
                  imgId={`blog-card-${post.id}-${idx}`}
                  query={`[blog-card-${post.id}-title]`}
                  ratio="3x2"
                  width={600}
                  alt=""
                  rounded="rounded-none"
                />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                    {post.category}
                  </p>
                  <h3
                    id={`blog-card-${post.id}-title`}
                    className="mt-2 text-lg md:text-xl font-semibold text-brand-ink leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-brand-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-brand-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-brand-mist">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Newsletter"
                title="Get sourcing insights by email"
                description="One short email per month with practical notes on supplier verification, QC, and shipping — no fluff."
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thanks. We will be in touch when the newsletter launches.')
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 h-12 px-4 rounded-md border border-brand-line bg-white text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="mt-3 text-xs text-brand-muted">
                Unsubscribe anytime. We do not share your email.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm source="blog" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}