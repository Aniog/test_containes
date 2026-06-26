import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt:
      'A practical checklist for confirming factory credentials, production capacity, and compliance without flying to China.',
    date: 'June 18, 2026',
    category: 'Factory Verification',
    readTime: '6 min read',
    imgId: 'blog-verify-factory-1a2b3c',
  },
  {
    title: 'Understanding AQL Levels for Quality Inspection',
    excerpt:
      'What AQL 1.0, 2.5, and 4.0 mean in practice, and how to choose the right acceptance level for your product.',
    date: 'June 10, 2026',
    category: 'Quality Control',
    readTime: '5 min read',
    imgId: 'blog-aql-levels-4d5e6f',
  },
  {
    title: 'FOB vs CIF vs DDP: Which Incoterm Should You Use?',
    excerpt:
      'A clear breakdown of the most common incoterms when importing from China, with cost and risk comparisons.',
    date: 'May 28, 2026',
    category: 'Shipping',
    readTime: '7 min read',
    imgId: 'blog-incoterms-g7h8i9',
  },
  {
    title: '5 Red Flags When Communicating with Chinese Suppliers',
    excerpt:
      'Spot unreliable suppliers early by watching for these warning signs during your first few conversations.',
    date: 'May 15, 2026',
    category: 'Supplier Sourcing',
    readTime: '4 min read',
    imgId: 'blog-red-flags-j0k1l2',
  },
  {
    title: 'How Long Does It Really Take to Source from China?',
    excerpt:
      'Realistic timelines for every stage of the sourcing process, from initial inquiry to goods in your warehouse.',
    date: 'May 02, 2026',
    category: 'Process',
    readTime: '6 min read',
    imgId: 'blog-timelines-m3n4o5',
  },
  {
    title: 'Sample Evaluation: What to Check Before Mass Production',
    excerpt:
      'A step-by-step guide to reviewing samples, testing functionality, and approving production specs.',
    date: 'April 20, 2026',
    category: 'Quality Control',
    readTime: '5 min read',
    imgId: 'blog-samples-p6q7r8',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Practical guides, checklists, and insights to help you source from China with confidence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-surface rounded-xl border border-border-light overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.title}] [blog-category-${post.category}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3
                    id={`blog-title-${post.title}`}
                    className="text-base font-bold text-text-primary mb-2 leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-accent cursor-pointer hover:text-blue-700 transition-colors">
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
