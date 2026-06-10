import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const articles = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Checklist',
    excerpt: 'Learn the essential steps to verify Chinese suppliers and avoid costly mistakes. From business license checks to factory audits.',
    category: 'Supplier Verification',
    date: '2026-06-05',
    readTime: '8 min read',
    image: 'supplier-verification-checklist',
  },
  {
    id: 2,
    title: 'Understanding MOQ: What Buyers Need to Know',
    excerpt: 'Minimum Order Quantity (MOQ) is a critical factor in China sourcing. Here\'s how to negotiate and plan around MOQ requirements.',
    category: 'Sourcing Tips',
    date: '2026-05-28',
    readTime: '6 min read',
    image: 'moq-guide-buyers',
  },
  {
    id: 3,
    title: 'Quality Control in China: Pre-shipment Inspection Guide',
    excerpt: 'A comprehensive guide to pre-shipment inspections in China. Learn what to check, how to prepare, and common defects to watch for.',
    category: 'Quality Control',
    date: '2026-05-20',
    readTime: '10 min read',
    image: 'quality-control-guide',
  },
  {
    id: 4,
    title: 'Shipping from China: Sea vs Air Freight',
    excerpt: 'Compare sea and air freight options for shipping from China. Understand costs, timelines, and when to use each method.',
    category: 'Logistics',
    date: '2026-05-12',
    readTime: '7 min read',
    image: 'shipping-china-guide',
  },
  {
    id: 5,
    title: 'Common Mistakes When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that overseas buyers often encounter when sourcing products from China.',
    category: 'Sourcing Tips',
    date: '2026-05-05',
    readTime: '9 min read',
    image: 'common-sourcing-mistakes',
  },
  {
    id: 6,
    title: 'How to Write an Effective RFQ for Chinese Suppliers',
    excerpt: 'A well-written Request for Quotation (RFQ) can save you time and get better responses. Here\'s how to write one.',
    category: 'Sourcing Tips',
    date: '2026-04-28',
    readTime: '5 min read',
    image: 'rfq-guide',
  },
];

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Blog & Resources</h1>
            <p className="mt-4 text-lg text-slate-600">
              Insights, tips, and guides to help you succeed with China sourcing. Stay informed with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-slate-200">
                <img
                  alt="Featured blog article"
                  className="w-full h-full object-cover"
                  data-strk-img-id="blog-featured-img-8f2a9c"
                  data-strk-img="[blog-featured-title] [blog-featured-excerpt]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm font-medium text-blue-600 mb-2">Featured</span>
                <h2 id="blog-featured-title" className="text-3xl font-bold text-slate-900 mb-4">
                  {articles[0].title}
                </h2>
                <p id="blog-featured-excerpt" className="text-slate-600 mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(articles[0].date), 'MMM d, yyyy')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                <Button>
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="border-slate-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video bg-slate-100">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`blog-img-${article.id}`}
                    data-strk-img={`[blog-title-${article.id}] [blog-excerpt-${article.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle id={`blog-title-${article.id}`} className="text-xl line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription id={`blog-excerpt-${article.id}`} className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(article.date), 'MMM d, yyyy')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest sourcing tips and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
