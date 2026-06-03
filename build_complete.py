#!/usr/bin/env python3
"""Generate the complete Strikingly generators hub HTML page."""
import os

def main():
    lines = []
    
    # === HEAD ===
    lines.append('<!doctype html>')
    lines.append('<html lang="en">')
    lines.append('<head>')
    lines.append('<meta charset="UTF-8">')
    lines.append('<meta name="viewport" content="width=device-width,initial-scale=1.0">')
    lines.append('<title>AI Website Generators - Build Any Site in Seconds | Strikingly</title>')
    lines.append('<meta name="description" content="Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.">')
    lines.append('<link rel="canonical" href="https://www.strikingly.com/generators">')
    lines.append('<meta property="og:title" content="AI Website Generators - Build Any Site in Seconds | Strikingly">')
    lines.append('<meta property="og:description" content="Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.">')
    lines.append('<meta property="og:url" content="https://www.strikingly.com/generators">')
    lines.append('<link rel="preconnect" href="https://fonts.googleapis.com">')
    lines.append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
    lines.append('<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">')
    lines.append('<script type="application/ld+json">')
    lines.append('{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Strikingly","item":"https://www.strikingly.com/"},{"@type":"ListItem","position":2,"name":"AI Generators","item":"https://www.strikingly.com/generators"}]}')
    lines.append('</script>')
    lines.append('<style>')
    lines.append(CSS)
    lines.append('</style>')
    lines.append('</head>')
    lines.append('<body>')
    
    # === BODY ===
    lines.append(header_html())
    lines.append(breadcrumb_html())
    lines.append(hero_html())
    lines.append(featured_html())
    lines.append(categories_html())
    lines.append(all_generators_html())
    lines.append(how_it_works_html())
    lines.append(why_strikingly_html())
    lines.append(faq_html())
    lines.append(cta_html())
    lines.append(footer_html())
    lines.append(js_html())
    
    lines.append('</body>')
    lines.append('</html>')
    
    content = '\n'.join(lines)
    os.chdir('/workspace/my-app')
    with open('index.html', 'w') as f:
        f.write(content)
    print(f'Done! Written {len(content)} bytes ({content.count(chr(10))} lines)')


