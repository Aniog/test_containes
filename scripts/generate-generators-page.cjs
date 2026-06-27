const fs = require('fs');
const path = require('path');

const categories = [
  {id:'websites',name:'Websites',desc:'AI-built business and personal sites for any goal.'},
  {id:'landing-pages',name:'Landing Pages',desc:'Single-page sites built to convert visitors fast.'},
  {id:'portfolios',name:'Portfolios',desc:'Showcase your work with a clean, focused site.'},
  {id:'blogs',name:'Blogs',desc:'Publish-ready blogs with built-in SEO basics.'},
  {id:'stores',name:'Online Stores',desc:'Sell products online with payments built in.'},
  {id:'link-in-bio',name:'Link-in-Bio',desc:'One link, all your places. Made for creators.'},
];

const generators = [
  {name:'AI Website Generator',desc:'Describe your business, get a full site.',slug:'ai-website-generator',category:'websites'},
  {name:'Free Website Builder',desc:'Launch a professional site at zero cost.',slug:'free-website-builder',category:'websites'},
  {name:'One-Page Website Builder',desc:'Simple sites, single scroll.',slug:'one-page-website-builder',category:'websites'},
  {name:'Wedding Website Generator',desc:'Share your day with guests.',slug:'wedding-website-generator',category:'websites'},
  {name:'Restaurant Website Builder',desc:'Menu, hours, reservations, done.',slug:'restaurant-website-builder',category:'websites'},
  {name:'Church Website Generator',desc:'Announcements, events, and sermons online.',slug:'church-website-generator',category:'websites'},
  {name:'Real Estate Website Builder',desc:'Listings, agents, and lead capture built in.',slug:'real-estate-website-builder',category:'websites'},
  {name:'Nonprofit Website Generator',desc:'Tell your mission and collect donations.',slug:'nonprofit-website-generator',category:'websites'},
  {name:'Small Business Website Builder',desc:'Everything a local business needs online.',slug:'small-business-website-builder',category:'websites'},
  {name:'AI Website Generator for Photographers',desc:'Showcase sessions and book clients.',slug:'ai-website-generator-for-photographers',category:'websites'},
  {name:'No-Code Website Builder',desc:'Build and launch without writing a line.',slug:'no-code-website-builder',category:'websites'},
  {name:'Personal Website Generator',desc:'A clean site for your personal brand.',slug:'personal-website-generator',category:'websites'},
  {name:'AI Landing Page Maker',desc:'One-page sites built to convert.',slug:'ai-landing-page-maker',category:'landing-pages'},
  {name:'Free Landing Page Generator',desc:'High-converting pages, no cost.',slug:'free-landing-page-generator',category:'landing-pages'},
  {name:'SaaS Landing Page Builder',desc:'Features, pricing, and signup on one page.',slug:'saas-landing-page-builder',category:'landing-pages'},
  {name:'Product Launch Landing Page',desc:'Generate buzz for your next release.',slug:'product-launch-landing-page',category:'landing-pages'},
  {name:'Event Landing Page Generator',desc:'Sell tickets and share event details.',slug:'event-landing-page-generator',category:'landing-pages'},
  {name:'App Landing Page Builder',desc:'Show off your app and drive downloads.',slug:'app-landing-page-builder',category:'landing-pages'},
  {name:'Coming Soon Page Generator',desc:'Capture leads while you build.',slug:'coming-soon-page-generator',category:'landing-pages'},
  {name:'AI Landing Page Maker for Startups',desc:'Launch fast with investor-ready pages.',slug:'ai-landing-page-maker-for-startups',category:'landing-pages'},
  {name:'Lead Generation Landing Page',desc:'Forms and CTAs that grow your list.',slug:'lead-generation-landing-page',category:'landing-pages'},
  {name:'Webinar Landing Page Builder',desc:'Promote and register attendees for your talk.',slug:'webinar-landing-page-builder',category:'landing-pages'},
  {name:'Free Portfolio Generator',desc:'For creatives, in minutes, no fee.',slug:'free-portfolio-generator',category:'portfolios'},
  {name:'Portfolio Generator for Designers',desc:'Showcase projects with style.',slug:'portfolio-generator-for-designers',category:'portfolios'},
  {name:'Photography Portfolio Builder',desc:'Galleries that do your work justice.',slug:'photography-portfolio-builder',category:'portfolios'},
  {name:'AI Portfolio Generator',desc:'Describe your work, get a polished portfolio.',slug:'ai-portfolio-generator',category:'portfolios'},
  {name:'Writer Portfolio Generator',desc:'Publish clips, bio, and contact info.',slug:'writer-portfolio-generator',category:'portfolios'},
  {name:'Architecture Portfolio Builder',desc:'Present projects with plans and renders.',slug:'architecture-portfolio-builder',category:'portfolios'},
  {name:'Freelancer Portfolio Generator',desc:'Win clients with a standout site.',slug:'freelancer-portfolio-generator',category:'portfolios'},
  {name:'Portfolio Generator for Artists',desc:'A gallery-first layout for your art.',slug:'portfolio-generator-for-artists',category:'portfolios'},
  {name:'Video Portfolio Builder',desc:'Embed reels and showreels beautifully.',slug:'video-portfolio-builder',category:'portfolios'},
  {name:'Beautiful Portfolio Generator',desc:'Design-forward layouts that stand out.',slug:'beautiful-portfolio-generator',category:'portfolios'},
  {name:'Blog Generator for Beginners',desc:'Publish-ready in minutes.',slug:'blog-generator-for-beginners',category:'blogs'},
  {name:'AI Blog Generator',desc:'Write less, publish more with AI.',slug:'ai-blog-generator',category:'blogs'},
  {name:'Free Blog Builder',desc:'Start a blog without spending a cent.',slug:'free-blog-builder',category:'blogs'},
  {name:'Food Blog Generator',desc:'Recipes, photos, and categories built in.',slug:'food-blog-generator',category:'blogs'},
  {name:'Travel Blog Builder',desc:'Share trips with maps and photo galleries.',slug:'travel-blog-builder',category:'blogs'},
  {name:'Fashion Blog Generator',desc:'Style posts with lookbook layouts.',slug:'fashion-blog-generator',category:'blogs'},
  {name:'Tech Blog Builder',desc:'Code snippets, tutorials, and deep dives.',slug:'tech-blog-builder',category:'blogs'},
  {name:'Personal Blog Generator',desc:'A journal-style site for your thoughts.',slug:'personal-blog-generator',category:'blogs'},
  {name:'SEO Blog Generator',desc:'Optimized structure from day one.',slug:'seo-blog-generator',category:'blogs'},
  {name:'Parenting Blog Builder',desc:'Stories and tips for fellow parents.',slug:'parenting-blog-builder',category:'blogs'},
  {name:'Online Store Builder',desc:'Start selling without writing code.',slug:'online-store-builder',category:'stores'},
  {name:'Online Store Builder for Restaurants',desc:'Take orders and manage menus online.',slug:'online-store-builder-for-restaurants',category:'stores'},
  {name:'AI Store Generator',desc:'Describe products, get a ready shop.',slug:'ai-store-generator',category:'stores'},
  {name:'Free Online Store Builder',desc:'Launch your shop at no cost.',slug:'free-online-store-builder',category:'stores'},
  {name:'Print-on-Demand Store Builder',desc:'Sell custom merch with no inventory.',slug:'print-on-demand-store-builder',category:'stores'},
  {name:'Digital Product Store Generator',desc:'Sell downloads, courses, and licenses.',slug:'digital-product-store-generator',category:'stores'},
  {name:'Clothing Store Builder',desc:'Collections, sizes, and checkout built in.',slug:'clothing-store-builder',category:'stores'},
  {name:'Handmade Goods Store Builder',desc:'Perfect for Etsy sellers going solo.',slug:'handmade-goods-store-builder',category:'stores'},
  {name:'Subscription Box Store Generator',desc:'Recurring orders with easy management.',slug:'subscription-box-store-generator',category:'stores'},
  {name:'No-Code Store Builder',desc:'Build and manage your shop with zero code.',slug:'no-code-store-builder',category:'stores'},
  {name:'Link-in-Bio Generator',desc:'One link for all your channels.',slug:'link-in-bio-generator',category:'link-in-bio'},
  {name:'Link-in-Bio Generator for Creators',desc:'Your content hub in one URL.',slug:'link-in-bio-generator-for-creators',category:'link-in-bio'},
  {name:'Free Link-in-Bio Builder',desc:'All your links, zero cost.',slug:'free-link-in-bio-builder',category:'link-in-bio'},
  {name:'Link-in-Bio for Musicians',desc:'Streaming links, merch, and tour dates.',slug:'link-in-bio-for-musicians',category:'link-in-bio'},
  {name:'Link-in-Bio for Influencers',desc:'Brand deals and content in one place.',slug:'link-in-bio-for-influencers',category:'link-in-bio'},
  {name:'AI Link-in-Bio Generator',desc:'Describe yourself, get a perfect page.',slug:'ai-link-in-bio-generator',category:'link-in-bio'},
  {name:'Link-in-Bio for Podcasters',desc:'Episodes, subscribe links, and bio.',slug:'link-in-bio-for-podcasters',category:'link-in-bio'},
  {name:'Link-in-Bio for Small Business',desc:'Hours, menu, and booking in one link.',slug:'link-in-bio-for-small-business',category:'link-in-bio'},
  {name:'Beautiful Link-in-Bio Page',desc:'Stand out with a polished micro-site.',slug:'beautiful-link-in-bio-page',category:'link-in-bio'},
  {name:'Link-in-Bio for Yoga Instructors',desc:'Class schedule, booking, and social links.',slug:'link-in-bio-for-yoga-instructors',category:'link-in-bio'},
];

