import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'post-1',
    slug: 'how-to-verify-chinese-supplier',
    tag: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. Here\'s a practical checklist to protect your business.',
    date: '2026-05-12',
    readTime: '6 min read',
    imgId: 'blog-img-post1-a1b2c3',
    titleId: 'blog-title-post1',
    descId: 'blog-desc-post1',
  },
  {
    id: 'post-2',
    slug: 'aql-inspection-guide',
    tag: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. This guide explains how it works and how to choose the right AQL level for your products.',
    date: '2026-04-28',
    readTime: '8 min read',
    imgId: 'blog-img-post2-d4e5f6',
    titleId: 'blog-title-post2',
    descId: 'blog-desc-post2',
  },
  {
    id: 'post-3',
    slug: 'incoterms-guide-importers',
    tag: 'Shipping',
    title: 'Incoterms Guide for Importers: FOB, CIF, EXW Explained',
    excerpt: 'Choosing the wrong Incoterm can cost you money and create legal headaches. This guide breaks down the most common shipping terms used in China trade.',
    date: '2026-04-10',
    readTime: '7 min read',
    imgId: 'blog-img-post3-g7h8i9',
    titleId: 'blog-title-post3',
    descId: 'blog-desc-post3',
  },
  {
    id: 'post-4',
    slug: 'china-sourcing-agent-vs-trading-company',
    tag: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: Which Is Right for You?',
    excerpt: 'Many buyers are unsure whether to work with a sourcing agent or a trading company. This article explains the key differences and helps you decide which model fits your needs.',
    date: '2026-03-22',
    readTime: '5 min read',
    imgId: 'blog-img-post4-j1k2l3',
    titleId: 'blog-title-post4',
    descId: 'blog-desc-post4',
  },
  {
    id: 'post-5',
    slug: 'ce-certification-china',
    tag: 'Compliance',
    title: 'CE Certification for Products Made in China: A Practical Guide',
    excerpt: 'If you\'re importing products into Europe, CE marking is often mandatory. Here\'s what you need to know about getting CE certification for goods manufactured in China.',
    date: '2026-03-05',
    readTime: '9 min read',
    imgId: 'blog-img-post5-m4n5o6',
    titleId: 'blog-title-post5',
    descId: 'blog-desc-post5',
  },
  {
    id: 'post-6',
    slug: 'yiwu-market-guide',
    tag: 'China Markets',
    title: 'Yiwu Market Guide: What to Buy and How to Navigate It',
    excerpt: 'Yiwu is the world\'s largest small commodities market. This guide covers what products are best sourced there, how to find suppliers, and what to watch out for.',
    date: '2026-02-18',
    readTime: '10 min read',
    imgId: 'blog-img-post6-p7q8r9',
    titleId: 'blog-title-post6',
    descId: 'blog-desc-post6',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Sourcing Insights Blog"
        subtitle="Practical guides and industry knowledge for importers buying from China."
        breadcrumb="Blog"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Featured post */}
          <div className="card-base overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={posts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4 w-fit">
                  {posts[0].tag}
                </span>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-brand-blue mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-gray-600 text-sm leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {posts[0].readTime}
                  </div>
                  <Link to="/blog" className="text-brand-blue text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="card-base overflow-hidden flex flex-col">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-3 w-fit">
                    {post.tag}
                  </span>
                  <h3 id={post.titleId} className="font-bold text-brand-blue text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                    <Link to="/blog" className="text-brand-blue text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
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