CSS = """*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--purple:#8159BB;--grad:linear-gradient(135deg,#7671FF,#CB0C9F);--body:#636972;--heading:#4B5056;--hero-h1:#2E2E2F;--border:#C6C9CD;--divider:#E2E4E7;--bg:#F4F6F8;--white:#FFF;--hf:Josefin Sans,Poppins,sans-serif;--bf:Open Sans,sans-serif;--mw:1200px}
html{scroll-behavior:smooth}body{font-family:var(--bf);font-size:14px;line-height:1.5;color:var(--body);background:var(--white);-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}img,svg{display:block;max-width:100%}
.cw{max-width:var(--mw);margin-inline:auto;padding-inline:20px}h1,h2,h3{font-family:var(--hf);font-weight:700;text-transform:uppercase;line-height:1.2}
.tb{display:flex;align-items:center;height:60px;border-bottom:1px solid var(--divider);background:var(--white)}.lg{font-family:var(--hf);font-weight:700;font-size:20px;color:var(--hero-h1);letter-spacing:-.5px}
.bc{padding-block:14px}.bc ol{list-style:none;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.bc li{display:flex;align-items:center;gap:8px}.bc a{color:var(--purple)}.bc .sep{color:var(--body);font-size:12px}.bc .cur{color:var(--body)}
.he{padding-block:60px 80px;position:relative;overflow:hidden}.he::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(118,113,255,.06),transparent 70%);pointer-events:none}
.hi{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:1}.he h1{font-size:42px;line-height:1.15}.hl1{color:var(--hero-h1);display:block}.hl2{display:block;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.hs{margin-top:16px;font-size:16px;line-height:1.6;max-width:480px}.hc{margin-top:28px;display:flex;gap:10px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;font-family:var(--hf);font-weight:700;text-transform:uppercase;border-radius:4px;cursor:pointer;border:none;padding:9px 15px;font-size:14px;height:36px;white-space:nowrap;color:var(--white)!important}
.bp{background:var(--grad)}.bb{height:44px;padding:10px 20px;font-size:15px}.bg{background:transparent;color:var(--purple)!important;border:1px solid var(--purple)}
.hil{display:flex;justify-content:center}.hil svg{width:100%;max-width:400px;height:auto}section{padding-block:40px}section+section{border-top:1px solid var(--divider)}
.sh{text-align:center;margin-bottom:32px}.sh h2{font-size:28px;color:var(--heading);margin-bottom:8px}.sh p{font-size:14px;color:var(--body)}
.fg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.fc{display:flex;flex-direction:column;gap:8px;background:var(--white);border:1px solid var(--border);border-radius:3px;padding:20px;cursor:pointer;transition:box-shadow .2s,border-color .2s}.fc:hover,.fc:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.08);border-color:var(--purple);outline:none}
.fcn{font-family:var(--hf);font-weight:700;font-size:15px;text-transform:uppercase;color:var(--hero-h1)}.fcd{font-size:13px;color:var(--body);line-height:1.5;flex:1}.fct{align-self:flex-start;font-family:var(--hf);font-size:11px;font-weight:700;text-transform:uppercase;color:var(--purple);border:1px solid var(--purple);border-radius:3px;padding:2px 6px;line-height:1.4}
.ar{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.ac{display:flex;flex-direction:column;gap:12px;background:var(--white);border:1px solid var(--border);border-radius:3px;padding:24px;cursor:pointer;transition:box-shadow .2s,border-color .2s}.ac:hover,.ac:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.08);border-color:var(--purple);outline:none}
.ii{width:36px;height:36px;color:var(--purple)}.in{font-family:var(--hf);font-size:13px;font-weight:700;text-transform:uppercase;color:var(--hero-h1)}.id{font-size:13px;color:var(--body);line-height:1.5;flex:1}.ia{margin-top:auto;align-self:flex-end;color:var(--purple)}
.srch{max-width:480px;position:relative;margin-inline:auto;margin-bottom:24px}.srch svg{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--body);pointer-events:none}
.srch input{width:100%;height:44px;padding-inline:40px 16px;border:1px solid var(--border);border-radius:4px;font-family:var(--bf);font-size:14px;color:var(--hero-h1);background:var(--white)}.srch input:focus{outline:2px solid var(--purple);outline-offset:-1px}
.sr{text-align:center;font-size:13px;color:var(--body);margin-bottom:20px}.se{text-align:center;padding:40px 20px;display:none}.se p{margin-bottom:16px;font-size:14px}.se button{font-family:var(--bf);font-size:13px;color:var(--purple);background:none;border:1px solid var(--purple);border-radius:3px;padding:6px 14px;cursor:pointer}.se a{color:var(--purple);text-decoration:underline}
.sub{margin-bottom:40px;scroll-margin-top:20px}.sub h3{font-size:20px;color:var(--heading);margin-bottom:4px}.sub>.d{font-size:13px;color:var(--body);margin-bottom:16px}
.sg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.sc{display:flex;flex-direction:column;background:var(--white);border:1px solid var(--border);border-radius:3px;padding:16px;cursor:pointer;transition:box-shadow .2s,border-color .2s}.sc:hover,.sc:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.08);border-color:var(--purple);outline:none}
.st{width:100%;height:80px;border-radius:2px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;background:var(--bg)}.st svg{width:32px;height:32px;color:var(--purple)}.sn{font-family:var(--hf);font-weight:700;font-size:14px;text-transform:uppercase;color:var(--hero-h1);margin-bottom:4px}.sd{font-size:13px;color:var(--body);line-height:1.5}
.sw{text-align:center;margin-top:12px}.sa{font-family:var(--bf);font-size:13px;color:var(--purple);background:none;border:1px solid var(--purple);border-radius:3px;padding:6px 14px;cursor:pointer}.sa:hover{background:var(--bg)}
.hg{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}.hs{text-align:center}.hn{width:48px;height:48px;border-radius:50%;background:var(--purple);color:var(--white);display:flex;align-items:center;justify-content:center;font-family:var(--hf);font-weight:700;font-size:20px;margin:0 auto 16px}
.ht{font-family:var(--hf);font-size:13px;font-weight:700;text-transform:uppercase;color:var(--hero-h1);margin-bottom:8px}.hd{font-size:14px;line-height:1.6;color:var(--body);max-width:280px;margin-inline:auto}
.wg{display:grid;grid-template-columns:repeat(3,1fr);gap:30px}.wc{text-align:center}.wi{width:40px;height:40px;color:var(--purple);margin:0 auto 12px}.wt{font-family:var(--hf);font-size:13px;font-weight:700;text-transform:uppercase;color:var(--hero-h1);margin-bottom:8px}.wd{font-size:14px;line-height:1.6;color:var(--body);max-width:280px;margin-inline:auto}
.fl{max-width:720px;margin-inline:auto}.fi{border-bottom:1px solid var(--divider)}.fq{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;background:none;border:none;cursor:pointer;font-family:var(--bf);font-size:15px;font-weight:600;color:var(--hero-h1);padding:18px 0;text-align:start}
.fq:hover{color:var(--purple)}.fq:focus-visible{outline:2px solid var(--purple);outline-offset:2px}.fi svg{width:20px;height:20px;flex-shrink:0;transition:transform .25s;color:var(--purple)}.fi.op svg{transform:rotate(45deg)}
.fa{overflow:hidden;max-height:0;transition:max-height .3s ease,padding .3s ease;padding-inline:0}.fi.op .fa{max-height:300px;padding-bottom:18px}.fa p{font-size:14px;line-height:1.7;color:var(--body)}
.ct{text-align:center;padding-block:60px}.ct h2{font-size:32px;color:var(--hero-h1);margin-bottom:8px}.ct p{font-size:15px;color:var(--body);margin-bottom:20px}
.ft{background:var(--bg);padding-block:40px 20px}.fg2{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-bottom:30px}.fc2 h4{font-family:var(--hf);font-size:12px;font-weight:700;text-transform:uppercase;color:var(--heading);margin-bottom:12px}
.fc2 ul{list-style:none}.fc2 li{margin-bottom:6px}.fc2 a{font-size:13px;color:var(--body)}.fc2 a:hover{color:var(--purple)}.fcp{text-align:center;font-size:12px;color:var(--body);padding-top:20px;border-top:1px solid var(--divider)}
:focus-visible{outline:2px solid var(--purple);outline-offset:2px}
@media(max-width:900px){.hi{grid-template-columns:1fr;gap:40px}.he h1{font-size:32px}.hil{order:-1}.fg,.ar,.sg{grid-template-columns:repeat(2,1fr)}.hg,.wg{grid-template-columns:1fr;gap:24px}.fg2{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.he{padding-block:40px 50px}.he h1{font-size:28px}.hs{font-size:14px}.hc{flex-direction:column;align-items:stretch}.hc .btn{text-align:center}.fg,.ar,.sg{grid-template-columns:1fr}.srch{max-width:100%}section{padding-block:30px}.fg2{grid-template-columns:1fr}.ct h2{font-size:26px}}"""

