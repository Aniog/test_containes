export const categories = [
  {
    id: 'websites',
    index: 0,
    name: 'Websites',
    heading: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    icon: 'layout'
  },
  {
    id: 'landing-pages',
    index: 1,
    name: 'Landing Pages',
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    icon: 'file-text'
  },
  {
    id: 'portfolios',
    index: 2,
    name: 'Portfolios',
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    icon: 'image'
  },
  {
    id: 'blogs',
    index: 3,
    name: 'Blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    icon: 'edit-3'
  },
  {
    id: 'stores',
    index: 4,
    name: 'Online Stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
    icon: 'shopping-cart'
  },
  {
    id: 'link-in-bio',
    index: 5,
    name: 'Link-in-Bio',
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    icon: 'link'
  }
];

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'websites' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'portfolios' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'landing-pages' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'stores' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'link-in-bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'websites' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'websites' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'websites' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'blogs' }
];

export const strings = {
  en: {
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    howItWorksHeading: 'HOW IT WORKS',
    howItWorksSteps: [
      { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' }
    ],
    whyHeading: 'WHY STRIKINGLY',
    whySteps: [
      { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' }
    ],
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      { 
        q: 'What is an AI site generator?', 
        a: 'An AI site generator is a tool that automatically creates a fully functional website based on a brief description. It handles layout, design, and initial copywriting so you can focus on launching your site quickly.' 
      },
      { 
        q: 'How is a generator different from a template?', 
        a: 'A template provides a fixed layout that you must manually fill with your own content and images. A generator creates a custom design tailored specifically to your needs, instantly populated with relevant sample text and images.' 
      },
      { 
        q: 'Are these generators free to use?', 
        a: 'Yes, our generators are free to use. You can specify what you need, let the AI generate a website, and customize it using our site builder without needing to provide a credit card.' 
      },
      { 
        q: 'What kinds of sites can I build?', 
        a: 'You can build almost anything—from professional business sites and creative portfolios to fully functional online stores and personal blogs. Our AI is trained to structure sites effectively for their goal.' 
      },
      { 
        q: 'Can I customize what the generator produces?', 
        a: 'Absolutely. The generator gives you a huge head start by creating a publish-ready site, but you still have complete control. You can change text, replace images, adjust colors, and modify layouts before you go live.' 
      },
      { 
        q: 'Do generated sites work on mobile?', 
        a: 'Yes, every generated website is responsive by default. The design automatically adapts to look great on desktop computers, tablets, and mobile phones without any extra effort on your part.' 
      }
    ],
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    clearSearch: 'Clear search',
    emptyStateText: 'Can\'t find it? Start with our AI builder.',
  }
};

export const generateMockGenerators = () => {
  const result = [];
  
  // Websites
  const websitesModifiers = ['Free', 'AI', 'One-Page', 'Beautiful', 'No-Code', 'Responsive'];
  const websitesTargets = ['Photographers', 'Restaurants', 'Yoga Instructors', 'Wedding Couples', 'Real Estate', 'Consultants', 'Lawyers', 'Painters', 'Plumbers', 'Dentists'];
  let wId = 1;
  websitesTargets.forEach(t => {
    result.push({
      id: `w-${wId++}`,
      name: `${wId % 2 === 0 ? 'AI ' : ''}Website Builder for ${t}`,
      description: `Create a professional website for ${t.toLowerCase()} in seconds.`,
      category: 'websites'
    });
  });
  result.push({ id: `w-${wId++}`, name: 'One-Page Wedding Website Builder', description: 'Share your day with guests', category: 'websites' });
  result.push({ id: `w-${wId++}`, name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'websites' });
  
  // Landing Pages
  let lId = 1;
  const lpTargets = ['Startups', 'SaaS', 'Apps', 'eBooks', 'Events', 'Webinars', 'Newsletters', 'Courses', 'Agencies', 'Podcasts'];
  lpTargets.forEach(t => {
    result.push({
      id: `lp-${lId++}`,
      name: `Landing Page Maker for ${t}`,
      description: `High converting landing pages for ${t.toLowerCase()}.`,
      category: 'landing-pages'
    });
  });
  result.push({ id: `lp-${lId++}`, name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'landing-pages' });
  
  // Portfolios
  let pId = 1;
  const pTargets = ['Designers', 'Writers', 'Artists', 'Photographers', 'Developers', 'Models', 'Architects', 'Freelancers', 'Students', 'Directors'];
  pTargets.forEach(t => {
    result.push({
      id: `p-${pId++}`,
      name: `Portfolio Generator for ${t}`,
      description: `Showcase your work beautifully for ${t.toLowerCase()}.`,
      category: 'portfolios'
    });
  });
  result.push({ id: `p-${pId++}`, name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'portfolios' });
  
  // Blogs
  let bId = 1;
  const bTargets = ['Beginners', 'Travelers', 'Foodies', 'Tech Enthusiasts', 'Lifestyle', 'Fashion', 'Fitness', 'Finance', 'Reviews', 'News'];
  bTargets.forEach(t => {
    result.push({
      id: `b-${bId++}`,
      name: `Blog Generator for ${t}`,
      description: `Start a stunning blog for ${t.toLowerCase()}.`,
      category: 'blogs'
    });
  });
  
  // Stores
  let sId = 1;
  const sTargets = ['Restaurants', 'Clothing', 'Digital Products', 'Crafts', 'Jewelry', 'Electronics', 'Books', 'Furniture', 'Cosmetics', 'Art'];
  sTargets.forEach(t => {
    result.push({
      id: `s-${sId++}`,
      name: `Online Store Builder for ${t}`,
      description: `Sell ${t.toLowerCase()} online easily.`,
      category: 'stores'
    });
  });
  result.push({ id: `s-${sId++}`, name: 'Online Store Builder', description: 'Start selling without writing code', category: 'stores' });
  
  // Link-in-Bio
  let libId = 1;
  const libTargets = ['Creators', 'Influencers', 'TikTokers', 'YouTubers', 'Gamers', 'Musicians', 'Streamers', 'Brands', 'Authors', 'Coaches'];
  libTargets.forEach(t => {
    result.push({
      id: `lib-${libId++}`,
      name: `Link-in-Bio for ${t}`,
      description: `Connect all your audiences for ${t.toLowerCase()}.`,
      category: 'link-in-bio'
    });
  });
  result.push({ id: `lib-${libId++}`, name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'link-in-bio' });
  
  return result;
}

export const allGenerators = generateMockGenerators();

export function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}
