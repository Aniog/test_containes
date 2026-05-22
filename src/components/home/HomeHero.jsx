import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Tag, BookOpen, Store } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-600/30 text-purple-300 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Your Ultimate Gaming Hub
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black font-gaming leading-tight mb-6">
            <span className="text-white">Level Up Your</span>
            <br />
            <span className="gradient-text text-glow">Gaming Life</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Discover the latest gaming news, track deals across Steam, Epic, Nintendo, PlayStation & Xbox, and buy games directly from our store.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/store"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity glow-purple"
            >
              <Store className="w-5 h-5" />
              Browse Store
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/deals"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
            >
              <Tag className="w-5 h-5 text-cyan-400" />
              View Deals
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { label: 'Games in Store', value: '500+' },
              { label: 'Platform Deals', value: '1,200+' },
              { label: 'Articles Published', value: '3,400+' },
              { label: 'Active Users', value: '50K+' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-2xl font-black gradient-text font-gaming">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform badges floating */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {[
          { name: 'Steam', color: 'bg-[#1b2838] border-[#1b9aaa]/40', text: 'text-[#66c0f4]' },
          { name: 'Epic', color: 'bg-[#1a1a2e] border-[#0078f2]/40', text: 'text-[#0078f2]' },
          { name: 'Nintendo', color: 'bg-[#2a0a0a] border-[#e4000f]/40', text: 'text-[#e4000f]' },
          { name: 'PlayStation', color: 'bg-[#001a3d] border-[#0070d1]/40', text: 'text-[#0070d1]' },
          { name: 'Xbox', color: 'bg-[#0a1f0a] border-[#52b043]/40', text: 'text-[#52b043]' },
        ].map(({ name, color, text }) => (
          <div key={name} className={`px-4 py-2 rounded-lg border ${color} ${text} text-sm font-bold font-gaming tracking-wide`}>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