MONITOR = '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
PEN = '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>'
BOOK = '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>'
CART = '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'
LINK = '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
CLOCK = '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
DOLLAR = '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'
ARROW = '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'

def header_html():
    return '<header class="tb"><div class="cw" style="display:flex;align-items:center;justify-content:space-between;width:100%"><a href="/" class="lg" aria-label="Strikingly">strikingly AI</a></div></header>'

def breadcrumb_html():
    return '<nav class="bc" aria-label="Breadcrumb"><ol><li><a href="/">Strikingly</a><span class="sep" aria-hidden="true">/</span></li><li><span class="cur" aria-current="page">AI Generators</span></li></ol></nav>'

def hero_html():
    return '<section class="he" aria-label="Hero"><div class="hi"><div><h1><span class="hl1">BUILD ANY KIND OF SITE</span><span class="hl2">WITH AI, IN AN INSTANT</span></h1><p class="hs">Browse the right generator for what you\'re building, or jump straight into our AI site builder.</p><div class="hc"><a href="/s/ai_site_builder" class="btn bp bb">START BUILDING - IT\'S FREE</a><a href="#all-generators" class="btn bg bb">BROWSE GENERATORS</a></div></div><div class="hil" aria-hidden="true"><svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="400" height="320"><rect x="30" y="20" width="340" height="280" rx="8" stroke="#8159BB" stroke-width="1.5" fill="#F4F6F8"/><rect x="50" y="40" width="120" height="16" rx="3" fill="#C6C9CD"/><rect x="50" y="66" width="200" height="10" rx="2" fill="#E2E4E7"/><rect x="50" y="82" width="180" height="10" rx="2" fill="#E2E4E7"/><rect x="50" y="108" width="300" height="80" rx="4" fill="#F0EEFB" stroke="#8159BB" stroke-width=".8" stroke-dasharray="4"/><rect x="50" y="200" width="90" height="60" rx="3" fill="#F0EEFB" stroke="#8159BB" stroke-width=".8" stroke-dasharray="3"/><rect x="155" y="200" width="90" height="60" rx="3" fill="#F0EEFB" stroke="#8159BB" stroke-width=".8" stroke-dasharray="3"/><rect x="260" y="200" width="90" height="60" rx="3" fill="#F0EEFB" stroke="#8159BB" stroke-width=".8" stroke-dasharray="3"/><rect x="50" y="272" width="70" height="8" rx="2" fill="#C6C9CD"/><circle cx="340" cy="36" r="12" stroke="#8159BB" stroke-width="1.2"/><circle cx="340" cy="36" r="4" fill="#8159BB" opacity=".3"/></svg></div></div></section>'

