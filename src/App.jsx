import { useState, useEffect, useRef } from 'react'
import './App.css'
import strings from './strings'

// SVG Icons as components
const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="url(#logoGradient)"/>
    <path d="M10 22V10h3.5l4 8 4-8H25v12h-3v-7l-3.5 7h-2l-3.5-7v7h-3z" fill="white"/>
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const GlobeIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const TargetIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const ImageIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
)

const EditIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const ShoppingBagIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)

const LinkIcon = () => (
  <svg className="category-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
)

const ZapIcon = () => (
  <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const SmartphoneIcon = () => (
  <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)

const CreditCardIcon = () => (
  <svg className="why-feature__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const WebsiteIcon = () => (
  <svg className="generator-card__image svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
)

// Hero Illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background elements */}
    <circle cx="200" cy="150" r="120" fill="url(#heroGradient)" opacity="0.1"/>
    <circle cx="200" cy="150" r="80" fill="url(#heroGradient)" opacity="0.15"/>
    
    {/* Browser frame */}
    <rect x="60" y="60" width="280" height="180" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="60" y="60" width="280" height="24" rx="8" fill="#F4F6F8"/>
    <rect x="60" y="76" width="280" height="8" fill="#F4F6F8"/>
    
    {/* Browser dots */}
    <circle cx="80" cy="72" r="4" fill="#FF5F57"/>
    <circle cx="96" cy="72" r="4" fill="#FFBD2E"/>
    <circle cx="112" cy="72" r="4" fill="#28C840"/>
    
    {/* Content lines */}
    <rect x="80" y="100" width="120" height="8" rx="2" fill="#E2E4E7"/>
    <rect x="80" y="116" width="80" height="6" rx="2" fill="#E2E4E7"/>
    <rect x="80" y="130" width="100" height="6" rx="2" fill="#E2E4E7"/>
    
    {/* Image placeholder */}
    <rect x="220" y="100" width="100" height="80" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
    <path d="M240 140 L260 120 L280 140 M240 150 L255 135 L270 150 L285 135 L300 150" stroke="#C6C9CD" strokeWidth="1.5" fill="none"/>
    
    {/* Button */}
    <rect x="80" y="170" width="100" height="28" rx="4" fill="url(#buttonGradient)"/>
    <rect x="200" y="170" width="80" height="28" rx="4" fill="none" stroke="#8159BB" strokeWidth="1"/>
    
    {/* Decorative elements */}
    <circle cx="50" cy="250" r="20" fill="url(#heroGradient)" opacity="0.2"/>
    <circle cx="350" cy="50" r="15" fill="url(#heroGradient)" opacity="0.15"/>
    
    <defs>
      <linearGradient id="heroGradient" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
      <linearGradient id="buttonGradient" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
)

// Category icon mapper
const getCategoryIcon = (icon) => {
  switch (icon) {
    case 'globe': return <GlobeIcon />;
    case 'target': return <TargetIcon />;
    case 'image': return <ImageIcon />;
    case 'edit': return <EditIcon />;
    case 'shoppingBag': return <ShoppingBagIcon />;
    case 'link': return <LinkIcon />;
    default: return <GlobeIcon />;
  }
}

// Top Bar Component
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <div className="top-bar__inner">
        <a href="/" className="top-bar__logo">
          <LogoIcon />
          <span>{strings.topBarLogo}</span>
        </a>
      </div>
    </div>
  </header>
)

// Breadcrumb Component
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <a href="/" className="breadcrumb__link">{strings.breadcrumbStrikingly}</a>
          <span className="breadcrumb__separator" aria-hidden="true">&gt;</span>
        </li>
        <li className="breadcrumb__item" aria-current="page">
          {strings.breadcrumbCurrent}
        </li>
      </ol>
    </div>
  </nav>
)

// Hero Section
const HeroSection = () => (
  <section className="section--hero hero">
    <div className="container">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span>{strings.heroTitleLine1}</span>
            <br />
            <span className="gradient-text">{strings.heroTitleLine2}</span>
          </h1>
          <p className="hero__subtitle">{strings.heroSubtitle}</p>
          <div className="hero__actions">
            <a href="/s/ai_site_builder" className="btn btn--primary btn--lg">{strings.heroPrimaryCta}</a>
            <a href="#all-generators" className="btn btn--ghost btn--lg">{strings.heroSecondaryCta}</a>
          </div>
        </div>
        <div className="hero__illustration">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
)

