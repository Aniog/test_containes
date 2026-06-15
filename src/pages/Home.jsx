import React, { useState, useEffect, useMemo } from 'react'
import { strings, featuredGenerators, allGenerators } from '@/lib/data'
import { Search, ChevronDown, ChevronRight, Layout, FileText, User, MessageSquare, ShoppingBag, Link2, Globe, Github, Twitter, Facebook, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'

const Home = () => {
  const t = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState({})
  const [expandedFaq, setExpandedFaq] = useState(0)

  // Section 5. All Generators Filtering
  const filteredGenerators = useMemo(() => {
    if (!searchQuery) return allGenerators
    const query = searchQuery.toLowerCase()
    const result = {}
    Object.keys(allGenerators).forEach(catId => {
      const matches = allGenerators[catId].filter(g =>
        g.name.toLowerCase().includes(query) ||
        g.desc.toLowerCase().includes(query) ||
        t.categories[catId].title.toLowerCase().includes(query)
      )
      if (matches.length > 0) {
        result[catId] = matches
      }
    })
    return result
  }, [searchQuery, t.categories])

  const totalMatches = Object.values(filteredGenerators).reduce((acc, list) => acc + list.length, 0)

  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({ ...prev, [catId]: !prev[catId] }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 0. Top bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-subtle-divider">
        <div className="container mx-auto px-4 h-[60px] flex items-center">
          <a href="/" className="font-heading text-[20px] text-heading-dark flex items-center gap-2">
            <span className="text-brand-purple">strikingly</span>
            <span className="font-light">AI</span>
          </a>
        </div>
      </header>

      {/* Section 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
        <ol className="flex items-center text-[12px] text-body">
          <li>
            <a href="/" className="hover:text-brand-purple transition-colors">{t.breadcrumbHome}</a>
          </li>
          <li className="mx-2 text-brand-purple select-none">&gt;</li>
          <li className="font-semibold">{t.breadcrumbCurrent}</li>
        </ol>
      </nav>

      <main>
        {/* Section 2. Hero */}
        <section className="container mx-auto px-4 py-[60px] md:py-[80px]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-1">
              <h1 className="text-[32px] md:text-[48px] font-bold mb-6">
                <span className="text-heading-dark block">{t.heroLine1}</span>
                <span className="ai-gradient-text block">{t.heroLine2}</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-body mb-8 max-w-[500px]">
                {t.heroSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/s/ai_site_builder" className="btn-primary btn-large w-full sm:w-auto">
                  {t.ctaStartBuilding}
                </a>
                <a href="#all-generators" className="btn-secondary btn-large w-full sm:w-auto">
                  {t.ctaBrowse}
                </a>
              </div>
            </div>
            <div className="order-2 flex justify-center">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[400px] h-auto text-brand-purple opacity-20">
                <rect x="20" y="20" width="360" height="260" rx="4" stroke="currentColor" strokeWidth="2"/>
                <rect x="40" y="40" width="320" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="40" y="100" width="100" height="140" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="160" y="100" width="200" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="160" y="140" width="200" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="160" y="180" width="200" height="60" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 3. Featured Generators */}
        <section className="container mx-auto px-4 py-[40px] border-t border-subtle-divider">
          <h2 className="text-[26px] md:text-[32px] text-center mb-2">{t.featuredHeading}</h2>
          <p className="text-body text-center mb-10">{t.featuredSubheading}</p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {featuredGenerators.map((gen, idx) => (
              <a key={idx} href={`/generators/${gen.slug}`} className="card block no-underline group">
                <div className="flex justify-between items-start mb-4">
                  <span className="tag">{gen.cat}</span>
                </div>
                <h4 className="text-[18px] font-bold text-heading-dark mb-2 group-hover:text-brand-purple transition-colors">{gen.name}</h4>
                <p className="text-body text-[14px]">{gen.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Section 4. Browse by Category */}
        <section className="bg-light-bg py-[60px]">
          <div className="container mx-auto px-4">
            <h2 className="text-[26px] md:text-[32px] text-center mb-10">{t.browseCategoryHeading}</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
              {Object.values(t.categories).map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} className="card flex flex-col items-start gap-4 hover:border-brand-purple transition-all group">
                  <div className="p-3 bg-brand-purple/5 rounded-full text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                    {cat.id === 'websites' && <Globe size={24} />}
                    {cat.id === 'landing-pages' && <Layout size={24} />}
                    {cat.id === 'portfolios' && <User size={24} />}
                    {cat.id === 'blogs' && <MessageSquare size={24} />}
                    {cat.id === 'stores' && <ShoppingBag size={24} />}
                    {cat.id === 'link-in-bio' && <Link2 size={24} />}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-heading-dark mb-1">{cat.title}</h3>
                    <p className="text-body text-[13px]">{cat.desc}</p>
                  </div>
                  <ChevronRight size={18} className="mt-auto self-end text-brand-purple group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5. All Generators directory */}
        <section id="all-generators" className="container mx-auto px-4 py-[60px]">
          <h2 className="text-[26px] md:text-[32px] mb-2">{t.allGeneratorsHeading}</h2>
          <p className="text-body mb-8">{t.allGeneratorsSubheading}</p>

          <div className="relative mb-10">
            <div className="relative max-w-[480px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-body" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label="Search generators"
                className="w-full h-[44px] pl-10 pr-4 border border-card-border rounded-[4px] focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-[14px] text-body">
                {t.resultCount(totalMatches)}
              </p>
            )}
          </div>

          {totalMatches === 0 ? (
            <div className="text-center py-20 border border-dashed border-card-border rounded-[3px]">
              <p className="text-body mb-4">{t.noResults}</p>
              <button onClick={() => setSearchQuery('')} className="btn-secondary mx-auto mb-4">Clear search</button>
              <a href="/s/ai_site_builder" className="text-brand-purple font-medium hover:underline block">
                Start with our AI builder
              </a>
            </div>
          ) : (
            Object.keys(filteredGenerators).map((catId) => {
              const cat = t.categories[catId]
              const items = filteredGenerators[catId]
              const isExpanded = expandedCategories[catId] || searchQuery
              const visibleItems = isExpanded ? items : items.slice(0, 6)

              return (
                <div key={catId} id={catId} className="mb-[60px] last:mb-0">
                  <div className="border-b border-subtle-divider mb-6 pb-4">
                    <h3 className="text-[20px] font-bold text-heading-dark mb-1">{cat.title}</h3>
                    <p className="text-body text-[14px]">{cat.desc}</p>
                  </div>
                  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {visibleItems.map((gen, idx) => (
                      <a key={idx} href={`/generators/${gen.slug}`} className="card group">
                         <div className="mb-4 text-brand-purple opacity-40">
                             {catId === 'websites' && <Globe size={32} />}
                             {catId === 'landing-pages' && <Layout size={32} />}
                             {catId === 'portfolios' && <User size={32} />}
                             {catId === 'blogs' && <MessageSquare size={32} />}
                             {catId === 'stores' && <ShoppingBag size={32} />}
                             {catId === 'link-in-bio' && <Link2 size={32} />}
                         </div>
                        <h4 className="text-[18px] font-bold text-heading-dark mb-2 group-hover:text-brand-purple transition-colors">{gen.name}</h4>
                        <p className="text-body text-[14px]">{gen.desc}</p>
                      </a>
                    ))}
                  </div>
                  {!searchQuery && items.length > 6 && (
                    <button
                      onClick={() => toggleCategory(catId)}
                      aria-expanded={isExpanded}
                      aria-controls={`grid-${catId}`}
                      className="mt-8 flex items-center gap-2 text-brand-purple font-heading text-[12px] uppercase hover:underline"
                    >
                      {isExpanded ? 'Show less' : `Show all ${items.length} ${cat.title}`}
                      <ChevronDown size={14} className={cn("transition-transform", isExpanded && "rotate-180")} />
                    </button>
                  )}
                </div>
              )
            })
          )}
        </section>

        {/* Section 6. How It Works */}
        <section className="bg-light-bg py-[60px]">
          <div className="container mx-auto px-4">
            <h2 className="text-[26px] md:text-[32px] text-center mb-10">{t.howItWorksHeading}</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {t.howItWorksSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-[20px] mb-6">
                    {idx + 1}
                  </div>
                  <h4 className="text-[16px] font-bold text-heading-dark mb-3">{step.title}</h4>
                  <p className="text-body max-w-[300px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7. Why Strikingly */}
        <section className="container mx-auto px-4 py-[60px]">
          <h2 className="text-[26px] md:text-[32px] text-center mb-10">{t.whyStrikinglyHeading}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.whyStrikinglyClaims.map((claim, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-subtle-divider rounded-[3px]">
                <div className="text-brand-purple mb-4">
                   {idx === 0 && <Globe size={40} />}
                   {idx === 1 && <Layout size={40} />}
                   {idx === 2 && <ShoppingBag size={40} />}
                </div>
                <h4 className="text-[16px] font-bold text-heading-dark mb-3">{claim.title}</h4>
                <p className="text-body">{claim.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8. FAQ */}
        <section className="bg-light-bg py-[60px]">
          <div className="container mx-auto px-4 max-w-[800px]">
            <h2 className="text-[26px] md:text-[32px] text-center mb-10">{t.faqHeading}</h2>
            <div className="space-y-4">
              {t.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-card-border rounded-[3px] overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                    aria-expanded={expandedFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-light-bg transition-colors"
                  >
                    <span className="font-bold text-heading-dark">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-body transition-transform", expandedFaq === idx && "rotate-180")} />
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-300",
                      expandedFaq === idx ? "max-h-[500px] pb-6" : "max-h-0"
                    )}
                  >
                    <div className="text-body prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9. Closing CTA */}
        <section className="container mx-auto px-4 py-[80px] text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-heading-dark mb-4">{t.readyToBuildHeading}</h2>
          <p className="text-[16px] text-body mb-8">{t.readyToBuildSub}</p>
          <a href="/s/ai_site_builder" className="btn-primary btn-large mx-auto inline-flex items-center">
            {t.ctaFooter}
          </a>
        </section>
      </main>

      {/* Section 10. Footer */}
      <footer className="mt-auto bg-heading-dark text-[#D1D5DB] py-[60px]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
               <a href="/" className="font-heading text-[20px] text-white flex items-center gap-2 mb-6">
                <span className="text-brand-purple">strikingly</span>
                <span className="font-light">AI</span>
              </a>
              <p className="text-[14px] leading-relaxed max-w-[300px]">
                The AI website builder that lets anyone build a professional site in seconds. Join millions of users worldwide.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-[12px]">Product</h5>
              <ul className="space-y-2 text-[13px]">
                <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-[12px]">Resources</h5>
              <ul className="space-y-2 text-[13px]">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-[12px]">Legal</h5>
              <ul className="space-y-2 text-[13px]">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-[60px] pt-[20px] border-t border-gray-700 flex flex-col md:row items-center justify-between gap-4 text-[12px]">
            <p>&copy; 2026 Strikingly. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
