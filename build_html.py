import json

cat_slugs = ["websites", "landing-pages", "portfolios", "blogs", "stores", "link-in-bio"]
cat_names = ["Websites", "Landing Pages", "Portfolios", "Blogs", "Online Stores", "Link-in-Bio"]
cat_descs = [
  "AI-built business and personal sites for any goal.",
  "Single-page sites built to convert visitors fast.",
  "Showcase your work with a clean, focused site.",
  "Publish-ready blogs with built-in SEO basics.",
  "Sell products online with payments built in.",
  "One link, all your places. Made for creators."
]

subsections = [
  {
    "id": "websites", "title": "Websites", "desc": "AI-built business and personal sites for any goal.",
    "items": [
      ("AI Website Generator", "Describe your business, get a full site"),
      ("Free Website Builder for Photographers", "Showcase your photo gallery"),
      ("One-Page Wedding Website Builder", "Share your special day"),
      ("Restaurant Website Builder", "Menu, hours, reservations, done"),
      ("Small Business Website Maker", "Get your local business online"),
      ("Yoga Instructor Site Generator", "Classes, schedules, bookings"),
      ("Real Estate Agent Website Builder", "Listings and agent bio"),
      ("Freelancer Website Generator", "Promote your services independently"),
      ("Event Website Builder", "Registration and event details"),
      ("Church Website Generator", "Sermons, donations, community")
    ]
  },
  {
    "id": "landing-pages", "title": "Landing Pages", "desc": "Single-page sites built to convert visitors fast.",
    "items": [
      ("AI Landing Page Maker", "One-page sites built to convert"),
      ("App Launch Landing Page Generator", "Collect emails before launch"),
      ("Product Teaser Page Builder", "Generate hype for your product"),
      ("Webinar Registration Page Maker", "Get signups for your next talk"),
      ("Book Launch Landing Page", "Sell your e-book with a single page"),
      ("Course Sales Page Generator", "Convert visitors into students"),
      ("Email Capture Page Builder", "Grow your newsletter list fast"),
      ("Lead Generation Site Maker", "Collect inbound leads locally"),
      ("Fitness Class Promo Page", "Fill up your studio seats"),
      ("Consulting Service Landing Page", "Book more client calls")
    ]
  },
  {
    "id": "portfolios", "title": "Portfolios", "desc": "Showcase your work with a clean, focused site.",
    "items": [
      ("Free Portfolio Generator", "For creatives, in minutes, no fee"),
      ("Portfolio Generator for Designers", "UX/UI case studies made easy"),
      ("Photography Portfolio Builder", "Clean grid layouts for photos"),
      ("Copywriter Portfolio Maker", "Showcase your best writing clips"),
      ("Actor/Model Portfolio Generator", "Headshots and reels in one place"),
      ("Software Developer Portfolio", "Show off your GitHub projects"),
      ("Art Student Portfolio Builder", "Apply to schools with a slick site"),
      ("Musician Portfolio Generator", "Embed tracks and tour dates"),
      ("Videographer Reel Page Builder", "Put your video reels front and center")
    ]
  },
  {
    "id": "blogs", "title": "Blogs", "desc": "Publish-ready blogs with built-in SEO basics.",
    "items": [
      ("Blog Generator for Beginners", "Publish-ready in minutes"),
      ("Travel Blog Builder", "Share your adventures globally"),
      ("Food Recipe Blog Generator", "Post recipes with lovely layouts"),
      ("Tech Review Blog Maker", "Review gadgets with clean formatting"),
      ("Personal Journal Site Builder", "A private-looking public diary"),
      ("Mom Blog Generator", "Parenting tips and lifestyle posts"),
      ("Fashion Blog Builder", "Lookbooks and outfit links"),
      ("Finance Blog Generator", "Tips for saving and investing")
    ]
  },
  {
    "id": "stores", "title": "Online Stores", "desc": "Sell products online with payments built in.",
    "items": [
      ("Online Store Builder", "Start selling without writing code"),
      ("Online Store Builder for Restaurants", "Takeout orders and local delivery"),
      ("Digital Product Store Generator", "Sell e-books, presets, and guides"),
      ("Handmade Goods Shop Builder", "For Etsy sellers stepping up"),
      ("Dropshipping Store Generator", "Connect your products, start selling"),
      ("Merch Store Builder for Creators", "Sell t-shirts to your fans"),
      ("Bakery Online Shop Maker", "Pre-orders and local pickup"),
      ("Jewelry Boutique Builder", "Elegant templates for fine goods")
    ]
  },
  {
    "id": "link-in-bio", "title": "Link-in-Bio", "desc": "One link, all your places. Made for creators.",
    "items": [
      ("Link-in-Bio Generator", "One link for all your channels"),
      ("TikTok Creator Link Page", "Drive video traffic to your links"),
      ("Instagram Bio Link Builder", "The only URL your profile needs"),
      ("Podcast Link Page Generator", "Aggregate Spotify, Apple, and Patreon"),
      ("Twitch Streamer Bio Link", "Merch, tips, and live tracking"),
      ("YouTuber Link-in-Bio Maker", "Centralize your streams and VODs"),
      ("OnlyFans Promo Link Page", "Drive subscriber conversions discretely"),
      ("Musician Multi-Link Page", "Tour dates and streaming links together")
    ]
  }
]

feat_names = [
  "AI Website Generator", "Free Portfolio Generator", "AI Landing Page Maker",
  "Online Store Builder", "Link-in-Bio Generator", "One-Page Website Builder",
  "Wedding Website Generator", "Restaurant Website Builder", "Blog Generator for Beginners"
]
feat_descs = [
  "Describe your business, get a full site", "For creatives, in minutes, no fee", "One-page sites built to convert",
  "Start selling without writing code", "One link for all your channels", "Simple sites, single scroll",
  "Share your day with guests", "Menu, hours, reservations, done", "Publish-ready in minutes"
]
feat_tags = [
  "Website", "Portfolio", "Landing Page", "Store", "Link-in-Bio", "Website", "Website", "Website", "Blog"
]

new_ui = """
    <nav aria-label="Breadcrumb" class="max-w-[1200px] mx-auto px-4 md:px-10 py-4">
      <ol class="flex text-[12px] text-[#636972] m-0 p-0 list-none">
        <li><a href="/" class="hover:text-[#4B5056] text-[#636972] no-underline">Strikingly</a></li>
        <li class="mx-2 text-brand-purple">&gt;</li>
        <li class="text-[#636972]" aria-current="page">AI Generators</li>
      </ol>
    </nav>

    <main>
      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10 hero-wash">
        <div class="flex-1 text-center md:text-left">
          <h1 class="font-heading text-[28px] md:text-[48px] leading-[1.2] text-[#2E2E2F] mb-4">
            <span class="block">{{ heroH1L1 }}</span>
            <span class="block text-ai-gradient">{{ heroH1L2 }}</span>
          </h1>
          <p class="text-[#636972] text-[16px] md:text-[18px] max-w-[500px] mx-auto md:mx-0 mb-8">{{ heroSub }}</p>
          <div class="flex flex-col md:flex-row gap-[10px] justify-center md:justify-start">
            <a href="/s/ai_site_builder" class="inline-flex items-center justify-center bg-ai-gradient text-white font-heading text-[14px] h-[44px] px-[24px] rounded-[4px] hover:opacity-90 transition-opacity">{{ heroCtaPrimary }}</a>
            <a href="#all-generators" class="inline-flex items-center justify-center bg-transparent border border-brand-purple text-brand-purple font-heading text-[14px] h-[44px] px-[24px] rounded-[4px] hover:bg-brand-purple/5 transition-colors">{{ heroCtaSecondary }}</a>
          </div>
        </div>
        <div class="flex-1 w-full flex justify-center md:justify-end">
            <svg aria-hidden="true" width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-w-full h-auto drop-shadow-sm">
                <rect width="400" height="300" rx="8" fill="#F4F6F8"/>
                <rect x="20" y="20" width="360" height="40" rx="4" fill="#E2E4E7"/>
                <rect x="20" y="80" width="160" height="20" rx="4" fill="#8159BB" fill-opacity="0.2"/>
                <rect x="20" y="120" width="240" height="12" rx="4" fill="#C6C9CD"/>
                <rect x="20" y="140" width="200" height="12" rx="4" fill="#C6C9CD"/>
                <rect x="20" y="180" width="100" height="100" rx="4" fill="#8159BB" fill-opacity="0.1"/>
                <rect x="140" y="180" width="100" height="100" rx="4" fill="#8159BB" fill-opacity="0.1"/>
                <rect x="260" y="180" width="100" height="100" rx="4" fill="#8159BB" fill-opacity="0.1"/>
            </svg>
        </div>
      </section>

      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[40px]">
        <div class="text-center mb-[40px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px] mb-2">{{ featHeading }}</h2>
          <p class="text-[#636972]">{{ featSub }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
"""