const featured = [
  {name:'AI Website Generator',desc:'Describe your business, get a full site.',slug:'ai-website-generator',label:'Website'},
  {name:'Free Portfolio Generator',desc:'For creatives, in minutes, no fee.',slug:'free-portfolio-generator',label:'Portfolio'},
  {name:'AI Landing Page Maker',desc:'One-page sites built to convert.',slug:'ai-landing-page-maker',label:'Landing Page'},
  {name:'Online Store Builder',desc:'Start selling without writing code.',slug:'online-store-builder',label:'Store'},
  {name:'Link-in-Bio Generator',desc:'One link for all your channels.',slug:'link-in-bio-generator',label:'Link-in-Bio'},
  {name:'One-Page Website Builder',desc:'Simple sites, single scroll.',slug:'one-page-website-builder',label:'Website'},
  {name:'Wedding Website Generator',desc:'Share your day with guests.',slug:'wedding-website-generator',label:'Website'},
  {name:'Restaurant Website Builder',desc:'Menu, hours, reservations, done.',slug:'restaurant-website-builder',label:'Website'},
  {name:'Blog Generator for Beginners',desc:'Publish-ready in minutes.',slug:'blog-generator-for-beginners',label:'Blog'},
];

const faq = [
  {q:'What is an AI site generator?',a:'An AI site generator is a tool that uses artificial intelligence to create a complete website from a short text description. You describe your business, project, or idea, and the generator builds a multi-section site with layout, copy, and images\u2014all in seconds. It replaces hours of manual design and coding with a single prompt.'},
  {q:'How is a generator different from a template?',a:'A template gives you a fixed layout that you fill in yourself. A generator builds a site from scratch based on what you tell it. The result is tailored to your specific content, not a generic starting point. You still get full editing control afterward, but the initial site is unique to your description.'},
  {q:'Are these generators free to use?',a:'Yes. Every generator on this page is free to try. You can generate a site, preview it, and publish it on a Strikingly subdomain at no cost. Paid plans are available if you need a custom domain, advanced features, or higher storage limits, but the generators themselves do not require a credit card.'},
  {q:'What kinds of sites can I build?',a:'The generators cover a wide range of use cases: business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, and more. Each generator is optimized for a specific type of site, so the output is well-structured for that purpose. If you do not see a match, the general AI Website Generator handles any goal.'},
  {q:'Can I customize what the generator produces?',a:'Absolutely. After generation, you can edit every section, swap images, change fonts and colors, add new pages, and rearrange layouts. The generator gives you a polished starting point; the editor lets you fine-tune it to match your exact vision. No coding required.'},
  {q:'Do generated sites work on mobile?',a:'Yes. Every site created by a Strikingly generator is fully responsive. The layout, images, and text automatically adapt to phones, tablets, and desktops. You do not need to build a separate mobile version\u2014it just works across all screen sizes.'},
];

