import React, { useState, useRef } from 'react';
import strings from '../strings';

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

const LandingPageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M9 21V9"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="M21 15l-5-5L5 21"/>
  </svg>
);

const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

// Generator data
const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-beginners' },
];

const categories = [
  { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.', icon: WebsiteIcon },
  { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.', icon: LandingPageIcon },
  { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.', icon: PortfolioIcon },
  { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.', icon: BlogIcon },
  { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.', icon: StoreIcon },
  { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.', icon: LinkIcon },
];

const generatorData = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', desc: 'Beautiful portfolios, no coding required', slug: 'free-website-builder-photographers' },
    { name: 'One-Page Wedding Website Builder', desc: 'Share your day with all your guests', slug: 'one-page-wedding-website' },
    { name: 'AI Business Website Generator', desc: 'Professional sites for any business', slug: 'ai-business-website-generator' },
    { name: 'Personal Website Builder', desc: 'Your corner of the web, made simple', slug: 'personal-website-builder' },
    { name: 'Real Estate Website Builder', desc: 'List properties with built-in MLS sync', slug: 'real-estate-website-builder' },
    { name: 'Doctor Website Generator', desc: 'Medical practices, appointment booking', slug: 'doctor-website-generator' },
    { name: 'Yoga Instructor Website Builder', desc: 'Class schedules, booking, and more', slug: 'yoga-instructor-website' },
    { name: 'Nonprofit Website Generator', desc: 'Donations, events, and volunteers', slug: 'nonprofit-website-generator' },
    { name: 'Artist Website Builder', desc: 'Showcase your art to the world', slug: 'artist-website-builder' },
    { name: 'Freelancer Website Generator', desc: 'Services, portfolio, and contact forms', slug: 'freelancer-website-generator' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Sales Page Generator', desc: 'High-converting sales pages in minutes', slug: 'sales-page-generator' },
    { name: 'Coming Soon Page Builder', desc: 'Build hype before you launch', slug: 'coming-soon-page-builder' },
    { name: 'Webinar Landing Page Generator', desc: 'Registration pages that fill seats', slug: 'webinar-landing-page' },
    { name: 'Ebook Landing Page Generator', desc: 'Capture leads with your content', slug: 'ebook-landing-page' },
    { name: 'Product Launch Page Builder', desc: 'Launch products with pre-orders', slug: 'product-launch-page' },
    { name: 'Lead Magnet Page Generator', desc: 'Grow your email list fast', slug: 'lead-magnet-page' },
    { name: 'App Download Page Builder', desc: 'Showcase your mobile app', slug: 'app-download-page' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase your design work beautifully', slug: 'portfolio-generator-designers' },
    { name: 'Photographer Portfolio Builder', desc: 'Photo galleries that impress clients', slug: 'photographer-portfolio-builder' },
    { name: 'Writer Portfolio Generator', desc: 'Published work, bio, and contact', slug: 'writer-portfolio-generator' },
    { name: 'Architect Portfolio Builder', desc: 'Renderings and project galleries', slug: 'architect-portfolio-builder' },
    { name: 'Musician Portfolio Generator', desc: 'Music, tours, and press kit', slug: 'musician-portfolio-generator' },
    { name: 'Creative Portfolio Builder', desc: 'All-in-one creative portfolio', slug: 'creative-portfolio-builder' },
    { name: 'Student Portfolio Generator', desc: 'For college and job applications', slug: 'student-portfolio-generator' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-beginners' },
    { name: 'Personal Blog Builder', desc: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
    { name: 'Business Blog Generator', desc: 'Content marketing made easy', slug: 'business-blog-generator' },
    { name: 'Food Blog Builder', desc: 'Recipes, photos, and meal plans', slug: 'food-blog-builder' },
    { name: 'Travel Blog Generator', desc: 'Document your adventures online', slug: 'travel-blog-generator' },
    { name: 'Fashion Blog Builder', desc: 'Style, trends, and outfit posts', slug: 'fashion-blog-builder' },
    { name: 'Tech Blog Generator', desc: 'Reviews, tutorials, and news', slug: 'tech-blog-generator' },
    { name: 'Lifestyle Blog Builder', desc: 'Mix of topics, all in one place', slug: 'lifestyle-blog-builder' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Ecommerce Store Builder', desc: 'Full-featured online shop', slug: 'ecommerce-store-builder' },
    { name: 'Dropshipping Store Generator', desc: 'Start a dropshipping business', slug: 'dropshipping-store-generator' },
    { name: 'Digital Products Store Builder', desc: 'Sell ebooks, courses, and downloads', slug: 'digital-products-store' },
    { name: 'Clothing Store Builder', desc: 'Fashion retail made simple', slug: 'clothing-store-builder' },
    { name: 'Online Store Builder for Restaurants', desc: 'Takeout and delivery orders', slug: 'restaurant-online-store' },
    { name: 'Handmade Store Generator', desc: 'Crafts and artisan products', slug: 'handmade-store-generator' },
    { name: 'Small Business Store Builder', desc: 'Local retail goes online', slug: 'small-business-store' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Instagram Bio Generator', desc: 'Link in bio for Instagram', slug: 'instagram-bio-generator' },
    { name: 'TikTok Link Generator', desc: 'All your content, one link', slug: 'tiktok-link-generator' },
    { name: 'YouTube Link in Bio Builder', desc: 'Showcase your videos and channels', slug: 'youtube-link-in-bio' },
    { name: 'Creator Link Page Builder', desc: 'For influencers and creators', slug: 'creator-link-page' },
    { name: 'Musician Link Generator', desc: 'Music, tour dates, and merch', slug: 'musician-link-generator' },
    { name: 'Podcast Link Page Builder', desc: 'All your episodes in one place', slug: 'podcast-link-page' },
    { name: 'Influencer Bio Page Generator', desc: 'Build your digital hub', slug: 'influencer-bio-page' },
  ],
};

const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: `An AI site generator is a tool that uses artificial intelligence to automatically create a website based on your input. Instead of starting from scratch or choosing from pre-made templates, you simply describe what you need—like "a portfolio website for a photographer"—and the AI builds a complete, customized site in seconds.

The generator understands context, industry best practices, and design principles to produce something that looks professional and functions properly from day one.`
  },
  {
    question: 'How is a generator different from a template?',
    answer: `A template is a static starting point—you get the design and layout, but you still need to fill in all the content, arrange the sections, and figure out what goes where. It's like getting a blank canvas with some paint already laid out.

A generator, on the other hand, creates a finished, populated site based on your description. It decides the layout, writes placeholder content, sets up the navigation, and configures the settings—all tailored to your specific use case. You can always customize everything after, but you start with a complete site rather than an empty shell.`
  },
  {
    question: 'Are these generators free to use?',
    answer: `Yes! You can generate a website, customize it, and publish it for free. Strikingly's free plan lets you create and host a website with our branding.

When you're ready to connect a custom domain, remove our branding, or access advanced features, you can upgrade to a paid plan. But there's no credit card required to get started, and you can have a live site up and running in minutes without spending anything.`
  },
  {
    question: 'What kinds of sites can I build?',
    answer: `Pretty much any type of website you can think of. Our generators cover the full spectrum: business websites, personal portfolios, blogs, online stores, landing pages, wedding sites, restaurant menus, and link-in-bio pages for creators.

Each generator is optimized for its specific use case. The restaurant generator includes menu sections and reservation forms. The store generator includes product pages and checkout. The portfolio generator includes gallery layouts. You get a site that's purpose-built, not a generic page you have to figure out how to adapt.`
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: `Absolutely. The generator gives you a professional starting point, but everything is fully customizable. Change the colors, fonts, images, and text. Add, remove, or rearrange sections. The editor is intuitive and doesn't require coding knowledge.

Think of it as having a professional designer create a first draft for you, which you then fine-tune to match your exact vision. You maintain full control over every element of your site.`
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: `Every site generated through our platform is fully responsive by default. That means it automatically adapts to look great on phones, tablets, and desktops—no extra work required from you.

Mobile responsiveness is built into the generator itself, not added as an afterthought. Your site will pass Google's mobile-friendly test and provide a smooth experience for visitors on any device.`
  },
];

// Styles
const styles = {
  root: {
    '--brand-purple': '#8159BB',
    '--ai-gradient-start': '#7671FF',
    '--ai-gradient-end': '#CB0C9F',
    '--body-text': '#636972',
    '--heading-text': '#4B5056',
    '--hero-heading': '#2E2E2F',
    '--card-border': '#C6C9CD',
    '--divider': '#E2E4E7',
    '--light-bg': '#F4F6F8',
    '--white': '#FFFFFF',
    '--font-heading': "'Josefin Sans', 'Poppins', sans-serif",
    '--font-body': "'Open Sans', sans-serif",
    '--max-width': '1200px',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#636972',
    background: '#FFFFFF',
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  section: {
    padding: '40px 0',
  },
  h1: {
    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: '1.2',
    fontSize: '40px',
    margin: 0,
  },
  h2: {
    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: '1.2',
    fontSize: '28px',
    color: '#4B5056',
    margin: 0,
  },
  h3: {
    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: '1.2',
    fontSize: '20px',
    color: '#4B5056',
    margin: 0,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '36px',
    padding: '0 15px',
    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
    fontSize: '14px',
    fontWeight: '700',
    textTransform: 'uppercase',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
    color: '#FFFFFF',
  },
  btnLarge: {
    height: '44px',
    padding: '0 24px',
    fontSize: '16px',
  },
  btnGhost: {
    background: 'transparent',
    color: '#8159BB',
    border: '1px solid #8159BB',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid #C6C9CD',
    borderRadius: '3px',
    padding: '20px',
    transition: 'all 0.2s ease',
  },
  tag: {
    display: 'inline-block',
    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    padding: '2px 6px',
    borderRadius: '3px',
    border: '1px solid #8159BB',
    color: '#8159BB',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
};

// GeneratorsPage Component
export default function GeneratorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const searchInputRef = useRef(null);

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  // Filter generators based on search
  const filterGenerators = (generators) => {
    if (!searchQuery) return generators;
    const q = searchQuery.toLowerCase();
    return generators.filter(g => 
      g.name.toLowerCase().includes(q) || 
      g.desc.toLowerCase().includes(q)
    );
  };

  // Count total matches
  const countMatches = () => {
    let count = 0;
    Object.values(generatorData).forEach(generators => {
      count += filterGenerators(generators).length;
    });
    return count;
  };

  // Toggle show all
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Get icon for category
  const getCategoryIcon = (slug) => {
    const cat = categories.find(c => c.slug === slug);
    if (cat) {
      const Icon = cat.icon;
      return <Icon />;
    }
    return <WebsiteIcon />;
  };

  return (
    <div style={styles.root}>
      {/* Section 0: Top Bar */}
      <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E4E7', padding: '12px 0' }}>
        <div style={styles.container}>
          <a href="/" style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '20px', fontWeight: '700', color: '#8159BB', textDecoration: 'none' }}>
            Strikingly AI
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav style={{ padding: '12px 0' }} aria-label="Breadcrumb">
        <div style={styles.container}>
          <ol style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px', margin: 0, padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" style={{ color: '#636972', textDecoration: 'none' }}>Strikingly</a>
              <span style={{ margin: '0 8px', color: '#636972' }}>&gt;</span>
            </li>
            <li style={{ color: '#636972' }}>AI Generators</li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section style={{ 
        padding: '60px 0 80px', 
        background: 'radial-gradient(ellipse at 30% 50%, rgba(118, 113, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(203, 12, 159, 0.06) 0%, transparent 40%)' 
      }}>
        <div style={styles.container}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h1 style={{ marginBottom: '16px' }}>
                <span style={{ display: 'block', color: '#2E2E2F' }}>BUILD ANY KIND OF SITE</span>
                <span style={{ 
                  display: 'block', 
                  background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>WITH AI, IN AN INSTANT</span>
              </h1>
              <p style={{ color: '#636972', fontSize: '16px', marginBottom: '24px', maxWidth: '480px' }}>
                Browse the right generator for what you're building, or jump straight into our AI site builder.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="/s/ai_site_builder" style={{ ...styles.btn, ...styles.btnPrimary, ...styles.btnLarge, textDecoration: 'none' }}>
                  START BUILDING - IT'S FREE
                </a>
                <a href="#all-generators" style={{ ...styles.btn, ...styles.btnGhost, ...styles.btnLarge, textDecoration: 'none' }}>
                  BROWSE GENERATORS
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} aria-hidden="true">
                <rect x="40" y="40" width="320" height="220" rx="8" stroke="#C6C9CD" strokeWidth="2" fill="white"/>
                <rect x="40" y="40" width="320" height="40" rx="8" fill="#F4F6F8"/>
                <circle cx="65" cy="60" r="6" fill="#C6C9CD"/>
                <circle cx="85" cy="60" r="6" fill="#C6C9CD"/>
                <circle cx="105" cy="60" r="6" fill="#C6C9CD"/>
                <rect x="60" y="100" width="120" height="12" rx="2" fill="#E2E4E7"/>
                <rect x="60" y="120" width="180" height="8" rx="2" fill="#E2E4E7"/>
                <rect x="60" y="136" width="160" height="8" rx="2" fill="#E2E4E7"/>
                <rect x="60" y="160" width="80" height="60" rx="4" fill="#F4F6F8"/>
                <rect x="150" y="160" width="80" height="60" rx="4" fill="#F4F6F8"/>
                <rect x="240" y="160" width="80" height="60" rx="4" fill="#F4F6F8"/>
                <rect x="60" y="230" width="60" height="8" rx="2" fill="#8159BB"/>
                <rect x="130" y="230" width="60" height="8" rx="2" fill="#8159BB"/>
                <rect x="200" y="230" width="60" height="8" rx="2" fill="#8159BB"/>
                <path d="M280 100 L320 140 M320 100 L280 140" stroke="#7671FF" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section style={{ ...styles.section, background: '#F4F6F8' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>FEATURED GENERATORS</h2>
            <p style={{ color: '#636972' }}>A few common starting points.</p>
          </div>
          <div style={styles.grid3}>
            {featuredGenerators.map((gen, idx) => (
              <a 
                key={idx} 
                href={`/generators/${gen.slug}`} 
                style={{ ...styles.card, display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>
                  {gen.name}
                </div>
                <div style={{ fontSize: '13px', color: '#636972', marginBottom: '12px' }}>
                  {gen.desc}
                </div>
                <span style={styles.tag}>{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>BROWSE BY CATEGORY</h2>
          </div>
          <div style={styles.grid3}>
            {categories.map((cat, idx) => (
              <a 
                key={idx} 
                href={`#${cat.slug}`}
                style={{ ...styles.card, display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ width: '48px', height: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8159BB' }}>
                  {getCategoryIcon(cat.slug)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px', color: '#4B5056' }}>
                    {cat.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#636972' }}>
                    {cat.desc}
                  </div>
                </div>
                <div style={{ color: '#8159BB' }}>
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section style={{ ...styles.section, background: '#F4F6F8' }} id="all-generators">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>ALL GENERATORS</h2>
            <p style={{ color: '#636972' }}>Sixty-plus generators, organized by what you're building.</p>
          </div>
          
          {/* Search */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ position: 'relative', maxWidth: '480px' }}>
              <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#636972' }}>
                <SearchIcon />
              </div>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search generators..."
                aria-label="Search generators"
                value={searchQuery}
                onChange={handleSearch}
                style={{
                  width: '100%',
                  height: '44px',
                  padding: '0 16px 0 40px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '14px',
                  border: '1px solid #C6C9CD',
                  borderRadius: '3px',
                  background: '#FFFFFF',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            {searchQuery && (
              <div style={{ marginTop: '8px', fontSize: '13px', color: '#636972' }}>
                {countMatches()} generators match
              </div>
            )}
            {searchQuery && countMatches() === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p style={{ marginBottom: '16px' }}>No generators match your search.</p>
                <button onClick={clearSearch} style={{ ...styles.btn, ...styles.btnGhost, marginBottom: '16px' }}>
                  Clear search
                </button>
                <p>Can't find it? <a href="/s/ai_site_builder">Start with our AI builder</a>.</p>
              </div>
            )}
          </div>

          {/* Generator Subsections */}
          {categories.map((cat) => {
            const generators = filterGenerators(generatorData[cat.slug] || []);
            if (searchQuery && generators.length === 0) return null;
            
            const isExpanded = expandedSections[cat.slug] !== false;
            const visibleGenerators = isExpanded ? generators : generators.slice(0, 8);
            
            return (
              <div key={cat.slug} id={cat.slug} style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '8px' }}>{cat.name}</h3>
                <p style={{ marginBottom: '20px', color: '#636972' }}>{cat.desc}</p>
                <div style={styles.grid3}>
                  {visibleGenerators.map((gen, idx) => (
                    <a 
                      key={idx} 
                      href={`/generators/${gen.slug}`}
                      style={{ ...styles.card, display: 'block', textDecoration: 'none', color: 'inherit' }}
                    >
                      <div style={{ width: '100%', height: '80px', background: '#F4F6F8', borderRadius: '2px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8159BB' }}>
                        {getCategoryIcon(cat.slug)}
                      </div>
                      <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', color: '#4B5056' }}>
                        {gen.name}
                      </div>
                      <div style={{ fontSize: '13px', color: '#636972' }}>
                        {gen.desc}
                      </div>
                    </a>
                  ))}
                </div>
                {generators.length > 8 && (
                  <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <button 
                      onClick={() => toggleSection(cat.slug)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#8159BB', 
                        fontFamily: "'Josefin Sans', sans-serif", 
                        fontSize: '13px', 
                        fontWeight: '700', 
                        textTransform: 'uppercase', 
                        cursor: 'pointer',
                        padding: '8px 16px',
                      }}
                    >
                      {isExpanded ? `Show less` : `Show all ${generators.length} generators`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>HOW IT WORKS</h2>
          </div>
          <div style={styles.grid3}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#8159BB', color: '#FFFFFF', fontFamily: "'Josefin Sans', sans-serif", fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>1</div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>PICK A GENERATOR</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Browse by category or search to find one that fits your goal.</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#8159BB', color: '#FFFFFF', fontFamily: "'Josefin Sans', sans-serif", fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>2</div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>DESCRIBE YOUR SITE</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Tell our AI builder about your business in a sentence or two.</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#8159BB', color: '#FFFFFF', fontFamily: "'Josefin Sans', sans-serif", fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>3</div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>GENERATE AND PUBLISH</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Get a fully built site in seconds. Customize anything, then go live.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section style={{ ...styles.section, background: '#F4F6F8' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>WHY STRIKINGLY</h2>
          </div>
          <div style={styles.grid3}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#8159BB' }}>
                <ClockIcon />
              </div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>LIVE IN SECONDS</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Describe your site, we build it. No setup, no learning curve.</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#8159BB' }}>
                <MobileIcon />
              </div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>MOBILE BY DEFAULT</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Every generator produces responsive sites that work on any device.</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: '#8159BB' }}>
                <DollarIcon />
              </div>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', color: '#4B5056' }}>FREE TO START</div>
              <div style={{ fontSize: '14px', color: '#636972' }}>Generate, customize, and publish without a credit card.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={{ marginBottom: '8px' }}>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid #E2E4E7' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    color: '#4B5056',
                    textAlign: 'start',
                    cursor: 'pointer',
                  }}
                  aria-expanded={openFaq === idx}
                >
                  {faq.question}
                  <span style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }}>
                    <ChevronIcon />
                  </span>
                </button>
                <div style={{ 
                  maxHeight: openFaq === idx ? '500px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.3s ease',
                }}>
                  {faq.answer.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} style={{ color: '#636972', marginBottom: '12px', paddingBottom: openFaq === idx ? '20px' : '0' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section style={{ ...styles.section, textAlign: 'center', background: '#FFFFFF', padding: '60px 0' }}>
        <div style={styles.container}>
          <h2 style={{ marginBottom: '12px' }}>READY TO BUILD?</h2>
          <p style={{ marginBottom: '24px', color: '#636972' }}>Pick a generator above, or jump straight into our AI builder.</p>
          <a href="/s/ai_site_builder" style={{ ...styles.btn, ...styles.btnPrimary, ...styles.btnLarge, textDecoration: 'none', display: 'inline-block' }}>
            START WITH AI BUILDER
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer style={{ background: '#F4F6F8', padding: '40px 0 20px', borderTop: '1px solid #E2E4E7' }}>
        <div style={styles.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', color: '#4B5056' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="/templates" style={{ color: '#636972', fontSize: '13px' }}>Templates</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/pricing" style={{ color: '#636972', fontSize: '13px' }}>Pricing</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/features" style={{ color: '#636972', fontSize: '13px' }}>Features</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/support" style={{ color: '#636972', fontSize: '13px' }}>Support</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', color: '#4B5056' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="/about" style={{ color: '#636972', fontSize: '13px' }}>About</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/blog" style={{ color: '#636972', fontSize: '13px' }}>Blog</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/careers" style={{ color: '#636972', fontSize: '13px' }}>Careers</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/press" style={{ color: '#636972', fontSize: '13px' }}>Press</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', color: '#4B5056' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="/help" style={{ color: '#636972', fontSize: '13px' }}>Help Center</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/community" style={{ color: '#636972', fontSize: '13px' }}>Community</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/academy" style={{ color: '#636972', fontSize: '13px' }}>Academy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/integrations" style={{ color: '#636972', fontSize: '13px' }}>Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px', color: '#4B5056' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="/terms" style={{ color: '#636972', fontSize: '13px' }}>Terms</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/privacy" style={{ color: '#636972', fontSize: '13px' }}>Privacy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/cookies" style={{ color: '#636972', fontSize: '13px' }}>Cookies</a></li>
                <li style={{ marginBottom: '8px' }}><a href="/licenses" style={{ color: '#636972', fontSize: '13px' }}>Licenses</a></li>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #E2E4E7', fontSize: '13px', color: '#636972' }}>
            &copy; 2026 Strikingly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}