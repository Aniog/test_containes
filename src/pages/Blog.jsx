import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'

const featured = {
  category: 'Sourcing Guide',
  title: 'How to find a reliable factory in China: a step-by-step checklist',
  excerpt:
    'A practical, written process for vetting Chinese factories — from the first search to the first order. Includes a downloadable supplier scorecard.',
  read: '12 min read',
  author: 'Wei Chen',
  date: 'Jun 4, 2026',
}

const posts = [
  {
    category: 'Quality Control',
    title: 'AQL sampling explained: which standard should you use?',
    excerpt:
      'A simple guide to AQL 1.0, 2.5, and 4.0 — and how to choose the right level for your product category.',
    read: '8 min read',
    date: 'May 21, 2026',
  },
  {
    category: 'Shipping',
    title: 'FOB vs CIF vs DDP: how to pick the right shipping term',
    excerpt:
      'The three Incoterms matter for cost, risk, and customs. Here is how to decide for your next order.',
    read: '6 min read',
    date: 'May 8, 2026',
  },
  {
    category: 'Sourcing Guide',
    title: 'What to ask a Chinese factory on the first call',
    excerpt:
      'A 12-question script we use on every first call with a potential supplier. It surfaces 80% of the red flags.',
    read: '7 min read',
    date: 'Apr 24, 2026',
  },
  {
    category: 'Compliance',
    title: 'CE, RoHS, REACH, FCC: which certifications do you actually need?',
    excerpt:
      'A category-by-category cheat sheet for the most common product certifications in the US, EU, and UK.',
    read: '10 min read',
    date: 'Apr 10, 2026',
  },
  {
    category: 'Negotiation',
    title: 'How to negotiate with Chinese suppliers without damaging the relationship',
    excerpt:
      'Practical negotiation patterns we have seen work over 1,000+ supplier meetings — and the ones that backfire.',
    read: '9 min read',
    date: 'Mar 30, 2026',
  },
  {
    category: 'Logistics',
    title: 'A practical guide to consolidating LCL shipments into FCL',
    excerpt:
      'When to consolidate, how to plan a 90-day buffer, and what to expect in customs when switching from LCL to FCL.',
    read: '11 min read',
    date: 'Mar 14, 2026',
  },
  {
    category: 'Private Label',
    title: 'Setting up a private-label product line in China: the realistic timeline',
    excerpt:
      'From the first brief to the first container. A real timeline based on a recent apparel program.',
    read: '8 min read',
    date: 'Feb 28, 2026',
  },
]

const categories = [
  'All',
  'Sourcing Guide',
  'Quality Control',
  'Shipping',
  'Compliance',
  'Negotiation',
  'Private Label',
  'Logistics',
]

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog & Guides"
        headline="Practical writing on China sourcing, QC, and shipping"
        subline={'Short, specific articles based on real projects — not generic "Top 10 Tips" content. Written by the team that runs inspections on the factory floor.'}
        ctaLabel="Get a Free Sourcing Quote"
        ctaTo="/contact"
        bgQuery="[page-hero-headline] [page-hero-subline]"
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors ${
                  i === 0
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-ink-soft border-hairline hover:border-hairline-hover'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <article className="mt-8 rounded-2xl border border-hairline bg-white shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto">
              <div
                className="w-full h-full"
                data-strk-bg-id="blog-featured-bg-72be1a"
                data-strk-bg="[page-hero-headline] [page-hero-subline]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1200"
              />
            </div>
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-center">
              <span className="badge-soft self-start">{featured.category}</span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-navy leading-tight">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-soft leading-relaxed">{featured.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-ink">
                <span className="inline-flex items-center gap-1.5">
                  <User2 className="w-3.5 h-3.5" />
                  {featured.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.read}
                </span>
              </div>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-primary font-semibold hover:text-primary-hover self-start">
                Read the guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p, idx) => (
              <article
                key={p.title}
                className="rounded-2xl border border-hairline bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] relative">
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`blog-post-bg-${idx}-${Math.random().toString(36).slice(2, 7)}`}
                    data-strk-bg="[page-hero-headline] [page-hero-subline]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="badge-soft self-start">{p.category}</span>
                  <h3 className="mt-3 text-lg font-semibold text-brand-navy leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-hairline flex items-center justify-between text-xs text-muted-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {p.read}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button type="button" className="btn-secondary">
              Load more articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow">Subscribe</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">
                One email a month with a practical guide
              </h2>
              <p className="mt-4 text-ink-soft">
                A short, practical email once a month with a sourcing guide, a
                QC checklist, or a logistics tip. No marketing fluff.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm sourcePage="blog" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