def featured_html():
    items = [
        ("AI Website Generator", "Describe your business, get a full site", "Website", "ai-website-generator"),
        ("Free Portfolio Generator", "For creatives, in minutes, no fee", "Portfolio", "free-portfolio-generator"),
        ("AI Landing Page Maker", "One-page sites built to convert", "Landing Page", "ai-landing-page-maker"),
        ("Online Store Builder", "Start selling without writing code", "Store", "online-store-builder"),
        ("Link-in-Bio Generator", "One link for all your channels", "Link-in-Bio", "link-in-bio-generator"),
        ("One-Page Website Builder", "Simple sites, single scroll", "Website", "one-page-website-builder"),
        ("Wedding Website Generator", "Share your day with guests", "Website", "wedding-website-generator"),
        ("Restaurant Website Builder", "Menu, hours, reservations, done", "Website", "restaurant-website-builder"),
        ("Blog Generator for Beginners", "Publish-ready in minutes", "Blog", "blog-generator-for-beginners"),
    ]
    out = ['<section aria-labelledby="fh"><div class="sh"><h2 id="fh">FEATURED GENERATORS</h2><p>A few common starting points.</p></div><div class="fg">']
    for name, desc, tag, slug in items:
        out.append(f'<a href="/generators/{slug}" class="fc"><div class="fcn">{name}</div><div class="fcd">{desc}</div><span class="fct">{tag}</span></a>')
    out.append('</div></section>')
    return '\n'.join(out)

def categories_html():
    cats = [
        ("#websites", "Websites", "AI-built business and personal sites for any goal.", MONITOR),
        ("#landing-pages", "Landing Pages", "Single-page sites built to convert visitors fast.", PEN),
        ("#portfolios", "Portfolios", "Showcase your work with a clean, focused site.", MONITOR),
        ("#blogs", "Blogs", "Publish-ready blogs with built-in SEO basics.", BOOK),
        ("#stores", "Online Stores", "Sell products online with payments built in.", CART),
        ("#link-in-bio", "Link-in-Bio", "One link, all your places. Made for creators.", LINK),
    ]
    out = ['<section aria-labelledby="bh"><div class="sh"><h2 id="bh">BROWSE BY CATEGORY</h2><p>Jump to the right set of generators for your project.</p></div><div class="ar">']
    for href, name, desc, icon in cats:
        out.append(f'<a href="{href}" class="ac"><svg class="ii" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{icon}</svg><div class="in">{name}</div><div class="id">{desc}</div><svg class="ia" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{ARROW}</svg></a>')
    out.append('</div></section>')
    return '\n'.join(out)

