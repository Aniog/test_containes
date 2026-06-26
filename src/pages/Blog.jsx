import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const posts = [
  {
    id: 'verify-china-factory',
    category: 'Supplier Verification',
    title: 'How to verify a China factory before placing your first order',
    excerpt:
      'A practical checklist for buyers — business license checks, on-site visits, capacity assessment and the most common red flags to watch for.',
    date: 'Jun 18, 2026',
    readTime: '8 min read',
  },
  {
    id: 'aql-explained',
    category: 'Quality Inspection',
    title: 'AQL inspections explained for first-time importers',
    excerpt:
      'A plain-English introduction to AQL sampling, the difference between major and minor defects, and how to choose realistic limits.',
    date: 'Jun 02, 2026',
    readTime: '6 min read',
  },
  {
    id: 'reduce-china-lead-time',
    category: 'Production',
    title: 'Five practical ways to reduce your China lead time',
    excerpt:
      'How experienced buyers structure production planning, raw materials and forecasts to cut weeks off their delivery cycle.',
    date: 'May 19, 2026',
    readTime: '7 min read',
  },
  {
    id: 'trading-vs-factory',
    category: 'Sourcing',
    title: 'Trading company vs factory: which is right for you?',
    excerpt:
      'Trading companies are not always a bad choice. Here is when a trader actually helps your project — and when you really need a direct factory.',
    date: 'May 05, 2026',
    readTime: '5 min read',
  },
  {
    id: 'shipping-from-china',
    category: 'Logistics',
    title: 'Sea vs air freight from China: a buyer\'s practical guide',
    excerpt:
      'How to think about cost, timing, packaging and customs when choosing between sea, air and rail freight from China.',
    date: 'Apr 22, 2026',
    readTime: '9 min read',
  },
  {
    id: 'china-payment-terms',
    category: 'Sourcing',
    title: 'Negotiating payment terms with Chinese suppliers',
    excerpt:
      'The most common payment structures, what is actually negotiable, and how to balance supplier risk and your cash flow.',
    date: 'Apr 08, 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Blog"
        titleId="blog-page-title"
        descId="blog-page-desc"
        title="Practical guides for buyers sourcing from China"
        description="Field notes from our sourcing managers — focused on what actually helps buyers make better decisions."
      />

      <section ref={containerRef} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-9e2c3a`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title] china sourcing manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-lg font-semibold text-slate-900 leading-snug"
                  >
                    {post.title}
                  </h2>
                  <p
                    id={`blog-${post.id}-excerpt`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed flex-1"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Want a specific question answered?
            </h3>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl mx-auto">
              Send us your question. If it is useful for other buyers, we may write the next
              article about it.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition"
            >
              Contact our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
