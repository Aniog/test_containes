import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const categories = ['All', 'Sourcing Process', 'Quality Control', 'Supplier Management', 'Logistics'];

  const posts = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Factory Before Placing an Order',
      category: 'Sourcing Process',
      date: 'July 15, 2026',
      excerpt: 'A practical checklist for assessing supplier capabilities, quality systems, and business stability before committing to production.',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Understanding AQL Sampling for Pre-Shipment Inspections',
      category: 'Quality Control',
      date: 'July 8, 2026',
      excerpt: 'An explanation of Acceptable Quality Limit sampling standards and how to determine appropriate inspection levels for your products.',
      readTime: '6 min',
    },
    {
      id: 3,
      title: 'Common Documentation Errors That Delay Shipments from China',
      category: 'Logistics',
      date: 'June 28, 2026',
      excerpt: 'A review of frequently overlooked paperwork issues and how proper preparation can prevent customs delays and extra costs.',
      readTime: '5 min',
    },
    {
      id: 4,
      title: 'Building Long-Term Supplier Relationships in China',
      category: 'Supplier Management',
      date: 'June 20, 2026',
      excerpt: 'Why treating suppliers as partners rather than vendors leads to better pricing, priority treatment, and fewer quality issues over time.',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'What to Include in a Product Specification for Chinese Manufacturers',
      category: 'Sourcing Process',
      date: 'June 12, 2026',
      excerpt: 'Clear specifications reduce misunderstandings. This guide covers the technical and commercial details that should be documented before requesting quotes.',
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'How Production Monitoring Reduces Quality Risks',
      category: 'Quality Control',
      date: 'June 5, 2026',
      excerpt: 'Why waiting until pre-shipment inspection to discover problems is costly, and how regular factory visits catch issues earlier in the process.',
      readTime: '6 min',
    },
    {
      id: 7,
      title: 'Choosing Between Multiple Suppliers: A Decision Framework',
      category: 'Sourcing Process',
      date: 'May 28, 2026',
      excerpt: 'Price is only one factor. This article outlines a structured approach to comparing suppliers on quality, capacity, communication, and risk.',
      readTime: '7 min',
    },
    {
      id: 8,
      title: 'Incoterms Explained for Importers Sourcing from China',
      category: 'Logistics',
      date: 'May 18, 2026',
      excerpt: 'A practical overview of the most commonly used Incoterms in China trade and what each means for cost allocation and risk transfer.',
      readTime: '5 min',
    },
    {
      id: 9,
      title: 'Managing Quality When Scaling from Samples to Production',
      category: 'Quality Control',
      date: 'May 10, 2026',
      excerpt: 'The transition from approved samples to volume production often introduces quality issues. Strategies for maintaining consistency at scale.',
      readTime: '8 min',
    },
    {
      id: 10,
      title: 'Red Flags to Watch for During Factory Visits',
      category: 'Supplier Management',
      date: 'April 30, 2026',
      excerpt: 'Observable warning signs during on-site visits that may indicate quality, capacity, or business stability concerns.',
      readTime: '6 min',
    },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (containerRef.current && strkImgConfig) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      <section className="relative text-white py-16 overflow-hidden">
        <div
          data-strk-bg-id="blog-hero-bg"
          data-strk-bg="[blog-hero-subtitle] [blog-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 id="blog-hero-title" className="text-4xl font-semibold text-white mb-4">Blog</h1>
          <p id="blog-hero-subtitle" className="text-lg text-slate-200 max-w-2xl mx-auto">
            Practical guidance on sourcing from China, based on our experience working with factories and buyers.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors">
                <div className="relative h-36 bg-slate-100 -mx-6 -mt-6 mb-4">
                  <img
                    data-strk-img-id={`blog-post-${post.id}-img`}
                    data-strk-img={`[blog-post-${post.id}-title] factory quality control logistics`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="bg-slate-100 px-2 py-0.5 rounded">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 id={`blog-post-${post.id}-title`} className="text-xl font-semibold text-brand-navy mb-3 leading-tight">{post.title}</h2>
                <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                <span className="text-sm text-brand-teal font-medium">Read article →</span>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 text-slate-500">No articles in this category yet.</div>
          )}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-brand-navy mb-3">Have a Question About Sourcing?</h2>
          <p className="text-slate-600 mb-6">Contact us directly or browse our resources for more information.</p>
          <Link to="/contact"><Button>Contact Our Team</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