const sparkle = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.5 5 5 1.5-5 1.5L10 15 8.5 10 3.5 8.5l5-1.5z" fill="#8159BB"/></svg>';
const chevron = '<svg class="csv" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const searchIcon = '<svg class="si" aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="12" y1="12" x2="16" y2="16" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round"/></svg>';
const arrow = '<svg class="cca" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const icons = {
  websites: '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="6" y1="20" x2="42" y2="20" stroke="#8159BB" stroke-width="1.5"/><circle cx="12" cy="15" r="1.5" fill="#CB0C9F"/><circle cx="17" cy="15" r="1.5" fill="#7671FF"/><rect x="12" y="26" width="24" height="3" rx="1" fill="#7671FF" opacity=".3"/><rect x="12" y="32" width="16" height="3" rx="1" fill="#CB0C9F" opacity=".3"/></svg>',
  'landing-pages': '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="14" y="14" width="20" height="4" rx="1" fill="#7671FF" opacity=".5"/><rect x="14" y="22" width="20" height="3" rx="1" fill="#C6C9CD" opacity=".5"/><rect x="14" y="28" width="14" height="3" rx="1" fill="#C6C9CD" opacity=".3"/><rect x="17" y="34" width="14" height="5" rx="2" fill="url(#tcg1)"/><defs><linearGradient id="tcg1" x1="17" y1="34" x2="31" y2="39" gradientUnits="userSpaceOnUse"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs></svg>',
  portfolios: '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="14" width="14" height="20" rx="2" fill="#7671FF" opacity=".15"/><rect x="28" y="14" width="10" height="9" rx="2" fill="#CB0C9F" opacity=".15"/><rect x="28" y="27" width="10" height="7" rx="2" fill="#7671FF" opacity=".15"/></svg>',
  blogs: '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="14" y1="14" x2="34" y2="14" stroke="#7671FF" stroke-width="2"/><rect x="14" y="20" width="20" height="2" rx="1" fill="#C6C9CD" opacity=".5"/><rect x="14" y="25" width="20" height="2" rx="1" fill="#C6C9CD" opacity=".4"/><rect x="14" y="30" width="14" height="2" rx="1" fill="#C6C9CD" opacity=".3"/></svg>',
  stores: '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><path d="M14 16h20l-3 12H17z" fill="#7671FF" opacity=".15" stroke="#7671FF" stroke-width="1"/><circle cx="19" cy="32" r="2" fill="#8159BB" opacity=".4"/><circle cx="29" cy="32" r="2" fill="#8159BB" opacity=".4"/></svg>',
  'link-in-bio': '<svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="12" y="4" width="24" height="40" rx="6" stroke="#8159BB" stroke-width="2" fill="none"/><circle cx="24" cy="14" r="4" fill="#7671FF" opacity=".25"/><rect x="17" y="22" width="14" height="3" rx="1.5" fill="#7671FF" opacity=".3"/><rect x="17" y="28" width="14" height="3" rx="1.5" fill="#CB0C9F" opacity=".3"/><rect x="17" y="34" width="14" height="3" rx="1.5" fill="#8159BB" opacity=".3"/></svg>',
};

