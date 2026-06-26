import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '@/components/PageHeader.jsx'

const POSTS = [
  {
    id: 'verify-china-supplier',
    category: 'Sourcing',
    readTime: '6 min read',
    date: 'June 18, 2026',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt:
      'A practical checklist: business license, factory address, production capacity, references and what to watch for during a video call.',
  },
  {
    id: 'aql-explained',
    category: 'Quality control',
    readTime: '5 min read',
    date: 'June 4, 2026',
    title: 'AQL 2.5 explained for first-time importers',
    excerpt:
      'What AQL means, how sample sizes are chosen, and what major / minor defects actually look like in a real inspection report.',
  },
  {
    id: 'fob-cif-ddp',
    category: 'Shipping',
    readTime: '4 min read',
    date: 'May 22, 2026',
    title: 'FOB vs CIF vs DDP: which incoterm should you use from China?',
    excerpt:
      'A short, decision-oriented guide on choosing between FOB, CIF and DDP for sea freight from China, and what hidden costs to expect.',
  },
  {
    id: 'moq-negotiation',
    category: 'Negotiation',
    readTime: '7 min read',
    date: 'May 8, 2026',
    title: 'Negotiating MOQ and unit price without burning the relationship',
    excerpt:
      'Practical tactics we use with Chinese suppliers to negotiate sustainable terms — including when not to push for the lowest price.',
  },
  {
    id: 'private-label-checklist',
    category: 'Brand & OEM',
    readTime: '6 min read',
    date: 'April 27, 2026',
    title: 'Private label in China: a 12-point checklist before mass production',
    excerpt:
      'From tooling and packaging artwork to barcodes and compliance documents — what to confirm before signing off on production.',
  },
  {
    id: 'yiwu-vs-guangzhou',
    category: 'Supply chain',
    readTime: '5 min read',
    date: 'April 11, 2026',
    title: 'Yiwu vs Guangzhou: where should you source your product?',
    excerpt:
      'A short comparison of the two biggest sourcing hubs in China and which categories each is actually best for.',
  },
]

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for overseas buyers"
        description="Short, practical articles on sourcing, quality control, shipping and working with Chinese suppliers. No fluff, no clickbait."
      />

      <section ref={ref} className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.id}-img`}
                    data-strk-img={`[blog-${p.id}-title] [blog-${p.id}-category] china sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      id={`blog-${p.id}-category`}
                      className="text-xs font-medium uppercase tracking-wider text-blue-700"
                    >
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-500">{p.readTime}</span>
                  </div>
                  <h2
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-slate-900"
                  >
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-xs text-slate-500">{p.date}</span>
                    <span className="text-sm font-medium text-blue-700">
                      Read article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
