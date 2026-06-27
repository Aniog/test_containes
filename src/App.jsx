import React from 'react'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [expandedSections, setExpandedSections] = React.useState({})
  const [expandedFAQ, setExpandedFAQ] = React.useState(1)

  // Featured generators data
  const featuredGenerators = [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
    { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' }
  ]

  // All generators data organized by category
  const allGenerators = {
    websites: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio with style', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'No-Code Website Builder', desc: 'Build without writing a single line', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs, zero design skills', slug: 'beautiful-website-generator' },
      { name: 'AI Website Builder for Yoga Instructors', desc: 'Share your classes with the world', slug: 'ai-website-builder-for-yoga-instructors' },
      { name: 'Free AI Website Generator', desc: 'Generate a site at no cost', slug: 'free-ai-website-generator' },
      { name: 'Small Business Website Builder', desc: 'Get online and start growing', slug: 'small-business-website-builder' },
      { name: 'AI Website Generator for Consultants', desc: 'Professional presence in seconds', slug: 'ai-website-generator-for-consultants' }
    ],
    landingPages: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', desc: 'High-converting pages at no cost', slug: 'free-landing-page-generator' },
      { name: 'One-Page Website Generator', desc: 'Everything in a single scroll', slug: 'one-page-website-generator' },
      { name: 'AI Sales Funnel Builder', desc: 'Turn visitors into customers', slug: 'ai-sales-funnel-builder' },
      { name: 'Lead Generation Landing Page', desc: 'Capture leads on autopilot', slug: 'lead-generation-landing-page' },
      { name: 'Event Registration Landing Page', desc: 'Sell tickets and track RSVPs', slug: 'event-registration-landing-page' },
      { name: 'Product Launch Landing Page', desc: 'Build hype and drive sales', slug: 'product-launch-landing-page' },
      { name: 'AI-Powered Landing Page Creator', desc: 'Let AI optimize for conversions', slug: 'ai-powered-landing-page-creator' }
    ],
    portfolios: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Put your best work front and center', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Website', desc: 'Let your images do the talking', slug: 'photography-portfolio-website' },
      { name: 'Artist Portfolio Builder', desc: 'A beautiful space for your art', slug: 'artist-portfolio-builder' },
      { name: 'Freelancer Portfolio Generator', desc: 'Win clients with a pro presence', slug: 'freelancer-portfolio-generator' },
      { name: 'Architecture Portfolio Website', desc: 'Showcase your built work', slug: 'architecture-portfolio-website' },
      { name: 'Fashion Portfolio Builder', desc: 'Display your collections online', slug: 'fashion-portfolio-builder' },
      { name: 'UX/UI Portfolio Generator', desc: 'Present your case studies clearly', slug: 'ux-ui-portfolio-generator' },
      { name: 'Model Portfolio Website', desc: 'Get scouted with a standout site', slug: 'model-portfolio-website' }
    ],
    blogs: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Writer', desc: 'Generate posts and layout together', slug: 'ai-blog-writer' },
      { name: 'Free Blog Website Builder', desc: 'Start writing at no cost', slug: 'free-blog-website-builder' },
      { name: 'SEO Blog Generator', desc: 'Posts optimized to rank on Google', slug: 'seo-blog-generator' },
      { name: 'Newsletter Blog Builder', desc: 'Grow your subscriber list', slug: 'newsletter-blog-builder' },
      { name: 'Travel Blog Website Generator', desc: 'Share your adventures beautifully', slug: 'travel-blog-website-generator' },
      { name: 'Food Blog Generator', desc: 'Recipe-ready layouts and design', slug: 'food-blog-generator' },
      { name: 'Personal Blog Website Builder', desc: 'Your own corner of the internet', slug: 'personal-blog-website-builder' }
    ],
    stores: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Free Ecommerce Website Builder', desc: 'Open shop with zero upfront cost', slug: 'free-ecommerce-website-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Sell merch and gift cards', slug: 'online-store-builder-for-restaurants' },
      { name: 'Dropshipping Store Generator', desc: 'Launch without holding inventory', slug: 'dropshipping-store-generator' },
      { name: 'Handmade Shop Website Builder', desc: 'Sell crafts and handmade goods', slug: 'handmade-shop-website-builder' },
      { name: 'Fashion Ecommerce Website Generator', desc: 'Lookbook-ready online store', slug: 'fashion-ecommerce-website-generator' },
      { name: 'Digital Products Store Builder', desc: 'Sell downloads, courses, and memberships', slug: 'digital-products-store-builder' },
      { name: 'Pop-Up Shop Website Generator', desc: 'Fast setup for short-term sales', slug: 'pop-up-shop-website-generator' }
    ],
    linkInBio: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Website', desc: 'Free forever, upgrade when you're ready', slug: 'free-link-in-bio-website' },
      { name: 'Creator Link-in-Bio Builder', desc: 'Built for influencers and streamers', slug: 'creator-link-in-bio-builder' },
      { name: 'Musician Link-in-Bio Generator', desc: 'Streaming links, tour dates, and more', slug: 'musician-link-in-bio-generator' },
      { name: 'Artist Link-in-Bio Website', desc: 'Your work, your shop, your socials', slug: 'artist-link-in-bio-website' },
      { name: 'Podcaster Link-in-Bio Builder', desc: 'Episodes, transcripts, and subscribe links', slug: 'podcaster-link-in-bio-builder' },
      { name: 'Influencer Link-in-Bio Generator', desc: 'Brand partnerships and affiliate links', slug: 'influencer-link-in-bio-generator' },
      { name: 'Free Link-in-Bio Page Creator', desc: 'Simple, fast, and completely free', slug: 'free-link-in-bio-page-creator' }
    ]
  }

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  // Search functionality
  React.useEffect(() => {
    if (!searchQuery) {
      // Show all cards
      document.querySelectorAll('.generator-card').forEach(card => {
        card.style.display = ''
      })
      document.querySelectorAll('.generator-subsection').forEach(section => {
        section.style.display = ''
      })
      return
    }

    const query = searchQuery.toLowerCase()
    
    document.querySelectorAll('.generator-subsection').forEach(section => {
      const cards = section.querySelectorAll('.generator-card')
      let hasMatch = false
      
      cards.forEach(card => {
        const name = card.querySelector('h4')?.textContent.toLowerCase() || ''
        const desc = card.querySelector('p')?.textContent.toLowerCase() || ''
        const category = section.querySelector('h3')?.textContent.toLowerCase() || ''
        
        if (name.includes(query) || desc.includes(query) || category.includes(query)) {
          card.style.display = ''
          hasMatch = true
        } else {
          card.style.display = 'none'
        }
      })
      
      section.style.display = hasMatch ? '' : 'none'
    })
  }, [searchQuery])

  const categoryCards = [
    { title: 'WEBSITES', desc: 'AI-built business and personal sites for any goal.', icon: 'web', slug: 'websites' },
    { title: 'LANDING PAGES', desc: 'Single-page sites built to convert visitors fast.', icon: 'landing', slug: 'landing-pages' },
    { title: 'PORTFOLIOS', desc: 'Showcase your work with a clean, focused site.', icon: 'portfolio', slug: 'portfolios' },
    { title: 'BLOGS', desc: 'Publish-ready blogs with built-in SEO basics.', icon: 'blog', slug: 'blogs' },
    { title: 'ONLINE STORES', desc: 'Sell products online with payments built in.', icon: 'store', slug: 'stores' },
    { title: 'LINK-IN-BIO', desc: 'One link, all your places. Made for creators.', icon: 'link', slug: 'link-in-bio' }
  ]

  const steps = [
    { num: 1, title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
    { num: 2, title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
    { num: 3, title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' }
  ]

  const features = [
    { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
    { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
    { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' }
  ]

  const faqs = [
    { 
      q: 'What is an AI site generator?', 
      a: 'An AI site generator is a tool that uses artificial intelligence to automatically create a complete website based on your inputs. Instead of starting with a blank page or a generic template, you describe what you need, and the AI builds a custom site with relevant text, images, layout, and functionality in seconds. Strikingly\'s AI site generator goes beyond basic layout. It writes your copy, selects appropriate imagery, sets up navigation, and even configures features like contact forms and ecommerce sections based on your business type.'
    },
    { 
      q: 'How is a generator different from a template?', 
      a: 'A template is a static starting point. You pick a design, then manually replace all the placeholder text and images with your own content. It\'s faster than building from scratch, but you\'re still doing the work of adapting the template to your needs. A generator creates a custom site from scratch based on your specific inputs. The AI writes original copy for your business, selects images that match your industry, and structures the layout around your goals. No two generated sites are exactly alike, even for the same generator.'
    },
    { 
      q: 'Are these generators free to use?', 
      a: 'Yes, all Strikingly generators are free to try. You can generate a complete site, customize it, and publish to a Strikingly subdomain at no cost. This gives you a live, working website that you can share immediately. If you want to use your own custom domain (like www.yourbusiness.com), remove Strikingly branding, or access advanced features like ecommerce and analytics, you can upgrade to a paid plan. But there\'s no credit card required to start, and no time limit on the free version.'
    },
    { 
      q: 'What kinds of sites can I build?', 
      a: 'You can build virtually any kind of website with our generators. The most popular categories include business websites, online stores, portfolios, blogs, landing pages, and link-in-bio pages. Within each category, there are specialized generators for specific industries and use cases. For example, in the "Websites" category alone, you\'ll find generators for restaurants, photographers, yoga instructors, wedding couples, small businesses, and more. Each generator is tuned to produce industry-appropriate layouts, copy, and features.'
    },
    { 
      q: 'Can I customize what the generator produces?', 
      a: 'Absolutely. The generator gives you a complete, working site as a starting point. From there, you can customize everything. Change the text, swap images, adjust colors, add or remove sections, update the layout, connect your social media, set up forms, configure ecommerce, and more. You can also go back to the AI and ask it to regenerate specific sections, try different color schemes, or rewrite copy. The editor is visual and intuitive, so you don\'t need any technical skills to make changes.'
    },
    { 
      q: 'Do generated sites work on mobile?', 
      a: 'Yes, every site generated by Strikingly is fully responsive and mobile-optimized from the start. The AI builds with a mobile-first approach, so your site will look great and function perfectly on smartphones, tablets, and desktops. You can preview how your site looks on different devices right in the editor, and make device-specific adjustments if needed. But in most cases, the generated site works beautifully across all screen sizes without any extra work.'
    }
  ]

  return (
    <main style={{minHeight: '100vh'}}>
      {/* Section 0: Top Bar */}
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E4E7',
        padding: '15px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center'}}>
          <a href="/" style={{display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#2E2E2F', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: 18}}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="28" height="28" rx="4" fill="#8159BB"/>
              <path d="M8 8H13V13H8V8ZM15 8H20V13H15V8ZM8 15H13V20H8V15ZM15 17.5C15 19.71 16.79 21.5 19 21.5C21.21 21.5 23 19.71 23 17.5C23 15.29 21.21 13.5 19 13.5C16.79 13.5 15 15.29 15 17.5Z" fill="white"/>
            </svg>
            <span>strikingly AI</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{padding: '12px 0', fontSize: 13, color: '#636972'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <ol style={{display: 'flex', listStyle: 'none', gap: 8, alignItems: 'center', padding: 0, margin: 0}}>
            <li><a href="/" style={{color: '#636972', textDecoration: 'none'}}>Strikingly</a></li>
            <li style={{color: '#636972'}}>&gt;</li>
            <li style={{color: '#4B5056'}} aria-current="page">AI Generators</li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section aria-labelledby="hero-heading" style={{padding: '60px 0 80px', position: 'relative', overflow: 'hidden'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center'}}>
            <div>
              <h1 id="hero-heading" style={{fontSize: 48, marginBottom: 20, color: '#2E2E2F', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2}}>
                <span style={{display: 'block', color: '#2E2E2F'}}>BUILD ANY KIND OF SITE</span>
                <span style={{display: 'block', background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>WITH AI, IN AN INSTANT</span>
              </h1>
              <p style={{fontSize: 16, lineHeight: 1.6, color: '#636972', marginBottom: 30, maxWidth: 480}}>Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <a href="/s/ai_site_builder" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: 4,
                  padding: '9px 15px',
                  height: 44,
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
                  color: '#FFFFFF'
                }}>START BUILDING - IT'S FREE</a>
                <a href="#all-generators" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: 4,
                  padding: '9px 15px',
                  height: 44,
                  border: '1px solid #8159BB',
                  cursor: 'pointer',
                  background: 'transparent',
                  color: '#8159BB'
                }}>BROWSE GENERATORS</a>
              </div>
            </div>
            <div aria-hidden="true" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {/* Hero illustration - soft purple line art */}
              <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', maxWidth: 500, height: 'auto'}}>
                <rect x="50" y="50" width="400" height="300" rx="8" stroke="#8159BB" stroke-width="2" fill="none" stroke-dasharray="8 4"/>
                <rect x="70" y="70" width="360" height="30" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/>
                <rect x="70" y="120" width="150" height="15" rx="2" fill="#E2E4E7"/>
                <rect x="70" y="145" width="200" height="10" rx="2" fill="#F4F6F8"/>
                <rect x="70" y="165" width="180" height="10" rx="2" fill="#F4F6F8"/>
                <rect x="280" y="115" width="150" height="180" rx="4" stroke="#8159BB" stroke-width="1.5" fill="none"/>
                <circle cx="355" cy="205" r="30" stroke="#8159BB" stroke-width="1.5" fill="none" stroke-dasharray="5 3"/>
                <rect x="90" y="210" width="100" height="35" rx="4" fill="url(#hero-gradient)"/>
                <rect x="90" y="260" width="120" height="10" rx="2" fill="#E2E4E7"/>
                <rect x="90" y="280" width="140" height="10" rx="2" fill="#F4F6F8"/>
                <defs>
                  <linearGradient id="hero-gradient" x1="90" y1="210" x2="190" y2="245" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7671FF"/>
                    <stop offset="1" stop-color="#CB0C9F"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section aria-labelledby="featured-heading" style={{backgroundColor: '#F4F6F8', padding: '40px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="featured-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>FEATURED GENERATORS</h2>
              <p style={{fontSize: 16, color: '#636972'}}>A few common starting points.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
              {featuredGenerators.map((gen, i) => (
                <a key={i} href={`/generators/${gen.slug}`} style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  padding: 20,
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                  <h3 style={{fontSize: 16, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h3>
                  <p style={{fontSize: 13, color: '#636972', marginBottom: 12, lineHeight: 1.4}}>{gen.desc}</p>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    padding: '2px 6px',
                    borderRadius: 3,
                    border: '1px solid #8159BB',
                    color: '#8159BB',
                    background: 'transparent',
                    letterSpacing: '0.5px'
                  }}>{gen.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section aria-labelledby="category-heading" style={{padding: '40px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="category-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>BROWSE BY CATEGORY</h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
              {categoryCards.map((cat, i) => (
                <a key={i} href={`#${cat.slug}`} style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  transition: 'all 0.2s ease'
                }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                  <div style={{width: 60, height: 60, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/* Category icon placeholder */}
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="40" height="40" rx="4" stroke="#8159BB" stroke-width="2"/>
                      {cat.icon === 'web' && <line x1="10" y1="20" x2="50" y2="20" stroke="#8159BB" stroke-width="2"/>}
                      {cat.icon === 'landing' && <path d="M10 30L30 20L50 30" stroke="#8159BB" stroke-width="2"/>}
                      {cat.icon === 'portfolio' && <circle cx="30" cy="25" r="8" stroke="#8159BB" stroke-width="2"/>}
                      {cat.icon === 'blog' && <path d="M15 10H45V50H15V10Z" stroke="#8159BB" stroke-width="2"/>}
                      {cat.icon === 'store' && <path d="M20 15H40L42 25H18L20 15Z" stroke="#8159BB" stroke-width="2"/>}
                      {cat.icon === 'link' && <circle cx="30" cy="30" r="20" stroke="#8159BB" stroke-width="2"/>}
                    </svg>
                  </div>
                  <h3 style={{fontSize: 18, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>{cat.title}</h3>
                  <p style={{fontSize: 13, color: '#636972', marginBottom: 15, lineHeight: 1.4}}>{cat.desc}</p>
                  <span style={{color: '#8159BB', fontSize: 20}}>&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators Directory */}
        <section id="all-generators" aria-labelledby="all-generators-heading" style={{backgroundColor: '#F4F6F8', padding: '40px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="all-generators-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>ALL GENERATORS</h2>
              <p style={{fontSize: 16, color: '#636972'}}>Sixty-plus generators, organized by what you're building.</p>
            </div>
            
            {/* Search */}
            <div style={{position: 'relative', maxWidth: 480, marginBottom: 30}}>
              <span style={{position: 'absolute', left: 15, top: '50%', transform: 'translateY(-50%)', color: '#636972'}}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/>
                  <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
              <input 
                type="text" 
                aria-label="Search generators"
                placeholder="Search generators..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px 12px 45px',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  fontSize: 14,
                  fontFamily: "'Open Sans', sans-serif",
                  color: '#2E2E2F',
                  backgroundColor: '#FFFFFF'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#8159BB'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129, 89, 187, 0.1)' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#C6C9CD'; e.currentTarget.style.boxShadow = 'none' }}
              />
            </div>
            
            {/* Websites Subsection */}
            <div className="generator-subsection" id="websites" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>WEBSITES</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>AI-built business and personal sites for any goal.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.websites.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Landing Pages Subsection */}
            <div className="generator-subsection" id="landing-pages" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>LANDING PAGES</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>Single-page sites built to convert visitors fast.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.landingPages.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Portfolios Subsection */}
            <div className="generator-subsection" id="portfolios" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>PORTFOLIOS</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>Showcase your work with a clean, focused site.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.portfolios.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Blogs Subsection */}
            <div className="generator-subsection" id="blogs" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>BLOGS</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>Publish-ready blogs with built-in SEO basics.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.blogs.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Online Stores Subsection */}
            <div className="generator-subsection" id="stores" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>ONLINE STORES</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>Sell products online with payments built in.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.stores.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Link-in-Bio Subsection */}
            <div className="generator-subsection" id="link-in-bio" style={{marginBottom: 40}}>
              <h3 style={{fontSize: 26, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>LINK-IN-BIO</h3>
              <p style={{fontSize: 14, color: '#636972', marginBottom: 20}}>One link, all your places. Made for creators.</p>
              <div className="generator-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20}}>
                {allGenerators.linkInBio.map((gen, i) => (
                  <a key={i} href={`/generators/${gen.slug}`} className="generator-card" style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #C6C9CD',
                    borderRadius: 3,
                    padding: 20,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; e.currentTarget.style.borderColor = '#8159BB' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#C6C9CD' }}>
                    <h4 style={{fontSize: 15, marginBottom: 8, color: '#4B5056', textTransform: 'none', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>{gen.name}</h4>
                    <p style={{fontSize: 13, color: '#636972', lineHeight: 1.4}}>{gen.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section aria-labelledby="how-it-works-heading" style={{padding: '40px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="how-it-works-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>HOW IT WORKS</h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, textAlign: 'center'}}>
              {steps.map((step, i) => (
                <div key={i} style={{padding: 20}}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: '#8159BB',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    margin: '0 auto 20px'
                  }}>{step.num}</div>
                  <h3 style={{fontSize: 18, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>{step.title}</h3>
                  <p style={{fontSize: 14, color: '#636972', lineHeight: 1.6}}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section aria-labelledby="why-heading" style={{backgroundColor: '#F4F6F8', padding: '40px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="why-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>WHY STRIKINGLY</h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30}}>
              {features.map((feature, i) => (
                <div key={i} style={{textAlign: 'center', padding: '30px 20px'}}>
                  <div style={{width: 50, height: 50, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 5V45" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/>
                      <path d="M5 25H45" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/>
                      <circle cx="25" cy="25" r="8" stroke="#8159BB" stroke-width="2"/>
                    </svg>
                  </div>
                  <h3 style={{fontSize: 18, marginBottom: 10, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase'}}>{feature.title}</h3>
                  <p style={{fontSize: 14, color: '#636972', lineHeight: 1.6}}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section aria-labelledby="faq-heading" style={{padding: '40px 0'}}>
          <div style={{maxWidth: 800, margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: 40}}>
              <h2 id="faq-heading" style={{fontSize: 32, marginBottom: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{borderBottom: '1px solid #E2E4E7'}}>
                  <button 
                    onClick={() => toggleFAQ(i + 1)}
                    aria-expanded={expandedFAQ === i + 1}
                    aria-controls={`faq-answer-${i + 1}`}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '20px 0',
                      textAlign: 'left',
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: '#4B5056',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textTransform: 'uppercase'
                    }}
                  >
                    {faq.q}
                    <span style={{
                      transition: 'transform 0.2s ease',
                      fontSize: 20,
                      color: '#8159BB',
                      transform: expandedFAQ === i + 1 ? 'rotate(45deg)' : 'none'
                    }}>+</span>
                  </button>
                  <div 
                    id={`faq-answer-${i + 1}`}
                    role="region"
                    style={{
                      maxHeight: expandedFAQ === i + 1 ? 500 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease'
                    }}
                  >
                    <div style={{paddingBottom: 20, fontSize: 14, lineHeight: 1.6, color: '#636972'}}>
                      {faq.a.split('\\n').map((paragraph, j) => (
                        <p key={j} style={{marginBottom: 10}}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section aria-labelledby="closing-cta-heading" style={{textAlign: 'center', padding: '60px 0'}}>
          <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
            <h2 id="closing-cta-heading" style={{fontSize: 32, marginBottom: 15, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.2, color: '#4B5056'}}>READY TO BUILD?</h2>
            <p style={{fontSize: 16, color: '#636972', marginBottom: 30}}>Pick a generator above, or jump straight into our AI builder.</p>
            <a href="/s/ai_site_builder" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 4,
              padding: '12px 24px',
              height: 44,
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
              color: '#FFFFFF'
            }}>START WITH AI BUILDER</a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer role="contentinfo" style={{backgroundColor: '#F4F6F8', borderTop: '1px solid #E2E4E7', padding: '40px 0 20px'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, marginBottom: 30}}>
            <div>
              <h4 style={{fontSize: 14, marginBottom: 15, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>Product</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: 8}}><a href="/about" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>About</a></li>
                <li style={{marginBottom: 8}}><a href="/pricing" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Pricing</a></li>
                <li style={{marginBottom: 8}}><a href="/templates" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Templates</a></li>
                <li style={{marginBottom: 8}}><a href="/generators" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>AI Generators</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: 14, marginBottom: 15, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>Resources</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: 8}}><a href="/blog" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Blog</a></li>
                <li style={{marginBottom: 8}}><a href="/support" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Support</a></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Guides</span></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>API Docs</span></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: 14, marginBottom: 15, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>Legal</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: 8}}><a href="/terms" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Terms of Service</a></li>
                <li style={{marginBottom: 8}}><a href="/privacy" style={{color: '#636972', textDecoration: 'none', fontSize: 13}}>Privacy Policy</a></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Cookie Policy</span></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>GDPR</span></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontSize: 14, marginBottom: 15, color: '#4B5056', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700}}>Company</h4>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Careers</span></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Press</span></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Contact</span></li>
                <li style={{marginBottom: 8}}><span style={{color: '#636972', fontSize: 13}}>Partners</span></li>
              </ul>
            </div>
          </div>
          <div style={{borderTop: '1px solid #E2E4E7', paddingTop: 20, textAlign: 'center', fontSize: 13, color: '#636972'}}>
            <p>&copy; 2024 Strikingly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