for i in range(9):
    slug = feat_names[i].lower().replace(" ", "-")
    new_ui += f"""
          <article class="h-full"><a href="/generators/{slug}" class="block bg-white border border-[#C6C9CD] rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all group h-full">
            <h3 class="font-bold text-[#4B5056] mb-1 group-hover:text-brand-purple leading-tight text-[16px]">{feat_names[i]}</h3>
            <p class="text-[#636972] mb-3 text-[13px]">{feat_descs[i]}</p>
            <span class="inline-block font-heading text-[11px] px-[6px] py-[2px] rounded-[3px] border border-brand-purple text-brand-purple uppercase">{feat_tags[i]}</span>
          </a></article>"""

new_ui += """
        </div>
      </section>

      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[40px] bg-[#F4F6F8] rounded-[8px]">
        <div class="text-center mb-[40px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px]">{{ catHeading }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
"""

for i in range(6):
    new_ui += f"""
          <article class="h-full"><a href="#{cat_slugs[i]}" class="block bg-white border border-[#C6C9CD] rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all group flex flex-col h-full">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" class="mb-4">
              <rect width="32" height="32" rx="4" fill="#E2E4E7" />
              <path d="M8 16 l6 6 l10 -12" stroke="#8159BB" stroke-width="2" fill="none" />
            </svg>
            <h3 class="font-heading text-[#4B5056] text-[16px] mb-1 group-hover:text-brand-purple uppercase">{cat_names[i]}</h3>
            <p class="text-[#636972] text-[13px] flex-grow">{cat_descs[i]}</p>
            <div class="mt-4 flex justify-end text-[#C6C9CD] group-hover:text-brand-purple transition-colors">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </div>
          </a></article>"""

new_ui += """
        </div>
      </section>

      <section id="all-generators" class="max-w-[1200px] mx-auto px-4 md:px-10 py-[40px]">
        <div class="text-center mb-[30px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px] mb-2">{{ allHeading }}</h2>
          <p class="text-[#636972]">{{ allSub }}</p>
        </div>

        <div class="relative max-w-[480px] mx-auto mb-[20px]">
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" class="absolute left-3 top-[10px] text-[#A6A9AE]">
            <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="m21 21-4.3-4.3" stroke="currentColor" stroke-width="2"/>
          </svg>
          <input type="text" id="generatorInfoSearch" aria-label="Search generators" placeholder="{{ searchPlaceholder }}" class="w-full h-[40px] pl-[40px] pr-[16px] border border-[#C6C9CD] rounded-[4px] focus:outline-none focus:border-brand-purple text-[#2E2E2F]" />
          <div id="searchCount" class="text-right text-[12px] text-[#636972] mt-1 h-[18px]"></div>
        </div>
        
        <div id="emptySearchState" class="hidden text-center py-[60px] bg-[#F4F6F8] rounded-[8px] mb-[40px]">
          <p class="text-[#4B5056] mb-4 font-bold text-[18px]"><a href="/s/ai_site_builder" class="text-brand-purple hover:underline hover:opacity-90">{{ searchEmptyText }}</a></p>
          <button id="clearSearchBtn" class="bg-white border border-[#C6C9CD] text-[#2E2E2F] font-bold text-[13px] px-4 py-2 rounded-[4px] hover:border-brand-purple">Clear search</button>
        </div>
"""

