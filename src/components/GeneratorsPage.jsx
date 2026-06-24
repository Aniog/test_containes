import { useState } from 'react';

const GeneratorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllStates, setShowAllStates] = useState({});

  // Generator data
  const featuredGenerators = [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site in minutes.', category: 'Website', slug: 'ai-website-generator' },
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
    { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-beginners' },
  ];

  const categories = [
    { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
    { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
    { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
    { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
    { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
    { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
  ];

  const allGenerators = {
    websites: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase photos with a beautiful gallery site.', slug: 'free-website-builder-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests in one scroll.', slug: 'one-page-wedding-website' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
      { name: 'Yoga Instructor Website Generator', desc: 'Build your yoga business online.', slug: 'yoga-instructor-website' },
      { name: 'Free Business Website Builder', desc: 'Professional sites, no cost to start.', slug: 'free-business-website' },
      { name: 'AI Real Estate Website Generator', desc: 'List properties with a stunning site.', slug: 'ai-real-estate-website' },
      { name: 'Medical Practice Website Builder', desc: 'Healthcare sites with patient portals.', slug: 'medical-practice-website' },
      { name: 'No-Code Website Builder', desc: 'Build without touching a line of code.', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Stunning designs, AI-powered.', slug: 'beautiful-website-generator' },
    ],
    'landing-pages': [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
      { name: 'Sales Page Generator', desc: 'High-converting sales pages in minutes.', slug: 'sales-page-generator' },
      { name: 'Coming Soon Page Generator', desc: 'Build hype before you launch.', slug: 'coming-soon-page' },
      { name: 'Webinar Landing Page Generator', desc: 'Register attendees with optimized pages.', slug: 'webinar-landing-page' },
      { name: 'Product Launch Page Builder', desc: 'Launch products with maximum impact.', slug: 'product-launch-page' },
      { name: 'Lead Magnet Landing Page', desc: 'Capture emails with freebies.', slug: 'lead-magnet-landing-page' },
      { name: 'Event Landing Page Generator', desc: 'Promote events and sell tickets.', slug: 'event-landing-page' },
      { name: 'Free Landing Page Builder', desc: 'Create landing pages at no cost.', slug: 'free-landing-page-builder' },
    ],
    portfolios: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase design work beautifully.', slug: 'portfolio-generator-designers' },
      { name: 'Photographer Portfolio Builder', desc: 'Photo galleries that impress clients.', slug: 'photographer-portfolio-builder' },
      { name: 'Writer Portfolio Generator', desc: 'Display articles and writing samples.', slug: 'writer-portfolio-generator' },
      { name: 'Artist Portfolio Website Builder', desc: 'Showcase art with minimal distraction.', slug: 'artist-portfolio-website' },
      { name: 'Creative Portfolio Generator', desc: 'All-in-one portfolio for creatives.', slug: 'creative-portfolio-generator' },
      { name: 'Freelancer Portfolio Builder', desc: 'Win clients with a pro portfolio.', slug: 'freelancer-portfolio-builder' },
      { name: 'Student Portfolio Generator', desc: 'Build your first portfolio for college.', slug: 'student-portfolio-generator' },
    ],
    blogs: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', slug: 'blog-generator-beginners' },
      { name: 'Personal Blog Builder', desc: 'Share your thoughts with the world.', slug: 'personal-blog-builder' },
      { name: 'Business Blog Generator', desc: 'Content marketing made easy.', slug: 'business-blog-generator' },
      { name: 'Travel Blog Builder', desc: 'Document your adventures online.', slug: 'travel-blog-builder' },
      { name: 'Food Blog Generator', desc: 'Share recipes and restaurant reviews.', slug: 'food-blog-generator' },
      { name: 'Fashion Blog Builder', desc: 'Style blogs with built-in galleries.', slug: 'fashion-blog-builder' },
      { name: 'Tech Blog Generator', desc: 'Tech news and reviews made simple.', slug: 'tech-blog-generator' },
      { name: 'Free Blog Builder', desc: 'Start blogging without spending a dime.', slug: 'free-blog-builder' },
    ],
    stores: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code.', slug: 'online-store-builder' },
      { name: 'Ecommerce Store Builder', desc: 'Full-featured online store in minutes.', slug: 'ecommerce-store-builder' },
      { name: 'Dropshipping Store Generator', desc: 'Start a dropshipping business fast.', slug: 'dropshipping-store-generator' },
      { name: 'Clothing Store Builder', desc: 'Sell apparel with size variants.', slug: 'clothing-store-builder' },
      { name: 'Digital Products Store Builder', desc: 'Sell ebooks, courses, and downloads.', slug: 'digital-products-store' },
      { name: 'Restaurant Online Ordering', desc: 'Take orders for pickup and delivery.', slug: 'restaurant-online-ordering' },
      { name: 'Artisan Store Builder', desc: 'Sell handmade goods online.', slug: 'artisan-store-builder' },
      { name: 'Free Ecommerce Store Builder', desc: 'Start selling online for free.', slug: 'free-ecommerce-store' },
    ],
    'link-in-bio': [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', slug: 'link-in-bio-generator' },
      { name: 'Social Media Link-in-Bio', desc: 'Link all your profiles in one place.', slug: 'social-media-link-in-bio' },
      { name: 'Influencer Link-in-Bio Builder', desc: 'Perfect for creators and influencers.', slug: 'influencer-link-in-bio' },
      { name: 'Musician Link-in-Bio Generator', desc: 'Link music, tour dates, and merch.', slug: 'musician-link-in-bio' },
      { name: 'Business Link-in-Bio Builder', desc: 'Professional link page for business.', slug: 'business-link-in-bio' },
      { name: 'Free Link-in-Bio Generator', desc: 'Create your link page for free.', slug: 'free-link-in-bio' },
      { name: 'Creator Link-in-Bio Builder', desc: 'All-in-one link hub for creators.', slug: 'creator-link-in-bio' },
      { name: 'Podcast Link-in-Bio Generator', desc: 'Link your podcast episodes everywhere.', slug: 'podcast-link-in-bio' },
    ],
  };

  const faqs = [
    {
      question: 'What is an AI site generator?',
      answer: `An AI site generator is a tool that uses artificial intelligence to create a website based on your description. Instead of starting from a blank page or choosing from hundreds of templates, you simply tell the AI what kind of site you need—like "a portfolio for a photographer" or "an online store for handmade jewelry"—and the AI builds a complete, professional-looking website in seconds. The generator handles the layout, color scheme, text, and basic images, giving you a foundation you can then customize to match your brand.`
    },
    {
      question: 'How is a generator different from a template?',
      answer: `A template is a pre-designed layout that you fill with your own content. You choose the template, then manually add your text, images, and customize the colors. It's like getting a blank house frame and building it yourself. A generator, on the other hand, creates a customized website for you automatically. You provide a description of what you need, and the AI builds a complete site with content already in place. It's more like having an architect and contractor who build a house based on your requirements—except this happens in seconds.`
    },
    {
      question: 'Are these generators free to use?',
      answer: `Yes! You can generate a website, customize it, and publish it for free with Strikingly. Our free plan lets you create a personal website or small business site at no cost. You can upgrade to a paid plan if you need custom domains, advanced features, or remove Strikingly branding. But for many users, the free plan provides everything they need to get started.`
    },
    {
      question: 'What kinds of sites can I build?',
      answer: `You can build virtually any type of website with our AI generators. This includes business websites, portfolios for creatives, personal blogs, online stores, landing pages for marketing campaigns, wedding websites, restaurant sites, and link-in-bio pages for social media influencers. Each generator is optimized for a specific use case, so whether you're a photographer showing off your work or a restaurant owner taking online orders, there's a generator tailored to your needs.`
    },
    {
      question: 'Can I customize what the generator produces?',
      answer: `Absolutely. The AI generator gives you a great starting point, but the final site is yours to customize. You can change colors, fonts, images, text, and layout with our easy drag-and-drop editor. Think of the AI-generated site as a first draft that you can refine. Most users find they need to tweak the content and images to match their specific brand, but the heavy lifting of creating the initial structure is done for you.`
    },
    {
      question: 'Do generated sites work on mobile?',
      answer: `Yes, every site generated by Strikingly is fully responsive and works beautifully on mobile devices, tablets, and desktops. In fact, mobile responsiveness is built into every template and generated site by default. With more people browsing on phones than ever before, having a mobile-friendly site is essential. Our AI ensures that your site looks great and functions properly on any screen size, without you needing to do any extra work.`
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  // Filter generators based on search
  const getFilteredGenerators = (category) => {
    if (!searchQuery) return allGenerators[category];
    const query = searchQuery.toLowerCase();
    return allGenerators[category].filter(
      g => g.name.toLowerCase().includes(query) || g.desc.toLowerCase().includes(query)
    );
  };

  const getTotalMatches = () => {
    if (!searchQuery) return 0;
    let total = 0;
    Object.keys(allGenerators).forEach(cat => {
      total += getFilteredGenerators(cat).length;
    });
    return total;
  };

  const toggleShowAll = (category) => {
    setShowAllStates(prev => ({ ...prev, [category]: !prev[category] }));
  };

  // SVG Icons
  const WebsiteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );

  const LandingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
    </svg>
  );

  const PortfolioIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="M21 15l-5-5L5 21"/>
    </svg>
  );

  const BlogIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  );

  const StoreIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  );

  const LinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  );

  const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const MobileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );

  const DollarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 1v22"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );

  const getCategoryIcon = (slug) => {
    switch(slug) {
      case 'websites': return <WebsiteIcon />;
      case 'landing-pages': return <LandingIcon />;
      case 'portfolios': return <PortfolioIcon />;
      case 'blogs': return <BlogIcon />;
      case 'stores': return <StoreIcon />;
      case 'link-in-bio': return <LinkIcon />;
      default: return <WebsiteIcon />;
    }
  };

  return (
    <div className="generators-page">
      <style>{`
        .generators-page {
          --brand-purple: #8159BB;
          --ai-gradient-start: #7671FF;
          --ai-gradient-end: #CB0C9F;
          --body-text: #636972;
          --heading-dark: #4B5056;
          --heading-hero: #2E2E2F;
          --card-border: #C6C9CD;
          --divider: #E2E4E7;
          --light-bg: #F4F6F8;
          --white: #FFFFFF;
          --font-heading: 'Josefin Sans', 'Poppins', sans-serif;
          --font-body: 'Open Sans', sans-serif;
          --max-width: 1200px;
        }
        
        .generators-page *, .generators-page *::before, .generators-page *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .generators-page {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.5;
          color: var(--body-text);
          background: var(--white);
        }
        
        .generators-page h1, .generators-page h2, .generators-page h3, .generators-page h4 {
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.2;
        }
        
        .generators-page h1 { font-size: 40px; color: var(--heading-hero); }
        .generators-page h2 { font-size: 28px; color: var(--heading-dark); }
        .generators-page h3 { font-size: 20px; color: var(--heading-dark); }
        
        .generators-page a {
          color: var(--brand-purple);
          text-decoration: none;
        }
        
        .generators-page a:hover { text-decoration: underline; }
        .generators-page a:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .generators-page .container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Top Bar */
        .top-bar {
          background: var(--white);
          border-bottom: 1px solid var(--divider);
          padding: 12px 0;
        }
        
        .top-bar .container { display: flex; align-items: center; }
        
        .logo {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--brand-purple);
        }
        
        /* Breadcrumb */
        .breadcrumb { padding: 12px 0; border-bottom: 1px solid var(--divider); }
        
        .breadcrumb-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        
        .breadcrumb-list li { display: flex; align-items: center; gap: 8px; }
        .breadcrumb-list li::after {
          content: '>';
          color: var(--brand-purple);
          margin-inline-start: 8px;
        }
        .breadcrumb-list li:last-child::after { display: none; }
        .breadcrumb-list a { color: var(--body-text); }
        .breadcrumb-list a:hover { color: var(--brand-purple); }
        .breadcrumb-list .current { color: var(--heading-dark); }
        
        /* Hero */
        .hero {
          padding: 60px 0 80px;
          background: linear-gradient(135deg, rgba(118, 113, 255, 0.05) 0%, rgba(203, 12, 159, 0.05) 100%);
        }
        
        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        
        .hero h1 { margin-bottom: 16px; }
        .hero h1 .line-1 { display: block; color: var(--heading-hero); }
        .hero h1 .line-2 {
          display: block;
          background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subheadline {
          font-size: 16px;
          color: var(--body-text);
          margin-bottom: 32px;
          max-width: 480px;
        }
        
        .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          padding: 0 15px;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          text-decoration: none;
        }
        
        .btn-primary {
          background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
          color: var(--white);
        }
        .btn-primary:hover { text-decoration: none; opacity: 0.9; }
        .btn-primary:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .btn-ghost {
          background: transparent;
          border: 1px solid var(--brand-purple);
          color: var(--brand-purple);
        }
        .btn-ghost:hover { background: rgba(129, 89, 187, 0.1); text-decoration: none; }
        .btn-ghost:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .btn-large { height: 44px; padding: 0 24px; font-size: 16px; }
        
        .hero-illustration { display: flex; justify-content: center; align-items: center; }
        .hero-illustration svg { width: 400px; height: 300px; }
        
        /* Sections */
        .section { padding: 60px 0; }
        .section-header { text-align: center; margin-bottom: 40px; }
        .section-header h2 { margin-bottom: 8px; }
        
        /* Featured */
        .featured { background: var(--white); }
        
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .card {
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          padding: 20px;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
        }
        
        .card:hover {
          border-color: var(--brand-purple);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-decoration: none;
        }
        
        .card:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .card-name {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--heading-dark);
          margin-bottom: 8px;
          display: block;
        }
        
        .card-desc { font-size: 13px; color: var(--body-text); margin-bottom: 12px; }
        
        .tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 3px;
          border: 1px solid var(--brand-purple);
          color: var(--brand-purple);
          background: transparent;
        }
        
        /* Categories */
        .categories { background: var(--light-bg); }
        
        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .category-card {
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          padding: 24px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }
        
        .category-card:hover {
          border-color: var(--brand-purple);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-decoration: none;
        }
        
        .category-card:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .category-icon { width: 48px; height: 48px; margin-bottom: 16px; color: var(--brand-purple); }
        .category-icon svg { width: 100%; height: 100%; }
        
        .category-name {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }
        
        .category-desc { font-size: 13px; color: var(--body-text); flex-grow: 1; margin-bottom: 16px; }
        .category-arrow { width: 20px; height: 20px; color: var(--brand-purple); align-self: flex-end; }
        
        /* All Generators */
        .all-generators { background: var(--white); }
        
        .search-container { margin-bottom: 32px; }
        
        .search-wrapper { position: relative; max-width: 480px; }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: var(--body-text);
          pointer-events: none;
        }
        
        .search-input {
          width: 100%;
          height: 44px;
          padding: 0 16px 0 44px;
          border: 1px solid var(--card-border);
          border-radius: 3px;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--heading-dark);
          transition: border-color 0.2s ease;
        }
        
        .search-input:focus { outline: none; border-color: var(--brand-purple); }
        .search-input::placeholder { color: var(--body-text); }
        
        .search-results-count { margin-top: 8px; font-size: 13px; color: var(--body-text); }
        
        .search-empty { text-align: center; padding: 40px 20px; display: none; }
        .search-empty.visible { display: block; }
        .search-empty p { margin-bottom: 16px; }
        
        .generator-subsection { margin-bottom: 48px; }
        .generator-subsection:last-child { margin-bottom: 0; }
        
        .subsection-header {
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--divider);
        }
        
        .subsection-header h3 { margin-bottom: 4px; }
        .subsection-header p { font-size: 13px; color: var(--body-text); }
        
        .generator-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .generator-grid.collapsed .generator-card:nth-child(n+7) { display: none; }
        
        .generator-card {
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          padding: 20px;
          text-decoration: none;
          display: block;
          transition: all 0.2s ease;
        }
        
        .generator-card:hover {
          border-color: var(--brand-purple);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          text-decoration: none;
        }
        
        .generator-card:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        .generator-card-image {
          width: 100%;
          height: 80px;
          background: var(--light-bg);
          border-radius: 2px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .generator-card-image svg { width: 40px; height: 40px; color: var(--brand-purple); }
        
        .generator-card-name {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--heading-dark);
          margin-bottom: 8px;
          display: block;
        }
        
        .generator-card-desc { font-size: 13px; color: var(--body-text); }
        
        .show-all-container { margin-top: 16px; text-align: center; }
        
        .show-all-btn {
          background: transparent;
          border: none;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--brand-purple);
          cursor: pointer;
          padding: 8px 16px;
        }
        
        .show-all-btn:hover { text-decoration: underline; }
        .show-all-btn:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }
        
        /* How It Works */
        .how-it-works { background: var(--light-bg); }
        
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        
        .step-item { text-align: center; }
        
        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--brand-purple);
          color: var(--white);
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        
        .step-title {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }
        
        .step-desc { font-size: 13px; color: var(--body-text); }
        
        /* Why Strikingly */
        .why-strikingly { background: var(--white); }
        
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        
        .why-item { text-align: center; }
        
        .why-icon { width: 48px; height: 48px; margin: 0 auto 16px; color: var(--brand-purple); }
        .why-icon svg { width: 100%; height: 100%; }
        
        .why-title {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }
        
        .why-desc { font-size: 13px; color: var(--body-text); }
        
        /* FAQ */
        .faq { background: var(--light-bg); }
        
        .faq-list { max-width: 800px; margin: 0 auto; }
        
        .faq-item {
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        
        .faq-item:last-child { margin-bottom: 0; }
        
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: transparent;
          border: none;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--heading-dark);
          text-align: start;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .faq-question:hover { background: var(--light-bg); }
        
        .faq-question:focus-visible {
          outline: 2px solid var(--brand-purple);
          outline-offset: -2px;
        }
        
        .faq-icon {
          width: 20px;
          height: 20px;
          color: var(--brand-purple);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        
        .faq-item.open .faq-icon { transform: rotate(180deg); }
        
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .faq-item.open .faq-answer { max-height: 500px; }
        
        .faq-answer-content { padding: 0 20px 16px; font-size: 14px; color: var(--body-text); line-height: 1.6; }
        
        /* Closing CTA */
        .closing-cta { padding: 80px 0; text-align: center; background: var(--white); }
        .closing-cta h2 { margin-bottom: 12px; }
        .closing-cta p { margin-bottom: 24px; color: var(--body-text); }
        
        /* Footer */
        .footer { background: var(--light-bg); padding: 60px 0 24px; border-top: 1px solid var(--divider); }
        
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; }
        
        .footer-column h4 {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--heading-dark);
          margin-bottom: 16px;
        }
        
        .footer-column ul { list-style: none; }
        .footer-column li { margin-bottom: 8px; }
        .footer-column a { font-size: 13px; color: var(--body-text); }
        .footer-column a:hover { color: var(--brand-purple); }
        
        .footer-copyright {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid var(--divider);
          font-size: 12px;
          color: var(--body-text);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .featured-grid, .category-grid, .generator-grid, .steps-grid, .why-grid, .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .generators-page h1 { font-size: 28px; }
          .generators-page h2 { font-size: 22px; }
          
          .hero .container { grid-template-columns: 1fr; text-align: center; }
          .hero-content { max-width: 100%; }
          .hero-subheadline { max-width: 100%; }
          .hero-ctas { justify-content: center; }
          .hero-illustration { order: -1; }
          .hero-illustration svg { width: 280px; height: 200px; }
          
          .featured-grid, .category-grid, .generator-grid, .steps-grid, .why-grid, .footer-grid {
            grid-template-columns: 1fr;
          }
          
          .hero { padding: 40px 0 60px; }
          .section-header { margin-bottom: 32px; }
          .generator-subsection { margin-bottom: 32px; }
        }
      `}</style>

      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo">Strikingly AI</a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><a href="/">Strikingly</a></li>
            <li><span className="current">AI Generators</span></li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="line-1">BUILD ANY KIND OF SITE</span>
              <span className="line-2">WITH AI, IN AN INSTANT</span>
            </h1>
            <p className="hero-subheadline">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
            <div className="hero-ctas">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">START BUILDING - IT'S FREE</a>
              <a href="#all-generators" className="btn btn-ghost btn-large">BROWSE GENERATORS</a>
            </div>
          </div>
          <div className="hero-illustration">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="40" y="40" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <rect x="60" y="60" width="120" height="80" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="#F4F6F8"/>
              <rect x="60" y="150" width="80" height="12" rx="2" fill="#E2E4E7"/>
              <rect x="60" y="170" width="60" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="60" width="140" height="12" rx="2" fill="#8159BB"/>
              <rect x="200" y="80" width="100" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="100" width="120" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="120" width="80" height="8" rx="2" fill="#E2E4E7"/>
              <rect x="200" y="150" width="140" height="60" rx="4" stroke="#C6C9CD" strokeWidth="1" fill="#F4F6F8"/>
              <circle cx="270" cy="180" r="16" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <path d="M270 172V188M262 180H278" stroke="#8159BB" strokeWidth="2"/>
              <rect x="40" y="260" width="320" height="4" rx="2" fill="#E2E4E7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="section featured">
        <div className="container">
          <div className="section-header">
            <h2>FEATURED GENERATORS</h2>
            <p>A few common starting points.</p>
          </div>
          <div className="featured-grid">
            {featuredGenerators.map(gen => (
              <a key={gen.slug} href={`/generators/${gen.slug}`} className="card">
                <span className="card-name">{gen.name}</span>
                <p className="card-desc">{gen.desc}</p>
                <span className="tag">{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="section categories">
        <div className="container">
          <div className="section-header">
            <h2>BROWSE BY CATEGORY</h2>
          </div>
          <div className="category-grid">
            {categories.map(cat => (
              <a key={cat.slug} href={`#${cat.slug}`} className="category-card">
                <div className="category-icon">{getCategoryIcon(cat.slug)}</div>
                <span className="category-name">{cat.name}</span>
                <p className="category-desc">{cat.desc}</p>
                <div className="category-arrow"><ArrowIcon /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section className="section all-generators" id="all-generators">
        <div className="container">
          <div className="section-header">
            <h2>ALL GENERATORS</h2>
            <p>Sixty-plus generators, organized by what you're building.</p>
          </div>

          <div className="search-container">
            <div className="search-wrapper">
              <span className="search-icon"><SearchIcon /></span>
              <input
                type="search"
                className="search-input"
                placeholder="Search generators..."
                aria-label="Search generators"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <p className="search-results-count">{getTotalMatches()} generators match</p>
            )}
            
            {searchQuery && getTotalMatches() === 0 && (
              <div className="search-empty visible">
                <p>No generators match your search.</p>
                <button className="btn btn-ghost" onClick={() => setSearchQuery('')}>Clear search</button>
                <p style={{marginTop: '16px'}}>Can't find it? <a href="/s/ai_site_builder">Start with our AI builder.</a></p>
              </div>
            )}
          </div>

          {categories.map(cat => {
            const generators = getFilteredGenerators(cat.slug);
            if (searchQuery && generators.length === 0) return null;
            
            return (
              <div key={cat.slug} className="generator-subsection" id={cat.slug}>
                <div className="subsection-header">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
                <div className={`generator-grid ${!showAllStates[cat.slug] ? 'collapsed' : ''}`}>
                  {generators.map(gen => (
                    <a key={gen.slug} href={`/generators/${gen.slug}`} className="generator-card">
                      <div className="generator-card-image">
                        {getCategoryIcon(cat.slug)}
                      </div>
                      <span className="generator-card-name">{gen.name}</span>
                      <p className="generator-card-desc">{gen.desc}</p>
                    </a>
                  ))}
                </div>
                {generators.length > 6 && (
                  <div className="show-all-container">
                    <button 
                      className="show-all-btn" 
                      onClick={() => toggleShowAll(cat.slug)}
                      aria-expanded={showAllStates[cat.slug] ? 'true' : 'false'}
                    >
                      {showAllStates[cat.slug] ? 'Show less' : `Show all ${generators.length} generators`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>HOW IT WORKS</h2>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h4 className="step-title">PICK A GENERATOR</h4>
              <p className="step-desc">Browse by category or search to find one that fits your goal.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h4 className="step-title">DESCRIBE YOUR SITE</h4>
              <p className="step-desc">Tell our AI builder about your business in a sentence or two.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h4 className="step-title">GENERATE AND PUBLISH</h4>
              <p className="step-desc">Get a fully built site in seconds. Customize anything, then go live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="section why-strikingly">
        <div className="container">
          <div className="section-header">
            <h2>WHY STRIKINGLY</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon"><ClockIcon /></div>
              <h4 className="why-title">LIVE IN SECONDS</h4>
              <p className="why-desc">Describe your site, we build it. No setup, no learning curve.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><MobileIcon /></div>
              <h4 className="why-title">MOBILE BY DEFAULT</h4>
              <p className="why-desc">Every generator produces responsive sites that work on any device.</p>
            </div>
            <div className="why-item">
              <div className="why-icon"><DollarIcon /></div>
              <h4 className="why-title">FREE TO START</h4>
              <p className="why-desc">Generate, customize, and publish without a credit card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section faq">
        <div className="container">
          <div className="section-header">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button 
                  className="faq-question" 
                  aria-expanded={openFaq === idx ? 'true' : 'false'}
                  aria-controls={`faq-${idx}`}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  {faq.question}
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer" id={`faq-${idx}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="container">
          <h2>READY TO BUILD?</h2>
          <p>Pick a generator above, or jump straight into our AI builder.</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">START WITH AI BUILDER</a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/support">Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/academy">Academy</a></li>
                <li><a href="/integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/cookies">Cookies</a></li>
                <li><a href="/licenses">Licenses</a></li>
              </ul>
            </div>
          </div>
          <p className="footer-copyright">&copy; 2026 Strikingly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GeneratorsPage;