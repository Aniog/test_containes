import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A practical checklist for assessing supplier legitimacy, production capabilities, and quality management systems.',
      date: 'June 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min',
    },
    {
      title: 'Understanding Quality Inspection Standards for China Manufacturing',
      excerpt: 'An overview of common inspection protocols, AQL standards, and how to communicate quality requirements effectively.',
      date: 'June 8, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Navigating Shipping and Customs: A Guide for First-Time Importers',
      excerpt: 'Key considerations for freight selection, documentation requirements, and working with customs brokers.',
      date: 'May 28, 2026',
      category: 'Logistics',
      readTime: '10 min',
    },
    {
      title: 'The Real Cost of Sourcing from China: Beyond Unit Price',
      excerpt: 'Hidden costs to consider when evaluating supplier quotes, including quality issues, delays, and communication overhead.',
      date: 'May 20, 2026',
      category: 'Cost Analysis',
      readTime: '7 min',
    },
    {
      title: 'Building Long-Term Supplier Relationships in China',
      excerpt: 'Strategies for developing reliable supplier partnerships that improve over time through clear communication and fair practices.',
      date: 'May 12, 2026',
      category: 'Supplier Relations',
      readTime: '5 min',
    },
    {
      title: 'Common Pitfalls When Sourcing Consumer Electronics from China',
      excerpt: 'Lessons from sourcing projects: specification clarity, certification requirements, and managing component substitutions.',
      date: 'May 5, 2026',
      category: 'Industry Insights',
      readTime: '9 min',
    },
  ];

  return (
    <div>
      <section className="bg-[#1a365d] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-xl text-[#a0aec0]">Practical insights on China sourcing and supply chain management</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="border border-[#e2e8f0] rounded-lg p-8 hover:border-[#3182ce] transition-colors">
                <div className="flex items-center gap-4 text-sm text-[#4a5568] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-sm text-[#3182ce] mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-[#4a5568] mb-4">{post.excerpt}</p>
                <span className="text-[#3182ce] text-sm font-medium inline-flex items-center gap-1">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Have a Question About Sourcing?</h2>
          <p className="text-[#4a5568] mb-6">Our team is available to discuss your specific requirements and answer questions.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3182ce] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2b6cb0]">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
