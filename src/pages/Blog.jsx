import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Complete Checklist',
    excerpt: 'Factory verification is the most critical step in China sourcing. Learn the 12-point checklist our auditors use on every site visit.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Factory Verification',
  },
  {
    title: 'Understanding Incoterms 2020 for China Imports',
    excerpt: 'FOB, CIF, DDP — which shipping term is right for your business? We break down the most common Incoterms used in China trade.',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'Shipping',
  },
  {
    title: 'AQL Sampling Explained: What Buyers Need to Know',
    excerpt: 'Acceptable Quality Level (AQL) is the industry standard for product inspection. Here is how to set the right AQL for your products.',
    date: '2024-11-10',
    readTime: '7 min read',
    category: 'Quality Control',
  },
  {
    title: '5 Red Flags When Dealing with Chinese Suppliers',
    excerpt: 'Spot warning signs early in your supplier negotiations. These red flags can save you from costly mistakes and production delays.',
    date: '2024-10-22',
    readTime: '5 min read',
    category: 'Supplier Management',
  },
  {
    title: 'How Much Does It Cost to Hire a Sourcing Agent in China?',
    excerpt: 'A transparent breakdown of sourcing agent fees, commission structures, and when a flat fee makes more sense than a percentage.',
    date: '2024-10-05',
    readTime: '6 min read',
    category: 'Pricing',
  },
  {
    title: 'Customs Documentation for China Imports: A Beginner\'s Guide',
    excerpt: 'From commercial invoices to certificates of origin, here is every document you need for smooth customs clearance.',
    date: '2024-09-18',
    readTime: '9 min read',
    category: 'Shipping',
  },
]

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | China Sourcing Tips &amp; Guides | SSourcing China</title>
        <meta name="description" content="Practical guides and tips on China sourcing: factory verification, quality control, shipping, and supplier management." />
      </Helmet>

      {/* Hero */}
      <section className="w-full bg-navy-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">China Sourcing Blog</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Practical guides, industry insights, and actionable tips for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                  <Link to="/blog" className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
