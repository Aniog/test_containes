import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const posts = [
  {
    id: 'supplier-verification-guide',
    titleId: 'blog-post1-title',
    descId: 'blog-post1-desc',
    imgId: 'blog-img-post1-a1b2c3',
    category: 'Supplier Sourcing',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and third-party verification services.',
    date: '2026-07-15',
    readTime: '7 min read',
  },
  {
    id: 'aql-inspection-explained',
    titleId: 'blog-post2-title',
    descId: 'blog-post2-desc',
    imgId: 'blog-img-post2-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn how it works, what sampling levels mean, and how to set the right AQL for your products.',
    date: '2026-07-08',
    readTime: '9 min read',
  },
  {
    id: 'fob-vs-cif-shipping',
    titleId: 'blog-post3-title',
    descId: 'blog-post3-desc',
    imgId: 'blog-img-post3-g7h8i9',
    category: 'Shipping & Logistics',
    title: 'FOB vs CIF: Which Incoterm Should You Use When Importing from China?',
    excerpt: 'Choosing the right Incoterm affects your costs, risk exposure, and control over the shipment. We break down the key differences between FOB and CIF and when to use each.',
    date: '2026-06-28',
    readTime: '6 min read',
  },
  {
    id: 'private-label-china',
    titleId: 'blog-post4-title',
    descId: 'blog-post4-desc',
    imgId: 'blog-img-post4-j1k2l3',
    category: 'Private Label',
    title: 'A Practical Guide to Private Label Manufacturing in China',
    excerpt: 'Private labeling in China can be highly profitable, but it requires careful supplier selection, IP protection, and quality management. Here\'s what you need to know before you start.',
    date: '2026-06-18',
    readTime: '11 min read',
  },
  {
    id: 'china-sourcing-mistakes',
    titleId: 'blog-post5-title',
    descId: 'blog-post5-desc',
    imgId: 'blog-img-post5-m4n5o6',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the most common and costly mistakes importers make — and how to avoid them.',
    date: '2026-06-05',
    readTime: '8 min read',
  },
  {
    id: 'china-manufacturing-hubs',
    titleId: 'blog-post6-title',
    descId: 'blog-post6-desc',
    imgId: 'blog-img-post6-p7q8r9',
    category: 'China Manufacturing',
    title: 'China\'s Major Manufacturing Hubs: Where to Source by Product Category',
    excerpt: 'Different regions in China specialize in different product categories. This guide maps out the key manufacturing hubs — from Shenzhen electronics to Foshan furniture — so you know where to look.',
    date: '2026-05-22',
    readTime: '10 min read',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const [featured, ...rest] = posts

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            China Sourcing Insights
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and industry knowledge for buyers importing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-bg rounded-2xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2 py-1 rounded">{featured.category}</span>
                  <span className="text-gray-400 text-xs">Featured</span>
                </div>
                <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{featured.title}</h2>
                <p id={featured.descId} className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-light transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-brand-bg py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-2 py-1 rounded mb-3 w-fit">{post.category}</span>
                  <h3 id={post.titleId} className="font-bold text-brand-dark text-lg mb-3 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-400 text-xs mt-auto pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-red-100 text-lg mb-8">Put our knowledge to work for your business. Get a free sourcing consultation today.</p>
          <CTAButton to="/contact" variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
