import { featuredGenerators, categories, allGenerators } from './src/data/generators.js';

const faqItems = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a short description of your business or project. Instead of choosing a template and filling in content manually, you describe what you need and the AI produces a fully structured site with relevant text, images, and layout in seconds.',
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'A template is a fixed design that you customize by replacing placeholder content. A generator creates a unique site tailored to your description — the layout, copy, and structure are all produced by AI to match your specific needs. You can still customize everything afterward, but you start with something purpose-built rather than generic.',
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes. You can generate, preview, and customize your site for free. When you\'re ready to connect a custom domain or access advanced features, paid plans are available. No credit card is required to get started.',
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'Strikingly\'s generators cover a wide range: business websites, portfolios, landing pages, blogs, online stores, link-in-bio pages, and industry-specific sites for restaurants, weddings, photographers, and more. If you don\'t see a generator that fits, you can always start with the general AI builder.',
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. The AI-generated site is your starting point. You can change any text, swap images, rearrange sections, adjust colors and fonts, and add or remove pages. The editor gives you full control over every element on the page.',
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Yes. Every site produced by Strikingly\'s generators is fully responsive by default. Your site will look great and function properly on phones, tablets, and desktops without any extra work from you.',
  },
];

const howItWorksSteps = [
  { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
  { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
  { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

const whyStrikinglyItems = [
  { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
  { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
  { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
];

function generateNoscriptHTML() {
  let html = '';

  // Hero section
  html += '<div style="padding:40px 20px;text-align:center;background:radial-gradient(ellipse at 70% 30%,rgba(118,113,255,0.06) 0%,rgba(203,12,159,0.04) 40%,transparent 70%)">';
  html += '<h1 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:40px;color:#2E2E2F;line-height:1.2;margin:0 0 16px">BUILD ANY KIND OF SITE<br><span style="background:linear-gradient(135deg,#7671FF,#CB0C9F);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">WITH AI, IN AN INSTANT</span></h1>';
  html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:16px;max-width:480px;margin:0 auto 24px">Browse the right generator for what you\'re building, or jump straight into our AI site builder.</p>';
  html += '<a href="/s/ai_site_builder" style="display:inline-block;background:linear-gradient(135deg,#7671FF,#CB0C9F);color:#fff;font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;padding:12px 24px;border-radius:4px;text-decoration:none">START BUILDING - IT\'S FREE</a>';
  html += '</div>';

  // Featured generators
  html += '<div style="padding:40px 20px;max-width:1200px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 8px;text-align:center">FEATURED GENERATORS</h2>';
  html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0 0 24px;text-align:center">A few common starting points.</p>';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">';
  for (const gen of featuredGenerators) {
    html += '<div style="border:1px solid #C6C9CD;border-radius:3px;padding:20px">';
    html += '<a href="/generators/' + gen.slug + '" style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;text-decoration:none">' + gen.name + '</a>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:4px 0 8px">' + gen.description + '</p>';
    html += '<span style="font-family:Josefin Sans,sans-serif;font-size:11px;text-transform:uppercase;color:#8159BB;border:1px solid #8159BB;border-radius:3px;padding:2px 6px">' + gen.category + '</span>';
    html += '</div>';
  }
  html += '</div></div>';

  // Browse by category
  const catDescriptions = {
    websites: 'AI-built business and personal sites for any goal.',
    'landing-pages': 'Single-page sites built to convert visitors fast.',
    portfolios: 'Showcase your work with a clean, focused site.',
    blogs: 'Publish-ready blogs with built-in SEO basics.',
    stores: 'Sell products online with payments built in.',
    'link-in-bio': 'One link, all your places. Made for creators.',
  };
  html += '<div style="padding:40px 20px;background:#F4F6F8">';
  html += '<div style="max-width:1200px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 24px;text-align:center">BROWSE BY CATEGORY</h2>';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">';
  for (const cat of categories) {
    html += '<div style="border:1px solid #C6C9CD;border-radius:3px;padding:20px;text-align:center;background:#fff">';
    html += '<a href="' + cat.href + '" style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;text-decoration:none">' + cat.name.toUpperCase() + '</a>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:4px 0 0">' + catDescriptions[cat.id] + '</p>';
    html += '</div>';
  }
  html += '</div></div></div>';

  // All generators by category
  html += '<div id="all-generators" style="padding:40px 20px;max-width:1200px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 8px;text-align:center">ALL GENERATORS</h2>';
  html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0 0 24px;text-align:center">Sixty-plus generators, organized by what you\'re building.</p>';

  for (const [catKey, cat] of Object.entries(allGenerators)) {
    html += '<div id="' + cat.id + '" style="padding:16px 0">';
    html += '<h3 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:18px;color:#4B5056;margin:0 0 4px">' + cat.name.toUpperCase() + '</h3>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0 0 12px">' + cat.description + '</p>';
    html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px">';
    for (const gen of cat.generators) {
      html += '<div style="border:1px solid #C6C9CD;border-radius:3px;padding:20px">';
      html += '<a href="/generators/' + gen.slug + '" style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;text-decoration:none">' + gen.name + '</a>';
      html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:4px 0 0">' + gen.description + '</p>';
      html += '</div>';
    }
    html += '</div></div>';
  }
  html += '</div>';

  // How It Works
  html += '<div style="padding:40px 20px;background:#F4F6F8">';
  html += '<div style="max-width:1200px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 24px;text-align:center">HOW IT WORKS</h2>';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">';
  for (let i = 0; i < howItWorksSteps.length; i++) {
    const step = howItWorksSteps[i];
    html += '<div style="text-align:center">';
    html += '<div style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7671FF,#CB0C9F);color:#fff;font-family:Josefin Sans,sans-serif;font-size:14px;margin-bottom:16px">' + (i + 1) + '</div>';
    html += '<h3 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;margin:0 0 8px">' + step.title + '</h3>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0">' + step.description + '</p>';
    html += '</div>';
  }
  html += '</div></div></div>';

  // Why Strikingly
  html += '<div style="padding:40px 20px;max-width:1200px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 24px;text-align:center">WHY STRIKINGLY</h2>';
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">';
  for (const item of whyStrikinglyItems) {
    html += '<div style="text-align:center">';
    html += '<h3 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;margin:0 0 8px">' + item.title + '</h3>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0">' + item.description + '</p>';
    html += '</div>';
  }
  html += '</div></div>';

  // FAQ
  html += '<div style="padding:40px 20px;background:#F4F6F8">';
  html += '<div style="max-width:672px;margin:0 auto">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 24px;text-align:center">FREQUENTLY ASKED QUESTIONS</h2>';
  for (const item of faqItems) {
    html += '<div style="border-bottom:1px solid #E2E4E7;padding:16px 0">';
    html += '<h3 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;color:#4B5056;margin:0 0 8px">' + item.question + '</h3>';
    html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0">' + item.answer + '</p>';
    html += '</div>';
  }
  html += '</div></div>';

  // Closing CTA
  html += '<div style="padding:60px 20px;text-align:center">';
  html += '<h2 style="font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:22px;color:#4B5056;margin:0 0 8px">READY TO BUILD?</h2>';
  html += '<p style="font-family:Open Sans,sans-serif;color:#636972;font-size:14px;margin:0 0 24px">Pick a generator above, or jump straight into our AI builder.</p>';
  html += '<a href="/s/ai_site_builder" style="display:inline-block;background:linear-gradient(135deg,#7671FF,#CB0C9F);color:#fff;font-family:Josefin Sans,sans-serif;font-weight:700;text-transform:uppercase;font-size:14px;padding:12px 24px;border-radius:4px;text-decoration:none">START WITH AI BUILDER</a>';
  html += '</div>';

  return html;
}

export default function noscriptPlugin() {
  const noscriptContent = generateNoscriptHTML();

  return {
    name: 'vite-plugin-noscript',
    transformIndexHtml(html) {
      return html.replace(
        '<div id="root"></div>',
        '<div id="root"></div>\n    <noscript>' + noscriptContent + '</noscript>'
      );
    },
  };
}
