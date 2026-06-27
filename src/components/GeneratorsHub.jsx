import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { strings } from '../strings';

// Utility function to convert name to slug
const toSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// SVG Icons
const LogoIcon = () => (
  <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="28" height="28" rx="4" fill="#8159BB"/>
    <path d="M8 8H20V10.5H12V13H18V15.5H12V20H8V8Z" fill="white"/>
    <text x="36" y="20" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="18" fill="#4B5056">STRIKINGLY</text>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="1.5"/>
    <path d="M14 14L18 18" stroke="#636972" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <path d="M6 18H42" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="11" cy="14" r="1.5" fill="#8159BB"/>
    <circle cx="16" cy="14" r="1.5" fill="#8159BB"/>
    <circle cx="21" cy="14" r="1.5" fill="#8159BB"/>
    <rect x="12" y="24" width="24" height="3" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="12" y="30" width="16" height="3" rx="1" fill="#8159BB" fillOpacity="0.3"/>
  </svg>
);

const LandingPageIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="6" width="32" height="36" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <rect x="12" y="12" width="24" height="8" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="12" y="24" width="10" height="10" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="26" y="24" width="10" height="10" rx="1" fill="#8159BB" fillOpacity="0.3"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="8" width="36" height="32" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <rect x="10" y="12" width="14" height="10" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="28" y="12" width="10" height="6" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="28" y="22" width="10" height="6" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="10" y="26" width="28" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="10" y="32" width="20" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
  </svg>
);

const BlogIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="6" width="32" height="36" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <rect x="12" y="12" width="24" height="4" rx="1" fill="#8159BB" fillOpacity="0.5"/>
    <rect x="12" y="20" width="24" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="12" y="25" width="20" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="12" y="30" width="22" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="12" y="35" width="18" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
  </svg>
);

const StoreIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 16L12 8H36L40 16V40H8V16Z" stroke="#8159BB" strokeWidth="2"/>
    <rect x="18" y="24" width="12" height="16" stroke="#8159BB" strokeWidth="2"/>
    <path d="M16 16H32" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="24" cy="32" r="2" fill="#8159BB"/>
  </svg>
);

const LinkInBioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="24" cy="24" r="16" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="24" cy="16" r="4" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="16" y="24" width="16" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="16" y="30" width="16" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.3"/>
    <path d="M24 4V8M24 40V44M4 24H8M40 24H44" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 4L8 18H16L14 28L24 14H16L18 4Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="4" width="16" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="16" cy="25" r="1.5" fill="#8159BB"/>
    <rect x="11" y="8" width="10" height="6" rx="1" fill="#8159BB" fillOpacity="0.3"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="8" width="24" height="16" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <rect x="4" y="12" width="24" height="4" fill="#8159BB"/>
    <rect x="8" y="20" width="8" height="2" rx="1" fill="#8159BB" fillOpacity="0.5"/>
  </svg>
);

// Generator data
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog' },
];

const categories = [
  { id: 'websites', name: strings.websites, description: strings.websitesDesc, Icon: WebsiteIcon, hash: '#websites' },
  { id: 'landing-pages', name: strings.landingPages, description: strings.landingPagesDesc, Icon: LandingPageIcon, hash: '#landing-pages' },
  { id: 'portfolios', name: strings.portfolios, description: strings.portfoliosDesc, Icon: PortfolioIcon, hash: '#portfolios' },
  { id: 'blogs', name: strings.blogs, description: strings.blogsDesc, Icon: BlogIcon, hash: '#blogs' },
  { id: 'stores', name: strings.stores, description: strings.storesDesc, Icon: StoreIcon, hash: '#stores' },
  { id: 'link-in-bio', name: strings.linkInBio, description: strings.linkInBioDesc, Icon: LinkInBioIcon, hash: '#link-in-bio' },
];

