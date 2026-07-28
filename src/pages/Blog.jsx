import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const posts = [
  {
    id: '1',
    title: 'How to Verify Chinese Suppliers: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers, from business license checks to on-site factory audits.',
    author: 'Zhang Wei',
    date: '2026-07-15',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-suppliers-1a2b3c',
    titleId: 'blog-title-verify',
    descId: 'blog-desc-verify',
  },
  {
    id: '2',
    title: 'Understanding China\'s Major Manufacturing Clusters',
    excerpt: 'A comprehensive overview of China\'s industrial regions and which products are best sourced from each cluster.',
    author: 'Li Ming',
    date: '2026-07-08',
    readTime: '10 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-manufacturing-clusters-4d5e6f',
    titleId: 'blog-title-clusters',
    descId: 'blog-desc-clusters',
  },
  {
    id: '3',
    title: 'Quality Control in China: Types of Inspections Explained',
    excerpt: 'From pre-production to pre-shipment, understand the different QC inspection types and when to use each.',
    author: 'Chen Hong',
    date: '2026-06-28',
    readTime: '7 min read',
    category: 'Quality Control',
    imgId: 'blog-qc-inspections-7g8h9i',
    titleId: 'blog-title-qc',
    descId: 'blog-desc-qc',
  },
  {
    id: '4',
    title: 'Incoterms for China Sourcing: FOB, CIF, DDP Explained',
    excerpt: 'A practical guide to shipping terms when importing from China, including cost breakdowns and risk allocation.',
    author: 'Wang Fang',
    date: '2026-06-20',
    readTime: '9 min read',
    category: 'Logistics',
    imgId: 'blog-incoterms-0j1k2l',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
  },
  {
    id: '5',
    title: 'Negotiating with Chinese Suppliers: Tips for Better Prices',
    excerpt: 'Practical negotiation strategies that help you secure competitive pricing while maintaining good supplier relationships.',
    author: 'Zhang Wei',
    date: '2026-06-12',
    readTime: '7 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-negotiating-3m4n5o',
    titleId: 'blog-title-negotiate',
    descId: 'blog-desc-negotiate',
  },
  {
    id: '6',
    title: 'Product Compliance: CE, FCC, RoHS and Other Certifications',
    excerpt: 'Navigate the complex world of product certifications required for importing into Europe, North America, and other markets.',
    author: 'Li Ming',
    date: '2026-06-05',
    readTime: '11 min read',
    category: 'Compliance',
    imgId: 'blog-compliance-6p7q8r',
    titleId: 'blog-title-compliance',
    descId: 'blog-desc-compliance',
  },
  {
    id: '7',
    title: 'How to Avoid Common Sourcing Pitfalls When Importing from China',
    excerpt: 'Learn from real-world mistakes: communication gaps, specification misunderstandings, and quality inconsistencies.',
    author: 'Chen Hong',
    date: '2026-05-28',
    readTime: '8 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-pitfalls-9s0t1u',
    titleId: 'blog-title-pitfalls',
    descId: 'blog-desc-pitfalls',
  },
  {
    id: '8',
    title: 'The Complete Guide to Shipping from China: Sea vs Air vs Rail',
    excerpt: 'Compare shipping methods by cost, speed, and suitability for different product types and order volumes.',
    author: 'Wang Fang',
    date: '2026-05-20',
    readTime: '10 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-v2w3x4',
    titleId: 'blog-title-shipping',
    descId: 'blog-desc-shipping',
  },
  {
    id: '9',
    title: 'Building Long-Term Supplier Relationships in China',
    excerpt: 'Why relationship-building matters in Chinese business culture and how to develop lasting, mutually beneficial partnerships.',
    author: 'Zhang Wei',
    date: '2026-05-12',
    readTime: '6 min read',
    category: 'Business Culture',
    imgId: 'blog-relationships-y5z6a7',
    titleId: 'blog-title-relationships',
    descId: 'blog-desc-relationships',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="blog-hero-label">Blog</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="blog-hero-heading">Insights on Sourcing from China</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="blog-hero-subtitle">
                Expert guides, practical tips, and industry insights to help you source smarter.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-b2b-light rounded-lg overflow-hidden lg:flex border border-b2b-border">
            <div className="lg:w-1/2">
              <img
                alt={posts[0].title}
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}] [blog-hero-subtitle] [blog-hero-heading]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{posts[0].category}</span>
              <h2 id={posts[0].titleId} className="text-2xl font-bold text-b2b-text mb-3">{posts[0].title}</h2>
              <p id={posts[0].descId} className="text-b2b-text-medium mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-b2b-text-light mb-4">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{posts[0].author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{posts[0].date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{posts[0].readTime}</span>
              </div>
              <Link
                to={`/blog/${posts[0].id}`}
                className="inline-flex items-center text-sm font-semibold text-navy hover:text-navy-light"
              >
                Read Article <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-b2b-text mb-10">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-b2b-border hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-hero-subtitle] [blog-hero-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h3 id={post.titleId} className="text-lg font-semibold text-b2b-text mt-2 mb-2">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-b2b-text-medium mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-b2b-text-light mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-navy hover:text-navy-light"
                  >
                    Read Article <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-lg text-b2b-text-medium mb-8 max-w-2xl mx-auto">
            Our team is ready to help with your specific sourcing needs. Get in touch for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}