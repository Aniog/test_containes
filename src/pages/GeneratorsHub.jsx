import React, { useState, useEffect, useRef } from 'react';
import { strings } from '../strings';
import { generators, featuredGenerators } from '../data/generators';
import './GeneratorsHub.css';

// SVG Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const WebsiteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const LandingPageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="13" height="8" x="7" y="7" rx="1" />
    <path d="M12 15h7" />
    <path d="M12 11v7" />
    <path d="M5 21h14" />
  </svg>
);

const PortfolioIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="m7 8 2 2-2 2" />
    <path d="M11 8c1-1 2-1 2 0" />
  </svg>
);

const BlogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
);

const StoreIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
    <path d="M22 21H7" />
    <path d="m5 11 9 9" />
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const categoryIcons = {
  websites: WebsiteIcon,
  landingPages: LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  linkInBio: LinkIcon
};

const CategoryThumbnail = ({ category }) => {
  const IconComponent = categoryIcons[category] || WebsiteIcon;
  return (
    <div className="category-thumbnail">
      <IconComponent />
    </div>
  );
};

// Top Bar
const TopBar = () => (
  <header className="top-bar">
    <a href="/" className="logo">{strings.en.logo}</a>
  </header>
);

// Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li><a href="/">{strings.en.breadcrumbHome}</a></li>
      <li aria-current="page">{strings.en.breadcrumbCurrent}</li>
    </ol>
  </nav>
);

// Hero Section
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">
        <span className="hero-title-line1">{strings.en.heroLine1}</span>
        <span className="hero-title-line2">{strings.en.heroLine2}</span>
      </h1>
      <p className="hero-subheadline">{strings.en.heroSubheadline}</p>
      <div className="hero-ctas">
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.ctaPrimary}</a>
        <a href="#all-generators" className="btn btn-ghost btn-large">{strings.en.ctaSecondary}</a>
      </div>
    </div>
    <div className="hero-illustration">
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
        <rect x="40" y="40" width="320" height="220" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
        <rect x="60" y="60" width="120" height="80" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
        <rect x="60" y="150" width="80" height="12" rx="2" fill="#E2E4E7"/>
        <rect x="60" y="170" width="100" height="8" rx="2" fill="#E2E4E7"/>
        <rect x="60" y="190" width="60" height="8" rx="2" fill="#E2E4E7"/>
        <rect x="200" y="60" width="140" height="12" rx="2" fill="#E2E4E7"/>
        <rect x="200" y="80" width="120" height="8" rx="2" fill="#E2E4E7"/>
        <rect x="200" y="100" width="80" height="8" rx="2" fill="#E2E4E7"/>
        <rect x="200" y="130" width="140" height="60" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
        <circle cx="230" cy="160" r="15" fill="#8159BB" opacity="0.3"/>
        <path d="M225 160l5 5 10-10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 280 L200 280" stroke="#7671FF" strokeWidth="3" strokeLinecap="round"/>
        <path d="M200 280 L360 280" stroke="#CB0C9F" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  </section>
);

// Featured Generators
const FeaturedGenerators = () => (
  <section className="featured-generators">
    <h2>{strings.en.featuredHeading}</h2>
    <p className="section-subheading">{strings.en.featuredSubheading}</p>
    <div className="featured-grid">
      {featuredGenerators.map((gen) => (
        <a key={gen.slug} href={`/generators/${gen.slug}`} className="card featured-card">
          <span className="category-tag">{gen.category}</span>
          <h3>{gen.name}</h3>
          <p>{gen.description}</p>
        </a>
      ))}
    </div>
  </section>
);

// Browse by Category
const BrowseByCategory = () => (
  <section className="browse-by-category">
    <h2>{strings.en.browseHeading}</h2>
    <div className="category-grid">
      {Object.entries(strings.en.categories).map(([key, cat]) => {
        const IconComponent = categoryIcons[key] || WebsiteIcon;
        return (
          <a key={key} href={`#${cat.slug}`} className="card category-card">
            <IconComponent />
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <ArrowRight />
          </a>
        );
      })}
    </div>
  </section>
);

