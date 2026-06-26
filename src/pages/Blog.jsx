import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, from business license checks to on-site factory audits, before committing your money.',
    category: 'Sourcing Tips',
    date: '2026-06-15',
    readTime: '6 min read',
    slug: '#',
  },
  {
    title: 'AQL Inspection Standards: What Importers Need to Know',
    excerpt: 'Understanding Acceptable Quality Level (AQL) sampling methods can help you set clear quality expectations and avoid disputes with suppliers.',
    category: 'Quality Control',
    date: '2026-06-01',
    readTime: '8 min read',
    slug: '#',
  },
  {
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'A practical comparison of sea and air freight options for importing from China, including cost, transit time, and when each method makes sense.',
    category: 'Logistics',
    date: '2026-05-20',
    readTime: '5 min read',
    slug: '#',
  },
  {
    title: '5 Common Mistakes First-Time Importers Make (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to underestimating lead times, these common mistakes can cost you time and money. Here\'s how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-05-10',
    readTime: '7 min read',
    slug: '#',
  },
  {
    title: 'Understanding China\'s Manufacturing Regions: Where to Source What',
    excerpt: 'Different regions in China specialize in different products. Knowing where to look can save you time and improve your sourcing results.',
    category: 'Sourcing Tips',
    date: '2026-04-25',
    readTime: '6 min read',
    slug: '#',
  },
  {
    title: 'How to Create an Effective Product Specification Sheet',
    excerpt: 'A clear spec sheet is the foundation of a successful sourcing project. Learn what to include and how to communicate your requirements effectively.',
    category: 'Quality Control',
    date: '2026-04-15',
    readTime: '5 min read',
    slug: '#',
  },
];

export default function Blog() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Practical insights on sourcing from China, quality control, logistics, and working with Chinese suppliers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-primary/5 text-primary text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-text-primary mb-2 leading-snug">
                    <a href={post.slug} className="hover:text-primary transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <a
                      href={post.slug}
                      className="text-primary text-sm font-medium hover:text-primary-light transition-colors inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Need Expert Sourcing Advice?</h2>
          <p className="text-text-secondary mb-8">
            Our team is ready to help you navigate the complexities of sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
