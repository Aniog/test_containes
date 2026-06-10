import { useState, useEffect, useMemo } from 'react';
import { strings } from './strings';
import './index.css';

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const ChevronDownIcon = ({ isOpen }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`faq-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const LayoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M3 9h18"></path>
    <path d="M9 21V9"></path>
  </svg>
);

const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="9" cy="9" r="2"></circle>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
  </svg>
);

const FileTextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" x2="8" y1="13" y2="13"></line>
    <line x1="16" x2="8" y1="17" y2="17"></line>
    <line x1="10" x2="8" y1="9" y2="9"></line>
  </svg>
);

const ShoppingCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
    <path d="M12 18h.01"></path>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
    <line x1="2" x2="22" y1="10" y2="10"></line>
  </svg>
);

// Get strings
const s = strings.en;

// Helper to generate slug from name
const slugify = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Category icons mapping
const categoryIcons = {
  websites: GlobeIcon,
  landingPages: LayoutIcon,
  portfolios: ImageIcon,
  blogs: FileTextIcon,
  stores: ShoppingCartIcon,
  linkInBio: LinkIcon,
};

// Featured generators data
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'websites' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'portfolios' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'landingPages' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'stores' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'linkInBio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'websites' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'websites' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'websites' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'blogs' },
];

// Category sections for All Generators
const categorySections = [
  { id: 'websites', key: 'websites' },
  { id: 'landing-pages', key: 'landingPages' },
  { id: 'portfolios', key: 'portfolios' },
  { id: 'blogs', key: 'blogs' },
  { id: 'stores', key: 'stores' },
  { id: 'link-in-bio', key: 'linkInBio' },
];

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background */}
    <rect width="400" height="300" fill="#F4F6F8" rx="8"/>
    {/* Browser chrome */}
    <rect x="20" y="20" width="360" height="260" fill="white" rx="4"/>
    <circle cx="40" cy="35" r="5" fill="#E2E4E7"/>
    <circle cx="55" cy="35" r="5" fill="#E2E4E7"/>
    <circle cx="70" cy="35" r="5" fill="#E2E4E7"/>
    {/* Header */}
    <rect x="20" y="50" width="360" height="40" fill="#8159BB" rx="4"/>
    <text x="200" y="75" fill="white" fontFamily="sans-serif" fontSize="14" textAnchor="middle">Your Website</text>
    {/* Hero section */}
    <rect x="40" y="100" width="150" height="80" fill="#7671FF" rx="4" opacity="0.3"/>
    <text x="115" y="145" fill="#7671FF" fontFamily="sans-serif" fontSize="12" textAnchor="middle">Hero Section</text>
    {/* Content cards */}
    <rect x="200" y="100" width="160" height="35" fill="#E2E4E7" rx="2"/>
    <rect x="200" y="145" width="160" height="35" fill="#E2E4E7" rx="2"/>
    <rect x="200" y="190" width="160" height="35" fill="#E2E4E7" rx="2"/>
    {/* Decorative elements */}
    <circle cx="350" cy="250" r="30" fill="#CB0C9F" opacity="0.2"/>
    <circle cx="50" cy="250" r="20" fill="#7671FF" opacity="0.2"/>
  </svg>
);

// Category card icon
const CategoryCardIcon = ({ category }) => {
  const IconComponent = categoryIcons[category];
  return IconComponent ? <IconComponent /> : <GlobeIcon />;
};

// Generator card icon
const GeneratorCardIcon = ({ category }) => {
  const IconComponent = categoryIcons[category];
  return IconComponent ? <IconComponent /> : <GlobeIcon />;
};

// Top Bar Component
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <a href="/" className="top-bar-logo">{s.logo}</a>
    </div>
  </header>
);

// Breadcrumb Component
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb-list">
        <li><a href="/">{s.breadcrumbHome}</a></li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li aria-current="page">{s.breadcrumbCurrent}</li>
      </ol>
    </div>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="section-lg hero">
    <div className="container">
      <div className="two-col">
        <div className="hero-content">
          <h1>
            <span className="text-heading-dark">{s.heroLine1}</span>
            <br />
            <span className="gradient-text">{s.heroLine2}</span>
          </h1>
          <p className="text-body mt-md mb-lg" style={{ maxWidth: '480px' }}>{s.heroSubheadline}</p>
          <div className="flex gap-sm" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.heroPrimaryCTA}</a>
            <a href="#all-generators" className="btn btn-ghost btn-lg">{s.heroSecondaryCTA}</a>
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
  <section className="section" style={{ background: 'var(--color-light-bg)' }}>
    <div className="container">
      <h2 className="section-heading">{s.featuredHeading}</h2>
      <p className="section-subheading">{s.featuredSubheading}</p>
      <div className="grid-3">
        {featuredGenerators.map((generator, index) => (
          <a 
            key={index} 
            href={`/generators/${slugify(generator.name)}`}
            className="featured-card"
          >
            <span className="tag">{generator.category.replace(/([A-Z])/g, ' $1').trim()}</span>
            <h4>{generator.name}</h4>
            <p>{generator.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseByCategory = () => {
  const categories = [
    { key: 'websites', anchor: '#websites' },
    { key: 'landingPages', anchor: '#landing-pages' },
    { key: 'portfolios', anchor: '#portfolios' },
    { key: 'blogs', anchor: '#blogs' },
    { key: 'stores', anchor: '#stores' },
    { key: 'linkInBio', anchor: '#link-in-bio' },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-heading">{s.browseHeading}</h2>
        <div className="grid-3 mt-lg">
          {categories.map((cat) => (
            <a 
              key={cat.key} 
              href={cat.anchor}
              className="category-card"
            >
              <div className="category-card-icon">
                <CategoryCardIcon category={cat.key} />
              </div>
              <h3>{s.categories[cat.key].name}</h3>
              <p>{s.categories[cat.key].description}</p>
              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// All Generators Section - Pre-rendered static data
const allGeneratorsStaticData = {};
Object.keys(s.generators).forEach(key => {
  allGeneratorsStaticData[key] = s.generators[key].items.map((item, idx) => ({
    ...item,
    category: key,
    slug: slugify(item.name)
  }));
});

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllStates, setShowAllStates] = useState({});

  // Filter generators based on search - runs client-side
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return allGeneratorsStaticData;
    
    const query = searchQuery.toLowerCase();
    const filtered = {};
    
    Object.keys(allGeneratorsStaticData).forEach(key => {
      const matchingItems = allGeneratorsStaticData[key].filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query)
      );
      if (matchingItems.length > 0) {
        filtered[key] = matchingItems;
      }
    });
    
    return filtered;
  }, [searchQuery]);

  // Count total matches
  const totalMatches = Object.values(filteredData).reduce((sum, items) => sum + items.length, 0);

  // Toggle show all
  const toggleShowAll = (categoryKey) => {
    setShowAllStates(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section id="all-generators" className="section" style={{ background: 'var(--color-light-bg)' }}>
      <div className="container">
        <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>
        
        {/* Search */}
        <div className="search-input-wrapper">
          <span className="search-icon" aria-hidden="true"><SearchIcon /></span>
          <input
            type="search"
            className="search-input"
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {searchQuery && (
          <p className="search-results-count">
            {s.resultCount(totalMatches)}
          </p>
        )}

        {/* No results state */}
        {searchQuery && totalMatches === 0 && (
          <div className="no-results mt-lg">
            <p>{s.noResults}</p>
            <button className="btn btn-ghost" onClick={clearSearch}>{s.clearSearch}</button>
            <p className="mt-md">
              {s.cantFind} <a href="/s/ai_site_builder">{s.startWithAI}</a>
            </p>
          </div>
        )}

        {/* Category subsections - render ALL cards in HTML */}
        {!searchQuery || totalMatches > 0 ? (
          categorySections.map((section) => {
            const items = filteredData[section.key] || [];
            const allItems = allGeneratorsStaticData[section.key] || [];
            const hasItems = items.length > 0;
            const hasMoreThanSix = allItems.length > 6;
            const isExpanded = showAllStates[section.key];
            
            if (searchQuery && !hasItems) return null;

            return (
              <div key={section.id} id={section.id} className="category-subsection mt-lg">
                <h3>{s.generators[section.key].heading}</h3>
                <p>{s.generators[section.key].description}</p>
                
                <div className={`generator-cards ${!isExpanded && hasMoreThanSix && !searchQuery ? 'collapsed' : ''}`}>
                  {(items.length > 0 ? items : allItems).map((item, idx) => (
                    <a 
                      key={idx}
                      href={`/generators/${item.slug}`}
                      className="generator-card"
                    >
                      <div className="generator-card-icon">
                        <GeneratorCardIcon category={section.key} />
                      </div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </a>
                  ))}
                </div>
                
                {hasMoreThanSix && !searchQuery && (
                  <button 
                    className="show-all-btn"
                    onClick={() => toggleShowAll(section.key)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? s.showLess : `${s.showAll} ${allItems.length} generators`}
                  </button>
                )}
              </div>
            );
          })
        ) : null}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-heading text-center">{s.howItWorksHeading}</h2>
      <div className="steps-grid mt-lg">
        {s.steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Why Strikingly Section
const WhyStrikingly = () => (
  <section className="section" style={{ background: 'var(--color-light-bg)' }}>
    <div className="container">
      <h2 className="section-heading text-center">{s.whyStrikinglyHeading}</h2>
      <div className="benefits-grid mt-lg">
        {s.benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-icon">
              {index === 0 && <ZapIcon />}
              {index === 1 && <SmartphoneIcon />}
              {index === 2 && <CreditCardIcon />}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-heading text-center">{s.faqHeading}</h2>
        <div className="mt-lg">
          {s.faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <ChevronDownIcon isOpen={openIndex === index} />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                role="region"
                aria-hidden={openIndex !== index}
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

// Closing CTA Section
const ClosingCTA = () => (
  <section className="section-lg">
    <div className="container text-center">
      <h2 className="section-heading">{s.closingHeading}</h2>
      <p className="text-body mt-sm mb-lg">{s.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.closingCTA}</a>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>{s.footer.product}</h4>
          <ul>
            {s.footer.links.product.map((link, idx) => (
              <li key={idx}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{s.footer.company}</h4>
          <ul>
            {s.footer.links.company.map((link, idx) => (
              <li key={idx}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{s.footer.resources}</h4>
          <ul>
            {s.footer.links.resources.map((link, idx) => (
              <li key={idx}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>{s.footer.legal}</h4>
          <ul>
            {s.footer.links.legal.map((link, idx) => (
              <li key={idx}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-copyright">{s.footer.copyright}</p>
    </div>
  </footer>
);

// Main App Component
function App() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
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
}

export default App;
