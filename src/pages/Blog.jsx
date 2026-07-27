import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Tag
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory visits, and reference verification.',
      category: 'Supplier Verification',
      author: 'James Liu',
      date: '2024-01-15',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Understanding Quality Control Inspections: AQL Explained',
      excerpt: 'A comprehensive guide to Acceptable Quality Level (AQL) testing and how to set appropriate inspection criteria for your products.',
      category: 'Quality Control',
      author: 'Sarah Chen',
      date: '2024-01-10',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Navigating Chinese Manufacturing Costs in 2024',
      excerpt: 'An analysis of current pricing trends in Chinese manufacturing and strategies to optimize your sourcing costs.',
      category: 'Cost Optimization',
      author: 'Michael Zhang',
      date: '2024-01-05',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Shipping from China: FOB, CIF, and EXW Explained',
      excerpt: 'Understanding different incoterms and shipping arrangements to ensure smooth logistics and avoid unexpected costs.',
      category: 'Logistics',
      author: 'David Wang',
      date: '2023-12-28',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Common Mistakes to Avoid When Sourcing from China',
      excerpt: 'Learn from the experiences of other buyers to avoid costly mistakes in your China sourcing journey.',
      category: 'Sourcing Tips',
      author: 'Emily Liu',
      date: '2023-12-20',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Factory Audits: What to Look For and How to Prepare',
      excerpt: 'A checklist for conducting comprehensive factory audits, including production capacity, quality systems, and compliance.',
      category: 'Factory Audit',
      author: 'Robert Chen',
      date: '2023-12-15',
      readTime: '9 min read',
    },
    {
      id: 7,
      title: 'Managing Communication with Chinese Suppliers',
      excerpt: 'Tips for effective cross-cultural communication and building strong relationships with your suppliers.',
      category: 'Communication',
      author: 'Lisa Zhang',
      date: '2023-12-10',
      readTime: '6 min read',
    },
    {
      id: 8,
      title: 'Sample Orders: Why They Matter and How to Handle Them',
      excerpt: 'The importance of proper sample management and how to use samples to ensure product quality before mass production.',
      category: 'Sourcing Tips',
      author: 'James Liu',
      date: '2023-12-05',
      readTime: '7 min read',
    },
    {
      id: 9,
      title: 'Payment Terms with Chinese Suppliers: Best Practices',
      excerpt: 'Understanding common payment terms, managing risk, and protecting your interests when dealing with suppliers.',
      category: 'Finance',
      author: 'Michael Zhang',
      date: '2023-11-28',
      readTime: '8 min read',
    },
  ];

  const categories = [
    'All Categories',
    'Supplier Verification',
    'Quality Control',
    'Cost Optimization',
    'Logistics',
    'Sourcing Tips',
    'Factory Audit',
    'Communication',
    'Finance',
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-200">
              Insights, tips, and guides for successful China sourcing. Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#F5A623] bg-[#F5A623]/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[#1E3A5F] mb-3 group-hover:text-[#F5A623] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B7280] mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-[#6B7280] pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#6B7280]">
                  {post.readTime}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
              Stay Updated
            </h2>
            <p className="text-[#6B7280] mb-6">
              Subscribe to our newsletter for the latest China sourcing insights and tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#1E3A5F]"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Personalized Help?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our team can assist you with your specific sourcing needs. Contact us for expert guidance.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;