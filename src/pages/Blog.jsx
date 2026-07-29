import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const blogPosts = [
  {
    id: 'verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and evaluating supplier reliability before committing to a purchase order.',
    date: '2026-07-15',
    category: 'Supplier Verification',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-u7v8w9',
  },
  {
    id: 'quality-inspection',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'From color mismatches to structural defects, learn about the most frequent quality problems and the inspection protocols that catch them early.',
    date: '2026-07-08',
    category: 'Quality Control',
    titleId: 'blog-quality-title',
    descId: 'blog-quality-desc',
    imgId: 'blog-quality-img-x1y2z3',
  },
  {
    id: 'shipping-guide',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'A comparison of cost, transit time, and suitability for different product types to help you make the right logistics decision.',
    date: '2026-06-28',
    category: 'Shipping & Logistics',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-a4b5c6',
  },
  {
    id: 'negotiate-price',
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Effective negotiation strategies that go beyond just asking for a discount — including volume commitments, payment terms, and long-term partnerships.',
    date: '2026-06-20',
    category: 'Negotiation',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-d7e8f9',
  },
  {
    id: 'alibaba-tips',
    title: 'Beyond Alibaba: Where to Find Reliable Chinese Suppliers',
    excerpt: 'While Alibaba is the most well-known platform, there are many other channels for finding quality manufacturers in China.',
    date: '2026-06-12',
    category: 'Sourcing Tips',
    titleId: 'blog-alibaba-title',
    descId: 'blog-alibaba-desc',
    imgId: 'blog-alibaba-img-g1h2i3',
  },
  {
    id: 'payment-safety',
    title: 'Safe Payment Methods When Buying from China',
    excerpt: 'Understanding T/T, L/C, trade assurance, and escrow options to protect your money when paying Chinese suppliers.',
    date: '2026-06-05',
    category: 'Payment & Contracts',
    titleId: 'blog-payment-title',
    descId: 'blog-payment-desc',
    imgId: 'blog-payment-img-j4k5l6',
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
        title="Sourcing Blog"
        subtitle="Practical guides, tips, and insights to help you source from China more effectively and avoid common pitfalls."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-brand-light rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2 py-1 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-brand-gray">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-brand-dark mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-brand-gray text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="text-brand-orange text-sm font-medium inline-flex items-center gap-1 hover:underline cursor-pointer">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer your questions about importing from China. Get in touch."
      />
    </div>
  )
}
