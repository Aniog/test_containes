import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Search,
  Factory,
  Shield,
  FileCheck,
  Truck,
  DollarSign,
  Globe,
  BookOpen,
  Tag,
} from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers before you commit to a partnership. From factory audits to reference checks, we cover everything you need to know.',
      author: 'Michael Chen',
      date: '2026-06-20',
      readTime: '8 min read',
      category: 'Supplier Verification',
      image: 'supplier-verification-checklist',
      featured: true,
    },
    {
      id: 2,
      title: 'The Complete Guide to Quality Control in China',
      excerpt: 'Understanding the different types of inspections and how to implement an effective quality control program for your products sourced from China.',
      author: 'Sarah Wang',
      date: '2026-06-15',
      readTime: '10 min read',
      category: 'Quality Control',
      image: 'quality-control-guide',
      featured: true,
    },
    {
      id: 3,
      title: 'Understanding MOQ: What You Need to Know',
      excerpt: 'Minimum Order Quantity (MOQ) is a critical factor in China sourcing. Learn how to negotiate MOQs and find suppliers that match your volume requirements.',
      author: 'David Liu',
      date: '2026-06-10',
      readTime: '6 min read',
      category: 'Sourcing Tips',
      image: 'moq-guide',
      featured: false,
    },
    {
      id: 4,
      title: 'Shipping from China: Incoterms Explained',
      excerpt: 'A comprehensive guide to Incoterms and how they affect your shipping costs and responsibilities when importing from China.',
      author: 'Emily Zhang',
      date: '2026-06-05',
      readTime: '7 min read',
      category: 'Logistics',
      image: 'shipping-incoterms',
      featured: false,
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers',
      excerpt: 'Effective negotiation strategies that work in Chinese business culture. Learn how to build relationships and get better terms.',
      author: 'Michael Chen',
      date: '2026-05-28',
      readTime: '9 min read',
      category: 'Sourcing Tips',
      image: 'negotiation-strategies',
      featured: false,
    },
    {
      id: 6,
      title: 'Common Quality Issues in Chinese Manufacturing',
      excerpt: 'Learn about the most common quality issues that arise when manufacturing in China and how to prevent them.',
      author: 'Sarah Wang',
      date: '2026-05-20',
      readTime: '8 min read',
      category: 'Quality Control',
      image: 'quality-issues',
      featured: false,
    },
    {
      id: 7,
      title: 'The Rise of Sustainable Manufacturing in China',
      excerpt: 'How Chinese manufacturers are adapting to global sustainability demands and what this means for international buyers.',
      author: 'David Liu',
      date: '2026-05-15',
      readTime: '7 min read',
      category: 'Industry Trends',
      image: 'sustainable-manufacturing',
      featured: false,
    },
    {
      id: 8,
      title: 'How to Protect Your Intellectual Property in China',
      excerpt: 'Essential strategies for protecting your designs, trademarks, and intellectual property when sourcing from China.',
      author: 'Emily Zhang',
      date: '2026-05-10',
      readTime: '9 min read',
      category: 'Legal',
      image: 'intellectual-property',
      featured: false,
    },
  ];

  const categories = [
    'All',
    'Supplier Verification',
    'Quality Control',
    'Sourcing Tips',
    'Logistics',
    'Industry Trends',
    'Legal',
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Sourcing Insights & Resources
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Expert advice, practical tips, and industry insights to help you succeed with China sourcing. Stay informed with our latest articles and guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our most popular and insightful articles on China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-slate-900">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay up to date with our latest insights and guides on China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img
                    data-strk-img-id={`blog-all-${post.id}-img`}
                    data-strk-img={`[blog-all-${post.id}-title] [blog-all-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-slate-900">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-slate-700 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(post.date), 'MMM d')}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <BookOpen className="h-12 w-12 text-slate-900 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to our newsletter for the latest China sourcing insights, tips, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help With Your Sourcing?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            While our blog provides valuable insights, sometimes you need personalized help. Contact us for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