const iconsSm = {
  websites: '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="6" y1="20" x2="42" y2="20" stroke="#8159BB" stroke-width="1.5"/><circle cx="12" cy="15" r="1.5" fill="#CB0C9F"/><circle cx="17" cy="15" r="1.5" fill="#7671FF"/></svg>',
  'landing-pages': '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="14" y="14" width="20" height="4" rx="1" fill="#7671FF" opacity=".5"/></svg>',
  portfolios: '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><rect x="10" y="14" width="14" height="20" rx="2" fill="#7671FF" opacity=".15"/><rect x="28" y="14" width="10" height="9" rx="2" fill="#CB0C9F" opacity=".15"/></svg>',
  blogs: '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><line x1="14" y1="14" x2="34" y2="14" stroke="#7671FF" stroke-width="2"/><rect x="14" y="20" width="20" height="2" rx="1" fill="#C6C9CD" opacity=".5"/></svg>',
  stores: '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" stroke-width="2" fill="none"/><path d="M14 16h20l-3 12H17z" fill="#7671FF" opacity=".15" stroke="#7671FF" stroke-width="1"/><circle cx="19" cy="32" r="2" fill="#8159BB" opacity=".4"/></svg>',
  'link-in-bio': '<svg class="ti" aria-hidden="true" width="40" height="40" viewBox="0 0 48 48" fill="none"><rect x="12" y="4" width="24" height="40" rx="6" stroke="#8159BB" stroke-width="2" fill="none"/><circle cx="24" cy="14" r="4" fill="#7671FF" opacity=".25"/><rect x="17" y="22" width="14" height="3" rx="1.5" fill="#7671FF" opacity=".3"/></svg>',
};

const whyIcons = [
  '<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" stroke="#8159BB" stroke-width="1.5" fill="none"/><path d="M12 18h12M18 12v12" stroke="#7671FF" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="18" r="4" fill="#CB0C9F" opacity=".2"/></svg>',
  '<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="10" y="4" width="16" height="28" rx="3" stroke="#8159BB" stroke-width="1.5" fill="none"/><rect x="13" y="8" width="10" height="16" rx="1" fill="#7671FF" opacity=".15"/><circle cx="18" cy="28" r="1.5" fill="#8159BB" opacity=".4"/></svg>',
  '<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4l2 10h10l-8 6 3 10-7-5-7 5 3-10-8-6h10z" stroke="#8159BB" stroke-width="1.5" fill="none"/><circle cx="18" cy="18" r="3" fill="#CB0C9F" opacity=".2"/></svg>',
];

const heroSvg = '<svg aria-hidden="true" width="480" height="380" viewBox="0 0 480 380" fill="none" style="width:100%;height:auto;max-width:480px"><rect x="60" y="40" width="360" height="260" rx="8" fill="#F4F6F8" stroke="#C6C9CD" stroke-width="2"/><rect x="60" y="40" width="360" height="36" rx="8" fill="#E2E4E7"/><circle cx="86" cy="58" r="5" fill="#CB0C9F" opacity=".6"/><circle cx="104" cy="58" r="5" fill="#7671FF" opacity=".6"/><circle cx="122" cy="58" r="5" fill="#8159BB" opacity=".6"/><rect x="145" y="50" width="240" height="16" rx="8" fill="#FFF" opacity=".7"/><rect x="80" y="96" width="320" height="16" rx="3" fill="#7671FF" opacity=".2"/><rect x="80" y="122" width="200" height="10" rx="3" fill="#C6C9CD" opacity=".5"/><rect x="80" y="140" width="280" height="10" rx="3" fill="#C6C9CD" opacity=".3"/><rect x="80" y="168" width="96" height="72" rx="4" fill="#7671FF" opacity=".12"/><rect x="192" y="168" width="96" height="72" rx="4" fill="#CB0C9F" opacity=".12"/><rect x="304" y="168" width="96" height="72" rx="4" fill="#8159BB" opacity=".12"/><rect x="80" y="260" width="120" height="24" rx="4" fill="url(#hg)"/><rect x="216" y="260" width="100" height="24" rx="4" fill="none" stroke="#8159BB" stroke-width="1.5"/><circle cx="430" cy="60" r="4" fill="#7671FF" opacity=".5"/><circle cx="450" cy="90" r="3" fill="#CB0C9F" opacity=".4"/><path d="M445 140l4-12 4 12 12 4-12 4-4 12-4-12-12-4z" fill="#7671FF" opacity=".25"/><defs><linearGradient id="hg" x1="80" y1="260" x2="200" y2="284" gradientUnits="userSpaceOnUse"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs></svg>';

