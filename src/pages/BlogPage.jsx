import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search, Building2, ClipboardCheck, Ship, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify if a Chinese supplier is legitimate, including business license checks, factory audits, and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Understanding Quality Inspection Reports: What to Look For',
    excerpt: 'A detailed breakdown of quality inspection reports, including defect classification, AQL standards, and how to interpret inspection results.',
    category: 'Quality Control',
    date: '2026-07-10',
    author: 'SSourcing China Team',
    readTime: '6 min read',
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: 'China Shipping Guide: Sea Freight vs Air Freight vs Express',
    excerpt: 'Compare shipping options from China, including costs, transit times, and when to use each method for your imports.',
    category: 'Shipping',
    date: '2026-07-05',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    icon: Ship,
  },
  {
    id: 4,
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Learn from common pitfalls that buyers face when sourcing from China, including communication issues, quality problems, and hidden costs.',
    category: 'Sourcing Tips',
    date: '2026-06-28',
    author: 'SSourcing China Team',
    readTime: '5 min read',
    icon: AlertTriangle,
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Manufacturers',
    excerpt: 'Practical tips for negotiating prices, MOQs, and payment terms with Chinese factories while maintaining good relationships.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    author: 'SSourcing China Team',
    readTime: '6 min read',
    icon: TrendingUp,
  },
  {
    id: 6,
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A practical guide to Incoterms (FOB, CIF, EXW, DDP) and how they affect your costs and responsibilities when importing from China.',
    category: 'Shipping',
    date: '2026-06-15',
    author: 'SSourcing China Team',
    readTime: '7 min read',
    icon: DollarSign,
  },
  {
    id: 7,
    title: 'The Role of a Sourcing Agent: When Do You Need One?',
    excerpt: 'Understand what a sourcing agent does, when it makes sense to hire one, and how they can save you time and money.',
    category: 'Sourcing Tips',
    date: '2026-06-08',
    author: 'SSourcing China Team',
    readTime: '5 min read',
    icon: Search,
  },
  {
    id: 8,
    title: 'Product Certification Requirements for Major Markets',
    excerpt: 'Overview of certification requirements (CE, FCC, RoHS, FDA) for products exported from China to the US, EU, and other markets.',
    category: 'Quality Control',
    date: '2026-06-01',
    author: 'SSourcing China Team',
    readTime: '8 min read',
    icon: ClipboardCheck,
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
            <p className="text-lg text-slate-300 mb-8">
              Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center text-primary font-medium text-sm hover:underline">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest sourcing tips, industry news, and guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Your Sourcing?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team is ready to help you find reliable suppliers and ensure product quality.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
