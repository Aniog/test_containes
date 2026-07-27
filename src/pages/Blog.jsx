import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Bookmark } from 'lucide-react';

const Blog = () => {
  const containerRef = useImageLoader();
  const posts = [
    {
      title: "How to Verify if a China Factory is Real or a Scam",
      excerpt: "Don't fall for professional-looking websites. Learn the 5 real ways to verify a factory's existence and capability before you send money.",
      category: "Sourcing Advice",
      author: "Wei Chen",
      date: "Oct 12, 2024",
      imgId: "blog-scam-verification"
    },
    {
      title: "Canton Fair vs. Direct Sourcing: Which is Better for Your Brand?",
      excerpt: "The Canton Fair is huge, but it's not always the best way to find a partner. We break down the pros and cons for growing businesses.",
      category: "Market Insights",
      author: "David L.",
      date: "Sep 28, 2024",
      imgId: "blog-canton-fair"
    },
    {
      title: "The Ultimate Guide to FOB, CIF, and EXW Terms in 2024",
      excerpt: "Incoterms can be confusing. Choosing the wrong one can cost you thousands. Here is our simple guide for B2B buyers.",
      category: "Logistics",
      author: "Sarah Wu",
      date: "Sep 15, 2024",
      imgId: "blog-incoterms"
    },
    {
      title: "Why Most Quality Inspections Fail (and How to Fix It)",
      excerpt: "It's not just about the inspector. It's about the checklist. Learn how to write inspection protocols that factories' can't ignore.",
      category: "Quality Control",
      author: "Wei Chen",
      date: "Aug 30, 2024",
      imgId: "blog-qc-failures"
    },
    {
      title: "Sourcing from Vietnam vs. China: A 2024 Comparison",
      excerpt: "Looking to diversify your supply chain? We compare manufacturing costs, infrastructure, and lead times between the two giants.",
      category: "Strategy",
      author: "David L.",
      date: "Aug 12, 2024",
      imgId: "blog-china-vietnam"
    },
    {
      title: "How the Chinese New Year Affects Your Production Cycle",
      excerpt: "The mass migration that shuts down the world's factory. Here is how to plan your orders to avoid the February deadlock.",
      category: "Planning",
      author: "Sarah Wu",
      date: "Jul 25, 2024",
      imgId: "blog-cny-planning"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Practical knowledge, market updates, and expert advice to help you master the China supply chain.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[post-title-${idx}] China factory business news`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  <h3 id={`post-title-${idx}`} className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                   <Button variant="link" className="p-0 h-auto text-primary font-bold hover:text-secondary group-hover:gap-2 transition-all">
                      Read Full Article <ArrowRight size={16} className="ml-1" />
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" className="w-10 h-10 p-0" disabled>1</Button>
              <Button variant="ghost" className="w-10 h-10 p-0">2</Button>
              <Button variant="ghost" className="w-10 h-10 p-0">3</Button>
              <Button variant="ghost" className="w-10 h-10 p-0 text-slate-400">...</Button>
              <Button variant="ghost" className="w-10 h-10 p-0">12</Button>
              <Button variant="ghost" className="h-10 px-4">Next <ArrowRight size={16} className="ml-1" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="container px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex p-3 bg-secondary/20 rounded-2xl mb-6 text-secondary">
              <Bookmark size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated on the China Market</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Join 5,000+ supply chain professionals. Get our monthly sourcing intelligence reports directly to your inbox.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-grow h-14 bg-slate-100 border-none rounded-xl px-6 text-primary focus:ring-2 focus:ring-secondary outline-none"
                />
                <Button className="h-14 px-8 font-bold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-slate-400 text-xs mt-4 text-center">
                Never spam. Opt-out at any time. View our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
