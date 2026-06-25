import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  { id: 1, title: 'How to verify a Chinese supplier before placing your first order', excerpt: 'A practical checklist for overseas buyers: what to look for, what to ask, and red flags to watch out for when evaluating manufacturers.', category: 'Supplier Verification', date: '2026-06-20', readTime: '8 min read', author: 'SSourcing China Team' },
  { id: 2, title: 'The complete guide to pre-shipment inspection in China', excerpt: 'Learn what pre-shipment inspection covers, how to prepare, and why it is the last line of defense before your goods leave the factory.', category: 'Quality Control', date: '2026-06-15', readTime: '10 min read', author: 'SSourcing China Team' },
  { id: 3, title: 'Understanding Incoterms 2020: what every buyer should know', excerpt: 'EXW, FOB, CIF, DDP — we break down the most common shipping terms and explain which one makes sense for your business.', category: 'Shipping', date: '2026-06-10', readTime: '7 min read', author: 'SSourcing China Team' },
  { id: 4, title: '5 common mistakes when sourcing electronics from China', excerpt: 'From ignoring MOQs to skipping sample approval, these are the errors that cost buyers time and money. Here is how to avoid them.', category: 'Electronics', date: '2026-06-05', readTime: '6 min read', author: 'SSourcing China Team' },
  { id: 5, title: 'How to negotiate MOQs and pricing with Chinese factories', excerpt: 'Practical negotiation tactics that respect the supplier relationship while getting you better terms. Includes sample scripts.', category: 'Negotiation', date: '2026-05-28', readTime: '9 min read', author: 'SSourcing China Team' },
  { id: 6, title: 'Factory audit vs. supplier verification: what is the difference?', excerpt: 'Not all verification is the same. We explain the different levels of due diligence and when to use each one.', category: 'Supplier Verification', date: '2026-05-20', readTime: '5 min read', author: 'SSourcing China Team' },
];

const Blog = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog & Resources</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Practical insights on sourcing from China — written for buyers, not academics.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
                <CardTitle className="text-lg leading-snug hover:text-slate-700">
                  <Link to={`/blog/${article.id}`} className="hover:underline">
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <div className="mt-4">
                  <Link to={`/blog/${article.id}`} className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Want more insights delivered to your inbox?</p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Subscribe to our newsletter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
