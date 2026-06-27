import React, { useState, useEffect, useRef } from 'react';
import { strings } from './strings';
import './GeneratorsHub.css';

// Get English strings
const t = strings.en;

// ============================================
// DATA: Generator categories and items
// ============================================

const categories = [
  {
    id: 'websites',
    name: t.categoryWebsites,
    description: t.categoryWebsitesDesc,
    icon: 'globe'
  },
  {
    id: 'landing-pages',
    name: t.categoryLandingPages,
    description: t.categoryLandingPagesDesc,
    icon: 'target'
  },
  {
    id: 'portfolios',
    name: t.categoryPortfolios,
    description: t.categoryPortfoliosDesc,
    icon: 'image'
  },
  {
    id: 'blogs',
    name: t.categoryBlogs,
    description: t.categoryBlogsDesc,
    icon: 'pen'
  },
  {
    id: 'stores',
    name: t.categoryStores,
    description: t.categoryStoresDesc,
    icon: 'cart'
  },
  {
    id: 'link-in-bio',
    name: t.categoryLinkInBio,
    description: t.categoryLinkInBioDesc,
    icon: 'link'
  }
];

const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' }
];

const generatorsData = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with stunning galleries', slug: 'free-website-builder-photographers' },
    { name: 'One-Page Wedding Website Builder', description: 'Share your love story beautifully', slug: 'one-page-wedding-website-builder' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations built in', slug: 'restaurant-website-builder' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules and booking made simple', slug: 'yoga-instructor-website-generator' },
    { name: 'Personal Portfolio Generator', description: 'Stand out with a unique personal brand', slug: 'personal-portfolio-generator' },
    { name: 'Freelancer Website Builder', description: 'Attract clients with a professional presence', slug: 'freelancer-website-builder' },
    { name: 'Artist Portfolio Generator', description: 'Display your art in stunning galleries', slug: 'artist-portfolio-generator' },
    { name: 'Consultant Website Generator', description: 'Build credibility and generate leads', slug: 'consultant-website-generator' },
    { name: 'Nonprofit Website Builder', description: 'Share your mission with the world', slug: 'nonprofit-website-builder' }
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', description: 'Generate buzz for your new product', slug: 'product-launch-landing-page' },
    { name: 'Event Registration Page', description: 'Collect RSVPs with style', slug: 'event-registration-page' },
    { name: 'Lead Capture Page Generator', description: 'Turn visitors into leads effortlessly', slug: 'lead-capture-page-generator' },
    { name: 'Coming Soon Page Builder', description: 'Build anticipation for your launch', slug: 'coming-soon-page-builder' },
    { name: 'Webinar Registration Page', description: 'Fill your webinar seats quickly', slug: 'webinar-registration-page' },
    { name: 'App Download Landing Page', description: 'Promote your mobile app effectively', slug: 'app-download-landing-page' },
    { name: 'Email Signup Landing Page', description: 'Grow your subscriber list fast', slug: 'email-signup-landing-page' },
    { name: 'Contest Entry Landing Page', description: 'Run viral contests that convert', slug: 'contest-entry-landing-page' }
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase creative work beautifully', slug: 'portfolio-generator-designers' },
    { name: 'Photography Portfolio Builder', description: 'Perfect for photographers at any level', slug: 'photography-portfolio-builder' },
    { name: 'Artist Portfolio Generator', description: 'Art-focused design for visual artists', slug: 'artist-portfolio-generator' },
    { name: 'Writer Portfolio Website', description: 'Display your published work elegantly', slug: 'writer-portfolio-website' },
    { name: 'Fashion Designer Portfolio', description: 'High-fashion presentation for designers', slug: 'fashion-designer-portfolio' },
    { name: 'Architecture Portfolio Builder', description: 'Showcase projects with visual impact', slug: 'architecture-portfolio-builder' },
    { name: 'Music Producer Portfolio', description: 'Share your beats and productions', slug: 'music-producer-portfolio' },
    { name: 'Interior Design Portfolio', description: 'Inspire with beautiful project displays', slug: 'interior-design-portfolio' },
    { name: 'Illustrator Portfolio Generator', description: 'Perfect canvas for digital illustrators', slug: 'illustrator-portfolio-generator' }
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
    { name: 'Travel Blog Generator', description: 'Document your adventures beautifully', slug: 'travel-blog-generator' },
    { name: 'Food Blog Website Builder', description: 'Perfect for recipes and food stories', slug: 'food-blog-website-builder' },
    { name: 'Tech Blog Generator', description: 'Share your tech insights professionally', slug: 'tech-blog-generator' },
    { name: 'Fashion Blog Builder', description: 'Style content with stunning visuals', slug: 'fashion-blog-builder' },
    { name: 'Fitness Blog Generator', description: 'Inspire healthy living journeys', slug: 'fitness-blog-generator' },
    { name: 'Parenting Blog Website', description: 'Connect with other parents and families', slug: 'parenting-blog-website' },
    { name: 'DIY Craft Blog Builder', description: 'Share your craft projects and tutorials', slug: 'diy-craft-blog-builder' },
    { name: 'Book Review Blog Generator', description: 'Create a hub for book lovers', slug: 'book-review-blog-generator' }
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', description: 'Start selling without writing code', slug: 'online-store-builder-restaurants' },
    { name: 'Handmade Crafts Store Generator', description: 'Perfect for artisan sellers', slug: 'handmade-crafts-store-generator' },
    { name: 'Fashion Store Builder', description: 'Run your clothing boutique online', slug: 'fashion-store-builder' },
    { name: 'Digital Products Store', description: 'Sell ebooks, courses, and downloads', slug: 'digital-products-store' },
    { name: 'Print-on-Demand Store', description: 'Start a merch business easily', slug: 'print-on-demand-store' },
    { name: 'Jewelry Store Builder', description: 'Showcase your jewelry collection', slug: 'jewelry-store-builder' },
    { name: 'Art Store Generator', description: 'Sell prints and original artwork', slug: 'art-store-generator' },
    { name: 'Subscription Box Store', description: 'Launch a monthly subscription service', slug: 'subscription-box-store' },
    { name: 'Vintage Shop Website Builder', description: 'Curate and sell vintage treasures', slug: 'vintage-shop-website-builder' }
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Instagram Link-in-Bio Builder', description: 'Optimized for social media traffic', slug: 'instagram-link-in-bio-builder' },
    { name: 'TikTok Bio Link Generator', description: 'Connect all your content in one place', slug: 'tiktok-bio-link-generator' },
    { name: 'YouTube Creator Link-in-Bio', description: 'Link to all your videos and socials', slug: 'youtube-creator-link-in-bio' },
    { name: 'Podcaster Link-in-Bio', description: 'Connect listeners to all episodes', slug: 'podcaster-link-in-bio' },
    { name: 'Artist Link-in-Bio Page', description: 'For musicians and performers', slug: 'artist-link-in-bio-page' },
    { name: 'Influencer Bio Link Builder', description: 'Monetize your social following', slug: 'influencer-bio-link-builder' },
    { name: 'Creator Economy Bio Link', description: 'All-in-one hub for your audience', slug: 'creator-economy-bio-link' }
  ]
};

