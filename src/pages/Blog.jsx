import React, { useEffect, useRef, useState } from 'react';
import { fetchBlogPosts } from '@/api/blog';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Blog = () => {
  const containerRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const fallbackPosts = [
    {
      id: 'p1',
      title: 'How to Verify a Chinese Supplier in 5 Steps',
      slug: 'verify-chinese-supplier',
      excerpt: 'Learn the essential checks you must perform before sending money to a new manufacturer in China.',
      author: 'David Chen',
      category: 'Sourcing Guide',
      published_at: new Date().toISOString()
    },
    {
      id: 'p2',
      title: 'Understanding AQL: A Guide to Quality Inspection Standards',
      slug: 'understanding-aql-guide',
      excerpt: 'Discover why AQL is the industry standard for quality control and how to set your tolerance levels.',
      author: 'Sarah Wood',
      category: 'Quality Control',
      published_at: new Date().toISOString()
    },
    {
      id: 'p3',
      title: 'FCL vs LCL: Which Shipping Method Is Right for You?',
      slug: 'fcl-vs-lcl-shipping',
      excerpt: 'A detailed comparison of full container load and less than container load shipping options.',
      author: 'Mike Johnson',
      category: 'Shipping & Logistics',
      published_at: new Date().toISOString()
    }
  ];

  const displayedPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Sourcing Insights</h1>
          <p id="blog-desc" className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tips, guides, and industry news to help you navigate the world of international sourcing.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayedPosts.map((post, idx) => (
              <article key={post.id || idx} className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden relative bg-gray-100">
                  <img 
                    data-strk-img-id={`post-img-${post.id || idx}`}
                    data-strk-img={`[post-title-${idx}] business sourcing article placeholder`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {post.category || 'Insights'}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-xs text-gray-500 mb-6 font-semibold">
                    <div className="flex items-center gap-2 uppercase">
                      <Calendar className="w-3.5 h-3.5" /> 
                      {format(new Date(post.published_at), 'MMM dd, yyyy')}
                    </div>
                    <div className="flex items-center gap-2 uppercase">
                      <User className="w-3.5 h-3.5" /> 
                      {post.author}
                    </div>
                  </div>
                  <h3 id={`post-title-${idx}`} className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary/20 hover:border-primary pb-1 transition-all"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
