import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { formatDate } from '@/lib/dates'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import { BLOG_POSTS } from '@/content/site'

const POST_IMAGES = {
  'verify-china-supplier-2026': 'factory verification document with stamp on a desk',
  'aql-inspection-standards': 'quality inspector using calipers to measure a product',
  'fob-vs-exw-vs-ddp': 'shipping containers and freight documents',
  'common-defects-ceramics': 'ceramic dinnerware with quality defects close up',
  'private-label-packaging': 'private label packaging and custom retail boxes',
  'reduce-freight-cost-2026': 'container ship at a port for freight cost reduction',
  'bsci-sedex-explained': 'social compliance audit document on a desk',
  'first-time-importer-checklist': 'importer paperwork checklist and passport',
}

const Hero = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <section ref={ref} className="bg-white border-b border-slate-200">
      <div className="container-content py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="kicker">Blog</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
            Practical articles on China sourcing, QC, and shipping
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-600 leading-relaxed">
            We write the articles we wish we had found when we were first learning the trade. No hype, no SEO filler — just practical guidance based on real projects.
          </p>
        </div>
      </div>
    </section>
  )
}

const Featured = ({ post, idx }) => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <article ref={ref} className="card p-0 overflow-hidden flex flex-col h-full">
      <div className="aspect-[16/9] overflow-hidden bg-slate-100">
        <img
          data-strk-img-id={`blog-feat-${post.id}-img`}
          data-strk-img={`[post-${post.id}-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={POST_IMAGES[post.id]}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-primary-500 mb-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent-50 text-accent-700 font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span aria-hidden>•</span>
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(post.date)}</span>
          <span aria-hidden>•</span>
          <Clock className="w-3.5 h-3.5" />
          <span>{post.readingTime}</span>
        </div>
        <h2 id={`post-${post.id}-title`} className="text-xl md:text-2xl font-bold text-primary leading-snug mb-2">
          {post.title}
        </h2>
        <p className="text-sm md:text-base text-primary-600 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Read article
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  )
}

const Card = ({ post }) => (
  <article className="card flex flex-col h-full p-5 md:p-6">
    <div className="flex items-center gap-2 text-xs text-primary-500 mb-3">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-primary-700 font-semibold uppercase tracking-wider">
        {post.category}
      </span>
    </div>
    <h3 className="text-base md:text-lg font-semibold text-primary leading-snug mb-2">
      {post.title}
    </h3>
    <p className="text-sm text-primary-600 leading-relaxed flex-1">
      {post.excerpt}
    </p>
    <div className="mt-4 flex items-center gap-2 text-xs text-primary-500">
      <Calendar className="w-3.5 h-3.5" />
      <span>{formatDate(post.date)}</span>
      <span aria-hidden>•</span>
      <Clock className="w-3.5 h-3.5" />
      <span>{post.readingTime}</span>
    </div>
  </article>
)

const Blog = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  const [first, ...rest] = BLOG_POSTS
  return (
    <>
      <Hero />

      <Section>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          <div className="lg:col-span-2">
            <Featured post={first} idx={0} />
          </div>
          <div className="lg:col-span-1">
            <Featured post={rest[0]} idx={1} />
          </div>
        </div>
      </Section>

      <Section soft>
        <SectionHeader
          kicker="All articles"
          title="More from the blog"
          description="Sorted with the most recent first."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.slice(1).map((p) => (
            <Card key={p.id} post={p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
            Have a question we should answer on the blog?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            We take questions from buyers and turn them into practical articles. If you have a sourcing, QC, or shipping question, send it our way.
          </p>
          <Link to="/contact" className="btn-primary mt-7">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Section soft>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="kicker">Get in touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Ready to start a project?
            </h2>
            <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
              Send a brief description of what you want to source. We will reply within one business day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePage="blog" />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Blog
