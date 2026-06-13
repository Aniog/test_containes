import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const articles = [
  {
    title: 'How to Vet a Chinese Factory: A Buyer\'s Checklist',
    excerpt: 'Before you place an order, you need to know who you are dealing with. This checklist covers the 15 essential questions every buyer should ask before signing a contract with a Chinese manufacturer.',
    category: 'Factory Verification',
    date: 'June 5, 2026',
    readTime: '8 min read',
  },
  {
    title: 'AQL Inspection Standards Explained for First-Time Buyers',
    excerpt: 'Acceptable Quality Limit (AQL) is the industry standard for product inspections. Learn what AQL levels mean, how to choose the right one for your product, and what to do when inspections fail.',
    category: 'Quality Control',
    date: 'May 22, 2026',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Incoterms: FOB vs CIF vs DDP',
    excerpt: 'Shipping terms can make or break your landed cost calculation. We break down the most common Incoterms used in China sourcing and which one is right for your business model.',
    category: 'Shipping',
    date: 'May 10, 2026',
    readTime: '5 min read',
  },
  {
    title: 'How Much Should a Sourcing Agent Cost?',
    excerpt: 'Sourcing agent fees vary widely. We explain the three most common pricing models, what factors drive costs up or down, and what red flags to watch for when evaluating quotes.',
    category: 'Industry Insights',
    date: 'April 28, 2026',
    readTime: '7 min read',
  },
  {
    title: '5 Signs Your Supplier Is About to Disappear',
    excerpt: 'Ghosting suppliers cost buyers millions every year. Learn the early warning signs that a factory may be in financial trouble or planning to vanish with your deposit.',
    category: 'Risk Management',
    date: 'April 15, 2026',
    readTime: '6 min read',
  },
  {
    title: 'Product Compliance: What Certifications Do You Actually Need?',
    excerpt: 'CE, FCC, RoHS, REACH — the alphabet soup of product compliance can be confusing. We break down which certifications matter for your market and how to verify them.',
    category: 'Compliance',
    date: 'April 2, 2026',
    readTime: '9 min read',
  },
  {
    title: 'Negotiating with Chinese Suppliers: A Practical Guide',
    excerpt: 'Chinese business culture values relationships and face. Learn the negotiation tactics that actually work, the ones that backfire, and how to structure a win-win deal.',
    category: 'Negotiation',
    date: 'March 18, 2026',
    readTime: '8 min read',
  },
  {
    title: 'When to Visit China: Trade Shows Worth Attending in 2026',
    excerpt: 'Canton Fair, CES Asia, Yiwu Market — we rank the most valuable trade shows for different product categories and share tips for making the most of your visit.',
    category: 'Industry Events',
    date: 'March 5, 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Practical advice from our team on sourcing from China. No fluff, just actionable information.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col bg-white rounded-xl border border-[#e2e8f0] overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#c4951a] bg-[#c4951a]/10 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-base md:text-lg font-bold text-[#1a2b4a] mb-3 leading-snug group-hover:text-[#c4951a] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#94a3b8] pt-4 border-t border-[#e2e8f0]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#f6f7f9] py-16 md:py-20">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2b4a] mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto mb-8">
            Get practical sourcing tips, market updates, and industry insights delivered to your inbox monthly.
          </p>
          <Link to="/contact" className="btn-primary">
            Subscribe to Updates
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
