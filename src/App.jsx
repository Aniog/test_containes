import { useEffect } from 'react'
import { strings } from './strings'
import { generators, featuredGenerators, categoryCards } from './data/generators'
import './App.css'

const s = strings.en

function App() {
  // JavaScript for search, FAQ accordions, and Show all toggles
  useEffect(() => {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item, index) => {
      const button = item.querySelector('.faq-question')
      const answer = item.querySelector('.faq-answer')
      
      if (button && answer) {
        button.addEventListener('click', () => {
          const isOpen = item.classList.contains('faq-item-open')
          
          // Close all items
          faqItems.forEach(i => {
            i.classList.remove('faq-item-open')
            const a = i.querySelector('.faq-answer')
            const b = i.querySelector('.faq-question')
            if (a) a.style.display = 'none'
            if (b) b.setAttribute('aria-expanded', 'false')
          })
          
          // Open clicked item if it was closed
          if (!isOpen) {
            item.classList.add('faq-item-open')
            answer.style.display = 'block'
            button.setAttribute('aria-expanded', 'true')
          }
        })
      }
    })

    // Search functionality
    const searchInput = document.getElementById('generator-search')
    const resultsCount = document.getElementById('search-results-count')
    const noResults = document.getElementById('no-results')
    const clearSearch = document.getElementById('clear-search')
    const directory = document.getElementById('generators-directory')
    
    if (searchInput && directory) {
      const subsections = directory.querySelectorAll('.generator-subsection')
      const allCards = directory.querySelectorAll('.generator-card')
      
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim()
        let totalMatches = 0
        
        subsections.forEach(subsec => {
          const cards = subsec.querySelectorAll('.generator-card')
          let visibleCards = 0
          
          cards.forEach(card => {
            const name = card.dataset.name || ''
            const desc = card.dataset.desc || ''
            const category = card.dataset.category || ''
            
            if (query === '' || 
                name.includes(query) || 
                desc.includes(query) || 
                category.includes(query)) {
              card.style.display = ''
              visibleCards++
              totalMatches++
            } else {
              card.style.display = 'none'
            }
          })
          
          // Show/hide subsection based on matches
          if (visibleCards > 0) {
            subsec.style.display = ''
          } else {
            subsec.style.display = 'none'
          }
        })
        
        // Update results count
        if (resultsCount) {
          if (query === '') {
            resultsCount.textContent = ''
          } else {
            resultsCount.textContent = `${totalMatches} ${s.resultCount}`
          }
        }
        
        // Show/hide no results message
        if (noResults) {
          if (query !== '' && totalMatches === 0) {
            noResults.style.display = 'block'
          } else {
            noResults.style.display = 'none'
          }
        }
      })
      
      // Clear search button
      if (clearSearch) {
        clearSearch.addEventListener('click', () => {
          searchInput.value = ''
          searchInput.dispatchEvent(new Event('input'))
        })
      }
    }
  }, [])

  return (
    <div className="generators-hub">
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <a href="/" className="logo">{s.logo}</a>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><a href="/">{s.breadcrumbHome}</a></li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-h1">
              <span className="hero-h1-line1">{s.heroH1Line1}</span>
              <span className="hero-h1-line2">{s.heroH1Line2}</span>
            </h1>
            <p className="hero-subheadline">{s.heroSubheadline}</p>
            <div className="hero-ctas">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.heroPrimaryCTA}</a>
              <a href="#all-generators" className="btn btn-ghost btn-lg">{s.heroSecondaryCTA}</a>
            </div>
          </div>
          <div className="hero-illustration">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="40" width="320" height="220" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
              <rect x="60" y="60" width="120" height="80" rx="4" fill="#8159BB" opacity="0.2"/>
              <rect x="60" y="150" width="80" height="12" rx="2" fill="#C6C9CD"/>
              <rect x="60" y="170" width="100" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="60" y="185" width="60" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="150" width="140" height="12" rx="2" fill="#C6C9CD"/>
              <rect x="200" y="170" width="120" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="185" width="80" height="8" rx="2" fill="#E2E4E7"/>
              <circle cx="320" cy="40" r="20" fill="url(#gradient1)" opacity="0.3"/>
              <defs>
                <linearGradient id="gradient1" x1="300" y1="20" x2="340" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7671FF"/>
                  <stop offset="1" stopColor="#CB0C9F"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured">
        <div className="container">
          <h2 className="section-heading">{s.featuredHeading}</h2>
          <p className="section-subheading">{s.featuredSubheading}</p>
          <div className="featured-grid">
            {featuredGenerators.map((gen) => (
              <a key={gen.slug} href={`/generators/${gen.slug}`} className="card featured-card">
                <span className="tag tag-ghost">{gen.category}</span>
                <h3 className="card-title">{gen.name}</h3>
                <p className="card-description">{gen.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-categories">
        <div className="container">
          <h2 className="section-heading">{s.browseHeading}</h2>
          <div className="category-grid">
            {categoryCards.map((cat) => (
              <a key={cat.slug} href={`#${cat.slug}`} className="card category-card">
                <div className="category-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="4" stroke="#8159BB" strokeWidth="2"/>
                    <path d="M12 16L16 20L24 12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                <span className="category-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="all-generators">
        <div className="container">
          <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
          <p className="section-subheading">{s.allGeneratorsSubheading}</p>
          
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2"/>
                <path d="M13.5 13.5L17 17" stroke="#636972" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input 
                type="search" 
                id="generator-search" 
                className="search-input" 
                placeholder={s.searchPlaceholder}
                aria-label={s.searchAriaLabel}
              />
            </div>
            <div className="search-results-count" id="search-results-count" aria-live="polite"></div>
          </div>

          <div className="generators-directory" id="generators-directory">
            {Object.values(generators).map((category) => (
              <div key={category.id} className="generator-subsection" data-category={category.id} data-slug={category.slug}>
                <h3 className="subsection-heading" id={`heading-${category.slug}`}>{category.name}</h3>
                <p className="subsection-desc">{category.description}</p>
                <div className="generator-cards">
                  {category.generators.map((gen, idx) => (
                    <a 
                      key={gen.slug} 
                      href={`/generators/${gen.slug}`} 
                      className="card generator-card"
                      data-name={gen.name.toLowerCase()}
                      data-desc={gen.description.toLowerCase()}
                      data-category={category.name.toLowerCase()}
                    >
                      <div className="generator-thumb" aria-hidden="true">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
                          <rect x="10" y="10" width="28" height="20" rx="2" fill="#8159BB" opacity="0.2"/>
                          <rect x="10" y="34" width="16" height="4" rx="1" fill="#C6C9CD"/>
                        </svg>
                      </div>
                      <h4 className="generator-name">{gen.name}</h4>
                      <p className="generator-desc">{gen.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="no-results" id="no-results" style={{display: 'none'}}>
            <p>{s.noResults}</p>
            <button className="btn btn-ghost" id="clear-search">{s.clearSearch}</button>
            <p className="no-results-link">
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startWithAIBuilder}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-heading">{s.howItWorksHeading}</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number" aria-hidden="true">1</div>
              <h3 className="step-title">{s.step1Title}</h3>
              <p className="step-desc">{s.step1Desc}</p>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">2</div>
              <h3 className="step-title">{s.step2Title}</h3>
              <p className="step-desc">{s.step2Desc}</p>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">3</div>
              <h3 className="step-title">{s.step3Title}</h3>
              <p className="step-desc">{s.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly">
        <div className="container">
          <h2 className="section-heading">{s.whyStrikinglyHeading}</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2"/>
                  <path d="M10 16L14 20L22 12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-title">{s.why1Title}</h3>
              <p className="why-desc">{s.why1Desc}</p>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="16" rx="2" stroke="#8159BB" strokeWidth="2"/>
                  <rect x="8" y="12" width="8" height="8" rx="1" fill="#8159BB" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="why-title">{s.why2Title}</h3>
              <p className="why-desc">{s.why2Desc}</p>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-title">{s.why3Title}</h3>
              <p className="why-desc">{s.why3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-heading">{s.faqHeading}</h2>
          <div className="faq-list">
            <div className="faq-item faq-item-open">
              <button className="faq-question" aria-expanded="true" aria-controls="faq-answer-1">
                {s.faq1Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-1">
                <p>{s.faq1Answer}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-2">
                {s.faq2Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-2" style={{display: 'none'}}>
                <p>{s.faq2Answer}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-3">
                {s.faq3Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-3" style={{display: 'none'}}>
                <p>{s.faq3Answer}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-4">
                {s.faq4Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-4" style={{display: 'none'}}>
                <p>{s.faq4Answer}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-5">
                {s.faq5Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-5" style={{display: 'none'}}>
                <p>{s.faq5Answer}</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question" aria-expanded="false" aria-controls="faq-answer-6">
                {s.faq6Question}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-answer" id="faq-answer-6" style={{display: 'none'}}>
                <p>{s.faq6Answer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="container">
          <h2 className="closing-heading">{s.closingHeading}</h2>
          <p className="closing-sub">{s.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.closingCTA}</a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <span className="footer-logo">{s.logo}</span>
            </div>
            <div className="footer-col">
              <a href="/about">{s.footerAbout}</a>
              <a href="/pricing">{s.footerPricing}</a>
              <a href="/templates">{s.footerTemplates}</a>
            </div>
            <div className="footer-col">
              <a href="/support">{s.footerSupport}</a>
              <a href="/blog">{s.footerBlog}</a>
            </div>
            <div className="footer-col">
              <a href="/terms">{s.footerTerms}</a>
              <a href="/privacy">{s.footerPrivacy}</a>
            </div>
          </div>
          <p className="footer-copyright">{s.footerCopyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
