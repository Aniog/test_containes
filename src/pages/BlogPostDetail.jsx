import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBlogPostBySlug } from '@/api/blog';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBlogPostBySlug(slug);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [slug]);

  useEffect(() => {
    if (!loading && post) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, post]);

  if (loading) return <div className="min-h-screen pt-24 text-center">Loading...</div>;
  
  if (!post) return (
    <div className="min-h-screen pt-24 text-center">
      <h1 className="text-2xl font-bold mb-4">Post not found</h1>
      <Link to="/blog" className="text-primary hover:underline">Back to blog</Link>
    </div>
  );

  return (
    <article ref={containerRef} className="pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:-translate-x-1 transition-transform">
          <ChevronLeft className="w-5 h-5" /> Back to all articles
        </Link>
        
        <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-bold uppercase tracking-widest">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {format(new Date(post.published_at || new Date()), 'MMMM dd, yyyy')}</span>
            </div>
            <h1 id="article-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                {post.title}
            </h1>
            <div className="flex items-center gap-4 py-6 border-y border-gray-100 italic">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    {post.author?.[0]}
                </div>
                <div>
                    <p className="text-gray-900 font-bold">{post.author}</p>
                    <p className="text-xs text-gray-500">China Operations Lead</p>
                </div>
            </div>
        </div>

        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-16">
            <img 
                data-strk-img-id={`detail-img-${post.id}`}
                data-strk-img={`[article-title] sourcing manufacturing blog feature`}
                data-strk-img-ratio="2x1"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.title}
                className="w-full h-full object-cover"
            />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif">
            {/* Using dangerouslySetInnerHTML assuming content might be HTML from editor, 
                for now we handle it as plain text if it's just a string */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-16 pt-16 border-t border-gray-100 flex justify-between items-center">
             <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-bold uppercase">
                    <Share2 className="w-5 h-5" /> Share
                </button>
             </div>
             <p className="text-xs text-gray-400">Published in {post.category}</p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
