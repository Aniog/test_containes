import './App.css'
import strings from './strings'
import { useEffect } from 'react'

function App() {
  const s = strings.en;
  
  // Search functionality
  useEffect(() => {
    const searchInput = document.getElementById('generator-search');
    const resultsCount = document.getElementById('search-results-count');
    const noResults = document.getElementById('search-no-results');
    const clearBtn = document.getElementById('clear-search');
    
    if (!searchInput) return;
    
    const handleSearch = () => {
      const query = searchInput.value.toLowerCase().trim();
      const sections = document.querySelectorAll('.category-section');
      let totalVisible = 0;
      
      sections.forEach(section => {
        const cards = section.querySelectorAll('.generator-card');
        let sectionHasVisible = false;
        
        cards.forEach(card => {
          const name = card.getAttribute('data-name') || '';
          const desc = card.getAttribute('data-desc') || '';
          const category = card.getAttribute('data-category') || '';
          const isMatch = !query || name.includes(query) || desc.includes(query) || category.includes(query);
          
          if (isMatch) {
            card.style.display = '';
            sectionHasVisible = true;
            totalVisible++;
          } else {
            card.style.display = 'none';
          }
        });
        
        if (query && !sectionHasVisible) {
          section.style.display = 'none';
        } else {
          section.style.display = '';
        }
      });
      
      if (resultsCount) {
        if (query) {
          resultsCount.textContent = s.searchResultsCount.replace('{count}', totalVisible);
          resultsCount.style.display = '';
        } else {
          resultsCount.style.display = 'none';
        }
      }
      
      if (noResults) {
        if (query && totalVisible === 0) {
          noResults.classList.remove('hidden');
          noResults.style.display = 'block';
        } else {
          noResults.classList.add('hidden');
          noResults.style.display = 'none';
        }
      }
    };
    
    searchInput.addEventListener('input', handleSearch);
    
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch();
        searchInput.focus();
      });
    }
    
    return () => {
      searchInput.removeEventListener('input', handleSearch);
      if (clearBtn) {
        clearBtn.removeEventListener('click', () => {});
      }
    };
  }, [s]);
  
  // Show more toggles
  useEffect(() => {
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    
    showMoreBtns.forEach(btn => {
      const section = btn.closest('.category-section');
      const grid = section?.querySelector('.generator-grid');
      if (!grid) return;
      
      const cards = grid.querySelectorAll('.generator-card');
      const initialShow = 6;
      
      if (cards.length > initialShow) {
        cards.forEach((card, i) => {
          if (i >= initialShow) {
            card.style.display = 'none';
          }
        });
        
        btn.style.display = '';
        btn.textContent = `Show all ${cards.length} generators`;
        
        btn.addEventListener('click', () => {
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          
          if (isExpanded) {
            cards.forEach((card, i) => {
              if (i >= initialShow) {
                card.style.display = 'none';
              }
            });
            btn.textContent = `Show all ${cards.length} generators`;
            btn.setAttribute('aria-expanded', 'false');
          } else {
            cards.forEach(card => {
              card.style.display = '';
            });
            btn.textContent = 'Show less';
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      } else {
        btn.style.display = 'none';
      }
    });
    
    return () => {
      showMoreBtns.forEach(btn => {
        btn.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  // FAQ accordion
  useEffect(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const answer = document.getElementById(`faq-answer-${i}`);
        const icon = btn.querySelector('svg');
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        
        // Close all
        faqQuestions.forEach((q, j) => {
          const a = document.getElementById(`faq-answer-${j}`);
          const ic = q.querySelector('svg');
          q.setAttribute('aria-expanded', 'false');
          if (a) a.style.maxHeight = '0px';
          if (ic) ic.style.transform = 'rotate(0deg)';
        });
        
        // Open clicked if was closed
        if (!isExpanded && answer) {
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = '500px';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
    
    return () => {
      faqQuestions.forEach(btn => {
        btn.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Section 0: Top bar */}
      <nav className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-[60px] flex items-center">
          <a href="/" className="text-[#2E2E2F] font-bold text-lg" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700}}>
            {s.logo}
          </a>
        </div>
      </nav>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E4E7]">
        <div className="max-w-[1200px] mx-auto px-5 py-3">
          <ol className="flex items-center gap-2 text-sm" style={{color: '#636972'}}>
            <li>
              <a href="/" className="hover:text-[#2E2E2F]">{s.breadcrumbHome}</a>
            </li>
            <li aria-hidden="true">
              <span className="text-[#C6C9CD]"> &gt; </span>
            </li>
            <li aria-current="page" className="text-[#2E2E2F] font-medium">
              {s.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="relative bg-white" style={{background: 'radial-gradient(ellipse at top right, rgba(118, 113, 255, 0.05) 0%, rgba(203, 12, 159, 0.03) 50%, transparent 70%)'}}>
          <div className="max-w-[1200px] mx-auto px-5" style={{paddingTop: '60px', paddingBottom: '80px'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="mb-6" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, lineHeight: 1.2}}>
                  <span className="block text-[#2E2E2F]" style={{fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase'}}>
                    {s.heroH1Line1}
                  </span>
                  <span className="block bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent" style={{fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase'}}>
                    {s.heroH1Line2}
                  </span>
                </h1>
                <p className="mb-8 max-w-[480px]" style={{color: '#636972', fontSize: '14px', lineHeight: 1.5}}>
                  {s.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a href="/s/ai_site_builder" className="inline-flex items-center justify-center px-[15px] h-[44px] rounded-[4px] text-white font-bold text-[14px] uppercase" style={{background: 'linear-gradient(to right, #7671FF, #CB0C9F)', fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700}}>
                    {s.heroCtaPrimary}
                  </a>
                  <a href="#all-generators" className="inline-flex items-center justify-center px-[15px] h-[44px] rounded-[4px] border border-[#8159BB] text-[#8159BB] font-bold text-[14px] uppercase bg-transparent" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700}}>
                    {s.heroCtaSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="max-w-full h-auto">
                  <rect x="50" y="50" width="400" height="300" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
                  <rect x="70" y="70" width="360" height="40" rx="4" fill="#F4F6F8"/>
                  <rect x="70" y="120" width="200" height="20" rx="2" fill="#E2E4E7"/>
                  <rect x="70" y="150" width="360" height="15" rx="2" fill="#E2E4E7"/>
                  <rect x="70" y="175" width="320" height="15" rx="2" fill="#E2E4E7"/>
                  <rect x="70" y="200" width="340" height="15" rx="2" fill="#E2E4E7"/>
                  <rect x="70" y="240" width="150" height="80" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
                  <rect x="230" y="240" width="200" height="80" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
                  <circle cx="250" cy="30" r="20" stroke="#8159BB" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                  <path d="M250 15 L250 45 M235 30 L265 30" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="bg-white" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-2" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.featuredHeading}
            </h2>
            <p className="mb-8" style={{color: '#636972', fontSize: '14px', lineHeight: 1.5}}>
              {s.featuredSubheading}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator'},
                {name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator'},
                {name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker'},
                {name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder'},
                {name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator'},
                {name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder'},
                {name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator'},
                {name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder'},
                {name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners'},
              ].map((gen, i) => (
                <a key={i} href={`/generators/${gen.slug}`} className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:shadow-lg hover:border-[#8159BB] transition-all duration-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-[#2E2E2F]" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                      {gen.name}
                    </h3>
                    <span className="shrink-0 text-[11px] uppercase px-2 py-1 rounded-[3px] border border-[#8159BB] text-[#8159BB]" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700}}>
                      {gen.category}
                    </span>
                  </div>
                  <p className="text-[#636972] text-[14px] leading-[1.5]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {gen.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="bg-[#F4F6F8]" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-8" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.browseHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {name: 'Websites', desc: 'AI-built business and personal sites for any goal.', icon: '🌐', hash: '#websites'},
                {name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', icon: '📄', hash: '#landing-pages'},
                {name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', icon: '🎨', hash: '#portfolios'},
                {name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', icon: '📝', hash: '#blogs'},
                {name: 'Online Stores', desc: 'Sell products online with payments built in.', icon: '🛒', hash: '#stores'},
                {name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', icon: '🔗', hash: '#link-in-bio'},
              ].map((cat, i) => (
                <a key={i} href={cat.hash} className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:shadow-lg hover:border-[#8159BB] transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F4F6F8] rounded flex items-center justify-center text-2xl shrink-0">
                      {cat.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#2E2E2F] mb-1" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase'}}>
                        {cat.name}
                      </h3>
                      <p className="text-[#636972] text-[14px] leading-[1.5] mb-3" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        {cat.desc}
                      </p>
                      <span className="inline-flex items-center text-[#8159BB] text-[14px] font-bold" style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                        Browse →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators Directory */}
        <section id="all-generators" className="bg-white" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-2" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.allGeneratorsHeading}
            </h2>
            <p className="mb-8" style={{color: '#636972', fontSize: '14px', lineHeight: 1.5}}>
              {s.allGeneratorsSubheading}
            </p>
            
            {/* Search Input */}
            <div className="mb-10 max-w-[480px]">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#636972]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input 
                  type="search" 
                  aria-label="Search generators"
                  placeholder={s.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-[#C6C9CD] rounded-[3px] text-[14px] focus:outline-none focus:border-[#8159BB]"
                  style={{fontFamily: 'Open Sans, sans-serif', color: '#2E2E2F'}}
                  id="generator-search"
                />
              </div>
              <div id="search-results-count" className="mt-2 text-[14px]" style={{color: '#636972'}}></div>
              <div id="search-no-results" className="hidden mt-4 p-5 bg-[#F4F6F8] rounded-[3px] text-center">
                <p className="mb-3" style={{color: '#636972'}}>{s.searchNoResults}</p>
                <button id="clear-search" className="text-[#8159BB] font-bold underline mr-4" style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                  {s.searchClear}
                </button>
                <a href="/s/ai_site_builder" className="text-[#8159BB] font-bold" style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                  {s.searchCantFind}
                </a>
              </div>
            </div>

            {/* Category Subsections */}
            {[
              {
                id: 'websites',
                name: 'Websites',
                desc: 'Business and personal sites for any goal.',
                generators: [
                  {name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator'},
                  {name: 'Free Website Builder for Photographers', desc: 'Portfolio and booking in one place', slug: 'free-website-builder-for-photographers'},
                  {name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests', slug: 'one-page-wedding-website-builder'},
                  {name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder'},
                  {name: 'Yoga Studio Website Generator', desc: 'Class schedules and memberships', slug: 'yoga-studio-website-generator'},
                  {name: 'Real Estate Agent Website Builder', desc: 'Listings and lead capture', slug: 'real-estate-agent-website-builder'},
                  {name: 'Nonprofit Website Generator', desc: 'Donations and mission-focused', slug: 'nonprofit-website-generator'},
                  {name: 'Consultant Website Builder', desc: 'Services and client testimonials', slug: 'consultant-website-builder'},
                  {name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder'},
                  {name: 'AI Business Website Maker', desc: 'Professional sites in seconds', slug: 'ai-business-website-maker'},
                ]
              },
              {
                id: 'landing-pages',
                name: 'Landing Pages',
                desc: 'Single-page sites built to convert visitors fast.',
                generators: [
                  {name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker'},
                  {name: 'Product Launch Landing Page', desc: 'Features, pricing, and signup', slug: 'product-launch-landing-page'},
                  {name: 'Event Registration Landing Page', desc: 'RSVP and event details', slug: 'event-registration-landing-page'},
                  {name: 'Lead Generation Landing Page', desc: 'Capture leads with forms', slug: 'lead-generation-landing-page'},
                  {name: 'App Download Landing Page', desc: 'Drive installs with features', slug: 'app-download-landing-page'},
                  {name: 'Webinar Registration Page', desc: 'Sign up and calendar integration', slug: 'webinar-registration-page'},
                  {name: 'Course Sales Landing Page', desc: 'Sell your online course', slug: 'course-sales-landing-page'},
                  {name: 'Book Launch Landing Page', desc: 'Pre-orders and author bio', slug: 'book-launch-landing-page'},
                  {name: 'Free Trial Landing Page', desc: 'Convert visitors to users', slug: 'free-trial-landing-page'},
                  {name: 'Coming Soon Landing Page', desc: 'Build hype before launch', slug: 'coming-soon-landing-page'},
                ]
              },
              {
                id: 'portfolios',
                name: 'Portfolios',
                desc: 'Showcase your work with a clean, focused site.',
                generators: [
                  {name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator'},
                  {name: 'Portfolio Generator for Designers', desc: 'Case studies and galleries', slug: 'portfolio-generator-for-designers'},
                  {name: 'Photography Portfolio Website', desc: 'Galleries and client proofing', slug: 'photography-portfolio-website'},
                  {name: 'Artist Portfolio Generator', desc: 'Showcase your artwork', slug: 'artist-portfolio-generator'},
                  {name: 'Architecture Portfolio Website', desc: 'Project showcases and resumes', slug: 'architecture-portfolio-website'},
                  {name: 'Model Portfolio Generator', desc: 'Headshots and experience', slug: 'model-portfolio-generator'},
                  {name: 'Developer Portfolio Builder', desc: 'Projects and GitHub integration', slug: 'developer-portfolio-builder'},
                  {name: 'Writer Portfolio Generator', desc: 'Clips and bylines', slug: 'writer-portfolio-generator'},
                  {name: 'Music Portfolio Website', desc: 'Audio samples and tour dates', slug: 'music-portfolio-website'},
                  {name: 'Fashion Portfolio Generator', desc: 'Lookbook and contact info', slug: 'fashion-portfolio-generator'},
                ]
              },
              {
                id: 'blogs',
                name: 'Blogs',
                desc: 'Publish-ready blogs with built-in SEO basics.',
                generators: [
                  {name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners'},
                  {name: 'Travel Blog Generator', desc: 'Maps and photo galleries', slug: 'travel-blog-generator'},
                  {name: 'Food Blog Website Builder', desc: 'Recipes and restaurant reviews', slug: 'food-blog-website-builder'},
                  {name: 'Personal Blog Generator', desc: 'Thoughts and stories', slug: 'personal-blog-generator'},
                  {name: 'Tech Blog Website Builder', desc: 'Code snippets and tutorials', slug: 'tech-blog-website-builder'},
                  {name: 'Lifestyle Blog Generator', desc: 'Categories and social sharing', slug: 'lifestyle-blog-generator'},
                  {name: 'News Blog Website Builder', desc: 'Categories and breaking news', slug: 'news-blog-website-builder'},
                  {name: 'Fashion Blog Generator', desc: 'Outfits and style guides', slug: 'fashion-blog-generator'},
                  {name: 'Parenting Blog Website', desc: 'Family stories and tips', slug: 'parenting-blog-website'},
                  {name: 'Finance Blog Generator', desc: 'Investment tips and calculators', slug: 'finance-blog-generator'},
                ]
              },
              {
                id: 'stores',
                name: 'Online Stores',
                desc: 'Sell products online with payments built in.',
                generators: [
                  {name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder'},
                  {name: 'Online Store Builder for Restaurants', desc: 'Menu items and pickup/delivery', slug: 'online-store-builder-for-restaurants'},
                  {name: 'Fashion Boutique Store Generator', desc: 'Size charts and lookbooks', slug: 'fashion-boutique-store-generator'},
                  {name: 'Digital Products Store Builder', desc: 'Downloads and memberships', slug: 'digital-products-store-builder'},
                  {name: 'Handmade Crafts Store Generator', desc: 'Artisan products and stories', slug: 'handmade-crafts-store-generator'},
                  {name: 'Electronics Store Website', desc: 'Specs and comparisons', slug: 'electronics-store-website'},
                  {name: 'Beauty Products Store Builder', desc: 'Skin type quiz and recommendations', slug: 'beauty-products-store-builder'},
                  {name: 'Sports Equipment Store', desc: 'Gear guides and reviews', slug: 'sports-equipment-store'},
                  {name: 'Bookstore Website Generator', desc: 'Authors and recommendations', slug: 'bookstore-website-generator'},
                  {name: 'Subscription Box Store Builder', desc: 'Recurring billing and surprises', slug: 'subscription-box-store-builder'},
                ]
              },
              {
                id: 'link-in-bio',
                name: 'Link-in-Bio',
                desc: 'One link, all your places. Made for creators.',
                generators: [
                  {name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator'},
                  {name: 'Creator Link-in-Bio Builder', desc: 'All your content in one place', slug: 'creator-link-in-bio-builder'},
                  {name: 'Musician Link-in-Bio Generator', desc: 'Streaming links and tour dates', slug: 'musician-link-in-bio-generator'},
                  {name: 'Influencer Link-in-Bio Builder', desc: 'Brand deals and social links', slug: 'influencer-link-in-bio-builder'},
                  {name: 'Podcaster Link-in-Bio Generator', desc: 'Episodes and show notes', slug: 'podcaster-link-in-bio-generator'},
                  {name: 'Artist Link-in-Bio Website', desc: 'Portfolio and commission info', slug: 'artist-link-in-bio-website'},
                  {name: 'Entrepreneur Link-in-Bio Builder', desc: 'Business links and calendar', slug: 'entrepreneur-link-in-bio-builder'},
                  {name: 'Streamer Link-in-Bio Generator', desc: 'Schedule and donation links', slug: 'streamer-link-in-bio-generator'},
                  {name: 'Photographer Link-in-Bio', desc: 'Portfolio and booking links', slug: 'photographer-link-in-bio'},
                  {name: 'Free Link-in-Bio Generator', desc: 'Simple and fast, no fee', slug: 'free-link-in-bio-generator'},
                ]
              },
            ].map((category, idx) => (
              <div key={idx} id={category.id} className="mb-10 category-section">
                <h3 className="mb-2" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
                  {category.name}
                </h3>
                <p className="mb-5" style={{color: '#636972', fontSize: '14px', lineHeight: 1.5}}>
                  {category.desc}
                </p>
                <div className="generator-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.generators.map((gen, i) => (
                    <a key={i} href={`/generators/${gen.slug}`} className="generator-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5 hover:shadow-lg hover:border-[#8159BB] transition-all duration-200" data-name={gen.name.toLowerCase()} data-desc={gen.desc.toLowerCase()} data-category={category.name.toLowerCase()}>
                      <div className="w-10 h-10 bg-[#F4F6F8] rounded flex items-center justify-center mb-3 text-xl">
                        {category.id === 'websites' && '🌐'}
                        {category.id === 'landing-pages' && '📄'}
                        {category.id === 'portfolios' && '🎨'}
                        {category.id === 'blogs' && '📝'}
                        {category.id === 'stores' && '🛒'}
                        {category.id === 'link-in-bio' && '🔗'}
                      </div>
                      <h4 className="font-bold text-[#2E2E2F] mb-1" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                        {gen.name}
                      </h4>
                      <p className="text-[#636972] text-[14px] leading-[1.5]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                        {gen.desc}
                      </p>
                    </a>
                  ))}
                </div>
                {category.generators.length > 6 && (
                  <button className="show-more-btn mt-5 text-[#8159BB] font-bold text-[14px] underline" style={{fontFamily: 'Josefin Sans, sans-serif'}} data-expanded="false" aria-expanded="false" aria-controls={`${category.id}-grid`}>
                    Show all {category.generators.length} generators
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="bg-[#F4F6F8]" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-8" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.howItWorksHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {step: 1, title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.'},
                {step: 2, title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.'},
                {step: 3, title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.'},
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8159BB] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#2E2E2F] mb-2" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase'}}>
                    {item.title}
                  </h3>
                  <p className="text-[#636972] text-[14px] leading-[1.5]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="bg-white" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-8" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.whyHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {icon: '⚡', title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.'},
                {icon: '📱', title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.'},
                {icon: '🎁', title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.'},
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#2E2E2F] mb-2" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase'}}>
                    {item.title}
                  </h3>
                  <p className="text-[#636972] text-[14px] leading-[1.5]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="bg-[#F4F6F8]" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="mb-8" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.faqHeading}
            </h2>
            <div className="max-w-[800px]">
              {[
                {q: 'What is an AI site generator?', a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of choosing a template and manually adding content, you describe your business or project, and the AI builds a custom site with relevant sections, text, and images in seconds.'},
                {q: 'How is a generator different from a template?', a: 'A template is a pre-designed layout that you customize with your own content. A generator creates a unique site structure and content based on your specific needs. With a generator, no two sites are exactly alike, whereas templates are the same layout used by many different sites.'},
                {q: 'Are these generators free to use?', a: 'Yes! You can generate, customize, and publish your site for free. Strikingly offers a free plan that lets you build and launch your site without a credit card. Premium features like custom domains and advanced e-commerce are available on paid plans.'},
                {q: 'What kinds of sites can I build?', a: 'You can build virtually any kind of website: business sites, portfolios, blogs, online stores, landing pages, and link-in-bio pages. Each generator is optimized for its specific use case, so you get relevant features and content for what you\'re building.'},
                {q: 'Can I customize what the generator produces?', a: 'Absolutely. The generator gives you a starting point, but you have full control. You can edit any text, swap images, change colors, add or remove sections, and customize every part of your site. The AI just gets you 90% of the way there faster.'},
                {q: 'Do generated sites work on mobile?', a: 'Yes! Every site generated by Strikingly is fully responsive and works beautifully on phones, tablets, and desktops. The AI automatically creates layouts that adapt to different screen sizes, so your visitors get a great experience no matter what device they\'re using.'},
              ].map((faq, i) => (
                <div key={i} className="mb-4">
                  <button 
                    className="faq-question w-full text-left bg-white border border-[#C6C9CD] rounded-[3px] p-4 hover:border-[#8159BB] transition-all duration-200 flex items-center justify-between" 
                    aria-expanded={i === 0 ? 'true' : 'false'}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="font-bold text-[#2E2E2F] pr-4" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                      {faq.q}
                    </span>
                    <svg className={`w-5 h-5 shrink-0 text-[#8159BB] transition-transform duration-200 ${i === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  <div 
                    id={`faq-answer-${i}`}
                    className={`faq-answer bg-white border border-t-0 border-[#C6C9CD] rounded-b-[3px] px-4 overflow-hidden transition-all duration-300 ${i === 0 ? 'py-4' : 'max-h-0'}`}
                    style={{maxHeight: i === 0 ? '500px' : '0px'}}
                  >
                    <p className="text-[#636972] text-[14px] leading-[1.5]" style={{fontFamily: 'Open Sans, sans-serif'}}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="bg-white" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          <div className="max-w-[1200px] mx-auto px-5 text-center">
            <h2 className="mb-4" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 32px)', color: '#4B5056', textTransform: 'uppercase', lineHeight: 1.2}}>
              {s.closingHeading}
            </h2>
            <p className="mb-8 max-w-[600px] mx-auto" style={{color: '#636972', fontSize: '14px', lineHeight: 1.5}}>
              {s.closingSub}
            </p>
            <a href="/s/ai_site_builder" className="inline-flex items-center justify-center px-[15px] h-[44px] rounded-[4px] text-white font-bold text-[14px] uppercase" style={{background: 'linear-gradient(to right, #7671FF, #CB0C9F)', fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700}}>
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7]" style={{paddingTop: '40px', paddingBottom: '40px'}}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#2E2E2F] mb-3" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                Product
              </h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">About</a></li>
                <li><a href="/pricing" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Pricing</a></li>
                <li><a href="/templates" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Templates</a></li>
                <li><a href="/s/ai_site_builder" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">AI Site Builder</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2E2E2F] mb-3" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                Resources
              </h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Blog</a></li>
                <li><a href="/support" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Support</a></li>
                <li><a href="/generators" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Generators</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2E2E2F] mb-3" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                Legal
              </h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Terms</a></li>
                <li><a href="/privacy" className="text-[#636972] hover:text-[#2E2E2F] text-[14px]">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#2E2E2F] mb-3" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '16px'}}>
                Connect
              </h3>
              <ul className="space-y-2">
                <li><span className="text-[#636972] text-[14px]">Twitter</span></li>
                <li><span className="text-[#636972] text-[14px]">Facebook</span></li>
                <li><span className="text-[#636972] text-[14px]">Instagram</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E2E4E7] pt-8 text-center">
            <p className="text-[#636972] text-[14px]">
              {s.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
