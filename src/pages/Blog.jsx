import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify any Chinese manufacturer before placing an order. From business licenses to factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 2,
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A practical guide to Incoterms 2020 and how they affect your China sourcing costs. Learn which terms offer the best protection for buyers.',
    category: 'Shipping & Logistics',
    date: 'July 8, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 3,
    title: 'Quality Inspection Standards: AQL Explained',
    excerpt: 'Understanding Acceptable Quality Level (AQL) standards and how to apply them to your product inspections. Includes practical examples and sampling tables.',
    category: 'Quality Control',
    date: 'June 28, 2026',
    readTime: '10 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 4,
    title: 'Common Mistakes First-Time Importers Make',
    excerpt: 'Avoid these costly mistakes when sourcing from China for the first time. Real examples from our experience helping hundreds of buyers.',
    category: 'Sourcing Tips',
    date: 'June 15, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that work with Chinese manufacturers. Learn cultural nuances and proven techniques for getting better prices.',
    category: 'Negotiation',
    date: 'June 1, 2026',
    readTime: '9 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 6,
    title: 'Product Certification Requirements for China Exports',
    excerpt: 'A comprehensive overview of certifications required for different product categories when importing from China. Includes CE, FCC, RoHS, and more.',
    category: 'Compliance',
    date: 'May 20, 2026',
    readTime: '12 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 7,
    title: 'The True Cost of Sourcing from China',
    excerpt: 'Beyond the unit price: understanding all the hidden costs in China sourcing. Learn how to calculate your true landed cost accurately.',
    category: 'Cost Analysis',
    date: 'May 5, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 8,
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'A detailed checklist for evaluating Chinese factories. Covers production capacity, quality systems, working conditions, and more.',
    category: 'Factory Audits',
    date: 'April 22, 2026',
    readTime: '11 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 9,
    title: 'Managing Production Delays from China',
    excerpt: 'How to anticipate, prevent, and manage production delays when sourcing from China. Includes communication templates and contingency planning.',
    category: 'Production Management',
    date: 'April 10, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Blog</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical advice, guides, and insights from our team of sourcing professionals.
              Learn how to source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 aspect-video flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article image</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </span>
                    <button className="text-blue-700 text-sm font-medium hover:underline inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our team is ready to help you source from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
