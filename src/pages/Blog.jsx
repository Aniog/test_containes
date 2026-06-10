import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import PageHero from '../components/site/PageHero'
import CTASection from '../components/site/CTASection'

const posts = [
  {
    id: 'verify-china-supplier',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt: 'Five practical checks that filter out 90% of unreliable suppliers — business license, on-site visit, capability audit, samples and references.',
    category: 'Supplier Verification',
    date: '2026-05-24',
    readTime: '7 min read',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL inspection explained for buyers (without the jargon)',
    excerpt: 'What AQL 2.5 actually means in practice, when to use AQL 4.0, and how to read a typical pre-shipment inspection report.',
    category: 'Quality Inspection',
    date: '2026-05-08',
    readTime: '6 min read',
  },
  {
    id: 'fob-cif-explained',
    title: 'FOB vs CIF vs DDP: which Incoterm should you use sourcing from China?',
    excerpt: 'A practical breakdown of the most common Incoterms used by importers, what risks they cover and which one to ask for in your PO.',
    category: 'Shipping & Logistics',
    date: '2026-04-22',
    readTime: '8 min read',
  },
  {
    id: 'reduce-mold-cost',
    title: 'Smart ways to reduce tooling and mold costs on OEM projects',
    excerpt: 'How experienced buyers structure tooling payments, share molds across SKUs and avoid paying for the same tooling twice.',
    category: 'OEM & Private Label',
    date: '2026-04-09',
    readTime: '5 min read',
  },
  {
    id: 'china-clusters-2026',
    title: 'Where things are made in China: a quick guide to the main clusters',
    excerpt: 'Shenzhen for electronics, Foshan for furniture, Yiwu for small goods — a buyer-friendly map of where your product is most likely to be made well.',
    category: 'Sourcing Strategy',
    date: '2026-03-18',
    readTime: '9 min read',
  },
  {
    id: 'avoid-china-trader',
    title: 'How to tell a Chinese factory apart from a trader',
    excerpt: 'Practical signs to spot when a "manufacturer" is actually a trading company — and why it matters for your price, quality and lead time.',
    category: 'Supplier Verification',
    date: '2026-02-27',
    readTime: '6 min read',
  },
]

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cancelled = false; let cleanup = null
    ;(async () => {
      try {
        const mod = await import('@strikingly/sdk')
        if (cancelled) return
        const cfg = (await import('../strk-img-config.json')).default || {}
        if (mod?.ImageHelper?.loadImages && containerRef.current) cleanup = mod.ImageHelper.loadImages(cfg, containerRef.current)
      } catch {}
    })()
    return () => { cancelled = true; if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing knowledge for buyers"
        description="Honest, jargon-free articles on sourcing from China — supplier checks, QC, shipping and OEM development. Written by our team in Shenzhen."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Featured post */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="lg:col-span-6 bg-slate-100">
                <img
                  alt={posts[0].title}
                  className="aspect-[16/9] lg:aspect-auto lg:h-full w-full object-cover"
                  data-strk-img-id={`blog-featured-${posts[0].id}-img`}
                  data-strk-img={`[blog-featured-title] [blog-featured-excerpt] china factory inspection`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-red-600"><Tag className="h-3 w-3" /> {posts[0].category}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(posts[0].date)}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <h2 id="blog-featured-title" className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                  {posts[0].title}
                </h2>
                <p id="blog-featured-excerpt" className="mt-4 text-base text-slate-600 leading-relaxed">{posts[0].excerpt}</p>
                <div className="mt-6">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700">
                    Read the article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Post grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-strk-img-id={`blog-post-${p.id}-img`}
                    data-strk-img={`[blog-post-${p.id}-title] [blog-post-${p.id}-excerpt] china sourcing`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-red-600"><Tag className="h-3 w-3" /> {p.category}</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 id={`blog-post-${p.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p id={`blog-post-${p.id}-excerpt`} className="mt-2 text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" /> {formatDate(p.date)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-600">
              We publish new sourcing articles roughly twice a month.{' '}
              <Link to="/contact" className="font-semibold text-red-600 hover:text-red-700">Subscribe via email</Link> to get them directly.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
