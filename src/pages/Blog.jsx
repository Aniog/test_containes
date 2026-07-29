import { useEffect, useRef } from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, Badge, PageHero } from '@/components/ui/index.jsx';

const posts = [
  {
    id: 'post-avoid-scams',
    titleId: 'post-avoid-scams-title',
    descId: 'post-avoid-scams-desc',
    imgId: 'blog-avoid-scams-img-3a7b1c',
    title: 'How to Avoid Supplier Scams When Buying from China',
    excerpt: 'Fake factories, trading companies posing as manufacturers, and advance payment fraud are common risks. Here\'s how to protect yourself before placing an order.',
    category: 'Supplier Verification',
    readTime: '6 min read',
    date: 'July 15, 2026',
  },
  {
    id: 'post-aql',
    titleId: 'post-aql-title',
    descId: 'post-aql-desc',
    imgId: 'blog-aql-img-9c4d2e',
    title: 'What Is AQL Inspection and Why Does It Matter for Importers?',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for product sampling during quality inspections. Learn how it works and how to use it to protect your orders.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'July 8, 2026',
  },
  {
    id: 'post-sea-vs-air',
    titleId: 'post-sea-vs-air-title',
    descId: 'post-sea-vs-air-desc',
    imgId: 'blog-sea-vs-air-img-5e8f3a',
    title: 'Sea Freight vs Air Freight: Which Is Right for Your China Shipment?',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This guide breaks down the key differences and when to use each.',
    category: 'Shipping',
    readTime: '5 min read',
    date: 'June 28, 2026',
  },
  {
    id: 'post-factory-audit',
    titleId: 'post-factory-audit-title',
    descId: 'post-factory-audit-desc',
    imgId: 'blog-factory-audit-img-2b6c4d',
    title: 'What to Expect from a China Factory Audit: A Buyer\'s Guide',
    excerpt: 'A factory audit is one of the most important steps in supplier verification. Here\'s what our auditors check and what the report includes.',
    category: 'Factory Audit',
    readTime: '7 min read',
    date: 'June 18, 2026',
  },
  {
    id: 'post-moq',
    titleId: 'post-moq-title',
    descId: 'post-moq-desc',
    imgId: 'blog-moq-img-7f1a9b',
    title: 'How to Negotiate MOQ with Chinese Suppliers (Without Losing the Deal)',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Learn practical strategies to negotiate lower MOQs while maintaining a good supplier relationship.',
    category: 'Negotiation',
    readTime: '6 min read',
    date: 'June 5, 2026',
  },
  {
    id: 'post-incoterms',
    titleId: 'post-incoterms-title',
    descId: 'post-incoterms-desc',
    imgId: 'blog-incoterms-img-4d2e8f',
    title: 'Incoterms Explained: FOB, CIF, EXW — What They Mean for China Buyers',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of delivery. Understanding them can save you money and avoid disputes.',
    category: 'Shipping',
    readTime: '9 min read',
    date: 'May 22, 2026',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Factory Audit', 'Negotiation'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="China Sourcing Insights & Guides"
        subtitle="Practical advice for importers on supplier verification, quality control, shipping, and more."
      />

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
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
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="default">{posts[0].category}</Badge>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {posts[0].readTime}
                    </span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {posts[0].title}
                  </h2>
                  <p id={posts[0].descId} className="text-gray-600 leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{posts[0].date}</span>
                    <button className="text-steel font-medium text-sm flex items-center gap-1 hover:text-navy transition-colors">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden p-0 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="default">{post.category}</Badge>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-navy mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <button className="text-steel font-medium text-sm flex items-center gap-1 hover:text-navy transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-surface-alt py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-gray-600 mb-6">
            Practical guides on China sourcing, quality control, and shipping — delivered monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-steel text-gray-800"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
