import { useState } from 'react'
import { strings, sampleData } from '../strings.en'
import { Search } from 'lucide-react'

// Helper component for Illustrations
const PlaceholderIllustration = ({ type, className }) => {
  return (
    <div className={`bg-[#F4F6F8] rounded flex items-center justify-center border border-[#E2E4E7] text-[#8159BB] ${className}`} aria-hidden="true">
      {type === 'hero' && (
        <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )}
      {type === 'thumbnail' && (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )}
    </div>
  )
}

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#E2E4E7]">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.q.replace(/\s+/g, '-').toLowerCase()}`}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
      >
        <span className="font-bold text-[#4B5056] pr-8">{item.q}</span>
        <span className="text-[#8159BB] font-bold text-xl flex-shrink-0" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={`faq-${item.q.replace(/\s+/g, '-').toLowerCase()}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm leading-relaxed">{item.a}</p>
      </div>
    </div>
  )
}

const Generators = () => {
  const content = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // Subsections state
  const [expandedCategories, setExpandedCategories] = useState({})

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // Filter logic
  const query = searchQuery.toLowerCase()
  let hasAnyResults = false

  const renderSection = (category) => {
    const isExpanded = expandedCategories[category.id] || false;
    
    // Using sampleData directly based on id
    const items = sampleData.generators[category.id] || [];
    
    const filteredItems = items.filter(item => 
      query === '' || 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      category.name.toLowerCase().includes(query)
    );

    if (query !== '' && filteredItems.length === 0) {
      return null;
    }
    
    if (filteredItems.length > 0) {
        hasAnyResults = true;
    }

    const displayedItems = (query !== '' || isExpanded) ? filteredItems : filteredItems.slice(0, 6);
    const hasMore = query === '' && filteredItems.length > 6;

    return (
      <div key={category.id} id={category.id} className="mb-12 scroll-mt-24">
        <h3 className="text-xl mb-2 text-[#4B5056] font-heading font-bold uppercase">{category.name}</h3>
        <p className="mb-6 text-sm">{category.desc}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedItems.map((item, i) => (
            <a key={i} href={`/generators/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="card card-hover flex flex-col items-start block text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
              <PlaceholderIllustration type="thumbnail" className="w-[60px] h-[60px] mb-4 text-[#8159BB]" />
              <div className="font-bold text-[#4B5056] mb-1 leading-snug">{item.name}</div>
              <div className="text-sm">{item.desc}</div>
            </a>
          ))}
        </div>
        
        {hasMore && (
           <div className="mt-6 text-center">
             <button 
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isExpanded}
                aria-controls={category.id}
                className="btn btn-ghost focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
             >
                {isExpanded ? 'Show fewer' : `Show all ${items.length} generators`}
             </button>
           </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* 1. Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-5 py-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex text-xs text-[#636972]">
            <li><a href="/" className="hover:text-[#8159BB] focus-visible:underline">Strikingly</a></li>
            <li className="mx-2" aria-hidden="true">&gt;</li>
            <li aria-current="page">AI Generators</li>
          </ol>
        </nav>
      </div>

      {/* 2. Hero */}
      <section className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[32px] md:text-[44px] mb-4 font-bold max-w-[500px] leading-[1.2]">
              <div>{content.hero.headlinePart1}</div>
              <div className="ai-gradient-text break-words">{content.hero.headlinePart2}</div>
            </h1>
            <p className="text-base mb-8 max-w-[450px]">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="/s/ai_site_builder" className="btn btn-lg btn-primary text-white w-full sm:w-auto justify-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
                {content.hero.primaryCTA}
              </a>
              <a href="#all-generators" className="btn btn-lg btn-ghost w-full sm:w-auto justify-center focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
                {content.hero.secondaryCTA}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <PlaceholderIllustration type="hero" className="w-full max-w-[500px] aspect-video" />
          </div>
        </div>
      </section>

      {/* 3. Featured Generators */}
      <section className="bg-[#F4F6F8] py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[32px] mb-2 text-[#4B5056] font-heading font-bold uppercase">{content.featuredGenerators.heading}</h2>
          <p className="mb-10">{content.featuredGenerators.subheading}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampleData.featured.map((item, i) => (
              <a key={i} href={`/generators/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="card card-hover flex flex-col items-start text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
                <div className="font-bold text-[#4B5056] text-lg mb-1">{item.name}</div>
                <div className="text-sm mb-4">{item.desc}</div>
                <div className="mt-auto">
                  <span className="text-[11px] font-heading font-bold px-[6px] py-[2px] border border-[#8159BB] text-[#8159BB] rounded-[3px] uppercase">
                    {item.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Browse by Category */}
      <section className="py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[32px] mb-10 text-[#4B5056] font-heading font-bold uppercase">{content.browseByCategory.heading}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.browseByCategory.categories.map((cat, i) => (
              <a key={i} href={`#${cat.id}`} className="card card-hover flex flex-col items-center text-center group focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
                <PlaceholderIllustration type="thumbnail" className="w-[48px] h-[48px] mb-4 rounded-full bg-white" />
                <div className="font-heading font-bold text-[#4B5056] text-lg mb-2 uppercase tracking-wide flex items-center gap-2">
                  {cat.label} 
                  <span className="text-[#8159BB] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200" aria-hidden="true">→</span>
                </div>
                <div className="text-sm">{cat.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. All Generators directory */}
      <section id="all-generators" className="bg-[#F4F6F8] py-[80px] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-[26px] md:text-[32px] mb-2 text-[#4B5056] font-heading font-bold uppercase">{content.allGenerators.heading}</h2>
            <p className="mb-8">{content.allGenerators.subheading}</p>
            
            <div className="max-w-[480px] mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636972] w-5 h-5 pointer-events-none" aria-hidden="true" />
              <input 
                type="text" 
                placeholder={content.allGenerators.searchPlaceholder}
                aria-label={content.allGenerators.searchAriaLabel}
                className="w-full h-[50px] pl-12 pr-4 rounded bg-white border border-[#C6C9CD] focus:border-[#8159BB] focus:outline-none focus:ring-1 focus:ring-[#8159BB] transition-colors text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {query && (
               <div className="mt-4 text-sm font-bold text-[#4B5056]" aria-live="polite">
                 Showing search results for "{query}"
               </div>
            )}
          </div>

          <div className="max-w-[1000px] mx-auto">
            {content.browseByCategory.categories.map(renderSection)}
            
            {(query !== '' && !hasAnyResults) && (
              <div className="text-center py-12 bg-white rounded border border-[#E2E4E7]">
                <p className="mb-4">{content.allGenerators.noResults}</p>
                <div className="flex justify-center gap-4">
                  <button onClick={() => setSearchQuery('')} className="btn btn-ghost focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">Clear search</button>
                  <a href="/s/ai_site_builder" className="btn btn-primary text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">{content.allGenerators.noResultsCTA}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-[80px]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[32px] mb-12 text-[#4B5056] font-heading font-bold uppercase">{content.howItWorks.heading}</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {content.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#8159BB] text-white flex items-center justify-center font-heading font-bold text-xl mb-6 flex-shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-[#4B5056] text-lg mb-3 tracking-wide uppercase">{step.title}</h3>
                <p className="text-sm max-w-[280px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Strikingly */}
      <section className="bg-[#F4F6F8] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[26px] md:text-[32px] mb-12 text-[#4B5056] font-heading font-bold uppercase">{content.whyStrikingly.heading}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyStrikingly.claims.map((claim, i) => (
              <div key={i} className="flex flex-col items-center p-6">
                <div className="w-[60px] h-[60px] mb-6 rounded-full bg-white border border-[#E2E4E7] flex items-center justify-center text-[#8159BB]">
                   {/* Simple line icon placeholder */}
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="font-heading font-bold text-[#4B5056] text-lg mb-3 tracking-wide uppercase">{claim.title}</h3>
                <p className="text-sm">{claim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-[80px]">
        <div className="max-w-[800px] mx-auto px-5">
          <h2 className="text-[26px] md:text-[32px] mb-10 text-center text-[#4B5056] font-heading font-bold uppercase">{content.faq.heading}</h2>
          
          <div className="border-t border-[#E2E4E7]">
            {content.faq.questions.map((q, i) => (
              <FAQItem 
                key={i} 
                item={q} 
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <section className="py-[80px] border-t border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h2 className="text-[32px] md:text-[40px] mb-4 text-[#4B5056] font-heading font-bold uppercase">{content.closingCta.heading}</h2>
          <p className="text-lg mb-8">{content.closingCta.subheading}</p>
          <a href="/s/ai_site_builder" className="btn btn-lg btn-primary text-white mx-auto text-center px-10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]">
            {content.closingCta.cta}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Generators
