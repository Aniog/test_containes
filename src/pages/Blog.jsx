import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import { SectionHeader, Card, Badge } from '@/components/ui/index.jsx';

const posts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A practical guide to checking business licenses, export records, and factory certifications before committing to a supplier in China.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: 'June 12, 2026',
    readTime: '7 min read',
    imgId: 'blog-supplier-verify-img-a1b2c3',
    titleId: 'blog-supplier-verify-title',
    descId: 'blog-supplier-verify-desc',
  },
  {
    id: 'pre-shipment-inspection',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    excerpt: 'Understanding what a pre-shipment inspection checks, how to interpret the report, and when it\'s worth the cost.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-psi-img-d4e5f6',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    id: 'incoterms-explained',
    title: 'Incoterms Explained for China Importers: FOB, CIF, EXW and More',
    excerpt: 'A clear breakdown of the most common shipping terms used in China trade and what each one means for your costs and responsibilities.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: 'May 14, 2026',
    readTime: '8 min read',
    imgId: 'blog-incoterms-img-g7h8i9',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Factories as a Small Buyer',
    excerpt: 'Practical strategies for getting factories to accept lower minimum order quantities without sacrificing quality or pricing.',
    category: 'Negotiation',
    author: 'SSourcing Team',
    date: 'April 30, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-j1k2l3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'ce-certification-china',
    title: 'CE Certification for Products Made in China: A Practical Overview',
    excerpt: 'What CE marking means, which products require it, and how to ensure your Chinese manufacturer can support the certification process.',
    category: 'Compliance',
    author: 'SSourcing Team',
    date: 'April 15, 2026',
    readTime: '9 min read',
    imgId: 'blog-ce-img-m4n5o6',
    titleId: 'blog-ce-title',
    descId: 'blog-ce-desc',
  },
  {
    id: 'canton-fair-guide',
    title: 'Canton Fair 2026: A Buyer\'s Guide to Getting the Most Out of It',
    excerpt: 'How to prepare for the Canton Fair, which halls to visit for your product category, and how to follow up effectively with suppliers you meet.',
    category: 'Trade Shows',
    author: 'SSourcing Team',
    date: 'March 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-canton-img-p7q8r9',
    titleId: 'blog-canton-title',
    descId: 'blog-canton-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Negotiation', 'Compliance', 'Trade Shows'];

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
      {/* Header */}
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Sourcing Insights</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            China Sourcing Blog
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Practical guides, industry insights, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  cat === 'All'
                    ? 'bg-[#1a4f8a] text-white'
                    : 'bg-white text-brand-body border border-brand-border hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post — uses posts[0] directly so the plugin can resolve the static imgId */}
          <div className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto min-h-64">
                <img
                  alt={posts[0].title}
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default">{posts[0].category}</Badge>
                  <span className="text-xs text-brand-muted bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full font-semibold">Featured</span>
                </div>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-brand-dark mb-3 leading-tight">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-brand-body leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-brand-muted text-sm mb-6">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{posts[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                  <span>{posts[0].date}</span>
                </div>
                <Link
                  to={`/blog/${posts[0].id}`}
                  className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors text-sm w-fit"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Post Grid — maps over the top-level posts array so the plugin resolves each imgId */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => idx === 0 ? null : (
              <Card key={post.id} className="overflow-hidden p-0 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Badge variant="default" className="mb-3 w-fit">{post.category}</Badge>
                  <h3 id={post.titleId} className="font-bold text-brand-dark mb-2 leading-tight flex-1">{post.title}</h3>
                  <p id={post.descId} className="text-brand-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-brand-muted text-xs mt-auto">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 text-[#1a4f8a] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Get Sourcing Insights in Your Inbox</h2>
            <p className="text-brand-body mb-6">Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-4 py-3 border border-brand-border rounded-lg text-brand-dark placeholder-brand-muted focus:outline-none focus:border-[#1a4f8a] text-sm"
              />
              <button className="bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
