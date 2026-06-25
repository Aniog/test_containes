import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    title: 'Incoterms Explained: Which Trade Term Should You Use When Importing from China?',
    excerpt: 'FOB, CIF, EXW, DDP — understanding Incoterms is essential for any importer. This guide explains each term, who bears the risk, and which is most suitable for different sourcing scenarios.',
    date: '2026-06-10',
    readTime: '8 min read',
    imgId: 'blog-img-incoterms-a1b2',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
  },
  {
    id: 'factory-audit-checklist',
    category: 'Factory Verification',
    title: 'Factory Audit Checklist: 12 Things to Verify Before Placing a Bulk Order',
    excerpt: 'A factory audit is your first line of defense against unreliable suppliers. Here are the 12 key areas our auditors check before recommending a factory to our clients.',
    date: '2026-05-28',
    readTime: '6 min read',
    imgId: 'blog-img-audit-c3d4',
    titleId: 'blog-title-audit',
    descId: 'blog-desc-audit',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    title: 'What is AQL Inspection and How Does It Protect Your Shipment?',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by professional QC inspectors worldwide. Learn how it works, what sampling levels mean, and how to set the right AQL for your products.',
    date: '2026-05-14',
    readTime: '7 min read',
    imgId: 'blog-img-aql-e5f6',
    titleId: 'blog-title-aql',
    descId: 'blog-desc-aql',
  },
  {
    id: 'moq-negotiation',
    category: 'Sourcing Tips',
    title: 'How to Negotiate MOQ with Chinese Suppliers (Without Losing the Deal)',
    excerpt: 'Minimum order quantities can be a barrier for small and medium importers. Here are practical strategies for negotiating lower MOQs while maintaining a good supplier relationship.',
    date: '2026-04-30',
    readTime: '5 min read',
    imgId: 'blog-img-moq-g7h8',
    titleId: 'blog-title-moq',
    descId: 'blog-desc-moq',
  },
  {
    id: 'ce-certification',
    category: 'Compliance',
    title: 'CE Certification for Products Imported from China: A Practical Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many product categories. This guide explains what CE certification requires, who is responsible, and how to get it done.',
    date: '2026-04-15',
    readTime: '9 min read',
    imgId: 'blog-img-ce-i9j0',
    titleId: 'blog-title-ce',
    descId: 'blog-desc-ce',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Tips',
    title: 'Sourcing Agent vs. Trading Company: Which is Right for Your Business?',
    excerpt: 'Both sourcing agents and trading companies can help you buy from China — but they operate very differently. Understanding the distinction can save you money and reduce risk.',
    date: '2026-03-28',
    readTime: '6 min read',
    imgId: 'blog-img-agent-k1l2',
    titleId: 'blog-title-agent',
    descId: 'blog-desc-agent',
  },
];

const categoryColors = {
  'Shipping': 'bg-blue-100 text-blue-700',
  'Factory Verification': 'bg-orange-100 text-orange-700',
  'Quality Control': 'bg-green-100 text-green-700',
  'Sourcing Tips': 'bg-purple-100 text-purple-700',
  'Compliance': 'bg-red-100 text-red-700',
};

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">China Sourcing Blog</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for global buyers sourcing from China.
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 lg:h-auto overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[posts[0].category]}`}>{posts[0].category}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-[#0d2340] mb-3 leading-snug">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-gray-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{posts[0].date}</span>
                  <Link to="/blog" className="inline-flex items-center gap-1 text-[#1a4f8a] font-semibold text-sm hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>{post.category}</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-[#0d2340] text-sm leading-snug mb-2">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link to="/blog" className="inline-flex items-center gap-1 text-[#1a4f8a] font-semibold text-xs hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
