import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'post-1',
    imgId: 'blog-1-a1b2c',
    titleId: 'blog-title-1',
    descId: 'blog-desc-1',
    badge: 'Sourcing Tips',
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    description: 'A step-by-step guide to finding and verifying trustworthy suppliers, from online research to on-site factory audits.',
    author: 'SSourcing China Team',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    id: 'post-2',
    imgId: 'blog-2-c3d4e',
    titleId: 'blog-title-2',
    descId: 'blog-desc-2',
    badge: 'Quality Control',
    title: 'The Importance of Pre-Shipment Inspection: What Every Buyer Should Know',
    description: 'Why pre-shipment inspections are critical for quality assurance and how AQL standards protect your business.',
    author: 'SSourcing China Team',
    date: '2026-06-28',
    readTime: '6 min read',
  },
  {
    id: 'post-3',
    imgId: 'blog-3-f5g6h',
    titleId: 'blog-title-3',
    descId: 'blog-desc-3',
    badge: 'Logistics',
    title: 'Shipping from China: Air Freight vs Sea Freight vs Express',
    description: 'Compare shipping methods, costs, and transit times to choose the best option for your imports from China.',
    author: 'SSourcing China Team',
    date: '2026-06-10',
    readTime: '10 min read',
  },
  {
    id: 'post-4',
    imgId: 'blog-4-g7h8i',
    titleId: 'blog-title-4',
    descId: 'blog-desc-4',
    badge: 'Sourcing Tips',
    title: '10 Common Mistakes When Sourcing from China and How to Avoid Them',
    description: 'Learn from real experiences about the most common pitfalls buyers face and practical strategies to avoid them.',
    author: 'SSourcing China Team',
    date: '2026-05-22',
    readTime: '7 min read',
  },
  {
    id: 'post-5',
    imgId: 'blog-5-h9i10',
    titleId: 'blog-title-5',
    descId: 'blog-desc-5',
    badge: 'Factory Audit',
    title: 'What to Look for During a Factory Audit in China',
    description: 'Our factory audit checklist covers everything from production capacity to worker welfare and environmental compliance.',
    author: 'SSourcing China Team',
    date: '2026-05-05',
    readTime: '9 min read',
  },
  {
    id: 'post-6',
    imgId: 'blog-6-j11k12',
    titleId: 'blog-title-6',
    descId: 'blog-desc-6',
    badge: 'Industry Insights',
    title: 'Sourcing from China in 2026: Trends, Challenges, and Opportunities',
    description: 'An overview of the current state of China sourcing, including factory trends, trade policies, and emerging opportunities.',
    author: 'SSourcing China Team',
    date: '2026-04-18',
    readTime: '8 min read',
  },
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Practical advice, industry insights, and actionable guides to help you source 
              from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.badge}</Badge>
                  <CardTitle id={post.titleId} className="text-lg leading-snug">{post.title}</CardTitle>
                  <CardDescription id={post.descId} className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}