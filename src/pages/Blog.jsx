import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/shared/SectionHeader';
import CTABanner from '@/components/shared/CTABanner';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    desc: 'Guide to verifying Chinese suppliers before placing orders, covering factory audits and red flags',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'AQL (Acceptable Quality Level) is the standard used by most quality inspectors in China. This article explains what AQL means, how sampling works, and how to choose the right inspection level for your products.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    desc: 'AQL inspection standards guide for importers sourcing from China',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight: Which Is Right for Your Shipment?',
    excerpt: 'Choosing between sea and air freight depends on your cargo size, urgency, and budget. We break down the cost and time trade-offs to help you make the right decision for each shipment.',
    date: 'June 28, 2026',
    readTime: '5 min read',
    imgId: 'blog-freight-img-g7h8i9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    desc: 'Comparison of sea freight vs air freight for China imports',
  },
  {
    id: 'oem-vs-odm',
    category: 'Sourcing Strategy',
    title: 'OEM vs ODM: What Is the Difference and Which Should You Choose?',
    excerpt: 'OEM and ODM are two common manufacturing models in China. Understanding the difference helps you choose the right approach for your product development and brand strategy.',
    date: 'June 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-oem-img-j1k2l3',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    desc: 'OEM vs ODM manufacturing models explained for China sourcing buyers',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Strategy',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Many first-time importers make avoidable mistakes that cost them time and money. From skipping factory audits to ignoring payment terms, here are the most common pitfalls and how to avoid them.',
    date: 'June 10, 2026',
    readTime: '9 min read',
    imgId: 'blog-mistakes-img-m4n5o6',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    desc: 'Common mistakes buyers make when sourcing products from China',
  },
  {
    id: 'product-certifications-china',
    category: 'Compliance',
    title: 'Product Certifications You Need When Importing from China',
    excerpt: 'Depending on your product and destination market, you may need CE, FCC, RoHS, FDA, or other certifications. This guide explains which certifications apply to common product categories.',
    date: 'May 30, 2026',
    readTime: '10 min read',
    imgId: 'blog-certs-img-p7q8r9',
    titleId: 'blog-certs-title',
    descId: 'blog-certs-desc',
    desc: 'Product certifications required for importing from China including CE, FCC, RoHS',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'Compliance'];

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
      {/* Hero */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-red/20 text-red-300 mb-6">
            Sourcing Knowledge
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">China Sourcing Blog</h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Practical guides, tips, and insights for global buyers sourcing products from China.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <Card hover className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="blue">{posts[0].category}</Badge>
                    <span className="text-xs text-gray-400 font-medium bg-red-50 text-red-600 px-2 py-0.5 rounded-full">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-snug">{posts[0].title}</h2>
                  <p id={posts[0].descId} className="text-gray-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1"><Calendar size={13} />{posts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock size={13} />{posts[0].readTime}</span>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all">
                    Read Article <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid */}
          <SectionHeader badge="Latest Articles" title="More Sourcing Guides" center={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card key={post.id} hover className="overflow-hidden flex flex-col">
                <div className="aspect-video overflow-hidden bg-gray-100">
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
                <div className="p-6 flex flex-col flex-1">
                  <Badge variant="blue" className="mb-3 self-start">{post.category}</Badge>
                  <h3 id={post.titleId} className="font-bold text-navy-900 mb-3 leading-snug flex-1">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-xs mb-4 hidden">{post.desc}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer your questions about sourcing from China."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </div>
  );
}
