import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying Chinese manufacturers, including business license checks, factory audits, and red flags to watch out for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Understanding MOQs: Minimum Order Quantities in China',
    excerpt: 'What are MOQs, why do Chinese factories set them, and how can you negotiate lower minimums for your first orders?',
    category: 'Sourcing Tips',
    date: '2026-07-08',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Quality Inspection Standards: AQL Explained',
    excerpt: 'Learn about Acceptable Quality Level (AQL) standards and how they are used in pre-shipment inspections to ensure product quality.',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '10 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    excerpt: 'A comprehensive comparison of shipping options from China, including costs, transit times, and when to use each method.',
    category: 'Logistics',
    date: '2026-06-20',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Common Scams When Sourcing from China and How to Avoid Them',
    excerpt: 'Learn about the most common sourcing scams, how to identify fake suppliers, and the steps you can take to protect your business.',
    category: 'Risk Prevention',
    date: '2026-06-12',
    readTime: '9 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies for getting the best prices from Chinese manufacturers without compromising on quality.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A beginner-friendly guide to Incoterms (FOB, EXW, CIF, DDP) and what they mean for your China sourcing orders.',
    category: 'Logistics',
    date: '2026-05-28',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Product Certification Requirements for Different Markets',
    excerpt: 'What certifications do your products need for the US, EU, UK, and Australian markets? A comprehensive guide to compliance.',
    category: 'Compliance',
    date: '2026-05-20',
    readTime: '11 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'How to Request and Evaluate Product Samples from China',
    excerpt: 'Best practices for requesting samples, what to look for when evaluating them, and how to communicate feedback effectively.',
    category: 'Quality Control',
    date: '2026-05-12',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
            <p className="text-lg text-blue-100">
              Expert advice, practical guides, and industry insights to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find reliable suppliers and source with confidence.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
