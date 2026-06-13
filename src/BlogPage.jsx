import { Link } from 'react-router-dom'
import { Button, Badge } from './ui.jsx'

const POSTS = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    date: '2026-06-01',
    category: 'Supplier Verification',
    excerpt: 'A step-by-step guide to vetting Chinese manufacturers, from business license checks to on-site factory audits. Learn the red flags that signal unreliable suppliers.',
    readTime: '8 min read',
  },
  {
    title: 'Understanding China Factory Audits: What to Look For',
    date: '2026-05-25',
    category: 'Quality Control',
    excerpt: 'Factory audits are the most critical step in supplier selection. We break down the key areas to evaluate: production capacity, quality systems, equipment, workforce, and management.',
    readTime: '10 min read',
  },
  {
    title: 'AQL Inspection Standards: A Practical Guide for Importers',
    date: '2026-05-18',
    category: 'Quality Control',
    excerpt: 'Acceptable Quality Level (AQL) sampling is the industry standard for product inspections. Learn how to set the right AQL levels for your product category and tolerance for defects.',
    readTime: '7 min read',
  },
  {
    title: 'FOB vs. CIF vs. EXW: Shipping Terms Explained for China Imports',
    date: '2026-05-10',
    category: 'Shipping & Logistics',
    excerpt: 'Choosing the right Incoterms can save thousands on your shipments. We compare the most common terms for China imports and explain when to use each.',
    readTime: '6 min read',
  },
  {
    title: 'How to Negotiate MOQ (Minimum Order Quantity) with Chinese Factories',
    date: '2026-05-02',
    category: 'Sourcing Strategy',
    excerpt: 'High MOQs are a common barrier for small and medium importers. Learn negotiation strategies that can help you secure lower MOQs without sacrificing price competitiveness.',
    readTime: '6 min read',
  },
  {
    title: 'The True Cost of Sourcing from China: Beyond the Unit Price',
    date: '2026-04-24',
    category: 'Sourcing Strategy',
    excerpt: 'Unit price is just the beginning. We explain the full cost picture including tooling, sampling, inspection, shipping, duties, and the hidden cost of quality failures.',
    readTime: '9 min read',
  },
  {
    title: 'China Sourcing Trends 2026: What Global Buyers Need to Know',
    date: '2026-04-15',
    category: 'Industry Insights',
    excerpt: 'From shifting manufacturing hubs to new sustainability requirements, here are the key trends shaping China sourcing in 2026 and how they affect international buyers.',
    readTime: '7 min read',
  },
  {
    title: 'How to Write an Effective RFQ (Request for Quotation) for Chinese Suppliers',
    date: '2026-04-08',
    category: 'Sourcing Strategy',
    excerpt: 'A well-written RFQ gets better quotes faster. We share a template and best practices for communicating your requirements clearly to Chinese manufacturers.',
    readTime: '5 min read',
  },
  {
    title: 'Product Compliance and Certifications for Importing to the EU and US',
    date: '2026-03-30',
    category: 'Compliance',
    excerpt: 'CE marking, FCC, FDA, RoHS, REACH — navigating the compliance landscape is complex. Our guide covers the certifications most commonly required for different product categories.',
    readTime: '11 min read',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-4 bg-white/10 text-blue-200 border-0">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Insights on Sourcing from China</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Practical guides, industry updates, and expert advice to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {POSTS.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="blue" className="text-xs">{post.category}</Badge>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-sm font-medium text-blue-700 hover:text-blue-800 cursor-pointer">Read More →</span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Sourcing Insights in Your Inbox</h3>
            <p className="text-gray-500 mb-6 max-w-lg mx-auto">Subscribe to our newsletter for the latest articles, sourcing tips, and China market updates.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Specific Sourcing Question?</h2>
          <p className="text-blue-100 mb-8 text-lg">Our team is happy to discuss your project and provide expert guidance.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-0 shadow-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}