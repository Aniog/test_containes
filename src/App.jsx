import React from 'react';
import './App.css';
import CTAButton from './components/CTAButton';
import GeneratorCard from './components/GeneratorCard';
import FeatureCard from './components/FeatureCard';

const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

const features = [
  {
    icon: <svg className="w-5 h-5 text-[#8159BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'LIVE IN SECONDS',
    description: 'Describe your site, we build it. No setup, no learning curve.'
  },
  {
    icon: <svg className="w-5 h-5 text-[#8159BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: 'MOBILE BY DEFAULT',
    description: 'Every generator produces responsive sites that work on any device.'
  },
  {
    icon: <svg className="w-5 h-5 text-[#8159BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    title: 'FREE TO START',
    description: 'Generate, customize, and publish without a credit card.'
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F8]">
      {/* Top Bar */}
      <nav className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="font-bold text-lg tracking-tight text-[#2E2E2F]">
            strikingly <span className="text-[#8159BB]">AI</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2E2E2F] mb-4 leading-tight">
              BUILD ANY KIND OF SITE<br />
              <span className="bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent">WITH AI, IN AN INSTANT</span>
            </h1>
            <p className="text-lg text-[#636972] mb-8 max-w-md">
              Browse the right generator for what you're building, or jump straight into our AI site builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="/s/ai_site_builder" variant="primary" size="large">
                START BUILDING - IT'S FREE
              </CTAButton>
              <CTAButton href="/generators" variant="secondary" size="large">
                BROWSE GENERATORS
              </CTAButton>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative bg-white rounded-xl border border-[#C6C9CD] p-4 shadow-sm">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#F4F6F8] to-white rounded-lg flex items-center justify-center">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="10" y="10" width="180" height="100" rx="4" stroke="#C6C9CD" strokeWidth="2"/>
                  <rect x="20" y="22" width="60" height="8" rx="2" fill="#8159BB" opacity="0.3"/>
                  <rect x="20" y="38" width="160" height="6" rx="2" fill="#E2E4E7"/>
                  <rect x="20" y="50" width="140" height="6" rx="2" fill="#E2E4E7"/>
                  <rect x="20" y="62" width="100" height="6" rx="2" fill="#E2E4E7"/>
                  <rect x="20" y="80" width="50" height="20" rx="3" fill="#8159BB"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Generators */}
      <section className="max-w-[1200px] mx-auto px-5 py-12 border-t border-[#E2E4E7]">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#4B5056] uppercase tracking-wide">Featured Generators</h2>
            <p className="text-[#636972] mt-1">A few common starting points.</p>
          </div>
          <a href="/generators" className="text-[#8159BB] hover:underline text-sm font-medium hidden md:inline">View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredGenerators.map((gen, idx) => (
            <GeneratorCard key={idx} {...gen} />
          ))}
        </div>
        <div className="mt-4 md:hidden">
          <a href="/generators" className="text-[#8159BB] hover:underline text-sm font-medium">View all generators →</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white border-y border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-12">
          <h2 className="text-2xl font-bold text-[#4B5056] uppercase tracking-wide mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold uppercase text-[#2E2E2F] mb-2">Pick a Generator</h3>
              <p className="text-sm text-[#636972]">Browse by category or search to find one that fits your goal.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold uppercase text-[#2E2E2F] mb-2">Describe Your Site</h3>
              <p className="text-sm text-[#636972]">Tell our AI builder about your business in a sentence or two.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#8159BB] text-white font-bold flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold uppercase text-[#2E2E2F] mb-2">Generate and Publish</h3>
              <p className="text-sm text-[#636972]">Get a fully built site in seconds. Customize anything, then go live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Strikingly */}
      <section className="max-w-[1200px] mx-auto px-5 py-12">
        <h2 className="text-2xl font-bold text-[#4B5056] uppercase tracking-wide mb-8 text-center">Why Strikingly</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-12 text-center">
          <h2 className="text-2xl font-bold text-[#2E2E2F] mb-2">Ready to Build?</h2>
          <p className="text-[#636972] mb-6">Pick a generator above, or jump straight into our AI builder.</p>
          <CTAButton href="/s/ai_site_builder" variant="primary" size="large">
            Start with AI Builder
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2E2F] text-[#C6C9CD] text-sm">
        <div className="max-w-[1200px] mx-auto px-5 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="font-bold text-white">Strikingly</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="/about" className="hover:text-white">About</a>
              <a href="/pricing" className="hover:text-white">Pricing</a>
              <a href="/templates" className="hover:text-white">Templates</a>
              <a href="/support" className="hover:text-white">Support</a>
              <a href="/blog" className="hover:text-white">Blog</a>
              <a href="/terms" className="hover:text-white">Terms</a>
              <a href="/privacy" className="hover:text-white">Privacy</a>
            </div>
          </div>
          <div className="text-xs text-[#636972] border-t border-white/10 pt-4">
            © {new Date().getFullYear()} Strikingly, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
