import { useEffect, useRef } from 'react'
import PageHero from '../components/sections/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'sourcing-vs-trading',
    title: 'Sourcing agent vs. trading company: which one should you use?',
    excerpt: 'They look similar at first, but the incentives and accountability are very different. Here is how to tell them apart and pick the right partner for your import business.',
    author: 'SSourcing Editorial',
    date: 'May 18, 2026',
    category: 'Sourcing strategy',
    imgId: 'blog-1-31fab2',
  },
  {
    id: 'aql-quality-control',
    title: 'A practical guide to AQL inspections for first-time importers',
    excerpt: 'AQL 2.5, AQL 4.0 — what do these numbers actually mean for your shipment? A plain-English guide to inspection levels, sampling and how to read a QC report.',
    author: 'QC Team',
    date: 'May 4, 2026',
    category: 'Quality control',
    imgId: 'blog-2-bba112',
  },
  {
    id: 'incoterms-2020',
    title: 'FOB, CIF or DDP? Choosing the right Incoterm in 2026',
    excerpt: 'A short, practical comparison of the most common Incoterms for buyers importing from China, with examples of when each one makes financial sense.',
    author: 'Logistics Team',
    date: 'April 21, 2026',
    category: 'Logistics',
    imgId: 'blog-3-cd47ee',
  },
  {
    id: 'china-sourcing-hubs',
    title: 'China sourcing hubs explained: Yiwu, Shenzhen, Guangzhou and more',
    excerpt: 'Each Chinese sourcing hub has a personality. We break down what each city is good at, typical MOQs and how to plan a factory visit trip.',
    author: 'SSourcing Editorial',
    date: 'April 9, 2026',
    category: 'Sourcing strategy',
    imgId: 'blog-4-88aacc',
  },
  {
    id: 'avoid-supplier-scams',
    title: 'How to avoid common supplier scams when sourcing from China',
    excerpt: 'Fake business licenses, ghost factories, deposit traps. A practical checklist any overseas buyer can run before sending the first wire transfer.',
    author: 'SSourcing Editorial',
    date: 'March 27, 2026',
    category: 'Risk management',
    imgId: 'blog-5-aa120b',
  },
  {
    id: 'china-shipping-2026',
    title: 'China ocean freight outlook for 2026: what buyers should expect',
    excerpt: 'A short look at capacity, transit times and how to plan your shipping calendar around Chinese New Year and peak season congestion.',
    author: 'Logistics Team',
    date: 'March 12, 2026',
    category: 'Logistics',
    imgId: 'blog-6-2244ee',
  },
]

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for buyers importing from China"
        description="Short, practical articles on sourcing, supplier verification, quality control and shipping — written by our team on the ground."
        bgQuery="China sourcing blog office desk"
        bgId="blog-page-bg-9982a1"
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-title] ${p.category}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
                    {p.category}
                  </span>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-4 text-lg font-semibold text-slate-900"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.excerpt}</p>

                  <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {p.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </span>
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
