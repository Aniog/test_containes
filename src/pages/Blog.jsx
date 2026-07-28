import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      date: 'July 15, 2026',
      excerpt: 'A practical checklist for assessing supplier legitimacy, production capabilities, and compliance status.',
      category: 'Supplier Verification',
    },
    {
      title: 'Common Quality Issues in China Manufacturing and How to Prevent Them',
      date: 'July 8, 2026',
      excerpt: 'Learn about frequent quality problems and the inspection points that help catch them early.',
      category: 'Quality Control',
    },
    {
      title: 'Understanding Shipping Terms: FOB, CIF, and DDP Explained',
      date: 'June 28, 2026',
      excerpt: 'A clear breakdown of common Incoterms and what they mean for your sourcing costs and responsibilities.',
      category: 'Logistics',
    },
    {
      title: 'Building Long-Term Supplier Relationships in China',
      date: 'June 20, 2026',
      excerpt: 'Why ongoing communication and fair treatment lead to better pricing, priority service, and consistent quality.',
      category: 'Supplier Management',
    },
    {
      title: 'What to Include in a Product Specification Sheet',
      date: 'June 12, 2026',
      excerpt: 'Essential details that help manufacturers understand your requirements and reduce miscommunication.',
      category: 'Best Practices',
    },
    {
      title: 'Navigating Customs and Import Regulations',
      date: 'June 5, 2026',
      excerpt: 'Key considerations for smooth customs clearance and avoiding delays at the border.',
      category: 'Logistics',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#1F2937] mb-4">Blog</h1>
        <p className="text-lg text-[#4B5563]">Insights and practical guidance on sourcing from China.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-sm transition-shadow">
            <div className="text-xs text-[#1E3A5F] font-medium mb-2">{post.category}</div>
            <h3 className="font-semibold text-lg mb-2 text-[#1F2937]">{post.title}</h3>
            <p className="text-sm text-[#4B5563] mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-[#6B7280]">
              <span>{post.date}</span>
              <span className="text-[#1E3A5F] font-medium cursor-pointer hover:underline">Read more →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-[#4B5563]">For sourcing advice tailored to your needs, <Link to="/contact" className="text-[#1E3A5F] font-medium hover:underline">contact our team</Link>.</p>
      </div>
    </div>
  );
};

export default Blog;