def all_generators_html():
    out = ['<section id="all-generators" aria-labelledby="ah"><div class="sh"><h2 id="ah">ALL GENERATORS</h2><p>Sixty-plus generators, organized by what you\'re building.</p></div>']
    out.append('<div class="srch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" id="si" aria-label="Search generators" placeholder="Search generators..."></div>')
    out.append('<div class="sr" id="rc" aria-live="polite"></div>')
    out.append('<div class="se" id="se"><p>No generators match your search.</p><button class="sa" id="cs" type="button">Clear search</button><p style="margin-top:12px">Can\'t find it? <a href="/s/ai_site_builder">Start with our AI builder.</a></p></div>')
    
    subs = [
        ("websites", "Websites", "AI-built business and personal sites for any goal.", MONITOR, [
            ("AI Website Generator", "Full site from a description.", "ai-website-generator"),
            ("One-Page Website Builder", "Simple single-scroll sites.", "one-page-website-builder"),
            ("Wedding Website Generator", "Share your special day.", "wedding-website-generator"),
            ("Restaurant Website Builder", "Menu, hours, reservations.", "restaurant-website-builder"),
            ("Free Website Builder for Photographers", "Showcase your photography.", "free-website-builder-for-photographers"),
            ("Small Business Website Builder", "Professional site, fast.", "small-business-website-builder"),
            ("Personal Website Generator", "Your own corner of the web.", "personal-website-generator"),
            ("No-Code Website Builder", "Build without code.", "no-code-website-builder"),
            ("Beautiful Website Maker", "Design-forward sites.", "beautiful-website-maker"),
        ]),
        ("landing-pages", "Landing Pages", "Single-page sites built to convert visitors fast.", PEN, [
            ("AI Landing Page Maker", "One-page sites that convert.", "ai-landing-page-maker"),
            ("Sales Page Generator", "High-converting sales pages.", "sales-page-generator"),
            ("Lead Gen Page Builder", "Capture leads efficiently.", "lead-generation-page-builder"),
            ("Product Launch Page Maker", "Launch your product.", "product-launch-page-maker"),
            ("Event Landing Page Builder", "Promote your event.", "event-landing-page-builder"),
            ("Free Landing Page Creator", "Professional at no cost.", "free-landing-page-creator"),
            ("Squeeze Page Generator", "Capture emails fast.", "squeeze-page-generator"),
            ("Coming Soon Page Builder", "Build anticipation.", "coming-soon-page-builder"),
        ]),
        ("portfolios", "Portfolios", "Showcase your work with a clean, focused site.", MONITOR, [
            ("Free Portfolio Generator", "For creatives, no fee.", "free-portfolio-generator"),
            ("Portfolio for Designers", "Showcase design work.", "portfolio-generator-for-designers"),
            ("Art Portfolio Builder", "Gallery-style for art.", "art-portfolio-website-builder"),
            ("Photography Portfolio", "Photos center stage.", "photography-portfolio-generator"),
            ("Video Portfolio Maker", "Showcase video work.", "video-portfolio-maker"),
            ("Writing Portfolio", "Clean typography.", "writing-portfolio-generator"),
            ("Developer Portfolio", "Code and projects.", "developer-portfolio-builder"),
            ("Architect Portfolio", "Projects displayed.", "architect-portfolio-website"),
        ]),
        ("blogs", "Blogs", "Publish-ready blogs with built-in SEO basics.", BOOK, [
            ("Blog for Beginners", "Publish-ready in minutes.", "blog-generator-for-beginners"),
            ("Personal Blog Maker", "Share your thoughts.", "personal-blog-maker"),
            ("Professional Blog", "Build authority.", "professional-blog-builder"),
            ("Food Blog Generator", "Share recipes.", "food-blog-generator"),
            ("Travel Blog Maker", "Document journeys.", "travel-blog-maker"),
            ("Fashion Blog Builder", "Style and trends.", "fashion-blog-builder"),
            ("Lifestyle Blog", "Wellness and home.", "lifestyle-blog-generator"),
            ("Tech Blog Builder", "Technology.", "tech-blog-builder"),
        ]),
        ("stores", "Online Stores", "Sell products online with payments built in.", CART, [
            ("Online Store Builder", "Sell without code.", "online-store-builder"),
            ("Ecommerce Generator", "Full store, fast.", "ecommerce-website-generator"),
            ("Store for Restaurants", "Orders, reservations.", "online-store-builder-for-restaurants"),
            ("Digital Products Store", "Downloads and courses.", "digital-products-store-builder"),
            ("Print-on-Demand Store", "No inventory.", "print-on-demand-store-maker"),
            ("Subscription Store", "Recurring revenue.", "subscription-store-builder"),
        ]),
        ("link-in-bio", "Link-in-Bio", "One link, all your places. Made for creators.", LINK, [
            ("Link-in-Bio Generator", "One link for channels.", "link-in-bio-generator"),
            ("Creator Link Page", "All content, one link.", "creator-link-page-maker"),
            ("Influencer Bio Page", "Drive followers.", "influencer-bio-page-builder"),
            ("Social Link Page", "Connect profiles.", "social-link-page-generator"),
            ("Musician Link Page", "Music, shows, merch.", "musician-link-page-builder"),
            ("Brand Link-in-Bio", "Branded link page.", "brand-link-in-bio-creator"),
        ]),
    ]
    
    for sid, title, desc, icon, cards in subs:
        out.append(f'<div id="{sid}" class="sub"><h3>{title}</h3><p class="d">{desc}</p>')
        out.append(f'<div id="cards-{sid}"><div class="sg" id="grid-{sid}">')
        for name, cd, slug in cards:
            out.append(f'<a href="/generators/{slug}" class="sc"><div class="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{icon}</svg></div><div class="sn">{name}</div><div class="sd">{cd}</div></a>')
        out.append('</div></div>')
        out.append(f'<div class="sw"><button class="sa" id="t{sid}" type="button" data-section="{sid}" aria-expanded="true" aria-controls="cards-{sid}">Show fewer</button></div></div>')
    
    out.append('</section>')
    return '\n'.join(out)

