import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Calendar, User, ArrowLeft, Loader2 } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function BlogPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data: response, error } = await client
          .from('BlogPost')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (error) throw error;
        setPost(response?.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-40 pb-20 flex justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-900" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-900 mt-4 inline-block hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const data = post.data;

  return (
    <article className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="flex items-center gap-2 text-slate-500 hover:text-blue-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">
            {data.tags?.[0]}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {data.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-500">
            <div className="flex items-center gap-2 border-r border-slate-200 pr-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900">
                <User className="w-6 h-6" />
              </div>
              <span className="font-bold text-slate-900">{data.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {data.published_at && format(parseISO(data.published_at), 'MMM dd, yyyy')}
            </div>
          </div>
        </header>

        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border-8 border-slate-50">
          <img 
            src={data.image_url} 
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-slate-900 leading-relaxed italic border-l-4 border-amber-500 pl-6 py-2 bg-slate-50 rounded-r-xl">
            {data.excerpt}
          </p>
          <div className="whitespace-pre-line">
            {data.content}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need help sourcing this category?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get a professional sourcing report from our team in China. Verified factories, cost analysis, and more.</p>
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition-all inline-block">
              Free Consultation
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
