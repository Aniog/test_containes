const generators = [
  { id: "ai-website-generator", name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Websites", slug: "ai-website-generator" },
  { id: "free-portfolio-generator", name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolios", slug: "free-portfolio-generator" },
  { id: "ai-landing-page-maker", name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Pages", slug: "ai-landing-page-maker" },
  { id: "online-store-builder", name: "Online Store Builder", desc: "Start selling without writing code", category: "Online Stores", slug: "online-store-builder" },
  { id: "link-in-bio-generator", name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { id: "one-page-website-builder", name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Websites", slug: "one-page-website-builder" },
  { id: "wedding-website-generator", name: "Wedding Website Generator", desc: "Share your day with guests", category: "Websites", slug: "wedding-website-generator" },
  { id: "restaurant-website-builder", name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Websites", slug: "restaurant-website-builder" },
  { id: "blog-generator-for-beginners", name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blogs", slug: "blog-generator-for-beginners" },
  { id: "small-business-generator", name: "Small Business Website Generator", desc: "Launch your local business online quickly", category: "Websites", slug: "small-business-generator" },
  { id: "corporate-site-builder", name: "Corporate Website Builder", desc: "Professional sites for modern enterprises", category: "Websites", slug: "corporate-site-builder" },
  { id: "non-profit-generator", name: "Non-Profit Organization Site", desc: "Share your mission and accept donations", category: "Websites", slug: "non-profit-generator" },
  { id: "real-estate-generator", name: "Real Estate Property Platform", desc: "Showcase listings with beautiful galleries", category: "Websites", slug: "real-estate-generator" },
  { id: "personal-brand-site", name: "Personal Brand Site Builder", desc: "Grow your influence with a stunning page", category: "Websites", slug: "personal-brand-site" },
  { id: "consultant-website", name: "Consultant Portfolio & Booking", desc: "Present your services and book clients", category: "Websites", slug: "consultant-website" },
  { id: "event-landing-page", name: "Event & Conference Website", desc: "Manage registrations and schedules", category: "Websites", slug: "event-landing-page" },
  { id: "yoga-instructor-site", name: "Yoga Instructor Website", desc: "Classes, schedules, and student bookings", category: "Websites", slug: "yoga-instructor-site" },
  { id: "photography-studio", name: "Photography Studio Site", desc: "High-resolution galleries for pros", category: "Websites", slug: "photography-studio" },
  { id: "hotel-booking-site", name: "Hotel & Bed and Breakfast", desc: "Showcase rooms and take reservations", category: "Websites", slug: "hotel-booking-site" },
  { id: "saas-landing-page", name: "SaaS Product Landing Page", desc: "Software sites that drive downloads", category: "Landing Pages", slug: "saas-landing-page" },
  { id: "ebook-sales-page", name: "Ebook Sales & Marketing Page", desc: "Optimized for digital product sales", category: "Landing Pages", slug: "ebook-sales-page" },
  { id: "mobile-app-promo", name: "Mobile App Promotion Page", desc: "App store links and feature highlights", category: "Landing Pages", slug: "mobile-app-promo" },
  { id: "webinar-signup", name: "Webinar Registration Page", desc: "High-converting signup forms for events", category: "Landing Pages", slug: "webinar-signup" },
  { id: "product-launch-page", name: "Pre-launch Product Landing Page", desc: "Build hype and collect email leads", category: "Landing Pages", slug: "product-launch-page" },
  { id: "newsletter-signup-page", name: "Newsletter Landing Page", desc: "Focus on growing your subscriber list", category: "Landing Pages", slug: "newsletter-signup-page" },
  { id: "lead-magnet-page", name: "Lead Magnet Download Page", desc: "Trade value for visitor contact info", category: "Landing Pages", slug: "lead-magnet-page" },
  { id: "thank-you-page-gen", name: "Conversion Thank You Page", desc: "Nurture leads after they take action", category: "Landing Pages", slug: "thank-you-page-gen" },
  { id: "graphic-designer-folio", name: "Graphic Designer Portfolio", desc: "Visual-first layouts for creative work", category: "Portfolios", slug: "graphic-designer-folio" },
  { id: "resume-website-gen", name: "Interactive Resume Website", desc: "Stand out from the crowd with a live CV", category: "Portfolios", slug: "resume-website-gen" },
  { id: "copywriter-portfolio", name: "Copywriter & Journalist Site", desc: "Focus on readability and your best clips", category: "Portfolios", slug: "copywriter-portfolio" },
  { id: "architect-portfolio", name: "Architectural Showcase Site", desc: "Large-scale image support for projects", category: "Portfolios", slug: "architect-portfolio" },
  { id: "ux-designer-portfolio", name: "UX Case Study Portfolio", desc: "Tell the story behind your design process", category: "Portfolios", slug: "ux-designer-portfolio" },
  { id: "artist-gallery-gen", name: "Fine Artist Gallery Website", desc: "A minimal digital space for your art", category: "Portfolios", slug: "artist-gallery-gen" },
  { id: "musician-official-site", name: "Musician & Band Official Site", desc: "Tour dates, albums, and fan links", category: "Portfolios", slug: "musician-official-site" },
  { id: "actor-showreel-page", name: "Actor Resume & Showreel Page", desc: "Professional presence for performers", category: "Portfolios", slug: "actor-showreel-page" },
  { id: "travel-blog-gen", name: "Travel & Lifestyle Blog", desc: "Share your journeys with stunning photos", category: "Blogs", slug: "travel-blog-gen" },
  { id: "food-recipe-blog", name: "Food & Recipe Blog Generator", desc: "Interactive recipe cards and galleries", category: "Blogs", slug: "food-recipe-blog" },
  { id: "tech-review-blog", name: "Tech Review & News Blog", desc: "Modern, fast-loading article layouts", category: "Blogs", slug: "tech-review-blog" },
  { id: "parenting-blog-gen", name: "Parenting & Mommy Blog", desc: "Build a community around family advice", category: "Blogs", slug: "parenting-blog-gen" },
  { id: "fitness-blog-site", name: "Fitness & Wellness Blog", desc: "Workout tips and health guides", category: "Blogs", slug: "fitness-blog-site" },
  { id: "personal-diary-blog", name: "Minimalist Personal Blog", desc: "A clean space for your daily thoughts", category: "Blogs", slug: "personal-diary-blog" },
  { id: "marketing-blog-gen", name: "Digital Marketing Blog", desc: "Insights and strategy for professionals", category: "Blogs", slug: "marketing-blog-gen" },
  { id: "fashion-blog-builder", name: "Fashion & Style Magazine", desc: "Visual layouts for trending content", category: "Blogs", slug: "fashion-blog-builder" },
  { id: "clothing-store-gen", name: "Fashion & Apparel Store", desc: "Launch your boutique online in minutes", category: "Online Stores", slug: "clothing-store-gen" },
  { id: "handmade-craft-store", name: "Etsy-Style Handmade Shop", desc: "Sell unique creations and crafts", category: "Online Stores", slug: "handmade-craft-store" },
  { id: "digital-product-store", name: "Digital Downloads Marketplace", desc: "Sell software, PDFs, and assets", category: "Online Stores", slug: "digital-product-store" },
  { id: "pet-supplies-store", name: "Pet Store & Animal Supplies", desc: "Beautiful product grids for pet lovers", category: "Online Stores", slug: "pet-supplies-store" },
  { id: "coffee-shop-store", name: "Coffee Roaster & Bean Shop", desc: "Subscription-ready e-commerce site", category: "Online Stores", slug: "coffee-shop-store" },
  { id: "jewelry-boutique", name: "Luxury Jewelry Online Store", desc: "Elegant design for premium items", category: "Online Stores", slug: "jewelry-boutique" },
  { id: "supplement-shop", name: "Health & Supplement Store", desc: "Clear product info and subscription ops", category: "Online Stores", slug: "supplement-shop" },
  { id: "home-decor-store", name: "Interior Design & Decor Shop", desc: "Showcase furniture and style online", category: "Online Stores", slug: "home-decor-store" },
  { id: "tiktok-bio-page", name: "TikTok Creator Link-in-Bio", desc: "Monetize your content and grow", category: "Link-in-Bio", slug: "tiktok-bio-page" },
  { id: "instagram-bio-page", name: "Instagram Bio Landing Page", desc: "Visual link grid matching your feed", category: "Link-in-Bio", slug: "instagram-bio-page" },
  { id: "podcaster-link-page", name: "Podcaster Official Links", desc: "Listen on Spotify, Apple, and more", category: "Link-in-Bio", slug: "podcaster-link-page" },
  { id: "streamer-bio-gen", name: "Twitch & YouTube Streamer Bio", desc: "Schedules, socials, and donation links", category: "Link-in-Bio", slug: "streamer-bio-gen" },
  { id: "author-bio-page", name: "Author & Writer Link-in-Bio", desc: "Book links, newsletter, and social", category: "Link-in-Bio", slug: "author-bio-page" },
  { id: "musician-smart-link", name: "Music Release Smart Link", desc: "Point fans to every streaming service", category: "Link-in-Bio", slug: "musician-smart-link" },
  { id: "artist-portfolio-bio", name: "Artist Portfolio Link-in-Bio", desc: "Quick art gallery and commission info", category: "Link-in-Bio", slug: "artist-portfolio-bio" },
  { id: "developer-bio-page", name: "Developer & GitHub Link Page", desc: "Projects, tech stack, and socials", category: "Link-in-Bio", slug: "developer-bio-page" }
];
const categoryIdMap = {
  'Websites': 'websites',
  'Landing Pages': 'landing-pages',
  'Portfolios': 'portfolios',
  'Blogs': 'blogs',
  'Online Stores': 'stores',
  'Link-in-Bio': 'link-in-bio'
};
const getThumbnail = (catId) => {
  let shapeHtml = '';
  if (catId === 'websites') shapeHtml = '<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />';
  else if (catId === 'landing-pages') shapeHtml = '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />';
  else if (catId === 'portfolios') shapeHtml = '<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />';
  else if (catId === 'blogs') shapeHtml = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />';
  else if (catId === 'stores') shapeHtml = '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />';
  else if (catId === 'link-in-bio') shapeHtml = '<circle cx="12" cy="12" r="10" />';
  
  return `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="text-brand-purple/20">` + shapeHtml + `</svg>`;
};
const generateCard = (gen, showCatTag = false) => {
  const catId = categoryIdMap[gen.category];
  return '<a href="/generators/' + gen.slug + '" class="gen-card group bg-white border border-card-border p-5 rounded-[3px] flex flex-col gap-4 hover:border-brand-purple hover:shadow-sm transition-all" data-name="' + gen.name.toLowerCase() + '" data-desc="' + gen.desc.toLowerCase() + '" data-category="' + gen.category.toLowerCase() + '">' +
              '<div class="flex flex-col gap-2">' +
                (showCatTag ? '<span class="inline-block self-start text-[11px] font-heading font-bold text-brand-purple border border-brand-purple px-[6px] py-[2px] rounded-[3px] uppercase tracking-wider">' + gen.category + '</span>' : '') +
                '<div class="gen-thumb aspect-[4/3] bg-bg-light rounded-[2px] mb-2 flex items-center justify-center">' + getThumbnail(catId) + '</div>' +
                '<h4 class="text-base font-bold text-heading-dark group-hover:text-brand-purple transition-colors capitalize">' + gen.name + '</h4>' +
              '</div>' +
              '<p class="text-sm line-clamp-2">' + gen.desc + '</p>' +
            '</a>';
};
console.log('--- FEATURED GRID ---');
generators.slice(0, 9).forEach(gen => console.log(generateCard(gen, true)));
console.log('--- SUBSECTIONS ---');
Object.entries(categoryIdMap).forEach(([catName, catId]) => {
  console.log('SECTION: ' + catId);
  generators.filter(gen => gen.category === catName).forEach((gen, idx) => {
    let cardHtml = generateCard(gen, false);
    if (idx >= 9) {
      cardHtml = cardHtml.replace('gen-card', 'gen-card hidden-initially');
    }
    console.log(cardHtml);
  });
});
