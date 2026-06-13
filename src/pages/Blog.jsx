import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: "1",
      title: "How to Avoid Scams When Sourcing from Alibaba",
      excerpt: "Alibaba is a great tool, but it's full of trading companies posing as factories. Learn how to spot red flags before you send your deposit.",
      date: "May 15, 2026",
      author: "David Chen",
      category: "Sourcing Tips",
      imgQuery: "alibaba sourcing wholesale trade market"
    },
    {
      id: "2",
      title: "Understanding AQL: Acceptable Quality Limit Explained",
      excerpt: "A deep dive into how third-party inspection companies calculate sample sizes and acceptable defect rates for your shipments.",
      date: "May 02, 2026",
      author: "Sarah Lin",
      category: "Quality Control",
      imgQuery: "quality control aql inspection chart"
    },
    {
      id: "3",
      title: "FOB vs. EXW vs. DDP: Which Incoterm should you choose?",
      excerpt: "Shipping terms can be confusing and costly if misunderstood. We break down the most common incoterms for importing from China.",
      date: "April 18, 2026",
      author: "Michael Wang",
      category: "Shipping & Logistics",
      imgQuery: "shipping containers cargo ship logistics"
    },
    {
      id: "4",
      title: "Why You Need an NNN Agreement Before Sharing Designs",
      excerpt: "An NDA might not hold up in Chinese courts. Discover why a Non-Disclosure, Non-Use, and Non-Circumvention (NNN) agreement is vital.",
      date: "April 05, 2026",
      author: "David Chen",
      category: "Legal & Compliance",
      imgQuery: "legal contract signing manufacturing agreement"
    },
    {
      id: "5",
      title: "The Reality of 'Minimum Order Quantities' (MOQs)",
      excerpt: "Negotiating MOQs is an art. Learn strategies to get factories to accept smaller initial orders without sacrificing quality.",
      date: "March 22, 2026",
      author: "Sarah Lin",
      category: "Negotiation",
      imgQuery: "business negotiation meeting factory"
    },
    {
      id: "6",
      title: "Preparing for Chinese New Year Delays",
      excerpt: "Every year, production halts for nearly a month. Here is your timeline for placing orders to ensure you don't run out of stock in Q1.",
      date: "March 10, 2026",
      author: "Michael Wang",
      category: "Planning",
      imgQuery: "chinese new year factory calendar planning"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expert advice, industry updates, and practical guides for importing from China.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] relative">
                  <img 
                    data-strk-img-id={`blog-${post.id}`}
                    data-strk-img={post.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Stay updated on China Sourcing</h2>
          <p className="text-blue-100 mb-8">
            Join 5,000+ importers who receive our monthly newsletter with the latest manufacturing trends and shipping updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md w-full sm:w-64 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;