// All Generators with Search
const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const categories = ['websites', 'landingPages', 'portfolios', 'blogs', 'stores', 'linkInBio'];

  const filteredGenerators = React.useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    return generators.filter(gen => 
      gen.name.toLowerCase().includes(query) ||
      gen.description.toLowerCase().includes(query) ||
      gen.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const getGeneratorsForCategory = (category) => {
    if (searchQuery.trim() && filteredGenerators) {
      return filteredGenerators.filter(gen => gen.categoryKey === category);
    }
    return generators.filter(gen => gen.categoryKey === category);
  };

  const resultCount = filteredGenerators ? filteredGenerators.length : generators.length;

  const toggleSection = (category) => {
    setExpandedSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="all-generators" className="all-generators">
      <h2>{strings.en.allGeneratorsHeading}</h2>
      <p className="section-subheading">{strings.en.allGeneratorsSubheading}</p>
      
      <div className="search-container">
        <SearchIcon />
        <input 
          type="search" 
          placeholder={strings.en.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label={strings.en.searchAriaLabel}
        />
        {searchQuery && (
          <span className="result-count">{resultCount} {strings.en.generatorsMatch}</span>
        )}
      </div>

      {searchQuery && !resultCount && (
        <div className="search-empty">
          <p>{strings.en.noResults}</p>
          <button onClick={() => setSearchQuery('')} className="btn btn-ghost">{strings.en.clearSearch}</button>
          <p className="search-suggestion">
            {strings.en.cantFind} <a href="/s/ai_site_builder">{strings.en.aiBuilder}</a>
          </p>
        </div>
      )}

      <div className="generators-sections">
        {categories.map(category => {
          const categoryGens = getGeneratorsForCategory(category);
          if (searchQuery && categoryGens.length === 0) return null;
          
          const catInfo = strings.en.categories[category];
          const isExpanded = expandedSections[category] !== false;
          const hasMore = categoryGens.length > 8;
          const visibleGens = isExpanded ? categoryGens : categoryGens.slice(0, 8);

          return (
            <div key={category} id={catInfo.slug} className="generator-subsection">
              <h3>{catInfo.name}</h3>
              <p className="subsection-description">{catInfo.description}</p>
              <div className="generator-grid">
                {visibleGens.map((gen) => (
                  <a key={gen.slug} href={`/generators/${gen.slug}`} className="card generator-card">
                    <CategoryThumbnail category={category} />
                    <h4>{gen.name}</h4>
                    <p>{gen.description}</p>
                  </a>
                ))}
              </div>
              {hasMore && !searchQuery && (
                <button 
                  className="show-all-btn"
                  onClick={() => toggleSection(category)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? strings.en.showLess : `${strings.en.showAll} ${categoryGens.length} ${strings.en.generators}`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// How It Works
const HowItWorks = () => (
  <section className="how-it-works">
    <h2>{strings.en.howItWorksHeading}</h2>
    <div className="steps">
      {strings.en.steps.map((step, index) => (
        <div key={index} className="step">
          <div className="step-number">{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

// Why Strikingly
const WhyStrikingly = () => (
  <section className="why-strikingly">
    <h2>{strings.en.whyStrikinglyHeading}</h2>
    <div className="benefits-grid">
      {strings.en.benefits.map((benefit, index) => {
        const IconComponent = [WebsiteIcon, StoreIcon, LinkIcon][index] || WebsiteIcon;
        return (
          <div key={index} className="benefit">
            <IconComponent />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

// FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <h2>{strings.en.faqHeading}</h2>
      <div className="faq-list">
        {strings.en.faq.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <ChevronDown />
            </button>
            <div 
              id={`faq-answer-${index}`}
              className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              role="region"
              aria-hidden={openIndex !== index}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Closing CTA
const ClosingCTA = () => (
  <section className="closing-cta">
    <h2>{strings.en.closingHeading}</h2>
    <p>{strings.en.closingSubheading}</p>
    <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.closingCTA}</a>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">{strings.en.logo}</div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Product</h4>
          <a href="/templates">Templates</a>
          <a href="/pricing">Pricing</a>
          <a href="/features">Features</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/careers">Careers</a>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <a href="/support">Help Center</a>
          <a href="/contact">Contact</a>
          <a href="/status">Status</a>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      {strings.en.copyright}
    </div>
  </footer>
);

// Main Component
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