const grouped = {};
categories.forEach(c => grouped[c.id] = []);
generators.forEach(g => { if (grouped[g.category]) grouped[g.category].push(g); });

const INIT = 6;
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

let html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>
<meta name="description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">
<meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">
<meta property="og:description" content="Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">
<meta property="og:url" content="https://www.strikingly.com/generators">
<link rel="canonical" href="https://www.strikingly.com/generators">
<link rel="icon" type="image/svg+xml" href="/vite.svg"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Strikingly","item":"https://www.strikingly.com"},{"@type":"ListItem","position":2,"name":"AI Generators"}]}
</script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bp:#8159BB;--ab:#7671FF;--ap:#CB0C9F;--hd:#4B5056;--hh:#2E2E2F;--bt:#636972;--cb:#C6C9CD;--dv:#E2E4E7;--lb:#F4F6F8;--pw:#FFFFFF;--fh:"Josefin Sans","Poppins",system-ui,sans-serif;--fb:"Open Sans",system-ui,sans-serif}
html{scroll-behavior:smooth}
body{font-family:var(--fb);font-weight:400;font-size:14px;line-height:1.5;color:var(--bt);background:var(--pw);-webkit-font-smoothing:antialiased;overflow-x:hidden}
h1,h2,h3,h4,h5,h6{font-family:var(--fh);font-weight:700;text-transform:uppercase;letter-spacing:.02em;line-height:1.2;color:var(--hd);margin:0}
a{color:inherit;text-decoration:none}ul{list-style:none}
:focus-visible{outline:2px solid var(--bp);outline-offset:2px}
.cw{width:100%;max-width:1200px;margin-inline:auto;padding-inline:20px}
.sp{padding-block:40px}
.ag{background:linear-gradient(135deg,var(--ab),var(--ap));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.btn{font-family:var(--fh);font-weight:700;text-transform:uppercase;letter-spacing:.04em;font-size:14px;border-radius:4px;padding:9px 15px;height:36px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;border:none;text-decoration:none;transition:opacity .2s;white-space:nowrap;line-height:1}
.btn:hover{opacity:.92}.btn:focus-visible{outline:2px solid var(--ab);outline-offset:2px}
.btn-lg{height:44px;padding:12px 24px;font-size:15px}
.btn-p{background:linear-gradient(135deg,var(--ab),var(--ap));color:#FFFFFF}
.btn-g{background:transparent;border:1px solid var(--bp);color:var(--bp)}
.btn-g:hover{background:rgba(129,89,187,.06)}
.cd{background:var(--pw);border:1px solid var(--cb);border-radius:3px;padding:20px;transition:box-shadow .2s,border-color .2s}
.cd:hover{box-shadow:0 4px 12px rgba(0,0,0,.08);border-color:var(--bp)}
.gt{font-family:var(--fh);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:2px 6px;border-radius:3px;color:var(--bp);border:1px solid var(--bp);display:inline-block;line-height:1.4}
.g3{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:640px){.g3{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.g3{grid-template-columns:repeat(3,1fr)}}
.g3u{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:768px){.g3u{grid-template-columns:repeat(3,1fr)}}
.sk{position:absolute;top:-40px;left:10px;background:var(--bp);color:#fff;padding:8px 16px;z-index:100;border-radius:4px;font-size:14px}
.sk:focus{top:10px}
.tb{background:#fff;border-bottom:1px solid var(--dv)}.tbi{display:flex;align-items:center;height:56px}
.tl{font-family:var(--fh);font-weight:700;font-size:20px;color:var(--hd);display:flex;align-items:center;gap:6px}
.bc{padding-top:20px;padding-bottom:0}.bc ol{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--bt)}.bc a{color:var(--bp)}.bs{color:var(--cb)}
.hr{padding-block:60px 40px}
.hg{display:flex;flex-direction:column-reverse;gap:40px;align-items:center}
@media(min-width:768px){.hg{flex-direction:row;align-items:center}}
.hl{flex:1;min-width:0;max-width:560px}.hri{flex:0 0 auto;max-width:480px;width:100%}
.hr h1{font-size:clamp(28px,5vw,48px);line-height:1.15;margin-bottom:20px;color:var(--hh)}
.hr h1 span{display:block}
.hs{font-size:16px;line-height:1.6;margin-bottom:30px;color:var(--bt)}
.hc{display:flex;flex-wrap:wrap;gap:10px}
.fet{background:var(--lb)}.fcd h3{font-size:16px;line-height:1.3;text-transform:none}.fcd p{font-size:14px;color:var(--bt);line-height:1.5}.fct{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.cc{display:flex;align-items:center;gap:16px}.cc h3{font-size:15px;line-height:1.3;margin-bottom:4px}.cc p{font-size:13px;color:var(--bt);line-height:1.4}.cca{flex-shrink:0;color:var(--bp)}
.dir{background:var(--lb)}
.sw{position:relative;margin-bottom:20px;max-width:480px}
.si{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none}
.sinp{width:100%;padding:10px 14px 10px 40px;font-family:var(--fb);font-size:14px;border:1px solid var(--cb);border-radius:4px;color:var(--bt);background:var(--pw);outline:none;transition:border-color .2s}
.sinp::placeholder{color:#9ca3af}.sinp:focus{border-color:var(--bp);box-shadow:0 0 0 3px rgba(129,89,187,.12)}
.sc{font-size:14px;color:var(--bt);margin-bottom:20px;display:none}.sc.vis{display:block}
.nr{text-align:center;padding:40px 20px;display:none}.nr.vis{display:block}
.nr h3{font-size:16px;font-weight:600;color:var(--hd);margin-bottom:8px;text-transform:none}.nr p{font-size:14px;color:var(--bt);margin-bottom:16px}
.ss h3{font-size:20px;margin-bottom:4px;margin-top:30px}
.ss>p{font-size:14px;color:var(--bt);margin-bottom:20px}
.dc{display:flex;flex-direction:column;gap:8px}.dct{display:flex;align-items:flex-start;gap:10px}
.dc h4{font-size:14px;font-weight:700;line-height:1.3;color:var(--hd);margin:0;text-transform:none;font-family:var(--fh)}
.dc p{font-size:13px;color:var(--bt);line-height:1.4}
.ti{width:40px;height:40px;flex-shrink:0}
.saw{text-align:center;margin-top:16px}.sab{display:inline-flex;align-items:center;gap:6px}
.csv{transition:transform .25s ease;flex-shrink:0}
.sab[aria-expanded="true"] .csv{transform:rotate(180deg)}
.ec{display:none}.ec.vis{display:block}
.sn{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--ab),var(--ap));color:#fff;font-family:var(--fh);font-weight:700;font-size:20px;margin-bottom:16px}
.st{text-align:center;padding:0 10px}.st h3{font-size:16px;margin-bottom:8px}.st p{font-size:14px;color:var(--bt);line-height:1.5;max-width:300px;margin-inline:auto}
.wc{text-align:center;padding:0 10px}.wc h3{font-size:16px;margin-bottom:8px}.wc p{font-size:14px;color:var(--bt);line-height:1.5;max-width:320px;margin-inline:auto}
.fw{max-width:800px;margin-inline:auto}
.fb{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 0;background:none;border:none;border-bottom:1px solid var(--dv);cursor:pointer;font-family:var(--fh);font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.02em;color:var(--hd);text-align:start;line-height:1.3}
.fb:hover{color:var(--bp)}
.fa{overflow:hidden;max-height:0;opacity:0;transition:max-height .35s ease,opacity .3s ease}.fa.op{max-height:400px;opacity:1}
.fai{padding-block:0 20px}.fa p{font-size:14px;color:var(--bt);line-height:1.7}
.ccta{text-align:center}
.sf{background:#fff;border-top:1px solid var(--dv);padding-block:40px 30px}
.fg{display:grid;grid-template-columns:1fr;gap:30px;margin-bottom:30px}
@media(min-width:640px){.fg{grid-template-columns:2fr repeat(4,1fr)}}
.fl{font-family:var(--fh);font-weight:700;font-size:18px;color:var(--hd);display:flex;align-items:center;gap:4px;margin-bottom:10px}
.fd{font-size:13px;color:var(--bt);max-width:240px}
.fc h4{font-size:13px;font-weight:700;margin-bottom:12px;color:var(--hd)}.fc li+li{margin-top:8px}.fc a{font-size:13px;color:var(--bt)}.fc a:hover{color:var(--bp)}
.cr{border-top:1px solid var(--dv);padding-top:20px;text-align:center}.cr p{font-size:12px;color:var(--bt)}
</style>
</head>
<body>
<a href="#all-generators" class="sk">Skip to generators</a>
<header class="tb"><div class="cw tbi"><a href="/" class="tl" aria-label="Strikingly AI Home">${sparkle}<span>strikingly</span><span class="ag">AI</span></a></div></header>
<nav aria-label="Breadcrumb" class="cw bc"><ol><li><a href="/">Strikingly</a></li><li class="bs" aria-hidden="true">/</li><li aria-current="page">AI Generators</li></ol></nav>
<main>
<section class="cw hr"><div class="hg"><div class="hl">
<h1><span style="color:var(--hh)">BUILD ANY KIND OF SITE</span><span class="ag">WITH AI, IN AN INSTANT</span></h1>
<p class="hs">Browse the right generator for what you're building, or jump straight into our AI site builder.</p>
<div class="hc"><a href="/s/ai_site_builder" class="btn btn-p btn-lg">START BUILDING &#8212; IT&#8217;S FREE</a><a href="#all-generators" class="btn btn-g btn-lg">BROWSE GENERATORS</a></div></div>
<div class="hri">${heroSvg}</div></div></section>

<section class="sp fet"><div class="cw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:8px">FEATURED GENERATORS</h2>
<p style="margin-bottom:30px;font-size:15px;color:var(--bt)">A few common starting points.</p>
<div class="g3">`;

for (const g of featured) {
  html += `<a href="/generators/${g.slug}" class="cd fcd" style="display:flex;flex-direction:column;gap:10px"><div class="fct"><h3>${esc(g.name)}</h3><span class="gt">${esc(g.label)}</span></div><p>${esc(g.desc)}</p></a>`;
}

html += `</div></div></section>
<section class="sp"><div class="cw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:30px">BROWSE BY CATEGORY</h2>
<div class="g3">`;

for (const c of categories) {
  html += `<a href="#${c.id}" class="cd cc"><div style="flex-shrink:0">${icons[c.id]}</div><div style="flex:1;min-width:0"><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p></div>${arrow}</a>`;
}

html += `</div></div></section>
<section id="all-generators" class="sp dir"><div class="cw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:8px">ALL GENERATORS</h2>
<p style="font-size:15px;color:var(--bt);margin-bottom:24px">Sixty-plus generators, organized by what you&#8217;re building.</p>
<div class="sw">${searchIcon}<input type="search" class="sinp" placeholder="Search generators&#8230;" aria-label="Search generators" id="gs"/></div>
<p class="sc" id="sct"></p>
<div class="nr" id="nr"><h3>No generators found</h3><p>Can&#8217;t find it? Start with our AI builder.</p><button type="button" class="btn btn-g" id="csb">Clear search</button><div style="margin-top:10px"><a href="/s/ai_site_builder" style="font-size:14px;color:var(--bp)">Start with our AI builder</a></div></div>`;

for (const cat of categories) {
  const items = grouped[cat.id];
  html += `<div class="ss" data-cat="${cat.id}" id="${cat.id}"><h3>${esc(cat.name)}</h3><p>${esc(cat.desc)}</p><div class="g3">`;
  for (let i = 0; i < items.length; i++) {
    const g = items[i];
    const cls = i >= INIT ? 'cd dc ec' : 'cd dc';
    html += `<a href="/generators/${g.slug}" class="${cls}" data-n="${esc(g.name.toLowerCase())}" data-d="${esc(g.desc.toLowerCase())}" data-c="${cat.id}"><div class="dct">${iconsSm[cat.id]}<div style="flex:1;min-width:0"><h4>${esc(g.name)}</h4></div></div><p>${esc(g.desc)}</p></a>`;
  }
  html += `</div>`;
  if (items.length > INIT) {
    html += `<div class="saw"><button type="button" class="btn btn-g sab" aria-expanded="false" data-count="${items.length}">Show all ${items.length} generators ${chevron}</button></div>`;
  }
  html += `</div>`;
}

html += `</div></section>
<section class="sp"><div class="cw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:30px;text-align:center">HOW IT WORKS</h2>
<div class="g3u">
<div class="st"><div class="sn">1</div><h3>PICK A GENERATOR</h3><p>Browse by category or search to find one that fits your goal.</p></div>
<div class="st"><div class="sn">2</div><h3>DESCRIBE YOUR SITE</h3><p>Tell our AI builder about your business in a sentence or two.</p></div>
<div class="st"><div class="sn">3</div><h3>GENERATE AND PUBLISH</h3><p>Get a fully built site in seconds. Customize anything, then go live.</p></div>
</div></div></section>
<section class="sp" style="background:var(--lb)"><div class="cw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:30px;text-align:center">WHY STRIKINGLY</h2>
<div class="g3">
<div class="wc"><div style="display:inline-flex;margin-bottom:16px">${whyIcons[0]}</div><h3>LIVE IN SECONDS</h3><p>Describe your site, we build it. No setup, no learning curve.</p></div>
<div class="wc"><div style="display:inline-flex;margin-bottom:16px">${whyIcons[1]}</div><h3>MOBILE BY DEFAULT</h3><p>Every generator produces responsive sites that work on any device.</p></div>
<div class="wc"><div style="display:inline-flex;margin-bottom:16px">${whyIcons[2]}</div><h3>FREE TO START</h3><p>Generate, customize, and publish without a credit card.</p></div>
</div></div></section>
<section class="sp"><div class="cw fw">
<h2 style="font-size:clamp(22px,3vw,30px);margin-bottom:30px;text-align:center">FREQUENTLY ASKED QUESTIONS</h2>`;

for (let i = 0; i < faq.length; i++) {
  const open = i === 0;
  html += `<div><button class="fb" aria-expanded="${open}" aria-controls="faq${i}" id="fbb${i}"><span>${esc(faq[i].q)}</span>${chevron}</button><div class="fa${open?' op':''}" id="faq${i}" role="region" aria-labelledby="fbb${i}"><div class="fai"><p>${esc(faq[i].a)}</p></div></div></div>`;
}

html += `</div></section>
<section class="sp ccta"><div class="cw">
<h2 style="font-size:clamp(24px,3.5vw,34px);margin-bottom:10px">READY TO BUILD?</h2>
<p style="font-size:16px;color:var(--bt);margin-bottom:24px">Pick a generator above, or jump straight into our AI builder.</p>
<a href="/s/ai_site_builder" class="btn btn-p btn-lg" style="font-size:16px;padding-inline:32px">START WITH AI BUILDER</a>
</div></section>
</main>

<footer class="sf"><div class="cw">
<div class="fg">
<div><div class="fl">${sparkle}<span>strikingly</span><span class="ag">AI</span></div><p class="fd">AI-powered website creation. Describe your site and get online in seconds.</p></div>
<div class="fc"><h4>Product</h4><ul><li><a href="/pricing">Pricing</a></li><li><a href="/templates">Templates</a></li><li><a href="/about">Features</a></li></ul></div>
<div class="fc"><h4>Company</h4><ul><li><a href="/about">About</a></li><li><a href="/blog">Blog</a></li><li><a href="/support">Support</a></li></ul></div>
<div class="fc"><h4>Resources</h4><ul><li><a href="/support">Help Center</a></li><li><a href="/blog">Blog</a></li></ul></div>
<div class="fc"><h4>Legal</h4><ul><li><a href="/terms">Terms of Service</a></li><li><a href="/privacy">Privacy Policy</a></li></ul></div>
</div>
<div class="cr"><p>&copy; 2026 Strikingly, Inc.</p></div>
</div></footer>
<script>
(function(){
var ch='<svg class="csv" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
document.querySelectorAll('.sab').forEach(function(btn){
btn.addEventListener('click',function(){
var exp=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!exp));
var ss=btn.closest('.ss');ss.querySelectorAll('.ec').forEach(function(c){if(exp){c.classList.remove('vis');}else{c.classList.add('vis');}});
var cnt=btn.getAttribute('data-count');btn.innerHTML=exp?'Show all '+cnt+' generators '+ch:'Show fewer '+ch;
});});
var si=document.getElementById('gs'),sct=document.getElementById('sct'),nr=document.getElementById('nr'),csb=document.getElementById('csb');
if(!si)return;
csb.addEventListener('click',function(){si.value='';ds('');});
si.addEventListener('input',function(){ds(si.value);});
function ds(q){q=(q||'').toLowerCase().trim();var secs=document.querySelectorAll('.ss'),tm=0;
if(!q){secs.forEach(function(s){s.style.display='';s.querySelectorAll('.cd').forEach(function(c){c.style.display='';c.classList.remove('vis');});var b=s.querySelector('.sab');if(b){b.setAttribute('aria-expanded','false');var n=b.getAttribute('data-count');b.innerHTML='Show all '+n+' generators '+ch;}});sct.classList.remove('vis');nr.classList.remove('vis');return;}
secs.forEach(function(s){var cs=s.querySelectorAll('.cd'),mi=0;cs.forEach(function(c){var n=c.getAttribute('data-n')||'',d=c.getAttribute('data-d')||'',cat=c.getAttribute('data-c')||'';var m=n.indexOf(q)!==-1||d.indexOf(q)!==-1||cat.indexOf(q)!==-1;if(m){c.style.display='';c.classList.add('vis');mi++;tm++;}else{c.style.display='none';c.classList.remove('vis');}});var b=s.querySelector('.sab');if(b)b.style.display='none';s.style.display=mi?'':'none';});
sct.textContent=tm+' generator'+(tm!==1?'s':'')+' match'+(tm!==1?'':'es');sct.classList.add('vis');if(tm===0){nr.classList.add('vis');}else{nr.classList.remove('vis');}}
document.querySelectorAll('.fb').forEach(function(btn){btn.addEventListener('click',function(){var exp=btn.getAttribute('aria-expanded')==='true';var p=document.getElementById(btn.getAttribute('aria-controls'));btn.setAttribute('aria-expanded',String(!exp));if(exp){p.classList.remove('op');}else{p.classList.add('op');}});});
})();
</script>
</body></html>`;

const outDir = path.join(process.cwd(), 'public', 'generators');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
console.log('Wrote public/generators/index.html (' + html.length + ' bytes)');
