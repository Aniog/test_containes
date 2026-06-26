import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'Learn the essential steps to verify supplier legitimacy, including business license checks, factory audits, and reference verification.',
      category: 'Supplier Verification',
      date: '2024-01-15',
      author: 'SSourcing Team',
      image: 'verify-chinese-supplier',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Quality Control in Chinese Manufacturing: A Complete Guide',
      excerpt: 'Everything you need to know about quality control inspections in China, from pre-production to pre-shipment checks.',
      category: 'Quality Control',
      date: '2024-01-10',
      author: 'SSourcing Team',
      image: 'quality-control-guide',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Understanding Incoterms: FOB, CIF, EXW, and More',
      excerpt: 'A practical guide to Incoterms and how they affect your shipping costs, risks, and responsibilities when sourcing from China.',
      category: 'Shipping & Logistics',
      date: '2024-01-05',
      author: 'SSourcing Team',
      image: 'incoterms-guide',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'How to Negotiate Better Prices with Chinese Suppliers',
      excerpt: 'Proven strategies to negotiate better pricing with Chinese suppliers while maintaining quality and building long-term relationships.',
      category: 'Price Negotiation',
      date: '2023-12-28',
      author: 'SSourcing Team',
      image: 'negotiate-prices',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Top 10 Product Certification Requirements for Exporting from China',
      excerpt: 'A comprehensive list of certifications needed for different product categories and target markets when sourcing from China.',
      category: 'Compliance & Certification',
      date: '2023-12-20',
      author: 'SSourcing Team',
      image: 'product-certifications',
      readTime: '11 min read'
    },
    {
      id: 6,
      title: 'Amazon FBA Sourcing from China: Complete Guide 2024',
      excerpt: 'Step-by-step guide to sourcing products for Amazon FBA, including labeling, packaging, and shipping requirements.',
      category: 'E-commerce',
      date: '2023-12-15',
      author: 'SSourcing Team',
      image: 'amazon-fba-sourcing',
      readTime: '15 min read'
    },
    {
      id: 7,
      title: 'How to Avoid Common Sourcing Scams and Fraud in China',
      excerpt: 'Red flags to watch for and practical tips to protect your business when sourcing from Chinese suppliers.',
      category: 'Risk Management',
      date: '2023-12-10',
      author: 'SSourcing Team',
      image: 'avoid-sourcing-scams',
      readTime: '7 min read'
    },
    {
      id: 8,
      title: 'Production Monitoring: Why It Matters and How to Do It Right',
      excerpt: 'Learn why monitoring production is critical and how to effectively track progress, quality, and timelines.',
      category: 'Production Management',
      date: '2023-12-05',
      author: 'SSourcing Team',
      image: 'production-monitoring',
      readTime: '8 min read'
    }
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Price Negotiation',
    'Compliance & Certification',
    'E-commerce',
    'Risk Management',
    'Production Management'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Blog & Resources
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Expert insights, practical guides, and industry knowledge to help you
              source smarter from China. Stay updated with the latest trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        index === 0
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    {/* Image Placeholder */}
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-500 text-sm">{post.category}</p>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" className="bg-blue-600 text-white">
                    1
                  </Button>
                  <Button variant="outline">
                    2
                  </Button>
                  <Button variant="outline">
                    3
                  </Button>
                  <Button variant="outline">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for expert sourcing advice, industry updates, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Sourcing Question?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Our experts are here to help. Contact us today for personalized advice
            and a free sourcing consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