for section in subsections:
    new_ui += f"""
        <div class="directory-section mb-[60px]" id="{section['id']}">
          <div class="mb-4">
            <h3 class="font-bold text-[#4B5056] text-[20px] mb-1">{section['title']}</h3>
            <p class="text-[#636972]">{section['desc']}</p>
          </div>
          <div class="directory-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]" id="{section['id']}-list">
"""
    
    for idx, item in enumerate(section['items']):
        name, desc = item
        slug = name.lower().replace(" ", "-").replace("/", "-")
        new_ui += f"""
            <article class="directory-card h-full" data-name="{name.lower()}" data-desc="{desc.lower()}" data-cat="{section['title'].lower()}"><a href="/generators/{slug}" class="block bg-white border border-[#C6C9CD] rounded-[3px] p-[20px] hover:shadow-md hover:border-brand-purple transition-all group flex flex-col h-full">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" class="mb-3">
                <rect width="24" height="24" rx="3" fill="#F4F6F8" />
                <circle cx="12" cy="12" r="6" fill="#8159BB" fill-opacity="0.2" />
              </svg>
              <h4 class="font-bold text-[#4B5056] mb-1 group-hover:text-brand-purple text-[15px] leading-tight">{name}</h4>
              <p class="text-[#636972] text-[13px]">{desc}</p>
            </a></article>"""
    new_ui += f"""
          </div>
          <div class="mt-[20px] text-center js-show-all-container hidden">
            <button class="bg-[#F4F6F8] border border-transparent text-[#4B5056] font-bold text-[13px] px-[16px] py-[8px] rounded-[4px] hover:bg-[#E2E4E7] js-show-all-btn cursor-pointer" aria-expanded="false" aria-controls="{section['id']}-list">Show all {len(section['items'])} generators</button>
          </div>
        </div>
"""

new_ui += """
      </section>

      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[60px] bg-[#F4F6F8] rounded-[8px] mb-[60px]">
        <div class="text-center mb-[40px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px]">{{ howHeading }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div class="text-center md:text-left">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-[18px] mx-auto md:mx-0 mb-4">1</div>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ how1Title }}</h3>
            <p class="text-[#636972]">{{ how1Desc }}</p>
          </div>
          <div class="text-center md:text-left">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-[18px] mx-auto md:mx-0 mb-4">2</div>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ how2Title }}</h3>
            <p class="text-[#636972]">{{ how2Desc }}</p>
          </div>
          <div class="text-center md:text-left">
            <div class="w-[40px] h-[40px] rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-[18px] mx-auto md:mx-0 mb-4">3</div>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ how3Title }}</h3>
            <p class="text-[#636972]">{{ how3Desc }}</p>
          </div>
        </div>
      </section>

      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[60px]">
        <div class="text-center mb-[40px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px]">{{ whyHeading }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          <div class="text-center">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" stroke-width="2" class="mx-auto mb-4"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ why1Title }}</h3>
            <p class="text-[#636972] mx-auto max-w-[280px]">{{ why1Desc }}</p>
          </div>
          <div class="text-center">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" stroke-width="2" class="mx-auto mb-4"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ why2Title }}</h3>
            <p class="text-[#636972] mx-auto max-w-[280px]">{{ why2Desc }}</p>
          </div>
          <div class="text-center">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" stroke-width="2" class="mx-auto mb-4"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            <h3 class="font-heading text-[#4B5056] text-[16px] uppercase mb-2">{{ why3Title }}</h3>
            <p class="text-[#636972] mx-auto max-w-[280px]">{{ why3Desc }}</p>
          </div>
        </div>
      </section>

      <section class="max-w-[800px] mx-auto px-4 md:px-10 py-[60px]">
        <div class="text-center mb-[40px]">
          <h2 class="font-heading text-[#4B5056] text-[24px] md:text-[32px]">{{ faqHeading }}</h2>
        </div>
        <div class="border-t border-[#E2E4E7]" id="faqContainer">
"""

