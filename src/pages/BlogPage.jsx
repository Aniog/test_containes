import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying Chinese manufacturers, including license checks, factory audits, and reference validation. Learn what to look for and what red flags to avoid.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
  },
  {
    title: 'Understanding Quality Inspection Reports: What Buyers Need to Know',
    excerpt: 'Quality inspection reports can be confusing. We break down the key sections, explain defect classifications, and show you how to make informed decisions based on inspection results.',
    category: 'Quality Control',
    date: '2026-07-08',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
  {
    title: 'The True Cost of Sourcing from China: Beyond the Unit Price',
    excerpt: 'Unit price is only part of the equation. We explain all the hidden costs of sourcing from China including shipping, customs, quality issues, and how to budget accurately.',
    category: 'Cost Analysis',
    date: '2026-06-28',
    author: 'SSourcing China Team',
    readTime: '7 min read',
  },
  {
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'When shipping from China, choosing between sea and air freight depends on multiple factors. We compare costs, timelines, and use cases to help you make the right decision.',
    category: 'Shipping',
    date: '2026-06-20',
    author: 'SSourcing China Team',
    readTime: '5 min read',
  },
  {
    title: 'How to Write a Clear Product Specification for Chinese Manufacturers',
    excerpt: 'Clear specifications prevent costly misunderstandings. Learn how to write detailed product specs that Chinese factories can follow accurately, including materials, dimensions, and quality standards.',
    category: 'Best Practices',
    date: '2026-06-12',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
  {
    title: 'Common Mistakes First-Time Importers Make When Sourcing from China',
    excerpt: 'First-time importers often make the same mistakes. We share the most common pitfalls and how to avoid them, from skipping factory verification to underestimating lead times.',
    category: 'Guide',
    date: '2026-06-05',
    author: 'SSourcing China Team',
    readTime: '9 min read',
  },
  {
    title: 'Understanding MOQs: How to Negotiate Minimum Order Quantities',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Learn strategies for negotiating lower MOQs and finding suppliers willing to work with smaller orders.',
    category: 'Negotiation',
    date: '2026-05-28',
    author: 'SSourcing China Team',
    readTime: '5 min read',
  },
  {
    title: 'The Role of a Sourcing Agent: When Do You Need One?',
    excerpt: 'Not every buyer needs a sourcing agent. We explain when it makes sense to hire one, what services they provide, and how to evaluate whether the investment is worth it for your business.',
    category: 'Guide',
    date: '2026-05-20',
    author: 'SSourcing China Team',
    readTime: '7 min read',
  },
  {
    title: 'How to Handle Production Delays from Chinese Factories',
    excerpt: 'Production delays are common but manageable. Learn how to identify early warning signs, communicate effectively with factories, and build contingency plans into your sourcing strategy.',
    category: 'Production Management',
    date: '2026-05-12',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical advice and insights for buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="flex flex-col rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="aspect-video w-full rounded-t-lg bg-secondary"
                  data-strk-bg-id={`blog-bg-${index}`}
                  data-strk-bg={`[blog-title-${index}] [blog-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                >
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <span className="text-xs">Article Image</span>
                  </div>
                </div>
                <span id={`blog-title-${index}`} className="sr-only">
                  {post.title}
                </span>

                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h2 className="mb-2 text-lg font-semibold text-foreground">{post.title}</h2>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

                  <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <button className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Need Help with Your Sourcing Project?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Our team is ready to help you navigate the complexities of sourcing from China.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
