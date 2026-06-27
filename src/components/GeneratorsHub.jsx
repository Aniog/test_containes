import { useState, useEffect, useRef, useCallback } from "react";
import { strings } from "@/strings/en";
import { categories, featuredGenerators, generatorsByCategory } from "@/data/generators";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const aiGradient =
  "linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)";

const brandPurple = "#8159BB";
const bodyGray = "#636972";
const headingGray = "#4B5056";
const heroHeadingDark = "#2E2E2F";
const cardBorder = "#C6C9CD";
const subtleDivider = "#E2E4E7";
const lightBg = "#F4F6F8";
const white = "#FFFFFF";

const cn = (...classes) => classes.filter(Boolean).join(" ");

/* ------------------------------------------------------------------ */
/* Inline SVG illustrations / icons                                    */
/* ------------------------------------------------------------------ */

const WebsiteIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="12" width="48" height="36" rx="4" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <path d="M8 20H56" stroke={brandPurple} strokeWidth="2.5" />
    <circle cx="14" cy="16" r="2" fill={brandPurple} />
    <circle cx="22" cy="16" r="2" fill={brandPurple} />
    <circle cx="30" cy="16" r="2" fill={brandPurple} />
    <rect x="14" y="26" width="36" height="4" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="34" width="24" height="4" rx="2" fill={brandPurple} opacity="0.25" />
  </svg>
);

const LandingPageIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <path d="M8 18H56" stroke={brandPurple} strokeWidth="2.5" />
    <rect x="14" y="24" width="36" height="8" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="38" width="20" height="4" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="46" width="28" height="4" rx="2" fill={brandPurple} opacity="0.25" />
  </svg>
);

const PortfolioIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <rect x="14" y="14" width="18" height="18" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="36" y="14" width="18" height="8" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="36" y="26" width="18" height="6" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="36" width="40" height="4" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="44" width="28" height="4" rx="2" fill={brandPurple} opacity="0.25" />
  </svg>
);

const BlogIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <path d="M8 18H56" stroke={brandPurple} strokeWidth="2.5" />
    <rect x="14" y="26" width="36" height="4" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="34" width="36" height="4" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="14" y="42" width="28" height="4" rx="2" fill={brandPurple} opacity="0.25" />
  </svg>
);

const StoreIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="12" width="48" height="36" rx="4" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <path d="M8 20H56" stroke={brandPurple} strokeWidth="2.5" />
    <rect x="14" y="26" width="14" height="14" rx="2" fill={brandPurple} opacity="0.25" />
    <rect x="32" y="26" width="14" height="14" rx="2" fill={brandPurple} opacity="0.25" />
    <circle cx="21" cy="33" r="3" fill={brandPurple} />
    <circle cx="39" cy="33" r="3" fill={brandPurple} />
  </svg>
);

const LinkInBioIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
    <rect x="8" y="8" width="48" height="48" rx="24" stroke={brandPurple} strokeWidth="2.5" fill="none" />
    <path d="M24 32H40" stroke={brandPurple} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 24V40" stroke={brandPurple} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const categoryIcons = {
  website: WebsiteIcon,
  "landing-page": LandingPageIcon,
  portfolio: PortfolioIcon,
  blog: BlogIcon,
  store: StoreIcon,
  "link-in-bio": LinkInBioIcon,
};

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const HeroIllustration = () => (
  <svg viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-auto" style={{ maxWidth: "520px" }}>
    <rect x="40" y="40" width="440" height="280" rx="16" fill={white} stroke={cardBorder} strokeWidth="2" />
    <rect x="40" y="40" width="440" height="40" rx="16" fill={lightBg} />
    <rect x="40" y="60" width="440" height="20" fill={lightBg} />
    <circle cx="70" cy="60" r="6" fill="#FF6058" />
    <circle cx="92" cy="60" r="6" fill="#FFBD2E" />
    <circle cx="114" cy="60" r="6" fill="#27C93F" />
    <rect x="60" y="110" width="120" height="8" rx="4" fill={subtleDivider} />
    <rect x="60" y="130" width="200" height="8" rx="4" fill={subtleDivider} />
    <rect x="60" y="150" width="160" height="8" rx="4" fill={subtleDivider} />
    <rect x="60" y="180" width="400" height="100" rx="8" fill={lightBg} />
    <rect x="80" y="200" width="80" height="60" rx="4" fill={white} stroke={cardBorder} />
    <rect x="180" y="200" width="80" height="60" rx="4" fill={white} stroke={cardBorder} />
    <rect x="280" y="200" width="80" height="60" rx="4" fill={white} stroke={cardBorder} />
    <rect x="380" y="200" width="60" height="60" rx="4" fill={white} stroke={cardBorder} />
    <rect x="90" y="215" width="60" height="6" rx="3" fill={subtleDivider} />
    <rect x="90" y="228" width="40" height="6" rx="3" fill={subtleDivider} />
    <rect x="190" y="215" width="60" height="6" rx="3" fill={subtleDivider} />
    <rect x="190" y="228" width="40" height="6" rx="3" fill={subtleDivider} />
    <rect x="290" y="215" width="60" height="6" rx="3" fill={subtleDivider} />
    <rect x="290" y="228" width="40" height="6" rx="3" fill={subtleDivider} />
    <rect x="390" y="215" width="40" height="6" rx="3" fill={subtleDivider} />
    <rect x="390" y="228" width="40" height="6" rx="3" fill={subtleDivider} />
  </svg>
);

