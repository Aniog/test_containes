import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, User, Cpu, Shield, Globe, TrendingUp, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Successful China Sourcing',
    excerpt: 'Learn the key strategies for finding reliable suppliers and avoiding common pitfalls when sourcing from China. From supplier verification to quality control, we cover essential tips.',
    category: 'Sourcing Guide',
    author: 'Team SSourcing',
    date: 'June 15, 2026',
    readTime: '8 min read',
    image: 'sourcing-tips',
  },
  {
    id: 2,
    title: 'Understanding Quality Control Standards',
    excerpt: 'A comprehensive guide to QC inspection points and how to ensure product quality meets your specifications. Learn about AQL, inspection stages, and common defects.',
    category: 'Quality Control',
    author: 'Team SSourcing',
    date: 'June 8, 2026',
    readTime: '10 min read',
    image: 'quality-control',
  },
  {
    id: 3,
    title: 'Navigating Chinese Business Culture',
    excerpt: 'Essential tips for building strong relationships with Chinese suppliers and negotiating effectively. Understand cultural nuances and communication styles.',
    category: 'Business Culture',
    author: 'Team SSourcing',
    date: 'June 1, 2026',
    readTime: '6 min read',
    image: 'business-culture',
  },
  {
    id: 4,
    title: 'How to Verify a Chinese Supplier',
    excerpt: 'A step-by-step guide to verifying supplier legitimacy, including business license checks, factory visits, and red flags to watch for.',
    category: 'Supplier Verification',
    author: 'Team SSourcing',
    date: 'May 25, 2026',
    readTime: '12 min read',
    image: 'supplier-verification',
  },
  {
    id: 5,
    title: 'Shipping Options from China: A Complete Guide',
    excerpt: 'Compare sea freight, air freight, and express shipping options. Learn about costs, transit times, and which method suits your needs.',
    category: 'Logistics',
    author: 'Team SSourcing',
    date: 'May 18, 2026',
    readTime: '9 min read',
    image: 'shipping-guide',
  },
  {
    id: 6,
    title: 'Managing MOQs: Strategies for Small Orders',
    excerpt: 'How to work with minimum order quantities when you\'re just starting out. Negotiation tips and alternative supplier strategies.',
    category: 'Sourcing Guide',
    author: 'Team SSourcing',
    date: 'May 11, 2026',
    readTime: '7 min read',
    image: 'moq-strategies',
  },
  {
    id: 7,
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A clear explanation of common Incoterms like FOB, CIF, and EXW. Know your responsibilities and costs at each stage of shipping.',
    category: 'Logistics',
    author: 'Team SSourcing',
    date: 'May 4, 2026',
    readTime: '11 min read',
    image: 'incoterms',
  },
  {
    id: 8,
    title: 'Product Development in China: From Concept to Production',
    excerpt: 'How to develop new products with Chinese manufacturers. Tips for prototyping, tooling, and mass production.',
    category: 'Product Development',
    author: 'Team SSourcing',
    date: 'April 27, 2026',
    readTime: '14 min read',
    image: 'product-development',
  },
  {
    id: 9,
    title: 'Common Scams and How to Avoid Them',
    excerpt: 'Learn about the most common scams in China sourcing and how to protect yourself. Red flags, warning signs, and prevention strategies.',
    category: 'Supplier Verification',
    author: 'Team SSourcing',
    date: 'April 20, 2026',
    readTime: '8 min read',
    image: 'avoid-scams',
  },
];

const categories = [
  { name: 'All Categories', count: 9 },
  { name: 'Sourcing Guide', count: 2 },
  { name: 'Quality Control', count: 1 },
  { name: 'Business Culture', count: 1 },
  { name: 'Supplier Verification', count: 2 },
  { name: 'Logistics', count: 2 },
  { name: 'Product Development', count: 1 },
];

const featuredPost = {
  title: 'The Complete Guide to China Sourcing in 2026',
  excerpt: 'Everything you need to know about sourcing from China, from finding suppliers to shipping your products. Updated for 2026 with the latest trends and best practices.',
  category: 'Sourcing Guide',
  author: 'Team SSourcing',
  date: 'June 20, 2026',
  readTime: '25 min read',
};

const BlogPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert insights, tips, and guides for successful China sourcing
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E3A5F] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-xs font-medium text-[#F7931E] uppercase tracking-wide mb-3">
                  Featured Article
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="bg-[#F7931E] hover:bg-[#E0850D] w-fit">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[#2D5A8A] to-[#1E3A5F] p-8 lg:p-12 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-xs font-medium text-[#F7931E] uppercase tracking-wide mb-2">
                        {post.category}
                      </div>
                      <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#64748B] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Search</h3>
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search articles..." 
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center py-2 text-[#64748B] hover:text-[#1E3A5F] transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-[#F8FAFC] px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                  Newsletter
                </h3>
                <p className="text-sm text-[#64748B] mb-4">
                  Get the latest China sourcing tips delivered to your inbox.
                </p>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="mb-3"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help With Sourcing?
          </h2>
          <p className="text-white/70 mb-8">
            Our team of experts is ready to help you find the right suppliers and ensure quality.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F7931E] hover:bg-[#E0850D]">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;