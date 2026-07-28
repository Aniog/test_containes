import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeader from '../sections/SectionHeader';

const blogPosts = [
  {
    id: 1,
    title: "How to Verify a Chinese Factory Before Placing Orders",
    excerpt: "Learn the essential steps to verify factory legitimacy, assess production capacity, and avoid scams when sourcing from China.",
    category: "Factory Verification",
    date: "January 15, 2026",
    readTime: "8 min read",
    link: "/blog"
  },
  {
    id: 2,
    title: "Understanding AQL Standards for Product Inspection",
    excerpt: "A comprehensive guide to Acceptable Quality Limit standards and how to apply them effectively in your quality control process.",
    category: "Quality Control",
    date: "January 10, 2026",
    readTime: "6 min read",
    link: "/blog"
  },
  {
    id: 3,
    title: "Shipping from China: FOB vs CIF Explained",
    excerpt: "Clear explanation of shipping terms, cost implications, and recommendations for choosing the right Incoterm for your business.",
    category: "Shipping & Logistics",
    date: "January 5, 2026",
    readTime: "5 min read",
    link: "/blog"
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Latest Articles"
          title="China Sourcing Insights"
          subtitle="Stay updated with practical tips, industry trends, and best practices for successful China sourcing."
          className="mb-12"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="card overflow-hidden group"
            >
              {/* Category Badge */}
              <div className="bg-primary px-4 py-2">
                <span className="text-accent text-sm font-semibold">{post.category}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-text-muted text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="px-6 pb-4">
                <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
