import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'

const posts = [
  {
    id: 'blog-supplier-vetting',
    title: 'How to Vet a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A practical checklist for verifying factory legitimacy, production capacity, and export experience before committing to a new supplier.',
    category: 'Supplier Management',
    date: 'June 5, 2026',
    readTime: '7 min read',
  },
  {
    id: 'blog-qc-inspection',
    title: '5 Quality Inspection Mistakes That Cost Importers Thousands',
    excerpt: 'Common QC errors that lead to defective shipments — and how to avoid them with proper inspection protocols.',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '5 min read',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: FOB, CIF, and DDP Explained',
    excerpt: 'Understanding Incoterms and choosing the right shipping arrangement for your import business.',
    category: 'Logistics',
    date: 'May 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 'blog-moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Factories',
    excerpt: 'Strategies for getting suppliers to accept smaller initial orders without sacrificing quality or pricing.',
    category: 'Negotiation',
    date: 'May 3, 2026',
    readTime: '6 min read',
  },
  {
    id: 'blog-factory-audit',
    title: 'What Happens During a Factory Audit? A Step-by-Step Breakdown',
    excerpt: 'An inside look at how professional sourcing agents evaluate factories — from documentation to production floor.',
    category: 'Factory Verification',
    date: 'April 22, 2026',
    readTime: '9 min read',
  },
  {
    id: 'blog-payment-terms',
    title: 'Safe Payment Methods When Buying from China',
    excerpt: 'Comparing T/T, L/C, PayPal, and escrow options — which payment method protects you best at each order stage.',
    category: 'Trade Finance',
    date: 'April 10, 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              China Sourcing Insights & Guides
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical advice on supplier management, quality control, shipping, and everything else you need to know about sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 bg-slate-100">
                  <img
                    data-strk-img-id={`${post.id}-img-3b7e`}
                    data-strk-img={`[${post.id}-title] [${post.id}-category] china sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span id={`${post.id}-category`} className="text-xs font-medium text-accent-500 uppercase tracking-wide">{post.category}</span>
                  <h2 id={`${post.id}-title`} className="text-lg font-semibold text-slate-900 mt-2 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our team is happy to answer your questions about sourcing from China — no strings attached.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
