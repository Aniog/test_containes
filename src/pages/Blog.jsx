import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Supplier verification is critical when sourcing from China. Learn the essential steps to ensure you are working with legitimate, reliable manufacturers.',
      category: 'Supplier Verification',
      date: '2026-07-20',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Quality Control in China: What You Need to Know',
      excerpt: 'Understanding the different types of inspections and when to conduct them can save you from costly quality issues and returns.',
      category: 'Quality Control',
      date: '2026-07-15',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 3,
      title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
      excerpt: 'Effective negotiation can significantly impact your costs and terms. Learn cultural nuances and proven strategies for successful negotiations.',
      category: 'Negotiation',
      date: '2026-07-10',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Incoterms for China Shipping',
      excerpt: 'EXW, FOB, CIF, DDP - what do these terms mean and which one should you use for your shipments from China?',
      category: 'Shipping',
      date: '2026-07-05',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Common Mistakes When Sourcing from China',
      excerpt: 'Avoid these common pitfalls that can derail your sourcing project and cost you time and money.',
      category: 'Best Practices',
      date: '2026-06-28',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 6,
      title: 'How to Read a Factory Audit Report',
      excerpt: 'Factory audit reports contain valuable information about a supplier\'s capabilities. Learn how to interpret the key metrics.',
      category: 'Supplier Verification',
      date: '2026-06-20',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 7,
      title: 'The True Cost of Cheap Products from China',
      excerpt: 'Low prices can be tempting, but hidden costs like quality issues, delays, and communication problems can make cheap products expensive.',
      category: 'Best Practices',
      date: '2026-06-15',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Building Long-Term Relationships with Chinese Suppliers',
      excerpt: 'Strong supplier relationships lead to better pricing, priority treatment, and smoother operations. Here is how to build them.',
      category: 'Relationship Building',
      date: '2026-06-10',
      readTime: '6 min read',
      featured: false
    }
  ];

  const categories = [
    'Supplier Verification',
    'Quality Control',
    'Negotiation',
    'Shipping',
    'Best Practices',
    'Relationship Building'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert insights, tips, and guides to help you succeed with China sourcing. Stay informed with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our most popular and impactful articles on China sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our complete library of China sourcing resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find articles on specific topics that interest you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <Tag className="w-4 h-4" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            While our blog provides general guidance, every sourcing project is unique. Contact us for personalized advice tailored to your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
