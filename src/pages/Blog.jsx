import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "How to Verify a China Factory: A Complete Checklist",
      excerpt: "Don't just take their word for it. Learn the key documents and physical checks you must perform before placing an order.",
      date: "Jun 02, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      img: "china factory verification documents audit professional"
    },
    {
      title: "Common Mistakes in Product Packaging for Global Shipping",
      excerpt: "Many quality issues aren't caused by production, but by poor packaging. We breakdown the best practices for export-grade cartons.",
      date: "May 20, 2026",
      author: "Sarah Wu",
      category: "Quality Control",
      img: "packaging cartons shipping logistics professional"
    },
    {
      title: "Current Trends in China Manufacturing: 2026 Update",
      excerpt: "Rising labor costs and automation—what global buyers need to know about the current state of the Pearl River Delta.",
      date: "May 10, 2026",
      author: "David Chen",
      category: "Industry News",
      img: "industrial robot china factory automation modern"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 font-primary text-center">Industry Insights & Sourcing Guide</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Expert advice on navigating the complexities of sourcing, manufacturing, and logistics in China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="aspect-video bg-slate-200">
                   <img 
                     data-strk-img-id={`blog-img-${idx}`}
                     data-strk-img={`${post.img}`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={post.title}
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight hover:text-blue-800 cursor-pointer">{post.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-blue-800 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Subscribe to Our Sourcing Newsletter</h2>
          <p className="text-blue-100 mb-10">Get weekly updates on factory news, shipping rates, and sourcing strategies directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors">
              Subscribe Now
            </button>
          </form>
          <p className="text-blue-300 text-xs mt-6 italic">We hate spam as much as you do. Your data is safe with us.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
EOF > /workspace/my-app/src/pages/Blog.jsx
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "How to Verify a China Factory: A Complete Checklist",
      excerpt: "Don't just take their word for it. Learn the key documents and physical checks you must perform before placing an order.",
      date: "Jun 02, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      img: "china factory verification documents audit professional"
    },
    {
      title: "Common Mistakes in Product Packaging for Global Shipping",
      excerpt: "Many quality issues aren't caused by production, but by poor packaging. We breakdown the best practices for export-grade cartons.",
      date: "May 20, 2026",
      author: "Sarah Wu",
      category: "Quality Control",
      img: "packaging cartons shipping logistics professional"
    },
    {
      title: "Current Trends in China Manufacturing: 2026 Update",
      excerpt: "Rising labor costs and automation—what global buyers need to know about the current state of the Pearl River Delta.",
      date: "May 10, 2026",
      author: "David Chen",
      category: "Industry News",
      img: "industrial robot china factory automation modern"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 font-primary text-center">Industry Insights & Sourcing Guide</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Expert advice on navigating the complexities of sourcing, manufacturing, and logistics in China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
                <div className="aspect-video bg-slate-200">
                   <img 
                     data-strk-img-id={`blog-img-${idx}`}
                     data-strk-img={`${post.img}`}
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={post.title}
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight hover:text-blue-800 cursor-pointer">{post.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-blue-800 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Subscribe to Our Sourcing Newsletter</h2>
          <p className="text-blue-100 mb-10">Get weekly updates on factory news, shipping rates, and sourcing strategies directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors">
              Subscribe Now
            </button>
          </form>
          <p className="text-blue-300 text-xs mt-6 italic">We hate spam as much as you do. Your data is safe with us.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