const StepIcon = ({ number }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-12 h-12">
    <circle cx="24" cy="24" r="22" fill={aiGradient} />
    <text x="24" y="28" textAnchor="middle" fill={white} fontSize="18" fontWeight="700" fontFamily="Josefin Sans, Poppins, sans-serif">{number}</text>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const FreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={brandPurple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-6">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Sub-components                                                     */
/* ------------------------------------------------------------------ */

const TopBar = () => (
  <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: subtleDivider }}>
    <div className="mx-auto max-w-[1200px] px-5 h-14 flex items-center">
      <a href="/" className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white text-sm font-bold" style={{ background: aiGradient }}>S</span>
        Strikingly AI
      </a>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: subtleDivider }}>
    <ol className="mx-auto max-w-[1200px] px-5 py-3 flex items-center gap-2 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>
      <li>
        <a href="/" className="hover:underline" style={{ color: bodyGray }}>{strings.breadcrumb.home}</a>
      </li>
      <li aria-hidden="true" style={{ color: brandPurple }}>/</li>
      <li aria-current="page" style={{ color: headingGray }}>{strings.breadcrumb.current}</li>
    </ol>
  </nav>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImgLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: white }}>
      <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ background: "radial-gradient(ellipse at top right, rgba(118,113,255,0.15), transparent 60%), radial-gradient(ellipse at bottom left, rgba(203,12,159,0.1), transparent 60%)" }} />
      <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark, lineHeight: 1.2 }}>
              {strings.hero.line1}
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: aiGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{strings.hero.line2}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-xl" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif", lineHeight: 1.5 }}>
              {strings.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/s/ai_site_builder"
                className="inline-flex items-center justify-center text-white font-bold uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  fontFamily: "Josefin Sans, Poppins, sans-serif",
                  background: aiGradient,
                  height: "44px",
                  padding: "0 15px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  outlineColor: brandPurple,
                }}
              >
                {strings.hero.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center font-bold uppercase transition-colors hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  fontFamily: "Josefin Sans, Poppins, sans-serif",
                  color: brandPurple,
                  border: `1px solid ${brandPurple}`,
                  background: "transparent",
                  height: "44px",
                  padding: "0 15px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                  outlineColor: brandPurple,
                }}
              >
                {strings.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedGenerators = () => (
  <section className="bg-white" style={{ padding: "40px 0" }}>
    <div className="mx-auto max-w-[1200px] px-5">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.featured.heading}</h2>
        <p className="mt-2 text-base" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{strings.featured.subheading}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.name}
            href={gen.href}
            className="group block rounded-md border p-5 transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: white,
              borderColor: cardBorder,
              borderRadius: "3px",
              padding: "20px",
              outlineColor: brandPurple,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = brandPurple;
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = cardBorder;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 className="text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>{gen.name}</h3>
            <p className="mt-2 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{gen.description}</p>
            <span
              className="mt-4 inline-block text-xs font-bold uppercase"
              style={{
                fontFamily: "Josefin Sans, Poppins, sans-serif",
                color: brandPurple,
                border: `1px solid ${brandPurple}`,
                borderRadius: "3px",
                padding: "2px 6px",
                background: "transparent",
              }}
            >
              {gen.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => {
  const iconMap = {
    website: WebsiteIcon,
    "landing-page": LandingPageIcon,
    portfolio: PortfolioIcon,
    blog: BlogIcon,
    store: StoreIcon,
    "link-in-bio": LinkInBioIcon,
  };

  return (
    <section className="bg-white" style={{ padding: "40px 0" }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.browseByCategory.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id];
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="group flex flex-col rounded-md border p-5 transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: white,
                  borderColor: cardBorder,
                  borderRadius: "3px",
                  padding: "20px",
                  outlineColor: brandPurple,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = brandPurple;
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = cardBorder;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="mb-4 h-16 w-16">
                  {Icon && <Icon />}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>{cat.name}</h3>
                    <p className="mt-1 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{cat.description}</p>
                  </div>
                  <span className="ml-4 flex-shrink-0" style={{ color: brandPurple }}>
                    <ArrowRightIcon />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AllGenerators = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  const [matchCount, setMatchCount] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const searchInputRef = useRef(null);
  const sectionRefs = useRef({});

  const categoryDescriptions = {
    websites: "AI-built business and personal sites for any goal.",
    "landing-pages": "Single-page sites built to convert visitors fast.",
    portfolios: "Showcase your work with a clean, focused site.",
    blogs: "Publish-ready blogs with built-in SEO basics.",
    stores: "Sell products online with payments built in.",
    "link-in-bio": "One link, all your places. Made for creators.",
  };

  const iconMap = {
    website: WebsiteIcon,
    "landing-page": LandingPageIcon,
    portfolio: PortfolioIcon,
    blog: BlogIcon,
    store: StoreIcon,
    "link-in-bio": LinkInBioIcon,
  };

  const runSearch = useCallback((q) => {
    const normalized = q.trim().toLowerCase();
    if (!normalized) {
      const empty = {};
      categories.forEach((c) => {
        empty[c.id] = generatorsByCategory[c.id].map((g) => ({ ...g, visible: true }));
      });
      setResults(empty);
      setMatchCount(Object.values(generatorsByCategory).flat().length);
      return;
    }

    const next = {};
    let count = 0;
    categories.forEach((c) => {
      const matches = generatorsByCategory[c.id].filter((g) => {
        const haystack = `${g.name} ${g.description} ${c.name}`.toLowerCase();
        return haystack.includes(normalized);
      });
      next[c.id] = matches.map((g) => ({ ...g, visible: true }));
      count += matches.length;
    });
    setResults(next);
    setMatchCount(count);
  }, []);

  useEffect(() => {
    const initial = {};
    categories.forEach((c) => {
      initial[c.id] = generatorsByCategory[c.id].map((g) => ({ ...g, visible: true }));
    });
    setResults(initial);
    setMatchCount(Object.values(generatorsByCategory).flat().length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => runSearch(query), 150);
    return () => clearTimeout(timer);
  }, [query, runSearch]);

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const clearSearch = () => {
    setQuery("");
    searchInputRef.current?.focus();
  };

  const visibleCategories = categories.filter((c) => {
    const list = results[c.id] || [];
    return list.some((g) => g.visible !== false);
  });

  return (
    <section id="all-generators" className="bg-white" style={{ padding: "40px 0" }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.allGenerators.heading}</h2>
        <p className="mb-6 text-base" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{strings.allGenerators.subheading}</p>

        <div className="relative max-w-[480px] mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ color: bodyGray }}>
            <SearchIcon />
          </span>
          <input
            ref={searchInputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={strings.allGenerators.searchPlaceholder}
            aria-label={strings.allGenerators.searchLabel}
            className="w-full rounded-md border py-2 pl-10 pr-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              borderColor: cardBorder,
              borderRadius: "4px",
              padding: "8px 12px 8px 40px",
              fontFamily: "Open Sans, sans-serif",
              outlineColor: brandPurple,
            }}
          />
        </div>

        <p className="mb-8 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>
          {query ? `${matchCount} ${strings.allGenerators.matchCount.replace("X", matchCount)}` : ""}
        </p>

        {query && matchCount === 0 && (
          <div className="mb-10 rounded-md border p-6 text-center" style={{ background: lightBg, borderColor: subtleDivider, borderRadius: "3px" }}>
            <p className="mb-3 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{strings.allGenerators.noResultsLink}</p>
            <button
              type="button"
              onClick={clearSearch}
              className="inline-flex items-center justify-center font-bold uppercase transition-opacity hover:opacity-90"
              style={{
                fontFamily: "Josefin Sans, Poppins, sans-serif",
                background: aiGradient,
                color: white,
                height: "36px",
                padding: "0 15px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {strings.allGenerators.clearSearch}
            </button>
          </div>
        )}

        <div className="space-y-10">
          {visibleCategories.map((cat) => {
            const list = results[cat.id] || [];
            const visibleItems = list.filter((g) => g.visible !== false);
            const isExpanded = expandedSections[cat.id] !== false;
            const Icon = iconMap[cat.id];
            const initialCount = 6;

            return (
              <div key={cat.id} id={cat.id} ref={(el) => (sectionRefs.current[cat.id] = el)}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 flex-shrink-0">{Icon && <Icon />}</div>
                  <div>
                    <h3 className="text-xl font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{cat.name}</h3>
                    <p className="text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{categoryDescriptions[cat.id]}</p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  style={{
                    display: "grid",
                  }}
                >
                  {visibleItems.map((gen) => {
                    const isHidden = !isExpanded && visibleItems.indexOf(gen) >= initialCount;
                    return (
                      <a
                        key={gen.href}
                        href={gen.href}
                        className={cn(
                          "group block rounded-md border p-5 transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                          isHidden && "generator-collapsed"
                        )}
                        style={{
                          background: white,
                          borderColor: cardBorder,
                          borderRadius: "3px",
                          padding: "20px",
                          outlineColor: brandPurple,
                        }}
                        onMouseEnter={(e) => {
                          if (!isHidden) {
                            e.currentTarget.style.borderColor = brandPurple;
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = cardBorder;
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div className="mb-4 h-16 w-16">
                          {Icon && <Icon />}
                        </div>
                        <h4 className="text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>{gen.name}</h4>
                        <p className="mt-2 text-sm" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{gen.description}</p>
                      </a>
                    );
                  })}
                </div>

                {visibleItems.length > initialCount && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => toggleSection(cat.id)}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase transition-colors hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{
                        fontFamily: "Josefin Sans, Poppins, sans-serif",
                        color: brandPurple,
                        background: "transparent",
                        border: "none",
                        outlineColor: brandPurple,
                      }}
                      aria-expanded={isExpanded}
                      aria-controls={`${cat.id}-grid`}
                    >
                      {isExpanded ? strings.allGenerators.showLess : strings.allGenerators.showAll.replace("{count}", visibleItems.length)}
                      <ChevronDownIcon open={isExpanded} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: strings.howItWorks.step1Title, body: strings.howItWorks.step1Body },
    { title: strings.howItWorks.step2Title, body: strings.howItWorks.step2Body },
    { title: strings.howItWorks.step3Title, body: strings.howItWorks.step3Body },
  ];

  return (
    <section className="bg-white" style={{ padding: "40px 0" }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-center" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.howItWorks.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <StepIcon number={idx + 1} />
              <h3 className="mt-5 text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray }}>{step.title}</h3>
              <p className="mt-2 text-sm max-w-xs" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyStrikingly = () => {
  const claims = [
    { icon: CheckIcon, title: strings.whyStrikingly.claim1, body: strings.whyStrikingly.claim1Body },
    { icon: MobileIcon, title: strings.whyStrikingly.claim2, body: strings.whyStrikingly.claim2Body },
    { icon: FreeIcon, title: strings.whyStrikingly.claim3, body: strings.whyStrikingly.claim3Body },
  ];

  return (
    <section className="bg-white" style={{ padding: "40px 0" }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-center" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.whyStrikingly.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {claims.map((claim, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full" style={{ background: lightBg }}>
                <claim.icon />
              </span>
              <h3 className="text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray }}>{claim.title}</h3>
              <p className="mt-2 text-sm max-w-xs" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{claim.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const questions = [
    { q: strings.faq.q1, a: strings.faq.a1 },
    { q: strings.faq.q2, a: strings.faq.a2 },
    { q: strings.faq.q3, a: strings.faq.a3 },
    { q: strings.faq.q4, a: strings.faq.a4 },
    { q: strings.faq.q5, a: strings.faq.a5 },
    { q: strings.faq.q6, a: strings.faq.a6 },
  ];

  return (
    <section className="bg-white" style={{ padding: "40px 0" }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.faq.heading}</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {questions.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-${idx}`;
            return (
              <div key={idx} className="rounded-md border" style={{ background: white, borderColor: cardBorder, borderRadius: "3px" }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  <span className="pr-4 text-sm font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>{item.q}</span>
                  <ChevronDownIcon open={isOpen} />
                </button>
                <div
                  id={contentId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                  style={{ fontFamily: "Open Sans, sans-serif", color: bodyGray }}
                >
                  <p className="text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ClosingCta = () => (
  <section className="bg-white" style={{ padding: "60px 0" }}>
    <div className="mx-auto max-w-[1200px] px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray, lineHeight: 1.2 }}>{strings.closingCta.headline}</h2>
      <p className="mt-3 text-base" style={{ color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>{strings.closingCta.sub}</p>
      <div className="mt-8">
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center text-white font-bold uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            fontFamily: "Josefin Sans, Poppins, sans-serif",
            background: aiGradient,
            height: "44px",
            padding: "0 15px",
            borderRadius: "4px",
            fontSize: "14px",
            letterSpacing: "0.05em",
            outlineColor: brandPurple,
          }}
        >
          {strings.closingCta.cta}
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t" style={{ background: white, borderColor: subtleDivider }}>
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center gap-2 text-base font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: heroHeadingDark }}>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white text-xs font-bold" style={{ background: aiGradient }}>S</span>
              Strikingly AI
            </a>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray }}>{strings.footer.product}</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Open Sans, sans-serif", color: bodyGray }}>
              <li><a href="/templates" className="hover:underline">{strings.footer.templates}</a></li>
              <li><a href="/pricing" className="hover:underline">{strings.footer.pricing}</a></li>
              <li><a href="/s/ai_site_builder" className="hover:underline">{strings.footer.aiBuilder}</a></li>
              <li><a href="/generators" className="hover:underline">{strings.footer.generators}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray }}>{strings.footer.company}</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Open Sans, sans-serif", color: bodyGray }}>
              <li><a href="/about" className="hover:underline">{strings.footer.about}</a></li>
              <li><a href="/blog" className="hover:underline">{strings.footer.blog}</a></li>
              <li><a href="/support" className="hover:underline">{strings.footer.support}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase" style={{ fontFamily: "Josefin Sans, Poppins, sans-serif", color: headingGray }}>{strings.footer.legal}</h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "Open Sans, sans-serif", color: bodyGray }}>
              <li><a href="/terms" className="hover:underline">{strings.footer.terms}</a></li>
              <li><a href="/privacy" className="hover:underline">{strings.footer.privacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm" style={{ borderColor: subtleDivider, color: bodyGray, fontFamily: "Open Sans, sans-serif" }}>
          {strings.footer.copyright.replace("{year}", year)}
        </div>
      </div>
    </footer>
  );
};

/* ------------------------------------------------------------------ */
/* Main page                                                          */
/* ------------------------------------------------------------------ */

export default function GeneratorsHub() {
  return (
    <div className="min-h-screen" style={{ background: white, fontFamily: "Open Sans, sans-serif", color: bodyGray }}>
      <TopBar />
      <Breadcrumb />
      <main id="main-content">
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