const faqData = [
  { question: t.faq1Q, answer: t.faq1A },
  { question: t.faq2Q, answer: t.faq2A },
  { question: t.faq3Q, answer: t.faq3A },
  { question: t.faq4Q, answer: t.faq4A },
  { question: t.faq5Q, answer: t.faq5A },
  { question: t.faq6Q, answer: t.faq6A }
];

// ============================================
// SVG ICONS
// ============================================

const Icons = {
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  ),
  arrowRight: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  ),
  chevronDown: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  ),
  globe: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
  target: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  ),
  image: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <circle cx="9" cy="9" r="2"></circle>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
    </svg>
  ),
  pen: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  ),
  cart: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="21" r="1"></circle>
      <circle cx="19" cy="21" r="1"></circle>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
  ),
  link: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  zap: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  smartphone: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  ),
  creditCard: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
      <path d="M2 10h20"></path>
    </svg>
  ),
  website: (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <rect x="5" y="6" width="14" height="8" rx="1"></rect>
    </svg>
  )
};

// ============================================
// COMPONENTS
// ============================================

// Top Bar
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <a href="/" className="logo" aria-label={t.logoText}>
        {t.logoText}
      </a>
    </div>
  </header>
);

// Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="/" itemProp="item">
            <span itemProp="name">{t.breadcrumbHome}</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" aria-current="page">{t.breadcrumbCurrent}</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </div>
  </nav>
);

