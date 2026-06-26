import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { blogPosts } from '@/data/content';
import { format, parseISO } from 'date-fns';

export default function Blog() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Insights, guides, and tips for successful China sourcing.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-ss-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imageId}
                    data-strk-img={`[blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-ss-blue text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 id={`blog-title-${post.id}`} className="text-lg font-semibold text-ss-text mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ss-body leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-ss-muted space-x-4">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {format(parseISO(post.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center text-sm font-medium text-ss-blue hover:text-ss-blue-light transition-colors"
                    >
                      Read <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-ss-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ss-text tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-ss-body max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest sourcing tips, industry insights, and company updates.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-ss-blue text-white text-sm font-medium rounded-lg hover:bg-ss-blue-dark transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}