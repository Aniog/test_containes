import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper, DataClient, User } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const blogPosts = [
  {
    id: 'how-to-verify-supplier',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    title: 'How to Verify a Chinese Supplier Before Sending Money',
    desc: 'Learn the essential steps to distinguish a legitimate manufacturer from a trading company or a scammer using Chinese business licenses and custom data.',
    date: 'Oct 24, 2023',
    readTime: '6 min read',
    category: 'Supplier Verification'
  },
  {
    id: 'incoterms-explained',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    title: 'Incoterms Explained: FOB vs. EXW vs. DDP for Beginners',
    desc: 'Understanding shipping terms is crucial for calculating your landed costs. We break down the most common Incoterms used when importing from China.',
    date: 'Nov 12, 2023',
    readTime: '8 min read',
    category: 'Logistics'
  },
  {
    id: 'aql-quality-control',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    title: 'What is AQL in Quality Control? A Guide for Importers',
    desc: 'Acceptable Quality Limit (AQL) is the industry standard for product inspections. Here is how to set the right AQL level for your product category.',
    date: 'Dec 05, 2023',
    readTime: '5 min read',
    category: 'Quality Control'
  },
  {
    id: 'chinese-new-year-delays',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    title: 'How to Prepare for Chinese New Year Manufacturing Delays',
    desc: 'CNY shuts down production for nearly a month. Discover strategies to manage your inventory and avoid stockouts during the holiday season.',
    date: 'Jan 18, 2024',
    readTime: '7 min read',
    category: 'Production Planning'
  },
  {
    id: 'alibaba-alternatives',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    title: '5 Alternatives to Alibaba for Sourcing Products in China',
    desc: 'While Alibaba is the largest directory, it is not the only option. Explore other platforms and offline methods for finding specialized manufacturers.',
    date: 'Feb 22, 2024',
    readTime: '6 min read',
    category: 'Sourcing Strategy'
  },
  {
    id: 'negotiating-prices',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    title: 'The Art of Negotiating Prices with Chinese Factories',
    desc: 'Pushing too hard on price often results in secretly lowered quality. Learn how to negotiate effectively while maintaining a healthy supplier relationship.',
    date: 'Mar 15, 2024',
    readTime: '9 min read',
    category: 'Negotiation'
  }
];

export default function Blog() {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    
    try {
      const userRecord = await User.upsert({
        email: email,
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to retrieve user profile.');
      }

      const { error: responseError } = await client
        .from('NewsletterSubscribers')
        .insert({
          data: {
            user_id: userRecord.id,
            email: email
          }
        });

      if (responseError) throw responseError;

      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    } catch (error) {
      console.error('Subscription failed:', error);
      setSubscribeStatus('error');
    }
  };

  return (
    <div ref={containerRef} className="pb-20">
      {/* Header */}
      <section className="bg-slate-900 pt-20 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          data-strk-bg-id="blog-header-bg"
          data-strk-bg="[blog-header-desc] [blog-header-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 id="blog-header-title" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Insights & Resources</h1>
          <p id="blog-header-desc" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert advice, industry news, and practical guides to help you navigate the complexities of manufacturing and importing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

           {/* Featured Post (First item acts as featured) */}
            <div className="mb-16">
               <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                  <div className="flex flex-col md:flex-row">
                     <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <img
                           alt={blogPosts[0].title}
                           data-strk-img-id={`blog-img-${blogPosts[0].id}`}
                           data-strk-img={`[${blogPosts[0].descId}] [${blogPosts[0].titleId}]`}
                           data-strk-img-ratio="16x9"
                           data-strk-img-width="800"
                           src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                     </div>
                     <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4 uppercase tracking-wider">
                           <span className="text-blue-600 bg-blue-50 px-2.5 py-1 rounded-sm">{blogPosts[0].category}</span>
                           <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{blogPosts[0].date}</span>
                           <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{blogPosts[0].readTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight hover:text-blue-600 transition-colors">
                           <a href="#">{blogPosts[0].title}</a>
                        </h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">{blogPosts[0].desc}</p>
                        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                           Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                     alt={post.title}
                     data-strk-img-id={`blog-img-${post.id}`}
                     data-strk-img={`[${post.descId}] [${post.titleId}] [blog-header-title]`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="text-xs font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded flex border border-white/10 uppercase tracking-wider">
                        {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                     <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                     <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                     <a href="#">{post.title}</a>
                  </h3>
                  <p id={post.descId} className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed line-clamp-3">{post.desc}</p>
                  
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                    Read Article <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
               Load More Articles
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-50 py-16 border-y border-blue-100">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Subscribe to Our Sourcing Newsletter</h2>
            <p className="text-slate-600 mb-8">Get the latest insights on China manufacturing, shipping updates, and sourcing tips delivered straight to your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
               <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  disabled={subscribeStatus === 'loading'}
               />
               <button 
                  type="submit" 
                  disabled={subscribeStatus === 'loading'}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:bg-blue-400"
               >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
               </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="mt-3 text-sm text-green-600 font-medium">Thanks for subscribing!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="mt-3 text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
            )}
            <p className="text-xs text-slate-500 mt-4">We respect your privacy. No spam, ever.</p>
         </div>
      </section>
    </div>
  );
}
