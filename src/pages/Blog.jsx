import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "5 Common Mistakes When Sourcing from China (and How to Avoid Them)",
      category: "Sourcing Strategy",
      excerpt: "Don't prioritize price over everything. Learn the key red flags and how to build a resilient supply chain...",
      date: "June 10, 2026",
      imgId: "blog-1",
      imgQuery: "china factory negotiation business meeting"
    },
    {
      title: "How to Verify a Chinese Factory: A Step-by-Step Guide for International Buyers",
      category: "Quality & Verification",
      excerpt: "Is the factory real? Do they own their equipment? We cover the essential documents you must ask for...",
      date: "May 28, 2026",
      imgId: "blog-2",
      imgQuery: "inspector checking factory business license in china"
    },
    {
      title: "Navigating High Shipping Costs: Logistics Optimization Tips for 2026",
      category: "Shipping & Logistics",
      excerpt: "How to choose between sea, air, and train freight. Consolidation strategies that can save you thousands...",
      date: "May 15, 2026",
      imgId: "blog-3",
      imgQuery: "shipping containers at china port sunset"
    },
    {
      title: "The Rise of Eco-Friendly Manufacturing in China's Textile Industry",
      category: "Industry Trends",
      excerpt: "Sustainability is becoming a core focus. See how Chinese mills are adapting to global green standards...",
      date: "April 30, 2026",
      imgId: "blog-4",
      imgQuery: "sustainable textile manufacturing recycled fabrics"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">China Sourcing Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Expert insights, market trends, and practical tips from our team on the ground in China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <article key={index} className="flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded uppercase">{post.category}</span>
                    <span className="text-slate-400 text-xs">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-900 transition-colors">
                    <NavLink to="/blog">{post.title}</NavLink>
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <NavLink to="/blog" className="text-blue-900 font-bold text-sm hover:underline">Read Article →</NavLink>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold py-3 px-10 rounded-md hover:bg-blue-900 hover:text-white transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay updated on China manufacturing</h2>
          <p className="text-slate-600 mb-8">Get monthly sourcing tips, market reports, and holiday notices straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your business email" 
              className="flex-grow px-6 py-4 rounded-md border focus:ring-2 focus:ring-blue-900 outline-none"
              required
            />
            <button type="submit" className="bg-blue-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-md transition-colors shadow-md">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-400">Join 5,000+ professionals. No spam, just value.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
