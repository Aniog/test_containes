import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const articles = [
  {
    title: 'How to verify a Chinese supplier before placing an order',
    excerpt: 'A practical checklist for checking business licenses, factory capacity, and export history.',
    date: '2026-07-15',
    category: 'Supplier Verification',
    readTime: '6 min read',
  },
  {
    title: 'Pre-shipment inspection: what buyers should check',
    excerpt: 'Key checks that reduce the risk of defects, wrong items, and packaging failures.',
    date: '2026-07-02',
    category: 'Quality Control',
    readTime: '5 min read',
  },
  {
    title: 'Shipping from China: sea, air, rail, and express compared',
    excerpt: 'How to choose the right freight mode based on cost, speed, and cargo type.',
    date: '2026-06-20',
    category: 'Logistics',
    readTime: '7 min read',
  },
  {
    title: 'Common sourcing mistakes and how to avoid them',
    excerpt: 'Lessons from buyer experiences on pricing, MOQs, communication, and contracts.',
    date: '2026-06-08',
    category: 'Sourcing Strategy',
    readTime: '6 min read',
  },
  {
    title: 'What is a sourcing agent and when do you need one',
    excerpt: 'When to handle sourcing yourself and when to work with a local representative.',
    date: '2026-05-25',
    category: 'Getting Started',
    readTime: '4 min read',
  },
  {
    title: 'How to write a clear product specification sheet',
    excerpt: 'A simple structure for specs that reduce misunderstandings with suppliers.',
    date: '2026-05-12',
    category: 'Product Development',
    readTime: '5 min read',
  },
];

const Blog = () => {
  return (
    <div className="flex-1">
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge className="bg-white/10 text-white hover:bg-white/20">Blog</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical guidance for sourcing from China
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Articles on supplier verification, quality control, shipping, and sourcing strategy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="border-slate-200 bg-white">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-slate-200 text-slate-700">{article.category}</Badge>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-slate-900">{article.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
                <Button variant="outline" className="mt-4 w-full border-slate-200 text-slate-900 hover:bg-slate-50">
                  Read article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
