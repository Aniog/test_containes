import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, ChevronRight, Phone } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-supplier',
    date: '2026-05-15',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify a supplier in China before placing an order. From checking business licenses to conducting factory audits — here is the complete process.',
    readTime: '8 min read',
  },
  {
    id: 'avoid-sourcing-scams',
    date: '2026-04-28',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    title: '10 Red Flags When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Common warning signs of unreliable suppliers and scams on platforms like Alibaba and Global Sources — and practical strategies to protect your business.',
    readTime: '6 min read',
  },
  {
    id: 'quality-control-guide',
    date: '2026-04-10',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    title: 'AQL Inspection: What Importers Need to Know About Quality Control in China',
    excerpt: 'Understanding AQL (Acceptable Quality Level) standards, inspection types, and how to set up an effective quality control process for your China orders.',
    readTime: '7 min read',
  },
  {
    id: 'shipping-from-china',
    date: '2026-03-22',
    author: 'SSourcing China Team',
    category: 'Logistics',
    title: 'Shipping from China: Sea vs Air vs Rail — Cost and Time Comparison for 2026',
    excerpt: 'A practical comparison of shipping methods from China, including current costs, transit times, and tips for choosing the right option for your business.',
    readTime: '5 min read',
  },
  {
    id: 'furniture-sourcing-guide',
    date: '2026-03-05',
    author: 'SSourcing China Team',
    category: 'Product Sourcing',
    title: 'The Complete Guide to Sourcing Furniture from China',
    excerpt: 'From wood types and manufacturing hubs to quality standards and shipping considerations — everything you need to know about importing furniture from China.',
    readTime: '9 min read',
  },
  {
    id: 'negotiation-tips',
    date: '2026-02-18',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    title: 'Negotiating with Chinese Suppliers: 12 Tips for Better Prices and Terms',
    excerpt: 'Practical negotiation strategies that work in the Chinese business context — from building relationships to structuring payment terms and volume discounts.',
    readTime: '7 min read',
  },
  {
    id: 'compliance-testing',
    date: '2026-02-01',
    author: 'SSourcing China Team',
    category: 'Compliance',
    title: 'CE, FDA, RoHS: A Practical Guide to Product Compliance Testing in China',
    excerpt: 'Navigate the complex world of product compliance testing for European, US, and international markets — and how to coordinate testing with Chinese factories.',
    readTime: '10 min read',
  },
  {
    id: 'sourcing-agent-vs-trading',
    date: '2026-01-15',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for Your Business?',
    excerpt: 'Understanding the key differences between a sourcing agent and a trading company — and how to decide which model best serves your importing needs.',
    readTime: '6 min read',
  },
  {
    id: 'electronics-sourcing',
    date: '2026-01-02',
    author: 'SSourcing China Team',
    category: 'Product Sourcing',
    title: 'Sourcing Electronics from China: PCB, Assembly, and Quality Control',
    excerpt: 'Deep dive into electronics manufacturing in China — finding PCB manufacturers, managing assembly quality, and ensuring component authenticity.',
    readTime: '8 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Insights & Guides for Sourcing from China
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              Practical articles on supplier verification, quality control, shipping, compliance, and sourcing strategy — written by practitioners on the ground in China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-200 relative overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`china ${post.category.toLowerCase()} professional`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                    <Link to={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            While you learn from our blog, our team is ready to help you with your actual sourcing project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+8613800000000" className="inline-flex items-center justify-center gap-2 border-2 border-brand-200 hover:border-brand-600 text-brand-700 hover:text-brand-600 font-semibold px-8 py-4 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
