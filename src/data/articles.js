// ─────────────────────────────────────────────────────────────────────────────
// Article Data — edit this file to manage all article content on the site.
//
// Fields:
//   id         – unique string key
//   category   – one of: 'News' | 'Reviews' | 'Guides' | 'Deals' | 'Features'
//   title      – article headline
//   excerpt    – short summary (1–2 sentences)
//   body       – full article text (shown in the Article section)
//   author     – author display name
//   date       – ISO date string  e.g. '2026-07-01'
//   readTime   – e.g. '3 min'
//   featured   – true for the hero/featured slot (only one should be true)
//   tags       – array of tag strings
//   titleId    – unique DOM id for the title element  (used by image system)
//   descId     – unique DOM id for the excerpt element (used by image system)
//   imgId      – unique image asset id               (used by image system)
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES = ['All', 'News', 'Reviews', 'Guides', 'Deals', 'Features'];

export const articles = [
  // ── FEATURED ──────────────────────────────────────────────────────────────
  {
    id: 'art-1',
    category: 'News',
    title: 'Steam Summer Sale 2026 Kicks Off with Record-Breaking Discounts',
    excerpt:
      'Valve has launched its annual Summer Sale featuring over 14,000 discounted titles, with some games hitting all-time low prices.',
    body: `Valve's Steam Summer Sale 2026 is officially live, and it's shaping up to be the biggest one yet. Over 14,000 titles are discounted, with flagship deals including Cyberpunk 2077 at 70% off, Elden Ring at 50% off, and the entire Witcher trilogy for under $10.

The sale runs through July 14, 2026, and includes daily flash deals that rotate every 24 hours. Valve has also introduced a new "Bundle Builder" feature that lets players create custom bundles from their wishlist at an additional 10% discount.

Community voting for the "Players' Choice" awards is also open, with categories including Best RPG, Best Indie, and Most Anticipated. Winners receive an extra 15% discount during the final 48 hours of the sale.`,
    author: 'Alex Chen',
    date: '2026-07-01',
    readTime: '3 min',
    featured: true,
    tags: ['Steam', 'Sales', 'PC Gaming'],
    titleId: 'art-1-title',
    descId: 'art-1-desc',
    imgId: 'art-img-1-aa1bb2',
  },

  // ── REVIEWS ───────────────────────────────────────────────────────────────
  {
    id: 'art-2',
    category: 'Reviews',
    title: 'Elden Ring: Shadow of the Erdtree DLC — A Masterpiece Expanded',
    excerpt:
      'FromSoftware delivers yet another punishing yet rewarding experience in this massive expansion to the award-winning Elden Ring.',
    body: `Shadow of the Erdtree is everything fans hoped for and more. Set in the Land of Shadow, a realm hidden beneath the Erdtree itself, the DLC introduces a sprawling new map that rivals the base game's Limgrave in sheer scale and density.

New weapons, including the Backhand Blade and the Dueling Shield, fundamentally change how combat feels. The boss roster is arguably the strongest FromSoftware has ever assembled, with Messmer the Impaler standing as one of the greatest boss fights in gaming history.

Score: 10/10 — An unmissable expansion that justifies every hour of its demanding difficulty.`,
    author: 'Sarah Kim',
    date: '2026-06-28',
    readTime: '8 min',
    featured: false,
    tags: ['Elden Ring', 'FromSoftware', 'DLC', 'Review'],
    titleId: 'art-2-title',
    descId: 'art-2-desc',
    imgId: 'art-img-2-cc3dd4',
  },
  {
    id: 'art-7',
    category: 'Reviews',
    title: 'Black Myth: Wukong — Six Months Later, Still a Masterpiece',
    excerpt:
      "Game Science's debut title continues to impress with its stunning visuals and deep combat system rooted in Chinese mythology.",
    body: `Six months after its explosive launch, Black Myth: Wukong remains one of the most visually stunning games ever made. Running on Unreal Engine 5, the game's environments — from bamboo forests to ancient temples — are breathtaking even on mid-range hardware.

The combat system, built around transformation abilities and staff techniques, rewards mastery in a way few action games do. Post-launch patches have added New Game+ modes, additional boss encounters, and a photo mode that has spawned a thriving community of in-game photographers.

If you haven't played it yet, the recent 30% sale makes this the perfect time to dive in.`,
    author: 'James Liu',
    date: '2026-06-20',
    readTime: '6 min',
    featured: false,
    tags: ['Black Myth', 'Action RPG', 'Review'],
    titleId: 'art-7-title',
    descId: 'art-7-desc',
    imgId: 'art-img-7-mm3nn4',
  },

  // ── NEWS ──────────────────────────────────────────────────────────────────
  {
    id: 'art-3',
    category: 'News',
    title: 'Xbox Game Pass Adds 15 New Titles This Month Including Day-One Releases',
    excerpt:
      'Microsoft continues to bolster its subscription service with a strong lineup of first-party and third-party titles.',
    body: `Microsoft has announced the July 2026 Game Pass lineup, and it's one of the strongest months in the service's history. Highlights include Starfield: Shattered Space on day one, along with third-party additions like Hollow Knight: Silksong and EA Sports FC 26.

The company also confirmed that all future Bethesda titles will continue to launch day-one on Game Pass, following the success of Starfield and Indiana Jones and the Great Circle.

Game Pass Ultimate subscribers also receive new Perks this month, including exclusive in-game items for Fortnite, Apex Legends, and Destiny 2.`,
    author: 'Mike Torres',
    date: '2026-06-30',
    readTime: '4 min',
    featured: false,
    tags: ['Xbox', 'Game Pass', 'Microsoft'],
    titleId: 'art-3-title',
    descId: 'art-3-desc',
    imgId: 'art-img-3-ee5ff6',
  },
  {
    id: 'art-5',
    category: 'News',
    title: 'Nintendo Direct July 2026: Every Game Announced',
    excerpt:
      'Nintendo surprised fans with a packed Direct presentation revealing new Switch 2 exclusives and beloved franchise returns.',
    body: `Nintendo's July 2026 Direct was a 45-minute showcase packed with surprises. The biggest announcement was Metroid Prime 4: Beyond, confirmed for a November 2026 launch on Switch 2, alongside a new 2D Metroid title developed by MercurySteam.

Other highlights included a new entry in the Fire Emblem series, a Pokémon Legends: Z-A release date of September 2026, and the surprise reveal of a new F-Zero game — the franchise's first entry in over 20 years.

The Direct closed with a teaser for a new IP from the developers of Xenoblade Chronicles, set for a 2027 release.`,
    author: 'Tom Nakamura',
    date: '2026-07-01',
    readTime: '5 min',
    featured: false,
    tags: ['Nintendo', 'Switch 2', 'Direct'],
    titleId: 'art-5-title',
    descId: 'art-5-desc',
    imgId: 'art-img-5-ii9jj0',
  },
  {
    id: 'art-8',
    category: 'News',
    title: 'PlayStation State of Play: God of War Ragnarök PC Port Confirmed',
    excerpt:
      'Sony confirms the critically acclaimed God of War Ragnarök is coming to PC in August 2026 with full ultrawide and DLSS 4 support.',
    body: `Sony's latest State of Play confirmed what many had suspected: God of War Ragnarök is heading to PC on August 15, 2026. The port is being handled by Jetpack Interactive, the same studio behind the excellent God of War (2018) PC port.

The PC version will support ultrawide resolutions up to 32:9, DLSS 4, FSR 3, and XeSS upscaling. It also includes all previously released DLC, including the Valhalla roguelite expansion, in a single package priced at $49.99.

Pre-orders are live now on Steam and the Epic Games Store, with a 10% launch discount for PlayStation Plus members who link their accounts.`,
    author: 'Rachel Moore',
    date: '2026-06-27',
    readTime: '4 min',
    featured: false,
    tags: ['PlayStation', 'God of War', 'PC Gaming'],
    titleId: 'art-8-title',
    descId: 'art-8-desc',
    imgId: 'art-img-8-oo5pp6',
  },

  // ── GUIDES ────────────────────────────────────────────────────────────────
  {
    id: 'art-4',
    category: 'Guides',
    title: 'How to Get the Most Out of PlayStation Plus Premium in 2026',
    excerpt:
      'A comprehensive guide to maximizing your PlayStation Plus Premium subscription with tips on cloud streaming, game trials, and exclusive perks.',
    body: `PlayStation Plus Premium offers tremendous value if you know where to look. Here's how to squeeze every dollar out of your subscription.

**Game Trials**: Every month, 3–5 new titles receive 5-hour free trials for Premium members. Set a calendar reminder on the first Tuesday of each month when new trials drop.

**Cloud Streaming**: PS Plus Premium includes cloud streaming for over 400 PS3 titles. Use this to play classics like Demon's Souls and Resistance: Fall of Man without downloading anything.

**Classics Catalog**: The catalog now includes over 700 PS1, PS2, and PSP titles. Hidden gems include Vagrant Story, Ico, and the entire Sly Cooper trilogy.

**Exclusive Discounts**: Premium members receive an additional 5% off all PS Store sales, stacking with existing sale prices for maximum savings.`,
    author: 'Lisa Park',
    date: '2026-06-25',
    readTime: '6 min',
    featured: false,
    tags: ['PlayStation', 'PS Plus', 'Guide'],
    titleId: 'art-4-title',
    descId: 'art-4-desc',
    imgId: 'art-img-4-gg7hh8',
  },
  {
    id: 'art-9',
    category: 'Guides',
    title: 'The Ultimate Guide to Building a Budget Gaming PC in 2026',
    excerpt:
      "You don't need to spend $2,000 to play the latest games. Here's how to build a capable gaming rig for under $700.",
    body: `Building a gaming PC in 2026 is more accessible than ever, thanks to competitive pricing on mid-range GPUs and CPUs. Here's a complete build guide for under $700.

**CPU**: AMD Ryzen 5 7600 ($180) — Six cores, excellent single-thread performance, and runs cool enough to use the stock cooler.

**GPU**: AMD RX 7700 XT ($250) — Handles 1080p at ultra settings and 1440p at high settings in most modern titles. Excellent FSR 3 support.

**RAM**: 32GB DDR5-5600 ($65) — Future-proof capacity at a price that no longer hurts.

**Storage**: 1TB NVMe SSD ($70) — Fast enough for DirectStorage titles, with room for 15–20 installed games.

**Motherboard + PSU + Case**: ~$135 combined for a B650 board, 650W 80+ Gold PSU, and a mid-tower case.

Total: ~$700. This build will handle everything from Cyberpunk 2077 to Black Myth: Wukong at solid framerates.`,
    author: 'David Park',
    date: '2026-06-22',
    readTime: '10 min',
    featured: false,
    tags: ['PC Gaming', 'Hardware', 'Guide', 'Budget'],
    titleId: 'art-9-title',
    descId: 'art-9-desc',
    imgId: 'art-img-9-qq7rr8',
  },

  // ── DEALS ─────────────────────────────────────────────────────────────────
  {
    id: 'art-6',
    category: 'Deals',
    title: 'Epic Games Free Games This Week: Two AAA Titles Up for Grabs',
    excerpt:
      'Epic continues its generous free game program with two highly-rated titles available for free claim this week only.',
    body: `Epic Games is giving away two AAA titles this week as part of its ongoing free game program. From July 1–8, players can claim Borderlands 3 and Control: Ultimate Edition at no cost.

Both games are permanently added to your Epic library once claimed — no subscription required. Borderlands 3 includes all four campaign DLC packs in this giveaway, making it an exceptional value.

Next week's free games have already been leaked: sources suggest Prey (2017) and Dishonored 2 will be the next offerings, continuing Epic's trend of giving away Arkane Studios titles.

To claim, simply log into the Epic Games Store before July 8 at 11 AM ET.`,
    author: 'Emma Wilson',
    date: '2026-06-29',
    readTime: '2 min',
    featured: false,
    tags: ['Epic Games', 'Free Games', 'Deals'],
    titleId: 'art-6-title',
    descId: 'art-6-desc',
    imgId: 'art-img-6-kk1ll2',
  },

  // ── FEATURES ──────────────────────────────────────────────────────────────
  {
    id: 'art-10',
    category: 'Features',
    title: 'The Rise of the AA Game: Why Mid-Budget Titles Are Winning 2026',
    excerpt:
      "As AAA budgets balloon past $300 million, a new wave of focused, polished mid-budget games is capturing players' hearts and wallets.",
    body: `Something interesting is happening in the games industry. While AAA publishers pour hundreds of millions into blockbuster sequels, a new class of "AA" games — titles with budgets between $10–50 million — is quietly dominating player satisfaction scores.

Games like Hollow Knight: Silksong, Hades II, and Pentiment prove that tight scope, strong creative vision, and genuine craft can outshine the spectacle of a $300 million production. Players are increasingly vocal about preferring a 15-hour focused experience over a 60-hour bloated open world.

The economics make sense too. A AA game that sells 2 million copies at $30 is more profitable than a AAA game that sells 5 million at $70 but cost $400 million to make and market.

As we head into the second half of 2026, the most anticipated titles on many players' lists aren't the next Call of Duty or Assassin's Creed — they're Silksong, Neva, and a dozen other mid-budget gems.`,
    author: 'Chris Walters',
    date: '2026-06-18',
    readTime: '7 min',
    featured: false,
    tags: ['Industry', 'Indie', 'Features', 'AA Games'],
    titleId: 'art-10-title',
    descId: 'art-10-desc',
    imgId: 'art-img-10-ss9tt0',
  },
];
