import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Buyer\'s Checklist',
    excerpt: 'Factory verification is the most important step in China sourcing. Here is a practical checklist covering licenses, production capacity, equipment, and export history.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    readTime: '6 min read',
    imgId: 'blog-factory-checklist-1a2b3c',
    featured: true,
  },
  {
    title: 'Understanding AQL Inspection Standards for China Imports',
    excerpt: 'AQL (Acceptable Quality Limit) is the global standard for product inspection. Learn how to set the right AQL level for your product category.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    imgId: 'blog-aql-standards-2b3c4d',
    featured: false,
  },
  {
    title: 'FOB vs CIF vs DDP: Choosing the Right Shipping Terms',
    excerpt: 'Incoterms define who pays for what in international shipping. We break down the most common terms and when to use each one.',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-incoterms-3c4d5e',
    featured: false,
  },
  {
    title: '5 Red Flags When Communicating with Chinese Suppliers',
    excerpt: 'Spot warning signs early in your supplier conversations. From vague answers to pricing that seems too good to be true.',
    category: 'Supplier Sourcing',
    date: 'June 20, 2026',
    readTime: '4 min read',
    imgId: 'blog-red-flags-4d5e6f',
    featured: false,
  },
  {
    title: 'How to Request Product Samples from Chinese Factories',
    excerpt: 'Samples are your first quality checkpoint. Learn the right way to request, evaluate, and compare samples before committing to production.',
    category: 'Product Development',
    date: 'June 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-samples-5e6f7g',
    featured: false,
  },
  {
    title: 'Customs Documentation: What You Need for Smooth Importing',
    excerpt: 'A guide to the essential paperwork for importing from China, including commercial invoices, packing lists, certificates of origin, and more.',
    category: 'Shipping & Logistics',
    date: 'June 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-customs-6f7g8h',
    featured: false,
  },
  {
    title: 'The True Cost of Sourcing from China: Beyond Unit Price',
    excerpt: 'Unit price is just one part of the equation. We break down inspection fees, shipping, duties, and hidden costs that affect your landed cost.',
    category: 'Cost Management',
    date: 'May 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-true-cost-7g8h9i',
    featured: false,
  },
  {
    title: 'Building Long-Term Relationships with Chinese Suppliers',
    excerpt: 'One-time transactions are risky. Here is how to build trust, improve communication, and create partnerships that deliver consistent results.',
    category: 'Supplier Management',
    date: 'May 20, 2026',
    readTime: '5 min read',
    imgId: 'blog-relationships-8h9i0j',
    featured: false,
  },
];

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Sourcing Insights
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Practical guides, tips, and industry insights to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface rounded-xl overflow-hidden border border-border flex flex-col lg:flex-row">
              <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[featured-title] [featured-excerpt]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-xs text-text-muted">
                    <Tag className="w-3 h-3" />
                    {featured.category}
                  </span>
                </div>
                <h2 id="featured-title" className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                  {featured.title}
                </h2>
                <p id="featured-excerpt" className="text-text-secondary leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((post, index) => (
              <article
                key={index}
                className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[post-${index}-title] [post-${index}-excerpt]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h3 id={`post-${index}-title`} className="text-lg font-bold text-primary mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`post-${index}-excerpt`} className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
