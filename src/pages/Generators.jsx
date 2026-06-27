import { useState, useRef } from 'react';
import { strings } from '../strings';
import { Search, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import './Generators.css';

const s = strings.en;

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
  { id: 'websites', name: s.categoryWebsites, description: s.categoryWebsitesDesc, icon: 'globe' },
  { id: 'landing-pages', name: s.categoryLandingPages, description: s.categoryLandingPagesDesc, icon: 'target' },
  { id: 'portfolios', name: s.categoryPortfolios, description: s.categoryPortfoliosDesc, icon: 'image' },
  { id: 'blogs', name: s.categoryBlogs, description: s.categoryBlogsDesc, icon: 'file-text' },
  { id: 'stores', name: s.categoryStores, description: s.categoryStoresDesc, icon: 'shopping-cart' },
  { id: 'link-in-bio', name: s.categoryLinkInBio, description: s.categoryLinkInBioDesc, icon: 'link' },
];

const generatorSubsections = {
  websites: {
    title: s.categoryWebsites,
    description: s.websitesDesc,
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase photos beautifully', slug: 'free-website-builder-for-photographers' },
      { name: 'Yoga Instructor Website Builder', description: 'Share classes and bookings online', slug: 'yoga-instructor-website-builder' },
      { name: 'Personal Website Generator', description: 'Your corner of the internet', slug: 'personal-website-generator' },
      { name: 'Business Website Builder', description: 'Professional sites for any industry', slug: 'business-website-builder' },
      { name: 'No-Code Website Builder', description: 'Build without writing a single line', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Maker', description: 'Stunning designs, effortless creation', slug: 'beautiful-website-maker' },
    ]
  },
  'landing-pages': {
    title: s.categoryLandingPages,
    description: s.landingPagesDesc,
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', description: 'Launch fast, spend nothing', slug: 'free-landing-page-generator' },
      { name: 'Product Landing Page Builder', description: 'Showcase your product beautifully', slug: 'product-landing-page-builder' },
      { name: 'Event Landing Page Creator', description: 'Promote events and gather RSVPs', slug: 'event-landing-page-creator' },
      { name: 'Lead Capture Page Builder', description: 'Convert visitors into leads', slug: 'lead-capture-page-builder' },
      { name: 'Coming Soon Page Maker', description: 'Build anticipation for your launch', slug: 'coming-soon-page-maker' },
      { name: 'Sales Page Generator', description: 'Compelling pages that sell', slug: 'sales-page-generator' },
      { name: 'ClickFunnels Alternative', description: 'Funnel builder, Strikingly style', slug: 'clickfunnels-alternative' },
    ]
  },
  portfolios: {
    title: s.categoryPortfolios,
    description: s.portfoliosDesc,
    items: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', description: 'Showcase creative work beautifully', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder', description: 'Photo galleries that impress', slug: 'photography-portfolio-builder' },
      { name: 'Artist Portfolio Website', description: 'Paintings, sculptures, digital art', slug: 'artist-portfolio-website' },
      { name: 'Freelancer Portfolio Maker', description: 'Win clients with your portfolio', slug: 'freelancer-portfolio-maker' },
      { name: 'Developer Portfolio Generator', description: 'Showcase your code and projects', slug: 'developer-portfolio-generator' },
      { name: 'Writer Portfolio Builder', description: 'Published work, testimonials, contact', slug: 'writer-portfolio-builder' },
      { name: 'Model Portfolio Website', description: 'Fashion and editorial portfolios', slug: 'model-portfolio-website' },
      { name: 'Architecture Portfolio Maker', description: 'Projects, renders, case studies', slug: 'architecture-portfolio-maker' },
      { name: 'Music Producer Portfolio', description: 'Beats, tracks, collaborations', slug: 'music-producer-portfolio' },
    ]
  },
  blogs: {
    title: s.categoryBlogs,
    description: s.blogsDesc,
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'Free Blog Builder', description: 'Start writing, no costs upfront', slug: 'free-blog-builder' },
      { name: 'Personal Blog Generator', description: 'Share your thoughts with the world', slug: 'personal-blog-generator' },
      { name: 'Travel Blog Maker', description: 'Stories and photos from your journeys', slug: 'travel-blog-maker' },
      { name: 'Food Blog Builder', description: 'Recipes, reviews, restaurant guides', slug: 'food-blog-builder' },
      { name: 'Fashion Blog Generator', description: 'Style, trends, personal expression', slug: 'fashion-blog-generator' },
      { name: 'Tech Blog Creator', description: 'Tutorials, reviews, news', slug: 'tech-blog-creator' },
      { name: 'Fitness Blog Maker', description: 'Workouts, nutrition, motivation', slug: 'fitness-blog-maker' },
      { name: 'DIY Blog Generator', description: 'Projects, tutorials, inspiration', slug: 'diy-blog-generator' },
      { name: 'Book Review Blog Builder', description: 'Reviews, ratings, reading lists', slug: 'book-review-blog-builder' },
    ]
  },
  stores: {
    title: s.categoryStores,
    description: s.storesDesc,
    items: [
      { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Free E-commerce Builder', description: 'Launch your shop at no cost', slug: 'free-e-commerce-builder' },
      { name: 'Online Store Builder for Restaurants', description: 'Menu, orders, delivery integrated', slug: 'online-store-builder-for-restaurants' },
      { name: 'Handmade Goods Store Builder', description: 'Crafts, jewelry, artisan products', slug: 'handmade-goods-store-builder' },
      { name: 'Fashion Store Generator', description: 'Clothing, accessories, lookbooks', slug: 'fashion-store-generator' },
      { name: 'Digital Products Store', description: 'Ebooks, courses, downloads', slug: 'digital-products-store' },
      { name: 'Dropshipping Store Builder', description: 'Start selling without inventory', slug: 'dropshipping-store-builder' },
      { name: 'Art Store Generator', description: 'Prints, originals, commissions', slug: 'art-store-generator' },
      { name: 'Pet Products Store Builder', description: 'Supplies, toys, accessories', slug: 'pet-products-store-builder' },
      { name: 'No-Code E-commerce Builder', description: 'Build your store without devs', slug: 'no-code-e-commerce-builder' },
    ]
  },
  'link-in-bio': {
    title: s.categoryLinkInBio,
    description: s.linkInBioDesc,
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Linktree Alternative', description: 'More customization, same simplicity', slug: 'linktree-alternative' },
      { name: 'Bio Link Builder', description: 'Curate your online presence', slug: 'bio-link-builder' },
      { name: 'Social Media Link in Bio', description: 'Connect all your platforms', slug: 'social-media-link-in-bio' },
      { name: 'Creator Link Generator', description: 'For influencers and creators', slug: 'creator-link-generator' },
      { name: 'Link in Bio for Instagram', description: 'Turn followers into website visitors', slug: 'link-in-bio-for-instagram' },
      { name: 'Link in Bio for TikTok', description: 'Monetize your TikTok audience', slug: 'link-in-bio-for-tiktok' },
      { name: 'Link in Bio for YouTube', description: 'Connect your videos to your brand', slug: 'link-in-bio-for-youtube' },
      { name: 'Link in Bio for Twitch', description: 'Streamers, schedule, socials', slug: 'link-in-bio-for-twitch' },
      { name: 'Link in Bio for Podcasters', description: 'Episodes, socials, newsletter', slug: 'link-in-bio-for-podcasters' },
    ]
  }
};

