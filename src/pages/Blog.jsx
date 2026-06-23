import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: "post-1",
      title: "5 Red Flags to Watch Out For When Identifying Suppliers on Alibaba",
      excerpt: "Not every gold supplier is a manufacturer. Learn how to spot trading companies disguising themselves as factories to avoid paying hidden markups.",
      date: "May 12, 2026",
      author: "David Chen",
      category: "Sourcing Tips"
    },
    {
      id: "post-2",
      title: "Understanding AQL (Acceptable Quality Limit) in Inspection Reports",
      excerpt: "A deep dive into how AQL standards work and how to set the right inspection criteria for your specific product category.",
      date: "June 03, 2026",
      author: "Sarah Lin",
      category: "Quality Control"
    },
    {
      id: "post-3",
      title: "FOB vs. EXW vs. DDP: Which Incoterm Should You Choose?",
      excerpt: "Shipping terms can dramatically affect your landed costs and risk liability. We break down the differences and when to use each.",
      date: "June 18, 2026",
      author: "Michael Wang",
      category: "Logistics"
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 id="blog-header" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">
            Expert advice, industry updates, and practical guides for navigating the Chinese manufacturing landscape.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                     <img 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`blog-img-${post.id}`}
                        data-strk-img={`[title-${post.id}] business articles blog`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     />
                     <div className="absolute top-4 left-4 bg-[#c2182b] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                         {post.category}
                     </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                     <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {post.date}</div>
                     <div className="flex items-center gap-1"><User className="w-4 h-4"/> {post.author}</div>
                  </div>
                  <h2 id={`title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3">{post.title}</h2>
                  <p className="text-slate-600 mb-6 flex-1">{post.excerpt}</p>
                  <Link to="#" className="text-[#c2182b] font-medium flex items-center hover:underline mt-auto">Read Full Article <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Button variant="outline" size="lg" className="px-8 text-slate-600 border-slate-300">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}