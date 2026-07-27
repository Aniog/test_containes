import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify a Chinese Supplier: A Practical Guide for Importers',
    excerpt: 'Learn the essential steps to verify a Chinese manufacturer before placing an order — from document checks to on-site audits.',
    date: 'July 15, 2026',
    author: 'Michael Chen',
    category: 'Supplier Verification',
  },
  {
    id: 'understanding-china-qc-standards',
    title: 'Understanding AQL and Quality Control Standards for China Sourcing',
    excerpt: 'A practical explanation of AQL sampling, inspection levels, and how to set the right quality standards for your products.',
    date: 'July 8, 2026',
    author: 'Sarah Wang',
    category: 'Quality Control',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: FCL vs LCL, Air Freight, and Incoterms Explained',
    excerpt: 'Everything you need to know about shipping options from China — costs, transit times, documentation, and choosing the right method.',
    date: 'June 28, 2026',
    author: 'David Liu',
    category: 'Logistics',
  },
  {
    id: 'china-manufacturing-regions',
    title: 'China Manufacturing Regions: Where to Source Different Products',
    excerpt: 'A regional guide to China\'s industrial clusters — which provinces specialize in electronics, textiles, hardware, furniture, and more.',
    date: 'June 20, 2026',
    author: 'Michael Chen',
    category: 'Sourcing Strategy',
  },
  {
    id: 'protecting-ip-in-china',
    title: 'Protecting Your Intellectual Property When Manufacturing in China',
    excerpt: 'Practical strategies for safeguarding your designs, trademarks, and trade secrets when working with Chinese factories.',
    date: 'June 12, 2026',
    author: 'Sarah Wang',
    category: 'Legal & Compliance',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: 'Negotiating with Chinese Factories: Tips for Better Pricing and Terms',
    excerpt: 'How to approach pricing negotiations, understand cost structures, and build win-win relationships with Chinese manufacturers.',
    date: 'June 5, 2026',
    author: 'David Liu',
    category: 'Sourcing Strategy',
  },
  {
    id: 'incoterms-2026-update',
    title: 'Incoterms 2026: What Importers Need to Know',
    excerpt: 'Key updates to international commercial terms and how they affect your China sourcing agreements and risk allocation.',
    date: 'May 28, 2026',
    author: 'Michael Chen',
    category: 'Logistics',
  },
  {
    id: 'sustainable-sourcing-china',
    title: 'Sustainable Sourcing in China: Finding Eco-Friendly Manufacturers',
    excerpt: 'How to identify and work with Chinese factories that meet environmental standards and offer sustainable materials and processes.',
    date: 'May 20, 2026',
    author: 'Sarah Wang',
    category: 'Sourcing Strategy',
  },
  {
    id: 'moq-negotiation-china',
    title: 'How to Negotiate Lower MOQs with Chinese Manufacturers',
    excerpt: 'Practical tactics for startups and small businesses to reduce minimum order quantities without sacrificing price competitiveness.',
    date: 'May 12, 2026',
    author: 'David Liu',
    category: 'Sourcing Strategy',
  },
];

export default function Blog() {
  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Insights, guides, and practical advice for sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3 group-hover:text-brand-navy transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-navy-light transition-colors"
                    >
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Subscribe for Sourcing Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get practical China sourcing tips, industry updates, and regulatory changes delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md text-sm font-semibold bg-brand-navy text-white hover:bg-brand-navy-light transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
