import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier in 5 Steps',
    date: 'June 15, 2026',
    category: 'Sourcing Tips',
    excerpt: 'Before sending any money, you must ensure the factory is legitimate. Here is our checklist for verification.'
  },
  {
    title: 'Understanding Incoterms 2020: FOB vs CIF',
    date: 'June 02, 2026',
    category: 'Logistics',
    excerpt: 'Choosing the right shipping terms can save you thousands. We break down the most common terms for China imports.'
  },
  {
    title: 'Top 5 Product Categories to Source from Ningbo',
    date: 'May 20, 2026',
    category: 'Market Insights',
    excerpt: 'Ningbo is more than just a port. Discover why it is the global hub for small home appliances and tools.'
  }
];

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Expert insights and practical advice on importing from China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Card key={i} className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-slate-200" /> {/* Placeholder for image */}
                <CardHeader>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{post.category}</div>
                  <CardTitle className="text-xl leading-snug">{post.title}</CardTitle>
                  <CardDescription className="font-medium">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 text-sm font-medium mb-6">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary font-bold hover:no-underline" asChild>
                    <Link to="#">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