const faqData = [
  { question: s.faq1Q, answer: s.faq1A },
  { question: s.faq2Q, answer: s.faq2A },
  { question: s.faq3Q, answer: s.faq3A },
  { question: s.faq4Q, answer: s.faq4A },
  { question: s.faq5Q, answer: s.faq5A },
  { question: s.faq6Q, answer: s.faq6A },
];

// Icon components
const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const FileTextIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const iconMap = {
  globe: GlobeIcon,
  target: TargetIcon,
  image: ImageIcon,
  'file-text': FileTextIcon,
  'shopping-cart': ShoppingCartIcon,
  link: LinkIcon,
};

// Category illustration wrapper
const CategoryIllustration = ({ category }) => {
  const Icon = iconMap[category.icon] || GlobeIcon;
  return (
    <div className="category-illustration">
      <Icon />
    </div>
  );
};

// Website mockup illustration for hero
const WebsiteIllustration = () => (
  <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="hero-illustration">
    <rect x="30" y="30" width="340" height="220" rx="8" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
    <rect x="50" y="50" width="300" height="35" rx="4" fill="#8159BB" fillOpacity="0.2"/>
    <rect x="50" y="95" width="140" height="105" rx="4" fill="#8159BB" fillOpacity="0.15"/>
    <rect x="200" y="95" width="150" height="20" rx="2" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="200" y="125" width="110" height="12" rx="2" fill="#8159BB" fillOpacity="0.2"/>
    <rect x="200" y="145" width="130" height="12" rx="2" fill="#8159BB" fillOpacity="0.2"/>
    <rect x="200" y="165" width="90" height="35" rx="4" fill="url(#heroGradient)"/>
    <rect x="50" y="210" width="300" height="30" rx="4" fill="#8159BB" fillOpacity="0.1"/>
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

// Logo component
const StrikinglyLogo = () => (
  <a href="/" className="logo" aria-label={s.logoAlt}>
    <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <text x="0" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="20" fill="#4B5056">STRIKINGLY</text>
      <text x="105" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="20" fill="#8159BB"> AI</text>
    </svg>
  </a>
);

// Top Bar
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <StrikinglyLogo />
    </div>
  </header>
);

// Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb-list">
        <li><a href="/">{s.homeLink}</a></li>
        <li aria-hidden="true"><span className="separator">&gt;</span></li>
        <li><span aria-current="page">{s.currentPage}</span></li>
      </ol>
    </div>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="hero-section section-large">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>
            <span className="hero-h1-line1">{s.heroH1Line1}</span>
            <br />
            <span className="ai-gradient-text">{s.heroH1Line2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-cta">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-hero">{s.primaryCta}</a>
            <a href="#all-generators" className="btn btn-secondary btn-hero">{s.secondaryCta}</a>
          </div>
        </div>
        <div className="hero-illustration-wrapper">
          <WebsiteIllustration />
        </div>
      </div>
    </div>
  </section>
);

// Featured Generators
const FeaturedGenerators = () => (
  <section className="featured-section section">
    <div className="container">
      <h2>{s.featuredHeading}</h2>
      <p className="section-subheading">{s.featuredSubheading}</p>
      <div className="grid-3">
        {featuredGenerators.map((gen) => (
          <a key={gen.slug} href={`/generators/${gen.slug}`} className="card featured-card card-link">
            <span className="tag tag-ghost">{gen.category}</span>
            <h3 className="card-title">{gen.name}</h3>
            <p className="card-description">{gen.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category
const BrowseByCategory = () => (
  <section className="categories-section section bg-light">
    <div className="container">
      <h2>{s.browseHeading}</h2>
      <div className="grid-3">
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="card category-card card-link">
            <CategoryIllustration category={cat} />
            <h3 className="category-name">{cat.name}</h3>
            <p className="category-desc">{cat.description}</p>
            <ArrowRight className="category-arrow" size={20} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

// All Generators with Search
const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter generators based on search
  const filterGenerators = (items) => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  };

  // Count matching generators
  const getMatchCount = () => {
    if (!searchQuery.trim()) return null;
    let count = 0;
    Object.values(generatorSubsections).forEach(section => {
      count += filterGenerators(section.items).length;
    });
    return count;
  };

  // Check if section has matches
  const sectionHasMatches = (section) => {
    if (!searchQuery.trim()) return true;
    return filterGenerators(section.items).length > 0;
  };

  const matchCount = getMatchCount();

  return (
    <section id="all-generators" className="all-generators-section section">
      <div className="container">
        <h2>{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>
        
        {/* Search */}
        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              onChange={handleSearch}
            />
          </div>
          {matchCount !== null && (
            <span className="search-results-count">
              {matchCount} {s.generators} {s.match}
            </span>
          )}
        </div>

        {/* No results state */}
        {searchQuery.trim() && matchCount === 0 && (
          <div className="no-results">
            <p>{s.noResults}</p>
            <button className="btn btn-secondary" onClick={clearSearch}>{s.clearSearch}</button>
            <p className="no-results-link">
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startAiBuilder}</a>
            </p>
          </div>
        )}

        {/* Generator subsections */}
        <div className="generator-subsections">
          {Object.entries(generatorSubsections).map(([id, section]) => {
            const filteredItems = filterGenerators(section.items);
            const isExpanded = expandedSections[id];
            const hasExtraItems = section.items.length > 6;
            const visibleItems = (isExpanded || !hasExtraItems) ? filteredItems : filteredItems.slice(0, 6);
            const hiddenCount = filteredItems.length - 6;

            if (searchQuery.trim() && !sectionHasMatches(section)) {
              return null;
            }

            return (
              <div key={id} id={id} className="generator-subsection">
                <h3>{section.title}</h3>
                <p className="subsection-description">{section.description}</p>
                <div className="generator-grid">
                  {visibleItems.map((item) => (
                    <a key={item.slug} href={`/generators/${item.slug}`} className="card generator-card card-link">
                      <h4 className="generator-name">{item.name}</h4>
                      <p className="generator-description">{item.description}</p>
                    </a>
                  ))}
                </div>
                {hasExtraItems && !searchQuery.trim() && (
                  <button
                    className="btn btn-secondary show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`${id}-extra-items`}
                    onClick={() => toggleSection(id)}
                  >
                    {isExpanded 
                      ? `${s.showAll} ${section.items.length} ${s.generators}` 
                      : `${s.showAll} ${hiddenCount} more`}
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => (
  <section className="how-it-works-section section bg-light">
    <div className="container">
      <h2>{s.howItWorksHeading}</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3>{s.step1Title}</h3>
          <p>{s.step1Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>{s.step2Title}</h3>
          <p>{s.step2Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>{s.step3Title}</h3>
          <p>{s.step3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Why Strikingly
const WhyStrikingly = () => (
  <section className="why-section section">
    <div className="container">
      <h2>{s.whyHeading}</h2>
      <div className="grid-3">
        <div className="why-card">
          <div className="why-icon ai-gradient">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <h3>{s.why1Title}</h3>
          <p>{s.why1Desc}</p>
        </div>
        <div className="why-card">
          <div className="why-icon ai-gradient">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          </div>
          <h3>{s.why2Title}</h3>
          <p>{s.why2Desc}</p>
        </div>
        <div className="why-card">
          <div className="why-icon ai-gradient">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h3>{s.why3Title}</h3>
          <p>{s.why3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Accordion
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section bg-light">
      <div className="container">
        <h2>{s.faqHeading}</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'is-open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Closing CTA
const ClosingCTA = () => (
  <section className="closing-cta-section section-large">
    <div className="container">
      <div className="closing-cta-content">
        <h2>{s.closingHeading}</h2>
        <p>{s.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{s.closingCta}</a>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>{s.footerProducts}</h4>
          <ul>
            <li><a href="/templates">{s.footerTemplates}</a></li>
            <li><a href="/pricing">{s.footerPricing}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{s.footerCompany}</h4>
          <ul>
            <li><a href="/about">{s.footerAbout}</a></li>
            <li><a href="/blog">{s.footerBlog}</a></li>
            <li><a href="/support">{s.footerSupport}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{s.footerResources}</h4>
          <ul>
            <li><a href="/support">{s.support}</a></li>
            <li><a href="/blog">{s.footerBlog}</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>{s.footerLegal}</h4>
          <ul>
            <li><a href="/terms">{s.footerTerms}</a></li>
            <li><a href="/privacy">{s.footerPrivacy}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <StrikinglyLogo />
        <p>{s.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// Main Generators Page
const Generators = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
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

export default Generators;
