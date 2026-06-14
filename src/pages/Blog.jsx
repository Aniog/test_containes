import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const posts = [
    {
      slug: 'factory-audit-what-to-expect',
      title: 'What to Expect from a Factory Audit in China',
      excerpt: 'A practical overview of what a typical factory audit covers, why it matters, and how to interpret the findings in a report.',
      date: 'June 10, 2026',
      readTime: '8 min',
      category: 'Quality',
    },
    {
      slug: 'pre-shipment-inspection-guide',
      title: 'A Buyer\'s Guide to Pre-Shipment Inspection',
      excerpt: 'How pre-shipment inspections work, what AQL levels mean in practice, and how to decide what level of inspection makes sense for your order.',
      date: 'May 28, 2026',
      readTime: '7 min',
      category: 'Quality',
    },
    {
      slug: 'moq-and-pricing-realities',
      title: 'Understanding MOQ and Pricing Realities When Sourcing from China',
      excerpt: 'Why minimum order quantities exist, how they affect pricing, and how to approach negotiations without damaging the supplier relationship.',
      date: 'May 15, 2026',
      readTime: '6 min',
      category: 'Sourcing',
    },
    {
      slug: 'common-mistakes-first-time-buyers',
      title: 'Common Mistakes First-Time Buyers Make When Sourcing from China',
      excerpt: 'Based on patterns we see repeatedly: skipping verification, unclear specifications, unrealistic timelines, and weak payment structures.',
      date: 'May 2, 2026',
      readTime: '9 min',
      category: 'Sourcing',
    },
    {
      slug: 'shipping-options-comparison',
      title: 'Sea, Air, Rail, and Express: How to Choose a Shipping Method',
      excerpt: 'A practical comparison of transit times, costs, and trade-offs between different freight options for typical China-to-overseas shipments.',
      date: 'April 20, 2026',
      readTime: '7 min',
      category: 'Logistics',
    },
    {
      slug: 'working-with-sourcing-agents',
      title: 'How to Work Effectively with a Sourcing Agent',
      excerpt: 'What information to provide, how to set expectations, and how to use an agent\'s reports and recommendations to make better decisions.',
      date: 'April 8, 2026',
      readTime: '6 min',
      category: 'Sourcing',
    },
    {
      slug: 'documentation-for-import',
      title: 'Documentation Basics for Importing from China',
      excerpt: 'An overview of the key commercial and shipping documents you will typically receive, and what to check before goods leave the factory.',
      date: 'March 25, 2026',
      readTime: '5 min',
      category: 'Logistics',
    },
    {
      slug: 'quality-agreements-suppliers',
      title: 'Why a Simple Quality Agreement Can Prevent Expensive Problems',
      excerpt: 'How documenting quality expectations, inspection criteria, and acceptance standards upfront can reduce disputes later.',
      date: 'March 12, 2026',
      readTime: '8 min',
      category: 'Quality',
    },
  ];

  const categories = ['All', 'Sourcing', 'Quality', 'Logistics'];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Blog</h1>
            <p className="text-lg text-slate-600">
              Practical articles on sourcing from China. We focus on what actually matters for buyers, not marketing language.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="pb-12 container">
        <div className="max-w-3xl text-sm text-slate-600 border-t border-slate-200 pt-6">
          <p>These articles reflect our experience and observations. They are not legal, regulatory, or financial advice. Regulations and logistics conditions change; always verify current requirements for your specific situation.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;