import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const posts = [
    {
      id: 1,
      title: "How to Avoid Scams When Sourcing on Alibaba",
      excerpt: "Not all 'Gold Suppliers' are factories. Learn how to spot trading companies, verify actual manufacturers, and protect your payment.",
      date: "Oct 15, 2025",
      author: "Michael Chen",
      category: "Supplier Verification",
      imgQuery: "alibaba scam supplier verification"
    },
    {
      id: 2,
      title: "AQL Standards Explained for Beginners",
      excerpt: "Acceptable Quality Limit (AQL) can be confusing. We break down how it works, how to choose the right level, and what it means for your inspection.",
      date: "Sep 28, 2025",
      author: "Sarah Wang",
      category: "Quality Control",
      imgQuery: "quality inspection AQL standard factory"
    },
    {
      id: 3,
      title: "FOB vs. EXW vs. DDP: Which Incoterm to Choose?",
      excerpt: "Shipping terms dictate who pays for what and who holds the risk. Make the wrong choice and you could pay thousands in unexpected fees.",
      date: "Sep 12, 2025",
      author: "David Liu",
      category: "Shipping & Logistics",
      imgQuery: "shipping containers cargo ship logistics"
    },
    {
      id: 4,
      title: "Why Your Factory Keeps Delaying Your Order",
      excerpt: "Production delays are the #1 complaint from overseas buyers. Discover the real reasons factories delay orders and how to prevent it.",
      date: "Aug 05, 2025",
      author: "Michael Chen",
      category: "Production Management",
      imgQuery: "factory production line delay manufacturing"
    },
    {
      id: 5,
      title: "How to Negotiate MOQ (Minimum Order Quantity)",
      excerpt: "Startups often struggle with high factory MOQs. Here are proven strategies to get factories to accept smaller trial orders.",
      date: "Jul 22, 2025",
      author: "Sarah Wang",
      category: "Sourcing Strategy",
      imgQuery: "business negotiation meeting china"
    },
    {
      id: 6,
      title: "OEM vs. ODM: What's the Difference?",
      excerpt: "Should you modify an existing product or build from scratch? Understanding OEM vs ODM is crucial for your product development strategy.",
      date: "Jul 08, 2025",
      author: "David Liu",
      category: "Product Development",
      imgQuery: "product design blueprint manufacturing"
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 id="blog-header" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Tips</h1>
          <p id="blog-subheader" className="text-xl text-slate-300">
            Expert advice on how to successfully source, inspect, and ship products from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  <img 
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`${post.imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold mb-3 line-clamp-2">
                    <Link to="#" className="hover:text-primary transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100 mt-auto">
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

          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Need Help with a Specific Sourcing Issue?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Our experts are ready to answer your questions and provide a customized solution for your business.
          </p>
          <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;