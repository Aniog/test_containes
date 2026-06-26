import SectionHeader from '@/components/SectionHeader'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier in 5 Steps',
    excerpt: 'Before placing an order, every buyer should run through these essential verification checks to avoid scams and substandard suppliers.',
    date: 'June 15, 2026',
    readTime: '6 min read',
    category: 'Supplier Verification',
  },
  {
    slug: 'understanding-aql-inspection',
    title: 'Understanding AQL Inspection Standards',
    excerpt: 'AQL is the industry standard for product sampling during quality control. Learn how to set the right AQL levels for your product category.',
    date: 'May 28, 2026',
    readTime: '8 min read',
    category: 'Quality Control',
  },
  {
    slug: 'incoterms-explained',
    title: 'Incoterms Explained for China Buyers',
    excerpt: 'FOB, CIF, DDP — what do they really mean? A practical guide to choosing the right shipping terms for your China imports.',
    date: 'May 10, 2026',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    slug: 'common-sourcing-mistakes',
    title: '7 Common Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory audits to ignoring sample approval, here are the mistakes we see most often — and how to prevent them.',
    date: 'April 22, 2026',
    readTime: '5 min read',
    category: 'Sourcing Strategy',
  },
  {
    slug: 'sustainable-sourcing-china',
    title: 'Sustainable Sourcing from China: A Practical Guide',
    excerpt: 'More buyers are asking for eco-friendly materials and ethical factories. Here is how to verify sustainability claims from Chinese suppliers.',
    date: 'April 5, 2026',
    readTime: '9 min read',
    category: 'Sustainability',
  },
  {
    slug: 'product-development-prototypes',
    title: 'From Idea to Prototype: Working with Chinese Factories',
    excerpt: 'Developing a new product with a Chinese factory requires clear communication, detailed specs, and milestone-based sample reviews.',
    date: 'March 18, 2026',
    readTime: '7 min read',
    category: 'Product Development',
  },
]

export default function Blog() {
  return (
    <div>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Insights"
            title="Sourcing Knowledge Hub"
            subtitle="Practical guides, tips, and industry insights to help you source smarter from China."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl border border-border bg-bg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 lg:px-7 pb-6 lg:pb-7">
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors">
                    Read article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Need personalized sourcing advice?
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Our team is happy to discuss your specific project and answer any questions about sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors"
          >
            Book a Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
