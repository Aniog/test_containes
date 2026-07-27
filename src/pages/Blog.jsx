import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const articles = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers and avoid scams. From license checks to factory audits, we cover everything you need to know.',
    date: 'July 15, 2026',
    author: 'David Chen',
    category: 'Supplier Verification',
  },
  {
    id: 'understanding-incoterms',
    title: 'Understanding Incoterms: FOB vs CIF vs DDP for China Imports',
    excerpt: 'A practical guide to shipping terms when importing from China. Understand the differences between FOB, CIF, and DDP and which one is right for your business.',
    date: 'July 8, 2026',
    author: 'Sarah Wang',
    category: 'Shipping & Logistics',
  },
  {
    id: 'quality-control-china',
    title: 'Quality Control in China: AQL Standards and Inspection Types',
    excerpt: 'What you need to know about quality control inspections in China. DPI, PSI, AQL sampling, and how to ensure your products meet specifications.',
    date: 'June 28, 2026',
    author: 'Michael Li',
    category: 'Quality Control',
  },
  {
    id: 'sourcing-trade-shows',
    title: 'Top China Trade Shows for Sourcing Products in 2026',
    excerpt: 'The most important trade fairs and exhibitions in China for finding suppliers, discovering new products, and networking with manufacturers.',
    date: 'June 20, 2026',
    author: 'David Chen',
    category: 'Sourcing Strategy',
  },
  {
    id: 'avoid-sourcing-mistakes',
    title: '5 Common Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Learn from the mistakes of others. We cover the most common pitfalls when sourcing from China and practical strategies to avoid them.',
    date: 'June 12, 2026',
    author: 'Sarah Wang',
    category: 'Sourcing Strategy',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate MOQs with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Learn proven strategies for negotiating lower MOQs with Chinese factories.',
    date: 'June 5, 2026',
    author: 'Michael Li',
    category: 'Negotiation',
  },
  {
    id: 'shipping-from-china',
    title: 'Sea Freight vs Air Freight vs Rail: Shipping from China Compared',
    excerpt: 'A comprehensive comparison of shipping methods from China. Cost, transit time, and when to choose each option for your imports.',
    date: 'May 28, 2026',
    author: 'David Chen',
    category: 'Shipping & Logistics',
  },
  {
    id: 'product-compliance',
    title: 'Product Compliance and Certifications for Importing to the EU and US',
    excerpt: 'CE, FCC, RoHS, REACH, FDA — understand which certifications your products need and how to ensure compliance when sourcing from China.',
    date: 'May 20, 2026',
    author: 'Sarah Wang',
    category: 'Compliance',
  },
  {
    id: 'sourcing-agent-benefits',
    title: 'Why Use a China Sourcing Agent? Benefits vs Going Solo',
    excerpt: 'Is a sourcing agent worth the cost? We break down the real benefits of working with a sourcing agent versus managing suppliers directly.',
    date: 'May 12, 2026',
    author: 'Michael Li',
    category: 'Sourcing Strategy',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Insights & Guides on China Sourcing
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            Practical advice, industry insights, and expert guides to help you source from China with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    alt={article.title}
                    data-strk-img-id={`blog-${article.id}-f1a4c7`}
                    data-strk-img={`[blog-title-${article.id}] China sourcing manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 id={`blog-title-${article.id}`} className="text-lg font-semibold text-navy-900 mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-navy-400 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-navy-500 text-lg mb-8">
            Our team of sourcing experts is ready to help you find the right suppliers and manage your production.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}