// Hero Illustration SVG
const HeroIllustration = () => (
  <svg 
    width="400" 
    height="300" 
    viewBox="0 0 400 300" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Background shapes */}
    <circle cx="200" cy="150" r="120" fill="url(#heroGradient)" fillOpacity="0.1"/>
    <circle cx="320" cy="80" r="40" fill="#8159BB" fillOpacity="0.1"/>
    <circle cx="80" cy="220" r="30" fill="#7671FF" fillOpacity="0.1"/>
    
    {/* Browser window */}
    <rect x="60" y="50" width="280" height="200" rx="8" fill="white" stroke="#E2E4E7" strokeWidth="2"/>
    
    {/* Browser header */}
    <rect x="60" y="50" width="280" height="30" rx="8" fill="#F4F6F8"/>
    <rect x="60" y="72" width="280" height="8" fill="#F4F6F8"/>
    <circle cx="80" cy="65" r="5" fill="#C6C9CD"/>
    <circle cx="95" cy="65" r="5" fill="#C6C9CD"/>
    <circle cx="110" cy="65" r="5" fill="#C6C9CD"/>
    
    {/* Website content lines */}
    <rect x="80" y="95" width="100" height="12" rx="2" fill="#4B5056"/>
    <rect x="80" y="115" width="240" height="8" rx="2" fill="#E2E4E7"/>
    <rect x="80" y="130" width="200" height="8" rx="2" fill="#E2E4E7"/>
    
    {/* Image placeholders */}
    <rect x="80" y="150" width="70" height="50" rx="4" fill="#8159BB" fillOpacity="0.2"/>
    <rect x="160" y="150" width="70" height="50" rx="4" fill="#7671FF" fillOpacity="0.2"/>
    <rect x="240" y="150" width="70" height="50" rx="4" fill="#CB0C9F" fillOpacity="0.2"/>
    
    {/* Button */}
    <rect x="80" y="215" width="80" height="24" rx="4" fill="url(#heroBtnGradient)"/>
    
    {/* Decorative AI sparkles */}
    <path d="M330 180 L335 170 L340 180 L350 185 L340 190 L335 200 L330 190 L320 185 Z" fill="#7671FF" fillOpacity="0.6"/>
    <path d="M70 90 L73 84 L76 90 L82 93 L76 96 L73 102 L70 96 L64 93 Z" fill="#CB0C9F" fillOpacity="0.5"/>
    <path d="M350 240 L352 236 L354 240 L358 242 L354 244 L352 248 L350 244 L346 242 Z" fill="#8159BB" fillOpacity="0.4"/>
    
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
      <linearGradient id="heroBtnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

// Hero Section
const Hero = () => (
  <section className="hero section--lg">
    <div className="container">
      <div className="hero-content">
        <h1>
          <span className="hero-h1-line1">{t.heroH1Line1}</span>
          <span className="hero-h1-line2">{t.heroH1Line2}</span>
        </h1>
        <p className="hero-subheadline">{t.heroSubheadline}</p>
        <div className="hero-ctas">
          <a href="/s/ai_site_builder" className="btn btn--primary btn--lg">{t.heroPrimaryCta}</a>
          <a href="#all-generators" className="btn btn--ghost btn--lg">{t.heroSecondaryCta}</a>
        </div>
      </div>
      <div className="hero-illustration">
        <HeroIllustration />
      </div>
    </div>
  </section>
);

