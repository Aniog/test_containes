import { Link } from 'react-router-dom'

export default function Blog() {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'A step-by-step guide to assessing supplier legitimacy, production capability, and quality systems before placing your first order.',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      readTime: '12 min'
    },
    {
      title: 'Understanding Pre-Shipment Inspection: What to Look For',
      excerpt: 'Learn what a proper pre-shipment inspection covers and how to interpret inspection reports to make informed decisions.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '9 min'
    },
    {
      title: 'Common Documentation Mistakes in China Exports',
      excerpt: 'Avoid customs delays and compliance issues by understanding the most frequent documentation errors and how to prevent them.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '7 min'
    },
    {
      title: 'Negotiating Payment Terms with Chinese Suppliers',
      excerpt: 'Practical guidance on structuring payment terms that balance risk management with supplier relationship building.',
      date: 'June 20, 2026',
      category: 'Order Management',
      readTime: '10 min'
    },
    {
      title: 'The Real Cost of Sourcing Directly vs. Using an Agent',
      excerpt: 'A transparent breakdown of hidden costs, time investment, and risk factors when comparing direct sourcing to working with a sourcing agent.',
      date: 'June 12, 2026',
      category: 'Business Strategy',
      readTime: '11 min'
    },
    {
      title: 'How to Handle Quality Issues After Production',
      excerpt: 'What to do when defects are discovered, how to negotiate remedies, and how to prevent recurrence in future orders.',
      date: 'June 5, 2026',
      category: 'Quality Control',
      readTime: '8 min'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold mb-4">Blog</h1>
        <p className="text-lg text-slate-600">Practical insights and guidance on sourcing from China, based on our experience working with global buyers and Chinese manufacturers.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="uppercase tracking-[1.5px] text-xs text-blue-600 mb-3">{post.category}</div>
            <h2 className="font-semibold text-xl mb-3 leading-tight">{post.title}</h2>
            <p className="text-sm text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-slate-500">
        More articles coming soon. For sourcing advice specific to your situation, <Link to="/contact" className="text-blue-600 hover:underline">contact us directly</Link>.
      </div>
    </div>
  )
}