import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Step-by-Step Checklist',
    excerpt: 'Factory verification is one of the most important steps in sourcing from China. This guide covers business licenses, production capacity, equipment inspection, and social compliance.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'Factory Verification',
    tag: 'verification',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'Acceptable Quality Level (AQL) is the international standard for product inspections. Learn how AQL tables work and what levels to choose for your product category.',
    date: '2026-07-08',
    readTime: '6 min read',
    category: 'Quality Control',
    tag: 'qc',
  },
  {
    title: '5 Common Mistakes When Sourcing from Alibaba',
    excerpt: 'Alibaba is a powerful tool, but many buyers make costly mistakes. Here are the top 5 pitfalls and how to avoid them when searching for suppliers.',
    date: '2026-06-28',
    readTime: '7 min read',
    category: 'Sourcing Tips',
    tag: 'sourcing',
  },
  {
    title: 'Incoterms Explained: FOB, CIF, and DDP for China Imports',
    excerpt: 'Choosing the right Incoterm affects your cost, risk, and logistics complexity. We break down the most common terms used in China trade.',
    date: '2026-06-20',
    readTime: '5 min read',
    category: 'Shipping',
    tag: 'shipping',
  },
  {
    title: 'How to Protect Your Intellectual Property in China',
    excerpt: 'From NNN agreements to design patents, this article covers practical steps to safeguard your product ideas when working with Chinese manufacturers.',
    date: '2026-06-10',
    readTime: '9 min read',
    category: 'Legal',
    tag: 'legal',
  },
  {
    title: 'The True Cost of Importing from China: Beyond Unit Price',
    excerpt: 'Unit price is just the beginning. Understand tooling, samples, QC, shipping, duties, and other costs that affect your landed cost per unit.',
    date: '2026-05-30',
    readTime: '7 min read',
    category: 'Sourcing Tips',
    tag: 'sourcing',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-text-secondary text-lg">
            Practical advice, industry insights, and how-to guides for businesses sourcing from China.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/9] bg-white border-b border-border flex items-center justify-center">
                  <Tag className="w-12 h-12 text-primary/15" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full self-start mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="text-white/80 mb-8">
            Every business is different. Contact us for a free consultation tailored to your specific product and market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
