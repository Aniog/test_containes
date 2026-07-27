import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, User, Clock, Globe, BookOpen } from 'lucide-react';

function BlogHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Insights & Guides</span>
          </div>
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Sourcing from China: Insights & Guides
          </h1>
          <p id="blog-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            Practical advice, industry insights, and step-by-step guides for sourcing products from China.
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogList() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      excerpt: 'A step-by-step guide to checking business licenses, factory audits, and red flags to watch for when evaluating potential suppliers in China.',
      category: 'Supplier Verification',
      date: '2026-07-15',
      author: 'SSourcing China Team',
      readTime: '8 min read',
      imgId: 'blog-verify-1a2b'
    },
    {
      title: 'Understanding MOQ: What It Means for Your Sourcing Strategy',
      excerpt: 'Minimum Order Quantity can make or break your sourcing project. Learn how to negotiate MOQs and work with suppliers effectively.',
      category: 'Sourcing Strategy',
      date: '2026-07-08',
      author: 'SSourcing China Team',
      readTime: '6 min read',
      imgId: 'blog-moq-2c3d'
    },
    {
      title: 'Quality Inspection Checklist: What to Check Before Shipment',
      excerpt: 'A comprehensive checklist for pre-shipment inspections, including what to look for, how to sample, and when to reject a batch.',
      category: 'Quality Control',
      date: '2026-06-28',
      author: 'SSourcing China Team',
      readTime: '10 min read',
      imgId: 'blog-qc-3e4f'
    },
    {
      title: 'Shipping from China: Sea vs Air vs Express - Which Is Right for You?',
      excerpt: 'Compare shipping methods by cost, speed, and suitability. Learn when to choose sea freight, air cargo, or express delivery.',
      category: 'Logistics',
      date: '2026-06-20',
      author: 'SSourcing China Team',
      readTime: '7 min read',
      imgId: 'blog-shipping-4g5h'
    },
    {
      title: 'Common Mistakes First-Time Buyers Make When Sourcing from China',
      excerpt: 'Learn from others\' experiences. We share the most common pitfalls and how to avoid them when sourcing from China for the first time.',
      category: 'Beginner Guide',
      date: '2026-06-12',
      author: 'SSourcing China Team',
      readTime: '9 min read',
      imgId: 'blog-mistakes-5i6j'
    },
    {
      title: 'How to Negotiate Prices with Chinese Suppliers',
      excerpt: 'Practical negotiation strategies that work with Chinese manufacturers, including cultural considerations and effective communication tips.',
      category: 'Negotiation',
      date: '2026-06-05',
      author: 'SSourcing China Team',
      readTime: '8 min read',
      imgId: 'blog-negotiate-6k7l'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <article key={index} className="card overflow-hidden p-0 group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.title}-desc] [${post.title}-title] [blog-subtitle] [blog-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <h3 id={`${post.title}-title`} className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p id={`${post.title}-desc`} className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <Link to="/contact" className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="card bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions About Sourcing?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Get personalized advice for your sourcing project.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <BlogCTA />
    </>
  );
}
