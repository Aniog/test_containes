import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "post-1",
      title: "How to Avoid Alibaba Scams in 2026",
      excerpt: "The landscape of online sourcing is changing. Learn the 5 red flags every buyer must know before sending a large deposit to a new supplier.",
      date: "July 12, 2026",
      author: "David Chen",
      category: "Sourcing Security"
    },
    {
      id: "post-2",
      title: "Top 5 Manufacturing Hubs in China by Industry",
      excerpt: "Location matters. A breakdown of Shenzhen for electronics, Ningbo for hardware, and Dongguan for textiles and plastic components.",
      date: "June 25, 2026",
      author: "Li Wei",
      category: "Market Insights"
    },
    {
      id: "post-3",
      title: "Understanding Quality Control: AQL Standards Explained",
      excerpt: "Don't leave quality to chance. Understand the math and professional methodology behind professional on-site inspections in China.",
      date: "June 10, 2026",
      author: "Sarah Jones",
      category: "Quality Control"
    }
  ];

  return (
    <div ref={containerRef}>
       <section className="bg-primary py-24 text-primary-foreground text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight uppercase tracking-widest">China Sourcing Insights</h1>
          <p id="blog-hero-subtitle" className="text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Stay updated with the latest trends, manufacturing news, and professional sourcing strategies from our team in Shenzhen.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col bg-background group">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}] [blog-category-${post.id}] manufacturing facility`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  />
                  <div className="absolute top-6 left-6">
                    <div id={`blog-category-${post.id}`} className="bg-secondary text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                      {post.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex-1 p-8 space-y-6">
                  <div className="flex items-center text-xs text-muted-foreground space-x-5 font-medium border-b border-muted pb-4">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-secondary" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-secondary" /> {post.author}</span>
                  </div>
                  <CardTitle id={`blog-title-${post.id}`} className="text-2xl font-bold font-heading text-primary leading-tight tracking-tight group-hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <CardFooter className="px-8 pb-8 pt-0">
                  <Button variant="link" asChild className="p-0 text-secondary font-black text-xs uppercase tracking-widest group/btn border-b-2 border-transparent hover:border-secondary rounded-none flex items-center h-auto py-1">
                    <Link to="/contact">
                      Read Story <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
