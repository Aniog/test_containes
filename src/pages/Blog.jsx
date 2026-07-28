import { Link } from 'react-router-dom'

export default function Blog() {
  const posts = [
    {
      slug: 'factory-audit-checklist',
      title: 'Factory Audit Checklist: What to Verify Before Placing Orders',
      excerpt: 'A practical guide to the key areas to assess when evaluating potential Chinese manufacturers.',
      date: '2026-07-15',
      category: 'Supplier Verification',
      readTime: '8 min'
    },
    {
      slug: 'quality-inspection-standards',
      title: 'Understanding AQL Standards for Quality Inspections',
      excerpt: 'How Acceptable Quality Limit sampling works and how to set appropriate inspection criteria.',
      date: '2026-07-08',
      category: 'Quality Control',
      readTime: '6 min'
    },
    {
      slug: 'shipping-from-china-2025',
      title: 'Shipping from China: Current Options and Considerations',
      excerpt: 'An overview of sea freight, air freight, and rail options for importers in 2025-2026.',
      date: '2026-06-28',
      category: 'Logistics',
      readTime: '10 min'
    },
    {
      slug: 'sample-evaluation-tips',
      title: 'Evaluating Product Samples: A Buyer\'s Guide',
      excerpt: 'Key checkpoints to review when assessing samples before committing to bulk production.',
      date: '2026-06-20',
      category: 'Sourcing Process',
      readTime: '7 min'
    },
    {
      slug: 'china-sourcing-costs',
      title: 'Understanding Total Landed Cost in China Sourcing',
      excerpt: 'Beyond unit price: how to calculate the full cost of importing from China.',
      date: '2026-06-12',
      category: 'Cost Management',
      readTime: '9 min'
    },
    {
      slug: 'supplier-communication',
      title: 'Effective Communication with Chinese Suppliers',
      excerpt: 'Practical tips for clear communication across language and cultural differences.',
      date: '2026-06-05',
      category: 'Best Practices',
      readTime: '5 min'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Blog</h1>
        <p className="text-xl text-[#64748B]">Practical insights and guidance on sourcing from China.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="border border-gray-200 rounded-xl p-8 hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-3 text-sm text-[#64748B] mb-3">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-[#0F2942] mb-3 leading-tight">{post.title}</h2>
            <p className="text-[#64748B] mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#64748B]">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-[#3A8A7B] font-medium cursor-not-allowed">Read article →</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center text-[#64748B]">
        <p>More articles coming soon. For sourcing advice tailored to your situation, <Link to="/contact" className="text-[#3A8A7B] hover:underline">contact us</Link>.</p>
      </div>
    </div>
  )
}