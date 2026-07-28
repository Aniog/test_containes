import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sourcing Process', 'Quality Control', 'Logistics', 'Supplier Management', 'Industry Insights'];

  const posts = [
    {
      id: 1,
      title: 'How to Evaluate a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A practical checklist for verifying supplier legitimacy, production capability, and quality systems before committing to production.',
      category: 'Sourcing Process',
      date: 'July 15, 2026',
      readTime: '8 min',
      content: 'Before placing your first order with a new Chinese supplier, thorough evaluation is essential. This article outlines the key areas to investigate: business registration verification, on-site audit priorities, sample evaluation criteria, and reference checks. We also discuss common red flags that indicate a supplier may not be suitable for your requirements.',
    },
    {
      id: 2,
      title: 'Understanding AQL Sampling for Pre-Shipment Inspections',
      excerpt: 'A clear explanation of Acceptable Quality Limit (AQL) standards and how to apply them when inspecting products before shipment.',
      category: 'Quality Control',
      date: 'July 8, 2026',
      readTime: '6 min',
      content: 'AQL sampling is the most common method for pre-shipment inspection. This guide explains how AQL levels work, what different inspection levels mean, and how to determine appropriate acceptance criteria for your product category. We include examples for consumer goods, electronics, and industrial products.',
    },
    {
      id: 3,
      title: 'Common Documentation Errors That Delay Customs Clearance',
      excerpt: 'Documentation mistakes that frequently cause shipment delays at destination ports, and how to avoid them.',
      category: 'Logistics',
      date: 'June 28, 2026',
      readTime: '5 min',
      content: 'Incorrect or incomplete documentation is one of the leading causes of customs delays. This article covers the most frequent errors we see: mismatched HS codes, incomplete commercial invoices, missing certificates of origin, and packaging list discrepancies. We provide a documentation checklist for common shipment types.',
    },
    {
      id: 4,
      title: 'What to Include in a Supplier Audit Report',
      excerpt: 'A framework for documenting factory audit findings in a way that supports clear decision-making.',
      category: 'Sourcing Process',
      date: 'June 20, 2026',
      readTime: '7 min',
      content: 'A useful factory audit report goes beyond photos and checklists. This post describes the structure we use for audit reports: facility overview, production capacity analysis, quality system assessment, compliance observations, and risk summary. We explain what buyers should look for in each section.',
    },
    {
      id: 5,
      title: 'Managing Quality Issues After Production Has Started',
      excerpt: 'Practical steps for addressing quality problems discovered during production or inspection.',
      category: 'Quality Control',
      date: 'June 12, 2026',
      readTime: '6 min',
      content: 'Even with careful supplier selection, quality issues can arise. This article outlines a structured approach to handling non-conformances: documenting the issue, determining root cause, negotiating corrective actions, and deciding whether to accept, rework, or reject. We also discuss how to prevent recurrence on future orders.',
    },
    {
      id: 6,
      title: 'Incoterms 2020: Which Terms Work Best for China Sourcing?',
      excerpt: 'A comparison of common Incoterms used in China sourcing and guidance on selecting the right term for your situation.',
      category: 'Logistics',
      date: 'June 5, 2026',
      readTime: '5 min',
      content: 'Choosing the right Incoterm affects cost, risk, and logistics complexity. This guide compares FOB, CIF, EXW, and DDP for China exports. We discuss when each term makes sense, what responsibilities transfer at each point, and common misconceptions about who handles what.',
    },
    {
      id: 7,
      title: 'Building Long-Term Supplier Relationships in China',
      excerpt: 'Why treating suppliers as partners rather than transactional vendors leads to better outcomes over time.',
      category: 'Supplier Management',
      date: 'May 28, 2026',
      readTime: '7 min',
      content: 'Many buyers approach supplier relationships transactionally. This article explains the benefits of longer-term partnerships: priority capacity allocation, willingness to invest in tooling, faster problem resolution, and continuous improvement. We share practices that support productive ongoing relationships.',
    },
    {
      id: 8,
      title: 'Product Compliance Requirements for the European Market',
      excerpt: 'An overview of key regulatory requirements for consumer products entering the EU, including CE marking and documentation.',
      category: 'Industry Insights',
      date: 'May 20, 2026',
      readTime: '8 min',
      content: 'Exporting to Europe requires attention to product compliance. This post summarizes the main requirements for common product categories: CE marking obligations, required technical documentation, and the role of the EU Responsible Person. We also discuss how to verify supplier compliance claims.',
    },
    {
      id: 9,
      title: 'How to Handle Price Increases from Existing Suppliers',
      excerpt: 'Strategies for responding to supplier price increase requests while maintaining supply continuity.',
      category: 'Supplier Management',
      date: 'May 12, 2026',
      readTime: '5 min',
      content: 'Price increases are a reality in sourcing. This article discusses how to evaluate increase requests, negotiate effectively, and develop contingency plans. We cover timing considerations, volume leverage, alternative sourcing, and when it makes sense to accept an increase versus switching suppliers.',
    },
    {
      id: 10,
      title: 'The Role of Third-Party Inspection in Risk Management',
      excerpt: 'Why independent inspection adds value even when you have an established relationship with a supplier.',
      category: 'Quality Control',
      date: 'May 5, 2026',
      readTime: '6 min',
      content: 'Some buyers skip inspection once they trust a supplier. This post explains why independent inspection remains valuable: it provides objective documentation, catches issues that internal teams might miss, and creates accountability. We discuss inspection frequency recommendations by product risk level.',
    },
    {
      id: 11,
      title: 'Navigating Chinese New Year Production Disruptions',
      excerpt: 'Planning considerations for orders that may be affected by the Chinese New Year factory shutdown period.',
      category: 'Industry Insights',
      date: 'April 28, 2026',
      readTime: '4 min',
      content: 'Chinese New Year typically causes a 3-4 week production shutdown across much of China. This article provides a timeline for planning around the holiday, discusses how to identify suppliers with capacity before the break, and offers strategies for managing orders that straddle the shutdown period.',
    },
    {
      id: 12,
      title: 'What to Do When a Supplier Stops Responding',
      excerpt: 'Steps to take when communication with a supplier breaks down, and how to protect your order.',
      category: 'Supplier Management',
      date: 'April 20, 2026',
      readTime: '5 min',
      content: 'Supplier communication issues can signal serious problems. This guide outlines immediate actions: documenting all attempts to contact, escalating through alternative channels, assessing order status, and preparing contingency plans. We also discuss when to involve third parties or consider order cancellation.',
    },
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            Practical insights on sourcing from China. Written for buyers who want clear, actionable information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                    : 'bg-white text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card card">
                <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                  <span className="px-2 py-0.5 bg-[#F1F5F9] rounded text-[#475569]">{post.category}</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-semibold text-lg mb-3 leading-snug">{post.title}</h2>
                <p className="text-sm text-[#475569] mb-4">{post.excerpt}</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-[#0EA5E9] font-medium select-none">Read more</summary>
                  <div className="mt-3 text-[#475569] leading-relaxed">{post.content}</div>
                </details>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-[#64748B] py-8">No articles in this category yet.</p>
          )}

          <div className="mt-10 text-center">
            <p className="text-[#475569] mb-4">Have a specific sourcing question?</p>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
