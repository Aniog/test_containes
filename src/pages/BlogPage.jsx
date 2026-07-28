import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, factory audits, and red flags to watch for when evaluating potential suppliers in China.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    title: 'Understanding MOQ: What It Means for Your Sourcing Strategy',
    excerpt: 'Minimum Order Quantity can make or break your sourcing project. Learn how to negotiate MOQs and find factories that work with your order size.',
    category: 'Sourcing Tips',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    title: 'Pre-Shipment Inspection: Why It Is Essential for Every Order',
    excerpt: 'Discover how pre-shipment inspections can save you thousands in defective goods and why every importer should include QC in their sourcing process.',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '7 min read',
  },
  {
    title: 'FOB vs CIF vs EXW: Understanding International Trade Terms',
    excerpt: 'Confused by trade terms? We break down the most common Incoterms used in China sourcing and explain which one is best for your situation.',
    category: 'Shipping',
    date: '2026-06-20',
    readTime: '10 min read',
  },
  {
    title: 'How to Request Samples from Chinese Manufacturers',
    excerpt: 'Best practices for requesting, evaluating, and providing feedback on product samples from Chinese factories before committing to production.',
    category: 'Sourcing Tips',
    date: '2026-06-12',
    readTime: '5 min read',
  },
  {
    title: 'Common Quality Issues in Chinese Manufacturing and How to Avoid Them',
    excerpt: 'From material substitution to workmanship defects, learn about the most common quality problems and how proper QC processes can prevent them.',
    category: 'Quality Control',
    date: '2026-06-05',
    readTime: '9 min read',
  },
  {
    title: 'A Guide to Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'Compare sea freight and air freight options for shipping from China, including costs, transit times, and when to choose each method.',
    category: 'Shipping',
    date: '2026-05-28',
    readTime: '8 min read',
  },
  {
    title: 'How to Protect Your Intellectual Property When Sourcing from China',
    excerpt: 'Practical steps to protect your designs, trademarks, and patents when working with Chinese manufacturers.',
    category: 'Legal',
    date: '2026-05-20',
    readTime: '7 min read',
  },
  {
    title: 'The Complete Guide to Product Sourcing from China for Beginners',
    excerpt: 'Everything a first-time importer needs to know about sourcing products from China, from finding suppliers to receiving your goods.',
    category: 'Sourcing Tips',
    date: '2026-05-12',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">{post.category}</span>
                </div>
                <h2 className="heading-3 text-slate-900 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <button className="text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-slate-900 mb-4">Need Personalized Sourcing Advice?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team is here to answer your questions and help you navigate the China sourcing process. Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
