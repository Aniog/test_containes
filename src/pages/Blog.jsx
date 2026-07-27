import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 'post1',
      title: 'How to Navigate the Canton Fair Like a Pro',
      category: 'Trade Shows',
      date: 'Oct 12, 2023',
      excerpt: 'Tips and tricks for making the most out of your visit to the world\'s largest trade fair, from pre-registration to negotiating on the floor.',
    },
    {
      id: 'post2',
      title: 'Understanding Incoterms 2020: FOB vs EXW',
      category: 'Logistics',
      date: 'Sep 28, 2023',
      excerpt: 'A clear breakdown of the most common shipping terms used in international trade and which one is the best fit for your business.',
    },
    {
      id: 'post3',
      title: 'The Hidden Risks of Sourcing on Alibaba',
      category: 'Sourcing Tips',
      date: 'Sep 15, 2023',
      excerpt: 'While Alibaba is a great starting point, relying solely on it can expose you to scams, middlemen, and poor quality control. Here is how to avoid them.',
    },
    {
      id: 'post4',
      title: 'Why You Need a NNN Agreement in China',
      category: 'Legal & IP',
      date: 'Aug 30, 2023',
      excerpt: 'An NDA is not enough. Learn why a Bilingual Non-Disclosure, Non-Use, and Non-Circumvention agreement is crucial for protecting your product designs.',
    },
    {
      id: 'post5',
      title: 'Navigating Chinese New Year Factory Closures',
      category: 'Supply Chain',
      date: 'Aug 10, 2023',
      excerpt: 'CNY can severely disrupt your supply chain. Here is our recommended timeline for placing orders to ensure you don\'t run out of stock.',
    },
    {
      id: 'post6',
      title: 'How to Read a Quality Control Inspection Report',
      category: 'Quality Control',
      date: 'Jul 22, 2023',
      excerpt: 'We break down the standard AQL inspection report format, explaining what Critical, Major, and Minor defects mean for your shipment.',
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="blog-header-bg"
          data-strk-bg="[blog-header-title] writing tips business supply chain"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="blog-header-title" className="text-4xl md:text-5xl font-bold mb-4">Sourcing Insights</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Expert advice, industry news, and guides for importing from China securely.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border text-left border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full group">
                <div className="h-56 bg-gray-200 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] b2b wholesale trade`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span className="font-semibold text-blue-600 tracking-wider uppercase">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 id={`blog-${post.id}-title`} className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-block cursor-pointer">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-gray-300">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Market</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest sourcing tips, factory updates, and shipping alerts sent directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button size="lg" className="bg-blue-600 text-white whitespace-nowrap" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
