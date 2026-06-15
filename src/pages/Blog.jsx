import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: 'How to Detect a Trading Company vs. a Real Factory in China',
      excerpt: 'Learn the key signs that reveal if your potential supplier is a middleman or the actual manufacturer.',
      date: 'May 12, 2026',
      author: 'David Chen',
      category: 'Supplier Verification',
      img: 'Magnifying glass over a Chinese business license'
    },
    {
      title: 'Current Shipping Trends: Shenzhen to Los Angeles (Q2 2026)',
      excerpt: 'An update on container rates, port congestion, and the fastest LCL options available right now.',
      date: 'May 05, 2026',
      author: 'Sarah Lin',
      category: 'Logistics',
      img: 'Massive cargo ship at a modern Chinese shipping port'
    },
    {
      title: '5 Common Quality Control Mistakes in Electronic Manufacturing',
      excerpt: 'Most defects in electronics can be prevented during the PCB assembly stage. Here is what to watch out for.',
      date: 'April 28, 2026',
      author: 'Robert Wu',
      category: 'Quality Control',
      img: 'Technician inspecting electronic components with a microscope'
    },
    {
      title: 'Sourcing Sustainably: Auditing for Social Compliance in China',
      excerpt: 'A guide to BSCI and SEDEX audits. How to ensure your products are made ethically.',
      date: 'April 15, 2026',
      author: 'David Chen',
      category: 'Audits',
      img: 'Eco-friendly recycled materials labels and clean factory background'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <section className="bg-slate-900 overflow-hidden relative py-24 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <img 
            data-strk-img-id="blog-hero-bg"
            data-strk-img="Abstract industrial grid technology lines white navy"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Hero Background" 
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 id="blog-page-title" className="text-4xl lg:text-5xl font-extrabold text-white mb-6">China Sourcing Blog & Insights</h1>
          <p id="blog-page-subtitle" className="text-xl text-slate-400 max-w-2xl mx-auto">
            Practical advice from the ground in Shenzhen. Stay informed about the latest manufacturing and logistics trends.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {posts.map((post, idx) => (
              <article key={idx} className="group flex flex-col items-start bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                   <img
                    data-strk-img-id={`blog-img-${idx}`}
                    data-strk-img={`[blog-title-${idx}] ${post.img}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full tracking-wider uppercase">
                        {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-slate-400 mb-6 space-x-6">
                     <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> {post.date}</span>
                     <span className="flex items-center"><User className="h-4 w-4 mr-2" /> {post.author}</span>
                  </div>
                  <h2 id={`blog-title-${idx}`} className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                     <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:underline underline-offset-4 pointer-events-none">
                        Read Article <ArrowRight className="ml-2 h-5 w-5" />
                     </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
             <button className="px-8 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors pointer-events-none">
                Load More Articles
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h3 className="text-3xl font-bold text-slate-900 mb-6">Stay ahead of the curve</h3>
           <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
             Get monthly updates on China manufacturing, shipping rates and supplier trends delivered straight to your inbox.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Business email address" 
                className="flex-grow px-6 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap">
                 Join Newsletter
              </button>
           </div>
           <p className="mt-6 text-sm text-slate-400">
             No spam. Unsubscribe anytime. High-value data only.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
