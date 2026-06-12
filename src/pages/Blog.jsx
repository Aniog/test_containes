import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'

const posts = [
  {
    id: 'how-to-verify-a-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt:
      'A practical checklist for first-time buyers: business license checks, factory vs. trading company, on-site visits, and the documents that actually matter.',
    date: 'May 18, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-how-to-verify-a-chinese-supplier-title',
    descId: 'blog-how-to-verify-a-chinese-supplier-desc',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL inspection explained: what 2.5 actually means for your order',
    excerpt:
      'AQL is the most common standard for pre-shipment inspections. We break down sample sizes, accept/reject thresholds, and how to set realistic levels for your product.',
    date: 'May 4, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-aql-inspection-explained-title',
    descId: 'blog-aql-inspection-explained-desc',
  },
  {
    id: 'fob-vs-cif-vs-ddp',
    category: 'Logistics',
    title: 'FOB vs CIF vs DDP: choosing the right Incoterm for your B2B order',
    excerpt:
      'Each Incoterm shifts cost, risk and customs responsibility. We explain when FOB, CIF or DDP makes sense for B2B importers, with examples.',
    date: 'April 22, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-fob-vs-cif-vs-ddp-title',
    descId: 'blog-fob-vs-cif-vs-ddp-desc',
  },
  {
    id: 'china-manufacturing-clusters',
    category: 'Sourcing Strategy',
    title: 'A short guide to China’s manufacturing clusters',
    excerpt:
      'Yiwu for promotional gifts, Shenzhen for electronics, Foshan for furniture. Where to look for what — and why geography still matters in sourcing.',
    date: 'April 9, 2026',
    readTime: '9 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-china-manufacturing-clusters-title',
    descId: 'blog-china-manufacturing-clusters-desc',
  },
  {
    id: 'reduce-defect-rate',
    category: 'Quality Control',
    title: '5 practical ways to reduce defect rate on bulk production',
    excerpt:
      'From golden samples to during-production inspections, here are five steps that consistently lower defect rates without slowing down your timeline.',
    date: 'March 25, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-reduce-defect-rate-title',
    descId: 'blog-reduce-defect-rate-desc',
  },
  {
    id: 'sourcing-fees-explained',
    category: 'Working with Agents',
    title: 'How sourcing agent fees work — and what to watch out for',
    excerpt:
      'Flat fees, commissions, retainers, and hidden supplier kickbacks. A transparent look at how sourcing agents actually make money.',
    date: 'March 12, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
    titleId: 'blog-sourcing-fees-explained-title',
    descId: 'blog-sourcing-fees-explained-desc',
  },
]

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for B2B buyers sourcing from China"
        subtitle="Articles based on real client work — supplier verification, quality control, logistics, and sourcing strategy."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl border border-brand-border bg-white overflow-hidden flex flex-col hover:shadow-md transition"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                    data-strk-img-id={`blog-${p.id}-img`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-blue">
                    {p.category}
                  </p>
                  <h2 id={p.titleId} className="mt-2 text-lg font-semibold text-brand-navy">
                    {p.title}
                  </h2>
                  <p id={p.descId} className="mt-2 text-sm text-brand-muted leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                    <span>{p.readTime}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                      <User className="h-3.5 w-3.5" />
                      {p.author}
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-navy"
                    >
                      Read summary
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-brand-muted text-center max-w-2xl mx-auto">
            Want a specific topic covered, or a deeper version of one of these articles for your team?
            Get in touch and we&apos;ll share a longer write-up tailored to your category.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