def how_it_works_html():
    return '<section aria-labelledby="hh"><div class="sh"><h2 id="hh">HOW IT WORKS</h2><p>Three simple steps to launch your site.</p></div><div class="hg"><div class="hs"><div class="hn">1</div><div class="ht">Pick a Generator</div><div class="hd">Browse by category or search to find one that fits your goal.</div></div><div class="hs"><div class="hn">2</div><div class="ht">Describe Your Site</div><div class="hd">Tell our AI builder about your business in a sentence or two.</div></div><div class="hs"><div class="hn">3</div><div class="ht">Generate and Publish</div><div class="hd">Get a fully built site in seconds. Customize anything, then go live.</div></div></div></section>'

def why_strikingly_html():
    return f'<section aria-labelledby="wh"><div class="sh"><h2 id="wh">WHY STRIKINGLY</h2><p>The fastest way to create a website.</p></div><div class="wg"><div class="wc"><svg class="wi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{CLOCK}</svg><div class="wt">Live in Seconds</div><div class="wd">Describe your site, we build it. No setup, no learning curve.</div></div><div class="wc"><svg class="wi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{MONITOR}</svg><div class="wt">Mobile by Default</div><div class="wd">Every generator produces responsive sites that work on any device.</div></div><div class="wc"><svg class="wi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{DOLLAR}</svg><div class="wt">Free to Start</div><div class="wd">Generate, customize, and publish without a credit card.</div></div></div></section>'

def faq_html():
    return '<section aria-labelledby="fqh"><div class="sh"><h2 id="fqh">FREQUENTLY ASKED QUESTIONS</h2></div><div class="fl"><div class="fi op"><button class="fq" aria-expanded="true" aria-controls="a0" id="b0">What is an AI site generator?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a0" role="region" aria-labelledby="b0"><p>An AI site generator creates a complete website from a short description. Instead of manually designing pages, you tell the AI what your business is about and it generates a fully styled site in seconds.</p></div></div><div class="fi"><button class="fq" aria-expanded="false" aria-controls="a1" id="b1">How is a generator different from a template?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a1" role="region" aria-labelledby="b1"><p>A template is a pre-designed layout you fill in yourself. An AI generator builds the entire site automatically from your description saving you time and effort.</p></div></div><div class="fi"><button class="fq" aria-expanded="false" aria-controls="a2" id="b2">Are these generators free to use?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a2" role="region" aria-labelledby="b2"><p>Yes. Generate and publish to a free subdomain without paying anything. Upgrade for a custom domain and extra features later.</p></div></div><div class="fi"><button class="fq" aria-expanded="false" aria-controls="a3" id="b3">What kinds of sites can I build?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a3" role="region" aria-labelledby="b3"><p>Business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, and many more are all available.</p></div></div><div class="fi"><button class="fq" aria-expanded="false" aria-controls="a4" id="b4">Can I customize the result?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a4" role="region" aria-labelledby="b4"><p>Absolutely. The AI generates a starting point, then you can use the drag-and-drop editor to change anything.</p></div></div><div class="fi"><button class="fq" aria-expanded="false" aria-controls="a5" id="b5">Do sites work on mobile?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button><div class="fa" id="a5" role="region" aria-labelledby="b5"><p>Yes. Every site is responsive by default and looks great on phones, tablets, and desktops.</p></div></div></div></section>'

