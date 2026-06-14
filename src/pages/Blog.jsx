import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/content';
import { formatDate } from '../lib/utils';

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              China Sourcing Insights & Tips
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Expert advice on supplier verification, quality control, logistics, and best practices for sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Link
            to="/blog"
            className="grid lg:grid-cols-2 gap-12 items-center bg-[#F8FAFC] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(blogPosts[0].date)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-[#E67E22] transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-[#6B7280] mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-[#E67E22] font-semibold">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-[#6B7280]">
              Stay updated with the latest China sourcing tips, industry news, and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-[#E67E22]/10 text-[#E67E22] text-xs font-semibold rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#E67E22] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E67E22] text-sm font-medium">
                      <span>Read</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Subscribe to our newsletter for the latest China sourcing tips, industry insights, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#6B7280] mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get expert help with your China sourcing needs. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;