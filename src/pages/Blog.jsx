import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Avoid Scams on Alibaba: A Buyer's Guide",
      excerpt: "Alibaba is a great resource, but it's also fraught with risks. Learn how to identify trading companies posing as manufacturers and avoid common scams.",
      category: "Sourcing Tips",
      date: "Oct 15, 2023",
      author: "David Chen",
      imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Understanding AQL (Acceptable Quality Limit) Inspections",
      excerpt: "A deep dive into how AQL standards work, how to set your sample sizes, and why it's the industry standard for pre-shipment inspections.",
      category: "Quality Control",
      date: "Nov 02, 2023",
      author: "Sarah Wu",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sea Freight vs. Air Freight: Which Should You Choose?",
      excerpt: "Shipping costs can make or break your margins. We compare sea and air freight options, transit times, and when to use each method.",
      category: "Logistics",
      date: "Nov 18, 2023",
      author: "Michael Zhang",
      imageUrl: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Importance of NNN Agreements in China",
      excerpt: "Why standard NDAs don't work in China, and how a Non-Disclosure, Non-Use, and Non-Circumvention (NNN) agreement protects your IP.",
      category: "Legal & Compliance",
      date: "Dec 05, 2023",
      author: "David Chen",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "How to Negotiate MOQ (Minimum Order Quantity) with Suppliers",
      excerpt: "High MOQs can be a barrier for new products. Discover proven strategies to negotiate lower starting quantities without sacrificing unit price.",
      category: "Sourcing Tips",
      date: "Dec 20, 2023",
      author: "Sarah Wu",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "2024 Chinese New Year Sourcing Survival Guide",
      excerpt: "Production stops for nearly a month during CNY. Here is your timeline for placing orders to avoid severe supply chain disruptions.",
      category: "Market Updates",
      date: "Jan 10, 2024",
      author: "Michael Zhang",
      imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 flex-grow py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sourcing Insights</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, market updates, and practical tips for navigating the Chinese manufacturing landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center">
            <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 border border-blue-600 rounded-md text-white bg-blue-600">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</button>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;