for i in range(1, 7):
    new_ui += f"""
          <div class="border-b border-[#E2E4E7]">
            <button class="w-full text-left py-[20px] flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple js-faq-toggle group" aria-expanded="{"true" if i == 1 else "false"}" aria-controls="faq-answer-{i}">
              <span class="font-bold text-[#4B5056] pr-4 group-hover:text-brand-purple">{{{{ faqQ{i} }}}}</span>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" class="transform transition-transform duration-200 {'rotate-180' if i == 1 else ''} js-faq-icon text-[#636972] group-hover:text-brand-purple">
                <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div id="faq-answer-{i}" class="overflow-hidden {"max-h-0" if i > 1 else "max-h-[500px]"}" style="transition: max-height 0.3s ease;">
              <p class="text-[#636972] pb-[20px] pr-8">{{{{ faqA{i} }}}}</p>
            </div>
          </div>"""

new_ui += """
        </div>
      </section>

      <section class="max-w-[1200px] mx-auto px-4 md:px-10 py-[80px] text-center">
        <h2 class="font-heading text-[#4B5056] text-[28px] md:text-[40px] mb-4">{{ closingHeading }}</h2>
        <p class="text-[#636972] text-[16px] md:text-[18px] mb-8">{{ closingSub }}</p>
        <a href="/s/ai_site_builder" class="inline-flex items-center justify-center bg-ai-gradient text-white font-heading text-[16px] h-[44px] px-[32px] rounded-[4px] hover:opacity-90 transition-opacity">{{ closingCta }}</a>
      </section>
    </main>

    <footer class="bg-[#F4F6F8] py-[60px] border-t border-[#E2E4E7]">
      <div class="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-[40px]">
        <div>
          <a href="/" class="font-heading font-bold text-lg text-[#2E2E2F] flex items-center mb-4">
            strikingly<span class="text-brand-purple ml-1">AI</span>
          </a>
          <p class="text-[12px] text-[#636972]">&copy; 2026 Strikingly. All rights reserved.</p>
        </div>
        <div>
          <h2 class="font-bold text-[#4B5056] mb-4 text-[14px]">Product</h2>
          <ul class="list-none p-0 m-0 space-y-2 text-[13px]">
            <li><a href="/templates" class="text-[#636972] hover:text-brand-purple">Templates</a></li>
            <li><a href="/pricing" class="text-[#636972] hover:text-brand-purple">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-[#4B5056] mb-4 text-[14px]">Company</h2>
          <ul class="list-none p-0 m-0 space-y-2 text-[13px]">
            <li><a href="/about" class="text-[#636972] hover:text-brand-purple">About Us</a></li>
            <li><a href="/blog" class="text-[#636972] hover:text-brand-purple">Blog</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-[#4B5056] mb-4 text-[14px]">Support</h2>
          <ul class="list-none p-0 m-0 space-y-2 text-[13px]">
            <li><a href="/support" class="text-[#636972] hover:text-brand-purple">Help Center</a></li>
            <li><a href="/terms" class="text-[#636972] hover:text-brand-purple">Terms of Service</a></li>
            <li><a href="/privacy" class="text-[#636972] hover:text-brand-purple">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
"""

with open('/workspace/my-app/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('</header>')
if len(parts) == 2:
    final = parts[0] + '</header>' + new_ui + parts[1]
    with open('/workspace/my-app/index.html', 'w', encoding='utf-8') as f:
        f.write(final)
    print("Success: Updated index.html")
else:
    print("Error: Could not find </header>")
