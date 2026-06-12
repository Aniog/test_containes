import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/sections/PageHeader'
import CTASection from '@/components/sections/CTASection'
import { Calendar, ArrowRight } from 'lucide-react'

const POSTS = [
  {
    id: 'how-to-verify-a-chinese-supplier',
    category: 'Supplier verification',
    date: 'May 2026',
    readTime: '7 min read',
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt:
      'A practical checklist used by professional buyers — from business license checks and factory audits to red flags in supplier behavior.',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality control',
    date: 'May 2026',
    readTime: '6 min read',
    title: 'AQL inspection explained: what buyers actually need to know',
    excerpt:
      'Sampling levels, defect classes, and how to read an inspection report so you know whether to ship, rework or reject.',
  },
  {
    id: 'fob-vs-cif-vs-ddp',
    category: 'Logistics',
    date: 'April 2026',
    readTime: '5 min read',
    title: 'FOB vs CIF vs DDP: choosing the right Incoterm for China imports',
    excerpt:
      'A plain-English comparison of common Incoterms, when each makes sense, and how the choice affects landed cost and risk.',
  },
  {
    id: 'mid-production-inspection',
    category: 'Quality control',
    date: 'April 2026',
    readTime: '4 min read',
    title: 'Why mid-production inspections (DUPRO) save money',
    excerpt:
      'Catching workmanship issues at 30% production avoids costly rework at 100%. A short guide on when to schedule DUPRO.',
  },
  {
    id: 'private-label-china',
    category: 'OEM / Private label',
    date: 'March 2026',
    readTime: '8 min read',
    title: 'Building a private-label product in China without surprises',
    excerpt:
      'Tooling fees, MOQs, IP risk and how to structure the relationship so the factory protects your brand instead of competing with it.',
  },
  {
    id: 'shipping-from-shenzhen-2026',
    category: 'Logistics',
    date: 'March 2026',
    readTime: '6 min read',
    title: 'Shipping from Shenzhen in 2026: lead times and rate trends',
    excerpt:
      'A snapshot of current sea, air and rail options out of South China and what to expect on transit time and cost.',
  },
]

export default function Blog() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        kicker="Blog"
        title="Practical guides for buyers sourcing from China"
        subtitle="Field notes from our team in Shenzhen — written for working professionals, not for SEO."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] ${post.category} China sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 font-medium text-blue-700">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2
                    id={`blog-${post.id}-title`}
                    className="mt-4 text-lg font-semibold leading-snug text-slate-900"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
                    aria-label={`Read ${post.title}`}
                  >
                    Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want our buyer's playbook?"
        subtitle="Subscribe by email and we'll send a free one-page checklist for vetting Chinese suppliers."
      />
    </>
  )
}