// Featured Generators Section
const FeaturedGenerators = () => (
  <section className="featured-generators section">
    <div className="container">
      <header className="section-header">
        <h2>{t.featuredTitle}</h2>
        <p>{t.featuredSubtitle}</p>
      </header>
      <div className="grid grid--3">
        {featuredGenerators.map((generator, index) => (
          <article key={index} className="card featured-card">
            <a href={`/generators/${generator.slug}`}>
              <h3 className="featured-card-name">{generator.name}</h3>
              <p className="featured-card-desc">{generator.description}</p>
              <span className="tag featured-card-tag">{generator.category}</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseByCategory = () => (
  <section className="browse-category section">
    <div className="container">
      <header className="section-header">
        <h2>{t.browseTitle}</h2>
      </header>
      <div className="grid grid--3">
        {categories.map((category) => (
          <article key={category.id} className="card">
            <a href={`#${category.id}`} className="category-card">
              <div className="category-card-icon">
                {Icons[category.icon]}
              </div>
              <h3 className="category-card-name">{category.name}</h3>
              <p className="category-card-desc">{category.description}</p>
              <span className="category-card-arrow">{Icons.arrowRight}</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// Generator Card Component
const GeneratorCard = ({ generator }) => (
  <article className="card generator-card" data-name={generator.name.toLowerCase()} data-desc={generator.description.toLowerCase()} data-category={generator.slug}>
    <a href={`/generators/${generator.slug}`}>
      <div className="generator-card-image">
        {Icons.website}
      </div>
      <h4 className="generator-card-name">{generator.name}</h4>
      <p className="generator-card-desc">{generator.description}</p>
    </a>
  </article>
);

// All Generators Section
const AllGenerators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});
  const searchInputRef = useRef(null);
  
  const initialVisibleCount = 6;
  
  // Initialize visible counts
  useEffect(() => {
    const counts = {};
    Object.keys(generatorsData).forEach(categoryId => {
      counts[categoryId] = initialVisibleCount;
    });
    setVisibleCounts(counts);
  }, []);
  
  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      // Reset visibility
      setExpandedSections({});
      setVisibleCounts(
        Object.keys(generatorsData).reduce((acc, cat) => {
          acc[cat] = initialVisibleCount;
          return acc;
        }, {})
      );
    }
  };
  
  // Toggle show all for a section
  const toggleShowAll = (categoryId, e) => {
    e.preventDefault();
    const totalCount = generatorsData[categoryId].length;
    const currentCount = visibleCounts[categoryId];
    
    setVisibleCounts(prev => ({
      ...prev,
      [categoryId]: currentCount >= totalCount ? initialVisibleCount : totalCount
    }));
    
    setExpandedSections(prev => ({
      ...prev,
      [categoryId]: currentCount < totalCount
    }));
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    setExpandedSections({});
    setVisibleCounts(
      Object.keys(generatorsData).reduce((acc, cat) => {
        acc[cat] = initialVisibleCount;
        return acc;
      }, {})
    );
  };
  
  // Calculate matching generators
  const getMatchingGenerators = () => {
    if (!searchTerm) return null;
    
    const matches = [];
    Object.entries(generatorsData).forEach(([categoryId, generators]) => {
      generators.forEach(gen => {
        const nameMatch = gen.name.toLowerCase().includes(searchTerm);
        const descMatch = gen.description.toLowerCase().includes(searchTerm);
        const categoryMatch = categoryId.replace('-', ' ').includes(searchTerm);
        
        if (nameMatch || descMatch || categoryMatch) {
          matches.push({ ...gen, categoryId });
        }
      });
    });
    return matches;
  };
  
  const matchingGenerators = getMatchingGenerators();
  const totalMatches = matchingGenerators ? matchingGenerators.length : 0;
  
  return (
    <section id="all-generators" className="all-generators section">
      <div className="container">
        <header className="section-header">
          <h2>{t.allGeneratorsTitle}</h2>
          <p>{t.allGeneratorsSubtitle}</p>
        </header>
        
        {/* Search */}
        <div className="search-container">
          <div className="search-wrapper">
            <span className="search-icon">{Icons.search}</span>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAriaLabel}
              onChange={handleSearch}
            />
          </div>
          {searchTerm && (
            <p className="search-count">
              {totalMatches} {t.generatorsMatch}
            </p>
          )}
        </div>
        
        {/* Search Results */}
        {searchTerm && totalMatches === 0 && (
          <div className="search-empty">
            <p>{t.noResultsText}</p>
            <button className="btn btn--ghost" onClick={clearSearch}>{t.clearSearch}</button>
            <p style={{ marginTop: '10px' }}>
              {t.cantFindIt} <a href="/s/ai_site_builder">{t.startWithAi}</a>
            </p>
          </div>
        )}
        
        {/* Generator Subsections */}
        {searchTerm && totalMatches > 0 && (
          <div className="generator-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {matchingGenerators.map((gen, index) => (
              <GeneratorCard key={`${gen.categoryId}-${index}`} generator={gen} />
            ))}
          </div>
        )}
        
        {!searchTerm && categories.map((category) => {
          const generators = generatorsData[category.id] || [];
          const visibleCount = visibleCounts[category.id] || initialVisibleCount;
          const isExpanded = visibleCount >= generators.length;
          const hasMore = generators.length > initialVisibleCount;
          
          return (
            <div 
              key={category.id} 
              id={category.id} 
              className="generator-subsection"
              data-category={category.id}
            >
              <h3>{category.name}</h3>
              <p className="generator-subsection-desc">{category.description}</p>
              <div className="generator-grid">
                {generators.slice(0, visibleCount).map((generator, index) => (
                  <GeneratorCard key={index} generator={generator} />
                ))}
              </div>
              {hasMore && (
                <div className="show-all-container">
                  <button 
                    className="btn show-all-btn"
                    onClick={(e) => toggleShowAll(category.id, e)}
                    aria-expanded={isExpanded}
                    aria-controls={`${category.id}-generators`}
                  >
                    {isExpanded ? t.hideSome : `${t.showAll} ${generators.length} generators`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => (
  <section className="how-it-works section">
    <div className="container">
      <header className="section-header">
        <h2>{t.howItWorksTitle}</h2>
      </header>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">{t.step1Title}</h3>
          <p className="step-desc">{t.step1Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">{t.step2Title}</h3>
          <p className="step-desc">{t.step2Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">{t.step3Title}</h3>
          <p className="step-desc">{t.step3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Why Strikingly Section
const WhyStrikingly = () => (
  <section className="why-strikingly section">
    <div className="container">
      <header className="section-header">
        <h2>{t.whyTitle}</h2>
      </header>
      <div className="benefits-grid">
        <div className="benefit">
          <div className="benefit-icon">{Icons.zap}</div>
          <h3 className="benefit-title">{t.whyLiveTitle}</h3>
          <p className="benefit-desc">{t.whyLiveDesc}</p>
        </div>
        <div className="benefit">
          <div className="benefit-icon">{Icons.smartphone}</div>
          <h3 className="benefit-title">{t.whyMobileTitle}</h3>
          <p className="benefit-desc">{t.whyMobileDesc}</p>
        </div>
        <div className="benefit">
          <div className="benefit-icon">{Icons.creditCard}</div>
          <h3 className="benefit-title">{t.whyFreeTitle}</h3>
          <p className="benefit-desc">{t.whyFreeDesc}</p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Accordion Item
const FAQItem = ({ question, answer, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const answerId = `faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`;
  const buttonId = `faq-btn-${question.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <button 
        id={buttonId}
        className="faq-question"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={answerId}
      >
        <span>{question}</span>
        <span className="faq-icon">{Icons.chevronDown}</span>
      </button>
      <div 
        id={answerId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="faq-answer-inner">
          {answer}
        </div>
      </div>
    </div>
  );
};

// FAQ Section
const FAQ = () => (
  <section className="faq section">
    <div className="container">
      <header className="section-header">
        <h2>{t.faqTitle}</h2>
      </header>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer}
            defaultExpanded={index === 0}
          />
        ))}
      </div>
    </div>
  </section>
);

// Closing CTA Section
const ClosingCTA = () => (
  <section className="closing-cta">
    <div className="container">
      <h2>{t.closingTitle}</h2>
      <p>{t.closingSubtitle}</p>
      <a href="/s/ai_site_builder" className="btn btn--primary btn--lg">{t.closingCta}</a>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <h4 className="footer-col-title">{t.footerAbout}</h4>
          <ul className="footer-links">
            <li><a href="/about">About Strikingly</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/templates">Templates</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">{t.footerSupport}</h4>
          <ul className="footer-links">
            <li><a href="/support">Help Center</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Connect</h4>
          <ul className="footer-links">
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/instagram">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Product</h4>
          <ul className="footer-links">
            <li><a href="/s/ai_site_builder">AI Site Builder</a></li>
            <li><a href="/generators">Generators</a></li>
            <li><a href="/domains">Domains</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// ============================================
// JSON-LD BREADCRUMB DATA
// ============================================
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Strikingly",
            "item": "https://www.strikingly.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Generators"
          }
        ]
      })
    }}
  />
);

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const GeneratorsHub = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
};

export default GeneratorsHub;