// Featured Generators Section
const FeaturedSection = () => (
  <section className="section featured" aria-labelledby="featured-title">
    <div className="container">
      <header className="featured__header">
        <h2 id="featured-title">{strings.featuredTitle}</h2>
        <p className="featured__subheading">{strings.featuredSubtitle}</p>
      </header>
      <div className="grid-3">
        {strings.featuredGenerators.map((generator) => (
          <a
            key={generator.slug}
            href={`/generators/${generator.slug}`}
            className="card card--link generator-card"
          >
            <div className="generator-card__image">
              <WebsiteIcon />
            </div>
            <span className="tag generator-card__tag">{generator.category}</span>
            <h3 className="generator-card__name">{generator.name}</h3>
            <p className="generator-card__description">{generator.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Browse by Category Section
const BrowseCategorySection = () => (
  <section className="section" aria-labelledby="browse-title">
    <div className="container">
      <h2 id="browse-title" style={{ textAlign: 'center', marginBottom: '40px' }}>{strings.browseTitle}</h2>
      <div className="grid-3">
        {strings.categories.map((category) => (
          <a
            key={category.slug}
            href={`#${category.slug}`}
            className="card card--link category-card"
          >
            {getCategoryIcon(category.icon)}
            <h3 className="category-card__name">{category.name.toUpperCase()}</h3>
            <p className="category-card__description">{category.description}</p>
            <ArrowRightIcon />
          </a>
        ))}
      </div>
    </div>
  </section>
)

// Generator Subsection Component
const GeneratorSubsection = ({ subsection, isExpanded, onToggle }) => {
  const generators = subsection.generators || [];
  const totalCount = generators.length;
  const visibleCount = isExpanded ? totalCount : Math.min(4, totalCount);
  const hasMore = totalCount > 4;
  
  return (
    <div id={subsection.slug} className="generator-subsection" data-category={subsection.slug}>
      <header className="generator-subsection__header">
        <div>
          <h3 className="generator-subsection__title">{subsection.title}</h3>
          <p className="generator-subsection__description">{subsection.description}</p>
        </div>
        {hasMore && (
          <button
            className="generator-subsection__toggle"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={`grid-${subsection.slug}`}
          >
            {isExpanded ? strings.showLess : strings.showAll(totalCount)}
          </button>
        )}
      </header>
      <div
        id={`grid-${subsection.slug}`}
        className={`show-all-grid ${isExpanded ? '' : 'collapsed'}`}
      >
        {generators.map((generator, index) => (
          <a
            key={`${subsection.slug}-${index}`}
            href={`/generators/${generator.slug || generator.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="card card--link directory-card"
            data-generator={generator.name.toLowerCase()}
          >
            <h4 className="directory-card__name">{generator.name}</h4>
            <p className="directory-card__description">{generator.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

// All Generators Section
const AllGeneratorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSections, setExpandedSections] = useState({})
  const [filteredCount, setFilteredCount] = useState(0)
  
  const subsections = Object.entries(strings.subsections)
  
  // Search functionality
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim()
    
    // Update filtered count
    let totalMatches = 0
    subsections.forEach(([slug, subsection]) => {
      subsection.generators.forEach(generator => {
        const matchesName = generator.name.toLowerCase().includes(query)
        const matchesDesc = generator.description.toLowerCase().includes(query)
        const matchesCategory = subsection.title.toLowerCase().includes(query)
        if (matchesName || matchesDesc || matchesCategory) {
          totalMatches++
        }
      })
    })
    setFilteredCount(totalMatches)
    
    // Filter cards visibility
    document.querySelectorAll('.directory-card').forEach(card => {
      const generatorName = card.querySelector('.directory-card__name')?.textContent?.toLowerCase() || ''
      const generatorDesc = card.querySelector('.directory-card__description')?.textContent?.toLowerCase() || ''
      const matches = generatorName.includes(query) || generatorDesc.includes(query)
      card.style.display = query === '' || matches ? '' : 'none'
    })
    
    // Hide subsections without matches
    document.querySelectorAll('.generator-subsection').forEach(subsection => {
      const visibleCards = subsection.querySelectorAll('.directory-card:not([style*="display: none"])')
      const hasVisibleCards = visibleCards.length > 0
      subsection.style.display = query === '' || hasVisibleCards ? '' : 'none'
    })
  }, [searchQuery, subsections])
  
  const toggleSection = (slug) => {
    setExpandedSections(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }))
  }
  
  const clearSearch = () => {
    setSearchQuery('')
  }
  
  return (
    <section className="section" id="all-generators" aria-labelledby="all-generators-title">
      <div className="container">
        <header style={{ marginBottom: '40px' }}>
          <h2 id="all-generators-title">{strings.allGeneratorsTitle}</h2>
          <p style={{ color: 'var(--color-body-text)', marginTop: '10px' }}>{strings.allGeneratorsSubtitle}</p>
        </header>
        
        {/* Search */}
        <div className="all-generators__search">
          <SearchIcon />
          <input
            type="search"
            className="all-generators__search-input"
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchAriaLabel}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Result count */}
        {searchQuery && (
          <p className="all-generators__count">
            {strings.resultCount(filteredCount)}
          </p>
        )}
        
        {/* Empty state */}
        {searchQuery && filteredCount === 0 && (
          <div className="all-generators__empty">
            <p className="all-generators__empty-title">{strings.noResultsTitle}</p>
            <p>
              <a href="/s/ai_site_builder" className="all-generators__empty-link">{strings.noResultsLink}</a>
            </p>
            <button onClick={clearSearch} className="btn btn--ghost" style={{ marginTop: '20px' }}>
              Clear search
            </button>
          </div>
        )}
        
        {/* Subsections */}
        {subsections.map(([slug, subsection]) => (
          <GeneratorSubsection
            key={slug}
            subsection={{ ...subsection, slug }}
            isExpanded={expandedSections[slug] || false}
            onToggle={() => toggleSection(slug)}
          />
        ))}
      </div>
    </section>
  )
}

// How It Works Section
const HowItWorksSection = () => (
  <section className="section" aria-labelledby="how-it-works-title" style={{ background: 'var(--color-light-bg)' }}>
    <div className="container">
      <header className="how-it-works__header">
        <h2 id="how-it-works-title">{strings.howItWorksTitle}</h2>
      </header>
      <div className="how-it-works__steps">
        {strings.howItWorksSteps.map((step, index) => (
          <div key={index} className="how-step">
            <div className="how-step__number">{index + 1}</div>
            <h3 className="how-step__title">{step.title}</h3>
            <p className="how-step__description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Why Strikingly Section
const WhyStrikinglySection = () => (
  <section className="section why-strikingly" aria-labelledby="why-strikingly-title">
    <div className="container">
      <header className="why-strikingly__header">
        <h2 id="why-strikingly-title">{strings.whyStrikinglyTitle}</h2>
      </header>
      <div className="grid-3">
        {strings.whyStrikinglyFeatures.map((feature, index) => (
          <div key={index} className="why-feature">
            {index === 0 && <ZapIcon />}
            {index === 1 && <SmartphoneIcon />}
            {index === 2 && <CreditCardIcon />}
            <h3 className="why-feature__title">{feature.title}</h3>
            <p className="why-feature__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// FAQ Section
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0)
  
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container">
        <header className="faq__header">
          <h2 id="faq-title">{strings.faqTitle}</h2>
        </header>
        <div className="faq__list" role="list">
          {strings.faqItems.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              role="listitem"
              aria-expanded={openIndex === index}
            >
              <button
                className="faq-item__button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <ChevronDownIcon />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-item__content"
                style={openIndex === index ? { maxHeight: '500px', opacity: 1 } : {}}
              >
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Closing CTA Section
const ClosingCtaSection = () => (
  <section className="section closing-cta" aria-labelledby="closing-cta-title">
    <div className="container">
      <h2 id="closing-cta-title" className="closing-cta__title">{strings.closingCtaTitle}</h2>
      <p className="closing-cta__subtitle">{strings.closingCtaSubtitle}</p>
      <a href="/s/ai_site_builder" className="btn btn--primary btn--lg">{strings.closingCtaButton}</a>
    </div>
  </section>
)

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div>
          <a href="/" className="footer__logo">
            <LogoIcon />
            <span>Strikingly</span>
          </a>
        </div>
        <div>
          <h4 className="footer__col-title">Product</h4>
          <ul className="footer__links">
            {strings.footerLinks.product.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__link">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer__col-title">Company</h4>
          <ul className="footer__links">
            {strings.footerLinks.company.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__link">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer__col-title">Support</h4>
          <ul className="footer__links">
            {strings.footerLinks.support.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__link">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer__col-title">Legal</h4>
          <ul className="footer__links">
            {strings.footerLinks.legal.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer__link">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>{strings.footerCopyright}</p>
      </div>
    </div>
  </footer>
)

// Main App Component
function App() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseCategorySection />
        <AllGeneratorsSection />
        <HowItWorksSection />
        <WhyStrikinglySection />
        <FaqSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
