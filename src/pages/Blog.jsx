import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const articles = [
    {
      id: 'how-to-verify',
      title: 'How to Tell a Real Factory from a Trading Company on Alibaba',
      excerpt: 'Many "manufacturers" on platforms like Alibaba are actually trading companies. Learn the key red flags and the simple questions you can ask to uncover the truth before you send any money.',
      date: 'June 10, ' + new Date().getFullYear(),
      category: 'Sourcing Tips',
      imageQuery: 'alibaba supplier verification factory check china'
    },
    {
      id: 'aql-explained',
      title: 'AQL Inspections Explained: What Buyers Need to Know',
      excerpt: 'Acceptable Quality Limit (AQL) is the industry standard for product inspections, but it can be confusing for new buyers. We break down how it works and how to set the right limits for your product.',
      date: 'May 28, ' + new Date().getFullYear(),
      category: 'Quality Control',
      imageQuery: 'quality control inspection AQL test factory'
    },
    {
      id: 'shipping-incoterms',
      title: 'FOB vs EXW vs DDP: Choosing the Right Incoterm',
      excerpt: 'Choosing the wrong shipping terms can leave you liable for unexpected costs or lost goods. This guide clarifies the most common Incoterms used when importing from China to the US or EU.',
      date: 'May 15, ' + new Date().getFullYear(),
      category: 'Logistics',
      imageQuery: 'shipping container port logistics cargo ship'
    },
    {
      id: 'canton-fair-guide',
      title: 'Maximizing Your Canton Fair Experience (2026 Guide)',
      excerpt: 'Planning to visit the largest trade fair in China? Over 25,000 exhibitors attend. Read our tips on preparation, negotiation, and follow-up to make your trip a success.',
      date: 'April 22, ' + new Date().getFullYear(),
      category: 'Industry News',
      imageQuery: 'canton fair guangzhou trade show exhibition'
    },
    {
      id: 'oem-vs-odm',
      title: 'OEM vs ODM: Which is Right for Your Brand?',
      excerpt: 'Understand the difference between Original Equipment Manufacturing and Original Design Manufacturing, and how to protect your intellectual property when choosing a path.',
      date: 'April 05, ' + new Date().getFullYear(),
      category: 'Manufacturing',
      imageQuery: 'product design blueprint manufacturing engineering'
    },
    {
      id: 'payment-terms',
      title: 'Standard Payment Terms in China: How to Protect Your Money',
      excerpt: 'Never pay 100% upfront for a new order. Learn the standard 30/70 payment structure, the risks of TT vs Letter of Credit, and how to use inspections to trigger final payments.',
      date: 'March 18, ' + new Date().getFullYear(),
      category: 'Sourcing Tips',
      imageQuery: 'business contract negotiation document signing'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Sourcing Insights</h1>
          <p className="text-xl text-gray-600">
            Practical advice, industry news, and expert tips to help you navigate manufacturing and importing from China.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-56 relative overflow-hidden bg-gray-100">
                  <img 
                    data-strk-img-id={`blog-img-${article.id}`}
                    data-strk-img={article.imageQuery}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link to="#">{article.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link to="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
                      Read full article <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss an Update</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest sourcing tips and market trends delivered straight to your inbox every month.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button 
              type="button" 
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;