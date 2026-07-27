import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const posts = [
    {
      title: 'How to Evaluate a Chinese Factory Before Placing an Order',
      date: '2026-06-12',
      category: 'Supplier Verification',
      excerpt: 'A practical checklist for assessing factory capabilities, legitimacy, and quality systems before committing to production.',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Pre-Shipment Inspection: What Buyers Need to Know',
      date: '2026-05-28',
      category: 'Quality Control',
      excerpt: 'An overview of inspection types, sampling standards, and how to interpret inspection reports effectively.',
      readTime: '6 min read',
    },
    {
      title: 'Common Documentation Requirements for Exporting from China',
      date: '2026-05-15',
      category: 'Logistics',
      excerpt: 'A guide to commercial invoices, packing lists, certificates of origin, and other documents required for international shipments.',
      readTime: '7 min read',
    },
    {
      title: 'Navigating MOQ: Strategies for Buyers with Smaller Order Volumes',
      date: '2026-04-30',
      category: 'Sourcing Strategy',
      excerpt: 'Practical approaches for sourcing when your required quantities fall below typical factory minimums.',
      readTime: '5 min read',
    },
    {
      title: 'What to Expect from a Factory Audit Report',
      date: '2026-04-18',
      category: 'Supplier Verification',
      excerpt: 'Breaking down the key sections of a factory audit and how to use the findings in your supplier selection process.',
      readTime: '9 min read',
    },
    {
      title: 'Managing Quality Issues: A Step-by-Step Response Framework',
      date: '2026-04-02',
      category: 'Quality Control',
      excerpt: 'How to address quality problems when they arise, from initial identification through resolution and prevention.',
      readTime: '7 min read',
    },
    {
      title: 'Incoterms for China Sourcing: A Buyer\'s Reference',
      date: '2026-03-20',
      category: 'Logistics',
      excerpt: 'A clear explanation of commonly used Incoterms and how they affect cost, risk, and responsibility in international shipments.',
      readTime: '6 min read',
    },
    {
      title: 'Building Long-Term Supplier Relationships in China',
      date: '2026-03-05',
      category: 'Sourcing Strategy',
      excerpt: 'Practical considerations for moving from transactional sourcing to stable, ongoing supplier partnerships.',
      readTime: '8 min read',
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            Practical insights on sourcing from China. Written for international buyers who want to understand the process.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 text-xs text-[#64748b] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-3 leading-tight">{post.title}</CardTitle>
                  <p className="text-sm text-[#475569] leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-[#C5A46E]">Read article →</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Have a Question About Sourcing?</h2>
          <p className="text-[#475569] mb-6">Contact our team for practical guidance on your specific situation.</p>
          <Link to="/contact" className="text-[#0A2540] font-medium hover:underline">Get in touch →</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
