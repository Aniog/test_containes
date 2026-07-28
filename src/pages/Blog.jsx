import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const Blog = () => {
  const posts = [
    {
      title: 'How to verify a Chinese supplier before placing an order',
      excerpt: 'A practical checklist for checking business registration, factory capacity, and quality systems before you commit.',
      date: '2026-07-15',
      category: 'Supplier Verification',
      readTime: '6 min read',
    },
    {
      title: 'Pre-shipment inspection: what buyers should check',
      excerpt: 'Key inspection points that help you catch defects before cargo leaves the factory.',
      date: '2026-07-02',
      category: 'Quality Control',
      readTime: '5 min read',
    },
    {
      title: 'Common shipping terms explained for new importers',
      excerpt: 'A plain-language guide to EXW, FOB, CIF, and DDP, and what each means for your costs and risk.',
      date: '2026-06-20',
      category: 'Logistics',
      readTime: '7 min read',
    },
    {
      title: 'How to write a clear sourcing request',
      excerpt: 'The details buyers often miss that slow down supplier matching and sampling.',
      date: '2026-06-08',
      category: 'Sourcing',
      readTime: '4 min read',
    },
    {
      title: 'Factory audit vs. supplier audit: what is the difference?',
      excerpt: 'When to audit the facility, the management system, or both.',
      date: '2026-05-25',
      category: 'Supplier Verification',
      readTime: '5 min read',
    },
    {
      title: 'Red flags in supplier communications',
      excerpt: 'Warning signs in emails, quotes, and sample requests that suggest higher risk.',
      date: '2026-05-12',
      category: 'Risk Management',
      readTime: '6 min read',
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Blog</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Insights for global buyers</h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical guidance on sourcing, supplier verification, quality control, and shipping from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-lg leading-snug">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900">Need help with a sourcing project?</h2>
              <p className="mt-3 text-slate-600">We can help you apply these insights to your specific product and market.</p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
