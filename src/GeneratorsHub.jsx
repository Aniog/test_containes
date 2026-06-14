import React, { useState, useEffect, useRef } from 'react';
import { strings } from './strings';
import './GeneratorsHub.css';

const t = strings.en;

// Generator data
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

const categories = [
  { id: 'websites', name: t.categoryWebsites, description: t.categoryWebsitesDesc },
  { id: 'landing-pages', name: t.categoryLandingPages, description: t.categoryLandingPagesDesc },
  { id: 'portfolios', name: t.categoryPortfolios, description: t.categoryPortfoliosDesc },
  { id: 'blogs', name: t.categoryBlogs, description: t.categoryBlogsDesc },
  { id: 'stores', name: t.categoryStores, description: t.categoryStoresDesc },
  { id: 'link-in-bio', name: t.categoryLinkInBio, description: t.categoryLinkInBioDesc },
];

const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Beautiful photo galleries, no coding required', slug: 'free-website-builder-for-photographers' },
    { name: 'One-Page Wedding Website Builder', description: 'Share your day with elegant simplicity', slug: 'one-page-wedding-website-builder' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules and booking made simple', slug: 'yoga-instructor-website-generator' },
    { name: 'Small Business Website Builder', description: 'Professional sites for local businesses', slug: 'small-business-website-builder' },
    { name: 'Personal Brand Website Generator', description: 'Build your online presence with AI', slug: 'personal-brand-website-generator' },
    { name: 'Event Website Builder', description: 'Create event pages that convert', slug: 'event-website-builder' },
    { name: 'Nonprofit Website Generator', description: 'Tell your story, accept donations', slug: 'nonprofit-website-generator' },
    { name: 'Professional Services Website Builder', description: 'Lawyers, consultants, and more', slug: 'professional-services-website-builder' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page Generator', description: 'Build buzz before you ship', slug: 'product-launch-landing-page-generator' },
    { name: 'Lead Generation Landing Page Builder', description: 'Capture leads with optimized forms', slug: 'lead-generation-landing-page-builder' },
    { name: 'Coming Soon Page Generator', description: 'Build anticipation for your launch', slug: 'coming-soon-page-generator' },
    { name: 'Free Trial Landing Page Builder', description: 'Convert visitors to trial users', slug: 'free-trial-landing-page-builder' },
    { name: 'Webinar Registration Landing Page', description: 'Fill your seats with optimized pages', slug: 'webinar-registration-landing-page' },
    { name: 'Ebook Download Landing Page Generator', description: 'Grow your email list with content', slug: 'ebook-download-landing-page-generator' },
    { name: 'App Download Landing Page Builder', description: 'Promote your mobile app effectively', slug: 'app-download-landing-page-builder' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase your design work beautifully', slug: 'portfolio-generator-for-designers' },
    { name: 'Photographer Portfolio Builder', description: 'Let your photos do the talking', slug: 'photographer-portfolio-builder' },
    { name: 'Artist Portfolio Website Generator', description: 'Art that speaks for itself', slug: 'artist-portfolio-website-generator' },
    { name: 'Writer Portfolio Builder', description: 'Display your published work online', slug: 'writer-portfolio-builder' },
    { name: 'Freelancer Portfolio Generator', description: 'Attract clients with your best work', slug: 'freelancer-portfolio-generator' },
    { name: 'Architecture Portfolio Builder', description: 'Present projects with clean layouts', slug: 'architecture-portfolio-builder' },
    { name: 'Fashion Portfolio Generator', description: 'Style your work for fashion industry', slug: 'fashion-portfolio-generator' },
    { name: 'Music Portfolio Website Builder', description: 'Share your sound with the world', slug: 'music-portfolio-website-builder' },
    { name: 'Video Producer Portfolio Generator', description: 'Showreels and case studies', slug: 'video-producer-portfolio-generator' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
    { name: 'Business Blog Generator', description: 'Content marketing made simple', slug: 'business-blog-generator' },
    { name: 'Travel Blog Builder', description: 'Document your adventures beautifully', slug: 'travel-blog-builder' },
    { name: 'Food Blog Generator', description: 'Recipes and food photography ready', slug: 'food-blog-generator' },
    { name: 'Tech Blog Builder', description: 'Share your coding journey', slug: 'tech-blog-builder' },
    { name: 'Fashion Blog Generator', description: 'Style guides and trend reports', slug: 'fashion-blog-generator' },
    { name: 'Fitness Blog Builder', description: 'Workout tips and health content', slug: 'fitness-blog-builder' },
    { name: 'Parenting Blog Generator', description: 'Connect with other parents online', slug: 'parenting-blog-generator' },
    { name: 'DIY Blog Builder', description: 'Crafts, tutorials, and how-tos', slug: 'diy-blog-builder' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', description: 'Take orders and manage inventory', slug: 'online-store-builder-for-restaurants' },
    { name: 'Handmade Goods Store Builder', description: 'Perfect for Etsy sellers going independent', slug: 'handmade-goods-store-builder' },
    { name: 'Fashion Store Generator', description: 'Runway looks and shopping carts', slug: 'fashion-store-generator' },
    { name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and downloads', slug: 'digital-products-store-builder' },
    { name: 'Subscription Box Store Generator', description: 'Monthly deliveries made easy', slug: 'subscription-box-store-generator' },
    { name: 'Art Store Builder', description: 'Prints, originals, and commissions', slug: 'art-store-builder' },
    { name: 'Pet Supplies Store Generator', description: 'Supplies for pet parents', slug: 'pet-supplies-store-generator' },
    { name: 'Sports Equipment Store Builder', description: 'Gear up your customers', slug: 'sports-equipment-store-builder' },
    { name: 'Bookstore Generator', description: 'For authors and book sellers', slug: 'bookstore-generator' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Influencer Link-in-Bio Builder', description: 'Monetize your following', slug: 'influencer-link-in-bio-builder' },
    { name: 'Creator Link-in-Bio Generator', description: 'Connect all your content in one place', slug: 'creator-link-in-bio-generator' },
    { name: 'Musician Link-in-Bio Builder', description: 'Spotify, merch, tour dates, one link', slug: 'musician-link-in-bio-builder' },
    { name: 'Artist Link-in-Bio Generator', description: 'Portfolio, shop, and social in one', slug: 'artist-link-in-bio-generator' },
    { name: 'Podcaster Link-in-Bio Builder', description: 'Link to episodes and socials', slug: 'podcaster-link-in-bio-builder' },
    { name: 'YouTuber Link-in-Bio Generator', description: 'Bio, videos, and merch store', slug: 'youtuber-link-in-bio-generator' },
    { name: 'TikToker Link-in-Bio Builder', description: 'All your content, one simple link', slug: 'tiktoker-link-in-bio-builder' },
    { name: 'Freelancer Link-in-Bio Generator', description: 'Portfolio, rates, and contact', slug: 'freelancer-link-in-bio-generator' },
    { name: 'Author Link-in-Bio Builder', description: 'Books, blog, and newsletter', slug: 'author-link-in-bio-builder' },
  ],
};

const faqData = [
  { question: t.faqQ1, answer: t.faqA1 },
  { question: t.faqQ2, answer: t.faqA2 },
  { question: t.faqQ3, answer: t.faqA3 },
  { question: t.faqQ4, answer: t.faqA4 },
  { question: t.faqQ5, answer: t.faqA5 },
  { question: t.faqQ6, answer: t.faqA6 },
];

// SVG Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const WebsiteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const LandingPageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 15l6-6 4 4 8-8" />
    <circle cx="17" cy="7" r="1" fill="#8159BB" />
  </svg>
);

const PortfolioIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15c0-4-3-7-8-7" />
    <path d="M3 21h18" />
  </svg>
);

const BlogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16v16H4z" />
    <path d="M8 8h8" />
    <path d="M8 12h8" />
    <path d="M8 16h4" />
  </svg>
);

const StoreIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="M3 9 5 3h14l2 6" />
    <path d="M12 13v4" />
    <circle cx="12" cy="19" r="1" fill="#8159BB" />
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkIcon,
};

// Hero Illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="50" y="40" width="300" height="200" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2" />
    <rect x="70" y="60" width="260" height="30" rx="4" fill="#8159BB" fillOpacity="0.2" />
    <rect x="70" y="100" width="120" height="80" rx="4" fill="#8159BB" fillOpacity="0.1" />
    <rect x="200" y="100" width="130" height="20" rx="2" fill="#C6C9CD" />
    <rect x="200" y="130" width="130" height="12" rx="2" fill="#E2E4E7" />
    <rect x="200" y="150" width="100" height="12" rx="2" fill="#E2E4E7" />
    <rect x="70" y="190" width="260" height="40" rx="4" fill="#8159BB" fillOpacity="0.15" />
    <circle cx="200" cy="210" r="10" fill="#8159BB" fillOpacity="0.5" />
    <path d="M196 210L199 213L205 207" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="80" y="70" width="40" height="12" rx="2" fill="#8159BB" fillOpacity="0.3" />
    <rect x="130" y="70" width="40" height="12" rx="2" fill="#8159BB" fillOpacity="0.3" />
    <rect x="180" y="70" width="40" height="12" rx="2" fill="#8159BB" fillOpacity="0.3" />
  </svg>
);

