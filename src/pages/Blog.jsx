import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

const blogPosts = [
  {
    id: 'blog-supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and assessing supplier reliability before committing to a purchase order.',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'Supplier Management',
    titleId: 'blog-supplier-verification-title',
    descId: 'blog-supplier-verification-desc',
    imgId: 'blog-supplier-verification-img-c4d5e6',
  },
  {
    id: 'blog-qc-inspection',
    title: 'Pre-Shipment Inspection: What to Check and How to Read Reports',
    excerpt: 'Understanding AQL sampling, defect classification, and how to interpret inspection reports to make informed shipping decisions.',
    date: '2026-07-08',
    readTime: '6 min read',
    category: 'Quality Control',
    titleId: 'blog-qc-inspection-title',
    descId: 'blog-qc-inspection-desc',
    imgId: 'blog-qc-inspection-img-f7g8h9',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Comparing freight options, understanding Incoterms, and tips for reducing shipping costs when importing from China.',
    date: '2026-06-28',
    readTime: '10 min read',
    category: 'Logistics',
    titleId: 'blog-shipping-guide-title',
    descId: 'blog-shipping-guide-desc',
    imgId: 'blog-shipping-guide-img-i1j2k3',
  },
  {
    id: 'blog-moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Manufacturers',
    excerpt: 'Strategies for reducing minimum order quantities, especially for first-time buyers and small businesses testing new products.',
    date: '2026-06-20',
    readTime: '5 min read',
    category: 'Negotiation',
    titleId: 'blog-moq-negotiation-title',
    descId: 'blog-moq-negotiation-desc',
    imgId: 'blog-moq-negotiation-img-l4m5n6',
  },
  {
    id: 'blog-trade-shows',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    excerpt: 'Planning your visit to the Canton Fair — how to prepare, what to bring, and how to maximize your time finding suppliers.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Industry News',
    titleId: 'blog-trade-shows-title',
    descId: 'blog-trade-shows-desc',
    imgId: 'blog-trade-shows-img-o7p8q9',
  },
  {
    id: 'blog-payment-terms',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Escrow',
    excerpt: 'Understanding common payment methods, their risks, and how to structure payments to protect your investment.',
    date: '2026-05-30',
    readTime: '6 min read',
    category: 'Finance',
    titleId: 'blog-payment-terms-title',
    descId: 'blog-payment-terms-desc',
    imgId: 'blog-payment-terms-img-r1s2t3',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Sourcing Insights & Guides"
        subtitle="Practical advice for buyers sourcing products from China. Learn from our experience."
        showCTA={false}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-neutral-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                    <span className="text-xs text-neutral-400">•</span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Help with Your Sourcing Project?"
        subtitle="Our team is ready to assist. Get a free consultation and sourcing plan."
      />
    </div>
  );
};

export default Blog;
