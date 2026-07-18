import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';
import Footer from '../components/home/Footer';

const journalPosts = [
  {
    id: 1,
    title: 'How to Layer Necklaces Like a Pro',
    excerpt: 'The art of the perfect necklace stack — from delicate chains to statement pendants.',
    category: 'Styling',
    icon: Sparkles,
    date: 'July 12, 2026',
  },
  {
    id: 2,
    title: 'The Care Guide: Making Your Gold Last',
    excerpt: 'Simple tips to keep your demi-fine jewelry looking brand new for years to come.',
    category: 'Care',
    icon: Heart,
    date: 'July 5, 2026',
  },
  {
    id: 3,
    title: 'Behind the Design: The Golden Sphere',
    excerpt: 'An inside look at how our bestselling huggie earrings came to life.',
    category: 'Design',
    icon: BookOpen,
    date: 'June 28, 2026',
  },
];

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <section className="section-padding bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-accent mb-3">The Velmora Journal</p>
            <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl">Stories & Guides</h1>
          </div>

          <div className="space-y-8">
            {journalPosts.map(post => (
              <article
                key={post.id}
                className="bg-white border border-warm p-6 md:p-8 hover:shadow-md transition-shadow duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 bg-accent-light flex items-center justify-center flex-shrink-0">
                    <post.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] tracking-widest uppercase text-accent bg-accent-light px-2 py-0.5">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.date}</span>
                    </div>
                    <h2 className="serif-heading text-xl md:text-2xl text-primary group-hover:text-accent transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-secondary leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-xs tracking-widest uppercase text-accent group-hover:underline">
                      Read More
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
