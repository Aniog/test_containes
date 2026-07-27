import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "post-1",
      title: "5 Red Flags When Selecting a Chinese Supplier on Alibaba",
      excerpt: "Don't get scammed. Learn how to verify trading companies vs. real factories and what warning signs to look out for during initial communication.",
      date: "Oct 12, 2026",
      category: "Sourcing Tips",
    },
    {
      id: "post-2",
      title: "Understanding AQL (Acceptable Quality Limit) in Inspections",
      excerpt: "A deep dive into how quality control inspections work in China, how sample sizes are determined, and what defect levels are considered acceptable.",
      date: "Sep 28, 2026",
      category: "Quality Control",
    },
    {
      id: "post-3",
      title: "FOB vs. EXW vs. DDP: Which Incoterm should you choose?",
      excerpt: "Navigating international shipping terms can be confusing. We break down the most common incoterms and explain which one minimizes your cost and risk.",
      date: "Sep 15, 2026",
      category: "Shipping & Logistics",
    },
    {
      id: "post-4",
      title: "Protecting your Intellectual Property in China",
      excerpt: "Why an NDA is not enough. Learn about NNN agreements (Non-Use, Non-Disclosure, Non-Circumvention) and how to register your trademarks correctly.",
      date: "Aug 30, 2026",
      category: "Legal & Compliance",
    },
    {
      id: "post-5",
      title: "How to Calculate the True Landed Cost of Your Product",
      excerpt: "The factory price is just the beginning. Learn how to accurately calculate freight, duties, tariffs, and hidden fees to determine your real profit margin.",
      date: "Aug 10, 2026",
      category: "Business Strategy",
    },
    {
      id: "post-6",
      title: "Navigating the Chinese New Year Shutdown",
      excerpt: "The entire country stops manufacturing for weeks. Here is your timeline and checklist to ensure you don't run out of inventory during the holiday.",
      date: "Jul 22, 2026",
      category: "Planning",
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Sourcing Insights Blog
          </h1>
          <p id="blog-subtitle" className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Practical advice, industry news, and expert guides on importing from China successfully.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden border-slate-200">
                <div className="h-48 bg-slate-100 relative">
                  <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-post-title-${post.id}] business logistics`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur pb-1 px-3 py-1 rounded text-xs font-semibold text-primary">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <CardTitle id={`blog-post-title-${post.id}`} className="text-xl leading-tight">
                    <Link to="#" className="hover:text-primary transition-colors">{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary hover:text-primary/80" asChild>
                    <Link to="#">Read Full Article &rarr;</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;