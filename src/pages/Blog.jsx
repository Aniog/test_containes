import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { siteData } from '@/data/content';
import { format, parseISO } from 'date-fns';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Blog</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Practical guides, tips, and insights for importing products from China. 
            Written by our experienced sourcing team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-${post.id}`}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary-blue text-sm font-medium group-hover:text-accent-orange transition-colors cursor-pointer">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get the latest sourcing tips, market insights, and practical guides 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
              />
              <button className="px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
