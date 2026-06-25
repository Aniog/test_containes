import PageHeader from '../components/PageHeader.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'

const POSTS = [
  {
    id: 'verify-china-supplier',
    title: 'How to verify a Chinese supplier before sending the first payment',
    excerpt: 'A practical 9-step checklist covering business license, factory visits, sample testing, and red flags that should make you walk away.',
    category: 'Supplier Verification',
    date: '2026-05-14',
    readMinutes: 8,
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL inspection explained: what buyers actually need to know',
    excerpt: 'AQL is the international standard for sampling inspection. Here is what AQL II means in plain English and how to set it for your product.',
    category: 'Quality Control',
    date: '2026-04-30',
    readMinutes: 6,
  },
  {
    id: 'fob-cif-ddp-incoterms',
    title: 'FOB, CIF or DDP? Choosing the right Incoterm for China shipments',
    excerpt: 'Each Incoterm shifts risk and cost between buyer and seller. We break down when FOB makes sense and when DDP saves real money.',
    category: 'Shipping & Logistics',
    date: '2026-04-12',
    readMinutes: 7,
  },
  {
    id: 'mould-tooling-private-label',
    title: 'Tooling and moulds: what every private-label buyer should agree in writing',
    excerpt: 'Tooling disputes are one of the most common reasons private-label projects fail. Use this short contract checklist to protect your IP and your money.',
    category: 'Private Label',
    date: '2026-03-22',
    readMinutes: 9,
  },
  {
    id: 'yiwu-vs-shenzhen',
    title: 'Yiwu vs. Shenzhen: which sourcing hub fits your product?',
    excerpt: 'Two of the most popular sourcing destinations in China, but very different markets. Here is how we decide which city to start a buyer in.',
    category: 'Sourcing Strategy',
    date: '2026-03-05',
    readMinutes: 5,
  },
  {
    id: 'cny-production-planning',
    title: 'Planning around Chinese New Year: a practical production calendar',
    excerpt: 'CNY effectively closes Chinese factories for 3-6 weeks. Use this calendar to place orders early and avoid common Q1 supply chain shocks.',
    category: 'Production Planning',
    date: '2026-02-18',
    readMinutes: 6,
  },
]

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical articles on sourcing from China"
        subtitle="No fluff. Just real, useful advice from a team that handles sourcing, inspection, and shipping every working day."
        crumbs={[{ label: 'Blog' }]}
      />

      <section ref={ref} className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm grid lg:grid-cols-2">
            <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover"
                data-strk-img-id={`blog-featured-${featured.id}-1a`}
                data-strk-img={`[blog-featured-${featured.id}-excerpt] [blog-featured-${featured.id}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-7 lg:p-10 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-[#0B2545]/5 text-[#0B2545] px-3 py-1 text-xs font-medium">
                {featured.category}
              </span>
              <h2 id={`blog-featured-${featured.id}-title`} className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-[#0B2545] leading-tight">
                {featured.title}
              </h2>
              <p id={`blog-featured-${featured.id}-excerpt`} className="mt-3 text-base text-slate-600 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{format(new Date(featured.date), 'PPP')}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readMinutes} min read</span>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.id} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`blog-${p.id}-img-c8`}
                    data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex w-fit items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-[11px] font-medium">
                    {p.category}
                  </span>
                  <h3 id={`blog-${p.id}-title`} className="mt-3 text-lg font-semibold text-[#0B2545] leading-snug">{p.title}</h3>
                  <p id={`blog-${p.id}-excerpt`} className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{format(new Date(p.date), 'PP')}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{p.readMinutes} min</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a sourcing project to discuss?"
        subtitle="Get a free, written sourcing proposal from our team. We respond within one business day."
      />
    </>
  )
}
