import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const BlogPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const articles = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'A step-by-step guide to verifying supplier legitimacy, including business license checks, factory audits, and reference verification.',
      category: 'Supplier Verification',
      date: '2026-07-15',
      author: 'SSourcing China Team',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Quality Inspection Standards in China',
      excerpt: 'Learn about AQL sampling, inspection levels, and how to set quality standards that protect your business from defective products.',
      category: 'Quality Control',
      date: '2026-07-08',
      author: 'SSourcing China Team',
      readTime: '6 min read',
    },
    {
      title: 'China Shipping Guide: FOB, CIF, and DDP Explained',
      excerpt: 'A practical guide to international shipping terms, helping you choose the right incoterms for your China imports.',
      category: 'Shipping',
      date: '2026-06-28',
      author: 'SSourcing China Team',
      readTime: '10 min read',
    },
    {
      title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
      excerpt: 'Learn from the most common sourcing mistakes we see and how to protect your business from costly errors.',
      category: 'Sourcing Tips',
      date: '2026-06-15',
      author: 'SSourcing China Team',
      readTime: '7 min read',
    },
    {
      title: 'How to Negotiate Prices with Chinese Manufacturers',
      excerpt: 'Practical negotiation strategies that work with Chinese suppliers, including cultural considerations and effective communication tips.',
      category: 'Negotiation',
      date: '2026-06-01',
      author: 'SSourcing China Team',
      readTime: '9 min read',
    },
    {
      title: 'Production Monitoring: Why It Matters and How We Do It',
      excerpt: 'Understand the importance of production monitoring and how regular factory visits can prevent costly delays and quality issues.',
      category: 'Production',
      date: '2026-05-20',
      author: 'SSourcing China Team',
      readTime: '5 min read',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
            <p id="blog-subtitle" className="text-lg text-slate-300">
              Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <article key={index} className="card-default group cursor-pointer">
                <div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-img-${index + 1}`}
                    data-strk-img={`[blog-excerpt-${index}] [blog-title-${index}] [blog-subtitle] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h2 id={`blog-title-${index}`} className="heading-3 mb-2 group-hover:text-blue-700 transition-colors">
                  {article.title}
                </h2>
                <p id={`blog-excerpt-${index}`} className="text-slate-600 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Our team is ready to help you navigate the complexities of sourcing from China. Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