const categoryGenerators = {
  'websites': [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
    { name: 'Free Website Builder for Photographers', description: 'Portfolio-ready sites for visual artists' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules and booking built in' },
    { name: 'Real Estate Agent Website Builder', description: 'Property listings and contact forms' },
    { name: 'Freelancer Website Generator', description: 'Services, portfolio, and rates in one' },
    { name: 'Small Business Website Builder', description: 'Professional presence without the agency' },
    { name: 'Personal Brand Website Generator', description: 'Build your online identity from scratch' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
    { name: 'Product Launch Landing Page Generator', description: 'Hype up your next release' },
    { name: 'Lead Generation Landing Page Builder', description: 'Capture leads without a full site' },
    { name: 'Event Registration Landing Page', description: 'One page, all the signups' },
    { name: 'Webinar Registration Landing Page', description: 'Get attendees into your virtual room' },
    { name: 'Free Trial Landing Page Generator', description: 'Convert visitors to trial users fast' },
    { name: 'Coming Soon Landing Page Builder', description: 'Build buzz before you launch' },
    { name: 'Contest Entry Landing Page', description: 'Grow your email list with prizes' },
  ],
  'portfolios': [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase your visual work beautifully' },
    { name: 'Photographer Portfolio Builder', description: 'Let your photos take center stage' },
    { name: 'Artist Portfolio Website Generator', description: 'Paintings, sculpture, mixed media' },
    { name: 'Writer Portfolio Builder', description: 'Writing samples and published work' },
    { name: 'Developer Portfolio Generator', description: 'Code samples and project highlights' },
    { name: 'Architecture Portfolio Builder', description: 'Renderings and project case studies' },
    { name: 'Music Portfolio Website Generator', description: 'Audio, videos, and tour dates' },
    { name: 'Fashion Portfolio Builder', description: 'Lookbooks and designer collections' },
  ],
  'blogs': [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
    { name: 'Travel Blog Generator', description: 'Stories and photos from the road' },
    { name: 'Food Blog Builder', description: 'Recipes, reviews, and restaurant guides' },
    { name: 'Personal Blog Generator', description: 'Share your thoughts with the world' },
    { name: 'Tech Blog Builder', description: 'Tutorials and industry insights' },
    { name: 'Fitness Blog Generator', description: 'Workouts, nutrition, and motivation' },
    { name: 'DIY Blog Builder', description: 'Projects, tutorials, and how-tos' },
    { name: 'Parenting Blog Generator', description: 'Stories, tips, and community' },
  ],
  'stores': [
    { name: 'Online Store Builder', description: 'Start selling without writing code' },
    { name: 'Online Store Builder for Restaurants', description: 'Menu and ordering for food businesses' },
    { name: 'Handmade Goods Store Builder', description: 'Artisan products and crafts' },
    { name: 'Fashion Store Generator', description: 'Clothing and accessory shops' },
    { name: 'Digital Products Store Builder', description: 'Ebooks, courses, and downloads' },
    { name: 'Print-on-Demand Store Generator', description: 'Custom merchandise without inventory' },
    { name: 'Subscription Box Store Builder', description: 'Recurring products and membership' },
    { name: 'Local Product Store Generator', description: 'Sell nearby with local delivery' },
    { name: 'Beauty Products Store Builder', description: 'Skincare and cosmetics shops' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
    { name: 'Instagram Link-in-Bio Builder', description: 'All your content, one link' },
    { name: 'TikTok Bio Link Generator', description: 'Perfect for creators on the rise' },
    { name: 'YouTube Creator Bio Link Builder', description: 'Connect fans to all your content' },
    { name: 'Podcaster Link-in-Bio Generator', description: 'Episodes, socials, and merch' },
    { name: 'Artist Link-in-Bio Builder', description: 'Music, shows, and socials unified' },
    { name: 'Influencer Bio Link Generator', description: 'Brand deals and partnerships hub' },
    { name: 'Nonprofit Link-in-Bio Builder', description: 'Donate, volunteer, and follow' },
  ],
};

const faqData = [
  { question: strings.faq1Question, answer: strings.faq1Answer },
  { question: strings.faq2Question, answer: strings.faq2Answer },
  { question: strings.faq3Question, answer: strings.faq3Answer },
  { question: strings.faq4Question, answer: strings.faq4Answer },
  { question: strings.faq5Question, answer: strings.faq5Answer },
  { question: strings.faq6Question, answer: strings.faq6Answer },
];

// Category icons map for directory sections
const categoryIconMap = {
  'websites': WebsiteIcon,
  'landing-pages': LandingPageIcon,
  'portfolios': PortfolioIcon,
  'blogs': BlogIcon,
  'stores': StoreIcon,
  'link-in-bio': LinkInBioIcon,
};

// Section descriptions for category subsections
const sectionDescriptions = {
  'websites': strings.websitesSectionDesc,
  'landing-pages': strings.landingPagesSectionDesc,
  'portfolios': strings.portfoliosSectionDesc,
  'blogs': strings.blogsSectionDesc,
  'stores': strings.storesSectionDesc,
  'link-in-bio': strings.linkInBioSectionDesc,
};

// TopBar Component
const TopBar = () => (
  <header className="top-bar">
    <a href="/" className="logo-link" aria-label="Strikingly AI Home">
      <LogoIcon />
    </a>
  </header>
);

// Breadcrumb Component
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/">{strings.homeLink}</a>
      </li>
      <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
      <li className="breadcrumb-item breadcrumb-current">{strings.currentPage}</li>
    </ol>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-h1">
          <span className="hero-h1-line1">{strings.heroLine1}</span>
          <span className="hero-h1-line2">{strings.heroLine2}</span>
        </h1>
        <p className="hero-subheadline">{strings.heroSubheadline}</p>
        <div className="hero-ctas">
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {strings.ctaPrimary}
          </a>
          <a href="#all-generators" className="btn btn-ghost">
            {strings.ctaSecondary}
          </a>
        </div>
      </div>
      <div className="hero-illustration">
        <svg width="400" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7671FF" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.15"/>
            </linearGradient>
          </defs>
          <rect x="40" y="30" width="320" height="260" rx="8" fill="url(#heroGradient)" stroke="#8159BB" strokeWidth="2"/>
          <rect x="60" y="50" width="280" height="30" rx="4" fill="#8159BB" fillOpacity="0.2"/>
          <circle cx="80" cy="65" r="6" fill="#8159BB"/>
          <circle cx="100" cy="65" r="6" fill="#8159BB" fillOpacity="0.6"/>
          <circle cx="120" cy="65" r="6" fill="#8159BB" fillOpacity="0.3"/>
          <rect x="60" y="100" width="120" height="80" rx="4" fill="#8159BB" fillOpacity="0.15"/>
          <rect x="200" y="100" width="140" height="35" rx="4" fill="#8159BB" fillOpacity="0.1"/>
          <rect x="200" y="145" width="140" height="35" rx="4" fill="#8159BB" fillOpacity="0.1"/>
          <rect x="60" y="200" width="280" height="70" rx="4" fill="#8159BB" fillOpacity="0.08"/>
          <path d="M200 235L200 280" stroke="#7671FF" strokeWidth="3" strokeDasharray="6 4"/>
          <circle cx="200" cy="235" r="8" fill="#7671FF"/>
          <circle cx="200" cy="280" r="8" fill="#CB0C9F"/>
        </svg>
      </div>
    </div>
  </section>
);

// Featured Generators Section
const FeaturedSection = () => (
  <section className="featured-section">
    <div className="section-container">
      <h2 className="section-h2">{strings.featuredHeading}</h2>
      <p className="section-subheading">{strings.featuredSubheading}</p>
      <div className="generator-grid">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.name}
            href={`/generators/${toSlug(gen.name)}`}
            className="generator-card"
          >
            <span className="generator-tag">{gen.category}</span>
            <h3 className="generator-name">{gen.name}</h3>
            <p className="generator-description">{gen.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseCategorySection = () => (
  <section className="category-section">
    <div className="section-container">
      <h2 className="section-h2">{strings.categoryHeading}</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators${cat.hash}`}
            className="category-card"
          >
            <div className="category-icon">
              <cat.Icon />
            </div>
            <h3 className="category-name">{cat.name}</h3>
            <p className="category-description">{cat.description}</p>
            <div className="category-arrow">
              <ArrowRightIcon />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Generator Directory Card
const GeneratorCard = ({ name, description, category }) => {
  const Icon = categoryIconMap[category];
  return (
    <a href={`/generators/${toSlug(name)}`} className="directory-card">
      {Icon && (
        <div className="directory-card-icon">
          <Icon />
        </div>
      )}
      <h4 className="directory-card-name">{name}</h4>
      <p className="directory-card-description">{description}</p>
    </a>
  );
};

// Generator Subsection with Show All
const GeneratorSubsection = ({ categoryId, generators }) => {
  const Icon = categoryIconMap[categoryId];
  const category = categories.find(c => c.id === categoryId);
  const [showAll, setShowAll] = useState(false);
  const visibleCount = 6;
  const hasMore = generators.length > visibleCount;
  const displayedGenerators = showAll ? generators : generators.slice(0, visibleCount);
  
  return (
    <div className="generator-subsection" data-category={categoryId}>
      <div className="subsection-header">
        {Icon && (
          <div className="subsection-icon">
            <Icon />
          </div>
        )}
        <div className="subsection-titles">
          <h3 className="subsection-h3" id={categoryId}>{category?.name || categoryId}</h3>
          <p className="subsection-description">{sectionDescriptions[categoryId]}</p>
        </div>
      </div>
      <div className="subsection-grid">
        {displayedGenerators.map((gen, index) => (
          <GeneratorCard
            key={`${gen.name}-${index}`}
            name={gen.name}
            description={gen.description}
            category={categoryId}
          />
        ))}
      </div>
      {hasMore && (
        <div className="show-all-container">
          <button
            type="button"
            className="show-all-btn"
            aria-expanded={showAll}
            aria-controls={`${categoryId}-cards`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll 
              ? strings.showLess.replace('{count}', generators.length)
              : strings.showAll.replace('{count}', generators.length)
            }
          </button>
        </div>
      )}
    </div>
  );
};

// All Generators Directory Section
const AllGeneratorsSection = () => {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCount, setFilteredCount] = useState(0);
  
  useEffect(() => {
    // Initialize search functionality
    const searchInput = searchInputRef.current;
    if (!searchInput) return;
    
    const handleSearch = () => {
      const term = searchInput.value.toLowerCase();
      setSearchTerm(term);
      
      let totalMatches = 0;
      const subsections = document.querySelectorAll('.generator-subsection');
      
      subsections.forEach((subsection) => {
        const cards = subsection.querySelectorAll('.directory-card');
        let subsectionMatches = 0;
        
        cards.forEach((card) => {
          const name = card.querySelector('.directory-card-name')?.textContent.toLowerCase() || '';
          const desc = card.querySelector('.directory-card-description')?.textContent.toLowerCase() || '';
          const matches = name.includes(term) || desc.includes(term);
          
          card.style.display = matches || !term ? '' : 'none';
          if (matches) {
            subsectionMatches++;
            totalMatches++;
          }
        });
        
        // Show/hide subsection based on matches
        subsection.style.display = subsectionMatches > 0 || !term ? '' : 'none';
      });
      
      setFilteredCount(totalMatches);
      
      // Show empty state
      const emptyState = document.querySelector('.search-empty-state');
      if (emptyState) {
        emptyState.style.display = term && totalMatches === 0 ? '' : 'none';
      }
    };
    
    searchInput.addEventListener('input', handleSearch);
    return () => searchInput.removeEventListener('input', handleSearch);
  }, []);
  
  return (
    <section className="all-generators-section" id="all-generators">
      <div className="section-container">
        <h2 className="section-h2">{strings.allGeneratorsHeading}</h2>
        <p className="section-subheading">{strings.allGeneratorsSubheading}</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon"><SearchIcon /></span>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
            />
          </div>
          {searchTerm && (
            <span className="search-results-count">
              {strings.resultsCount.replace('{count}', filteredCount)}
            </span>
          )}
        </div>
        
        <div className="search-empty-state" style={{ display: 'none' }}>
          <p className="empty-state-text">{strings.noResults}</p>
          <button type="button" className="btn btn-ghost" onClick={() => {
            if (searchInputRef.current) searchInputRef.current.value = '';
            searchInputRef.current?.dispatchEvent(new Event('input'));
          }}>
            {strings.clearSearch}
          </button>
          <p className="empty-state-link">
            {strings.cantFindIt} <a href="/s/ai_site_builder">{strings.startWithAi}</a>
          </p>
        </div>
        
        {Object.entries(categoryGenerators).map(([categoryId, generators]) => (
          <GeneratorSubsection
            key={categoryId}
            categoryId={categoryId}
            generators={generators}
          />
        ))}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => (
  <section className="how-it-works-section">
    <div className="section-container">
      <h2 className="section-h2">{strings.howItWorksHeading}</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">{strings.step1Title}</h3>
          <p className="step-description">{strings.step1Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">{strings.step2Title}</h3>
          <p className="step-description">{strings.step2Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">{strings.step3Title}</h3>
          <p className="step-description">{strings.step3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Why Strikingly Section
const WhySection = () => (
  <section className="why-section">
    <div className="section-container">
      <h2 className="section-h2">{strings.whyHeading}</h2>
      <div className="why-grid">
        <div className="why-item">
          <div className="why-icon"><LightningIcon /></div>
          <h3 className="why-title">{strings.why1Title}</h3>
          <p className="why-description">{strings.why1Desc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon"><MobileIcon /></div>
          <h3 className="why-title">{strings.why2Title}</h3>
          <p className="why-description">{strings.why2Desc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon"><CreditCardIcon /></div>
          <h3 className="why-title">{strings.why3Title}</h3>
          <p className="why-description">{strings.why3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <section className="faq-section">
      <div className="section-container">
        <h2 className="section-h2">{strings.faqHeading}</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className={`faq-chevron ${openIndex === index ? 'open' : ''}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                role="region"
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
const ClosingCtaSection = () => (
  <section className="closing-cta-section">
    <div className="section-container closing-cta-container">
      <h2 className="closing-cta-heading">{strings.closingHeading}</h2>
      <p className="closing-cta-sub">{strings.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
        {strings.closingCta}
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <LogoIcon />
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4 className="footer-heading">{strings.footerProducts}</h4>
          <ul className="footer-links">
            <li><a href="/templates">Templates</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/generators">AI Generators</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{strings.footerCompany}</h4>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{strings.footerResources}</h4>
          <ul className="footer-links">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/webinars">Webinars</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{strings.footerLegal}</h4>
          <ul className="footer-links">
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">{strings.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// Main GeneratorsHub Component
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
        <ClosingCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default GeneratorsHub;