def cta_html():
    return '<section class="ct" aria-labelledby="ch"><div class="sh"><h2 id="ch">READY TO BUILD?</h2><p>Pick a generator above, or jump straight into our AI builder.</p><a href="/s/ai_site_builder" class="btn bp bb">START WITH AI BUILDER</a></div></section>'

def footer_html():
    return '<footer class="ft"><div class="cw"><div class="fg2"><div class="fc2"><h4>Product</h4><ul><li><a href="/templates">Templates</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/s/ai_site_builder">AI Site Builder</a></li><li><a href="/generators">Generators</a></li></ul></div><div class="fc2"><h4>Company</h4><ul><li><a href="/about">About</a></li><li><a href="/blog">Blog</a></li><li><a href="/support">Support</a></li></ul></div><div class="fc2"><h4>Resources</h4><ul><li><a href="/blog">Blog</a></li><li><a href="/support">Help Center</a></li><li><a href="/templates">Site Templates</a></li></ul></div><div class="fc2"><h4>Legal</h4><ul><li><a href="/terms">Terms of Service</a></li><li><a href="/privacy">Privacy Policy</a></li></ul></div></div><div class="fcp">&copy; 2026 Strikingly. All rights reserved.</div></div></footer>'



def js_html():
    return '<script>(function(){var fi=document.querySelectorAll(".fi");fi.forEach(function(i){var b=i.querySelector(".fq");b.addEventListener("click",function(){var o=i.classList.contains("op");fi.forEach(function(x){x.classList.remove("op");x.querySelector(".fq").setAttribute("aria-expanded","false")});if(!o){i.classList.add("op");b.setAttribute("aria-expanded","true")}})})})()</script><script>(function(){var L=6,S=["websites","landing-pages","portfolios","blogs","stores","link-in-bio"];S.forEach(function(s){var g=document.getElementById("grid-"+s),b=document.getElementById("t"+s),w=document.getElementById("cards-"+s);if(!g||!b||!w)return;var c=g.querySelectorAll(".sc");if(c.length<=L){b.parentElement.style.display="none";return}c.forEach(function(x,i){x.style.display=i<L?"":"none"});b.setAttribute("aria-expanded","false");b.textContent="Show all "+c.length+" generators";b.addEventListener("click",function(){var e=b.getAttribute("aria-expanded")==="true";if(e){c.forEach(function(x,i){x.style.display=i<L?"":"none"});b.setAttribute("aria-expanded","false");b.textContent="Show all "+c.length+" generators"}else{c.forEach(function(x){x.style.display=""});b.setAttribute("aria-expanded","true");b.textContent="Show fewer"}})})})()</script><script>(function(){var si=document.getElementById("si"),rc=document.getElementById("rc"),se=document.getElementById("se"),cs=document.getElementById("cs");if(si){si.addEventListener("input",function(){var q=si.value.trim().toLowerCase(),t=0;["websites","landing-pages","portfolios","blogs","stores","link-in-bio"].forEach(function(s){var g=document.getElementById("grid-"+s),sub=document.getElementById(s);if(!g||!sub)return;var c=g.querySelectorAll(".sc"),m=false;c.forEach(function(x){var txt=x.textContent.toLowerCase();if(!q||txt.indexOf(q)!==-1){x.style.display="";m=true;t++}else{x.style.display="none"}});sub.style.display=m||!q?"":"none"});if(rc){rc.textContent=q?t+" generator"+(t!==1?"s":"")+" match":""}if(se){se.style.display=q&&t===0?"":"none"}})}if(cs){cs.addEventListener("click",function(){si.value="";si.dispatchEvent(new Event("input"));si.focus()})}})()</script>'


if __name__ == '__main__':
    main()
