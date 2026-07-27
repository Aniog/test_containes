import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const categories = ['All', 'Sourcing Guide', 'Quality Control', 'Logistics', 'Factory Verification'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Practical insights on China sourcing, quality control, and international trade. Learn from our experience helping global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === category
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0891B2]/10 text-[#0891B2] text-sm font-medium rounded-full mb-4">
                  <Tag className="w-3 h-3" />
                  Featured
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <button className="inline-flex items-center text-[#0891B2] font-medium hover:underline">
                  Read Article
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="bg-gray-200 flex items-center justify-center h-64 lg:h-auto">
                <div className="text-8xl opacity-30">📚</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-4xl opacity-30">
                    {post.category === 'Sourcing Guide' && '🔍'}
                    {post.category === 'Quality Control' && '📋'}
                    {post.category === 'Logistics' && '🚢'}
                    {post.category === 'Factory Verification' && '🏭'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button className="text-[#0891B2] text-sm font-medium hover:underline inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D4F7C] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to help with your China sourcing needs. Get in touch for a free consultation.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
