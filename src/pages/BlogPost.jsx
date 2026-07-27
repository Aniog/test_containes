import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Placeholder content - in production this would fetch from an API
  const post = {
    id,
    title: 'Understanding AQL: A Practical Guide to Quality Inspection Standards',
    category: 'Quality Control',
    author: 'Michael Zhang',
    date: 'July 8, 2024',
    readTime: '6 min read',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%232C5282" width="800" height="400"/%3E%3Ccircle fill="%23ffffff" cx="400" cy="200" r="150" opacity="0.1"/%3E%3Ccircle fill="%23ffffff" cx="400" cy="200" r="100" opacity="0.1"/%3E%3Ccircle fill="%23ffffff" cx="400" cy="200" r="50" opacity="0.1"/%3E%3Crect fill="%23C9A227" x="350" y="170" width="100" height="60" rx="8" opacity="0.3"/%3E%3C/svg%3E',
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E3A5F] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="px-3 py-1 bg-[#C9A227] text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#64748B] mb-8">
            When sourcing products from China, ensuring consistent quality is one of the biggest challenges 
            that buyers face. This is where AQL (Acceptable Quality Limit) sampling comes into play.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4">What is AQL?</h2>
          <p className="text-[#64748B] mb-4">
            AQL stands for Acceptable Quality Limit. It is the worst tolerable process average (mean) 
            in percentage or ratio that is still considered acceptable. In other words, it's the maximum 
            percentage of defective items that can be considered acceptable during random sampling inspection.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4">Common AQL Levels</h2>
          <p className="text-[#64748B] mb-4">
            Different products and industries use different AQL standards. The most common AQL levels are:
          </p>
          <ul className="list-disc list-inside text-[#64748B] mb-4 space-y-2">
            <li><strong>General Inspection Level I, II, III</strong> - Used for most consumer goods</li>
            <li><strong>Special Inspection Levels S1-S4</strong> - Used for specific testing scenarios</li>
            <li><strong>AQL 0.010 to 10.0</strong> - Defect tolerance levels</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4">How to Choose the Right AQL</h2>
          <p className="text-[#64748B] mb-4">
            The choice of AQL depends on your product type and quality requirements:
          </p>
          <ul className="list-disc list-inside text-[#64748B] mb-4 space-y-2">
            <li><strong>Critical defects (AQL 0.0 or 0.010):</strong> Safety issues, legal compliance</li>
            <li><strong>Major defects (AQL 1.0 or 1.5):</strong> Functionality affected, customer complaints</li>
            <li><strong>Minor defects (AQL 2.5 or 4.0):</strong> Small imperfections, mostly cosmetic</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4">Our Inspection Process</h2>
          <p className="text-[#64748B] mb-4">
            At SSourcing China, we follow a rigorous inspection process that aligns with international 
            AQL standards. Our inspectors are trained to:
          </p>
          <ul className="list-disc list-inside text-[#64748B] mb-4 space-y-2">
            <li>Randomly select samples according to statistical methods</li>
            <li>Check each sample against your specifications</li>
            <li>Classify defects as critical, major, or minor</li>
            <li>Compare results against agreed AQL levels</li>
            <li>Provide detailed reports with photos and findings</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1E293B] mt-8 mb-4">Conclusion</h2>
          <p className="text-[#64748B] mb-4">
            Understanding and implementing proper AQL sampling is essential for any buyer sourcing from China. 
            It provides an objective, statistical basis for quality decisions and helps protect your business 
            from costly quality issues.
          </p>
          <p className="text-[#64748B] mb-4">
            Need help setting up quality control for your orders? Contact us to learn more about our 
            inspection services.
          </p>
        </div>

        {/* Share Section */}
        <div className="border-t border-[#E2E8F0] mt-12 pt-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#64748B]">Share this article:</span>
            <div className="flex gap-4">
              <button className="p-2 bg-[#1E3A5F] text-white rounded-full hover:bg-[#2C5282] transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 bg-[#1E3A5F] text-white rounded-full hover:bg-[#2C5282] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-[#1E3A5F] text-white rounded-full hover:bg-[#2C5282] transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1E3A5F] rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Quality Control for Your Orders?
          </h3>
          <p className="text-white/80 mb-6">
            Our QC inspectors are ready to help ensure your products meet your standards.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#B8922A] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
