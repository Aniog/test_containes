import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import CtaBanner from '@/components/CtaBanner'

const posts = [
  {
    id: 'verify-supplier-china',
    category: 'Supplier Verification',
    title: 'How to verify a supplier in China before you place an order',
    excerpt:
      'Business license checks, factory audits, references, and the small details on Alibaba pages that often tell you more than the marketing photos.',
    date: 'May 18, 2026',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspections-explained',
    category: 'Quality Control',
    title: 'AQL inspections explained for first-time importers',
    excerpt:
      'What AQL 2.5 actually means, when to inspect during production vs at the end, and how to read the inspection report you get back.',
    date: 'May 04, 2026',
    readTime: '6 min read',
  },
  {
    id: 'fob-cif-ddp-incoterms',
    category: 'Shipping',
    title: 'FOB, CIF, DDP: choosing the right incoterm for China imports',
    excerpt:
      'A practical comparison of the most common shipping terms, who pays what, and what each incoterm means in real-world risk.',
    date: 'April 22, 2026',
    readTime: '7 min read',
  },
  {
    id: 'yiwu-vs-guangzhou',
    category: 'Sourcing Strategy',
    title: 'Yiwu vs Guangzhou: which sourcing hub is right for you?',
    excerpt:
      'A look at the two biggest sourcing hubs in China, their strengths, weaknesses and the kinds of products each one is best for.',
    date: 'April 09, 2026',
    readTime: '5 min read',
  },
  {
    id: 'reduce-moq',
    category: 'Sourcing Strategy',
    title: '7 ways to negotiate a lower MOQ with a Chinese factory',
    excerpt:
      'Practical tactics for first orders, including stock fabrics, combined orders and how to position yourself as a long-term partner.',
    date: 'March 27, 2026',
    readTime: '6 min read',
  },
  {
    id: 'private-label-amazon',
    category: 'Private Label',
    title: 'Sourcing private-label products for Amazon FBA',
    excerpt:
      'From product research to FBA-compliant packaging and barcode placement — what overseas sellers need to ask their China sourcing agent.',
    date: 'March 12, 2026',
    readTime: '9 min read',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog & insights"
        title="Practical guides on sourcing from China"
        description="Field notes from our team on supplier verification, quality control, shipping and how to avoid the most common mistakes."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
              >
                <img
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                  data-strk-img-id={`blog-${post.id}-img`}
                  data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-cat]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span
                    id={`blog-${post.id}-cat`}
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B6FB8]"
                  >
                    {post.category}
                  </span>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-lg font-semibold text-[#0B2545]"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1B6FB8] hover:text-[#155A96]"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