// Logo Component
const Logo = () => (
  <a href="/" className="logo" aria-label={t.logo}>
    <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="0" y="22" fontFamily="Josefin Sans, sans-serif" fontSize="20" fontWeight="700" fill="#2E2E2F">strikingly</text>
      <text x="95" y="22" fontFamily="Josefin Sans, sans-serif" fontSize="20" fontWeight="700" fill="#8159BB"> AI</text>
    </svg>
  </a>
);

// Top Bar Component
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <Logo />
    </div>
  </header>
);

// Breadcrumb Component
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/">{t.breadcrumbHome}</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">{" > "}</li>
        <li className="breadcrumb-item breadcrumb-current" aria-current="page">{t.breadcrumbCurrent}</li>
      </ol>
    </div>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="hero-section">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-h1">
            <span className="hero-h1-line1">{t.heroLine1}</span>
            <span className="hero-h1-line2">{t.heroLine2}</span>
          </h1>
          <p className="hero-subheadline">{t.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-big">{t.heroPrimaryCta}</a>
            <a href="#all-generators" className="btn btn-ghost">{t.heroSecondaryCta}</a>
          </div>
        </div>
        <div className="hero-illustration">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
);

// Featured Generators Section
const FeaturedSection = () => (
  <section className="featured-section">
    <div className="container">
      <h2 className="section-heading">{t.featuredHeading}</h2>
      <p className="section-subheading">{t.featuredSubheading}</p>
      <div className="generators-grid">
        {featuredGenerators.map((gen) => (
          <a key={gen.slug} href={`/generators/${gen.slug}`} className="generator-card">
            <span className="generator-name">{gen.name}</span>
            <span className="generator-description">{gen.description}</span>
            <span className="category-tag">{gen.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseCategorySection = () => (
  <section className="browse-section">
    <div className="container">
      <h2 className="section-heading">{t.browseHeading}</h2>
      <div className="category-grid">
        {categories.map((cat) => {
          const IconComponent = categoryIcons[cat.id];
          return (
            <a key={cat.id} href={`#${cat.id}`} className="category-card">
              <div className="category-icon">
                <IconComponent />
              </div>
              <span className="category-name">{cat.name}</span>
              <span className="category-desc">{cat.description}</span>
              <div className="category-arrow">
                <ArrowRightIcon />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

// Generator Card for Directory
const GeneratorCard = ({ generator, categoryId }) => {
  const IconComponent = categoryIcons[categoryId];
  return (
    <a href={`/generators/${generator.slug}`} className="directory-card">
      <div className="directory-card-icon">
        <IconComponent />
      </div>
      <span className="directory-card-name">{generator.name}</span>
      <span className="directory-card-desc">{generator.description}</span>
    </a>
  );
};

// All Generators Section
const AllGeneratorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [resultCount, setResultCount] = useState(0);
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (!query) {
      setResultCount(0);
      return;
    }

    let count = 0;
    Object.entries(allGenerators).forEach(([catId, generators]) => {
      const matches = generators.filter(g => 
        g.name.toLowerCase().includes(query) || 
        g.description.toLowerCase().includes(query) ||
        catId.toLowerCase().includes(query)
      );
      count += matches.length;
    });
    setResultCount(count);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setResultCount(0);
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const getFilteredGenerators = (catId) => {
    const generators = allGenerators[catId] || [];
    if (!searchQuery) return { visible: generators, hidden: [] };
    
    const filtered = generators.filter(g => 
      g.name.toLowerCase().includes(searchQuery) || 
      g.description.toLowerCase().includes(searchQuery)
    );
    
    return { visible: filtered, hidden: [] };
  };

  const categoryDescriptions = {
    websites: 'AI-built business and personal sites for any goal.',
    'landing-pages': 'Single-page sites built to convert visitors fast.',
    portfolios: 'Showcase your work with a clean, focused site.',
    blogs: 'Publish-ready blogs with built-in SEO basics.',
    stores: 'Sell products online with payments built in.',
    'link-in-bio': 'One link, all your places. Made for creators.',
  };

  return (
    <section className="all-generators-section" id="all-generators">
      <div className="container">
        <h2 className="section-heading">{t.allGeneratorsHeading}</h2>
        <p className="section-subheading">{t.allGeneratorsSubheading}</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input 
              ref={searchRef}
              type="search" 
              className="search-input" 
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAriaLabel}
              onChange={handleSearch}
            />
          </div>
          {searchQuery && (
            <span className="result-count">
              {t.resultCount.replace('{count}', resultCount)}
            </span>
          )}
        </div>

        {searchQuery && resultCount === 0 ? (
          <div className="no-results">
            <p>{t.noResults}</p>
            <button className="btn btn-ghost" onClick={clearSearch}>{t.clearSearch}</button>
            <p className="no-results-link">
              {t.cantFindIt} <a href="/s/ai_site_builder">{t.startWithAi}</a>
            </p>
          </div>
        ) : (
          categories.map((cat) => {
            const { visible } = getFilteredGenerators(cat.id);
            const allCats = allGenerators[cat.id] || [];
            const showToggle = allCats.length > 6;
            const isExpanded = expandedCategories[cat.id];
            const displayGenerators = showToggle && !isExpanded ? visible.slice(0, 6) : visible;
            const hasMatches = visible.length > 0;

            if (searchQuery && !hasMatches) return null;

            return (
              <div key={cat.id} className={`generator-subsection ${hasMatches || !searchQuery ? '' : 'hidden'}`} id={cat.id}>
                <h3 className="subsection-heading">{cat.name}</h3>
                <p className="subsection-desc">{categoryDescriptions[cat.id]}</p>
                <div className="directory-grid">
                  {displayGenerators.map((gen) => (
                    <GeneratorCard key={gen.slug} generator={gen} categoryId={cat.id} />
                  ))}
                </div>
                {showToggle && !searchQuery && (
                  <button 
                    className="show-all-btn"
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`${cat.id}-cards`}
                  >
                    {isExpanded ? t.showLess : t.showAll.replace('{count}', allCats.length)}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => (
  <section className="how-it-works-section">
    <div className="container">
      <h2 className="section-heading">{t.howItWorksHeading}</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">{t.howItWorksStep1Title}</h3>
          <p className="step-desc">{t.howItWorksStep1Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">{t.howItWorksStep2Title}</h3>
          <p className="step-desc">{t.howItWorksStep2Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">{t.howItWorksStep3Title}</h3>
          <p className="step-desc">{t.howItWorksStep3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Why Strikingly Section
const WhySection = () => (
  <section className="why-section">
    <div className="container">
      <h2 className="section-heading">{t.whyHeading}</h2>
      <div className="why-grid">
        <div className="why-item">
          <div className="why-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3 className="why-title">{t.whyLiveTitle}</h3>
          <p className="why-desc">{t.whyLiveDesc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          </div>
          <h3 className="why-title">{t.whyMobileTitle}</h3>
          <p className="why-desc">{t.whyMobileDesc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h3 className="why-title">{t.whyFreeTitle}</h3>
          <p className="why-desc">{t.whyFreeDesc}</p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-heading">{t.faqHeading}</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <ChevronDownIcon />
              </button>
              <div 
                id={`faq-answer-${index}`} 
                className="faq-answer"
                hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Closing CTA Section
const ClosingSection = () => (
  <section className="closing-section">
    <div className="container">
      <h2 className="closing-heading">{t.closingHeading}</h2>
      <p className="closing-sub">{t.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-big">{t.closingCta}</a>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo />
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/support">Support</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/generators">Generators</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// Main Component
const GeneratorsHub = () => {
  return (
    <div className="generators-hub">
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseCategorySection />
        <AllGeneratorsSection />
        <HowItWorksSection />
        <WhySection />
        <FaqSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default GeneratorsHub;
