import { useState, useMemo } from 'react'
import strings from '@/lib/strings'

// Helper to generate some plausible fake data
const generateItems = (category, count) => {
  const templates = [
    "AI {cat} Generator",
    "Free {cat} Builder for Photographers",
    "One-Page Wedding {cat} Builder",
    "{cat} Generator for Designers",
    "Online {cat} Builder for Restaurants",
    "{cat} Generator for Beginners",
    "Beautiful AI {cat} Maker",
    "No-Code {cat} Builder for Yoga Instructors",
    "Fast {cat} Generator for Small Business",
    "Professional {cat} Builder for Freelancers",
    "Quick {cat} Maker for Consultants",
    "Simple {cat} Generator for Events"
  ]

  const items = []
  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length]
    const name = template.replace(/{cat}/g, category)
    items.push({
      id: `${category.toLowerCase()}-${i}`,
      name,
      desc: `A powerful tool to create your next ${category.toLowerCase()} quickly and easily.`,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    })
  }
  return items
}

const DIRECTORY_DATA = [
  {
    id: "websites",
    name: "Websites",
    desc: "AI-built business and personal sites for any goal.",
    items: generateItems("Website", 10),
    thumbnailFill: "#E3E0F3",
    thumbnailStroke: "#8159BB"
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    desc: "Single-page sites built to convert visitors fast.",
    items: generateItems("Landing Page", 9),
    thumbnailFill: "#FFE5F1",
    thumbnailStroke: "#CB0C9F"
  },
  {
    id: "portfolios",
    name: "Portfolios",
    desc: "Showcase your work with a clean, focused site.",
    items: generateItems("Portfolio", 8),
    thumbnailFill: "#E0F2F1",
    thumbnailStroke: "#00838F"
  },
  {
    id: "blogs",
    name: "Blogs",
    desc: "Publish-ready blogs with built-in SEO basics.",
    items: generateItems("Blog", 11),
    thumbnailFill: "#FFF3E0",
    thumbnailStroke: "#E65100"
  },
  {
    id: "stores",
    name: "Online Stores",
    desc: "Sell products online with payments built in.",
    items: generateItems("Store", 12),
    thumbnailFill: "#E8F5E9",
    thumbnailStroke: "#2E7D32"
  },
  {
    id: "link-in-bio",
    name: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    items: generateItems("Link-in-Bio", 8),
    thumbnailFill: "#F3E5F5",
    thumbnailStroke: "#4A148C"
  }
]

const INITIAL_VISIBLE_COUNT = 6 // 2 rows on desktop

export default function AllGenerators() {
  const { directory } = strings
  const [searchQuery, setSearchQuery] = useState('')
  // Track expanded state per category ID
  const [expandedCategories, setExpandedCategories] = useState({})

  const handleToggleExpand = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  // Filter logic
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return DIRECTORY_DATA

    return DIRECTORY_DATA.map(category => {
      // Check if category name matches
      const categoryMatch = category.name.toLowerCase().includes(q)
      
      // Filter items
      const matchingItems = category.items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) ||
        categoryMatch
      )

      return {
        ...category,
        items: matchingItems
      }
    }).filter(category => category.items.length > 0)
  }, [searchQuery])

  const totalResultsCount = filteredData.reduce((acc, cat) => acc + cat.items.length, 0)
  const isSearching = searchQuery.trim().length > 0

  return (
    <section id="all-generators" className="max-w-[1200px] mx-auto px-5 py-[40px] mb-10">
      <div className="text-center mb-10">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)] mb-2">
          {directory.heading}
        </h2>
        <p className="text-[16px]">{directory.subheading}</p>
      </div>

      {/* Search Input */}
      <div className="max-w-[480px] mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[color:var(--color-text-body)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search generators..."
          aria-label="Search generators"
          className="w-full pl-10 pr-4 py-3 border border-[color:var(--color-border-card)] rounded-[4px] focus:outline-none focus:border-[color:var(--color-brand-purple)] focus:ring-1 focus:ring-[color:var(--color-brand-purple)]"
        />
        {isSearching && (
          <div className="text-center mt-3 text-[14px]">
            {totalResultsCount} generators match
          </div>
        )}
      </div>

      {/* Empty State */}
      {isSearching && filteredData.length === 0 && (
        <div className="text-center py-10 bg-[color:var(--color-bg-light)] rounded-xl border border-[color:var(--color-divider)]">
          <p className="mb-4">No generators found matching "{searchQuery}"</p>
          <div className="flex flex-col items-center gap-3">
            <button 
              onClick={handleClearSearch}
              className="text-[color:var(--color-brand-purple)] font-bold uppercase font-[family-name:var(--font-heading)] hover:underline"
            >
              Clear Search
            </button>
            <span className="text-[14px]">
              Can't find it? <a href="/s/ai_site_builder" className="text-[color:var(--color-brand-purple)] font-medium hover:underline">Start with our AI builder.</a>
            </span>
          </div>
        </div>
      )}

      {/* Subsections */}
      {filteredData.map(category => {
        const isExpanded = expandedCategories[category.id] || isSearching // Always fully expand while searching
        
        // For baseline HTML (No JS), everything should render.
        // We handle the visual hiding via simple map slicing when JS is active and not expanded.
        const itemsToShow = category.items

        const hasMore = category.items.length > INITIAL_VISIBLE_COUNT
        
        return (
          <div key={category.id} id={category.id} className="mb-16 scroll-mt-[80px]">
            <div className="mb-6">
              <h3 className="heading text-[22px] md:text-[24px] text-[color:var(--color-text-heading)] mb-1">
                {category.name}
              </h3>
              <p className="text-[15px] m-0">{category.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Render all items but hide via CSS class if not expanded */}
              {category.items.map((item, index) => {
                const isHiddenByCollapse = !isExpanded && index >= INITIAL_VISIBLE_COUNT;
                
                return (
                  <a
                    key={item.id}
                    href={`/generators/${item.slug}`}
                    className={`block bg-white border border-[color:var(--color-border-card)] rounded-[3px] p-[20px] hover:shadow-md hover:border-[color:var(--color-brand-purple)] transition-all group ${isHiddenByCollapse ? 'hidden js-hidden' : ''}`}
                    // We use CSS conditional classes.
                  >
                    <div className="mb-4 w-12 h-12 rounded bg-[color:var(--color-bg-light)] border border-[color:var(--color-divider)] flex items-center justify-center">
                       {/* Shared subset category illustration thumbnail placeholder */}
                       <svg width="24" height="24" viewBox="0 0 24 24" fill={category.thumbnailFill} stroke={category.thumbnailStroke} strokeWidth="1.5" aria-hidden="true">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M2 10h20M7 10v10" />
                       </svg>
                    </div>
                    <h4 className="font-bold text-[#2E2E2F] group-hover:text-[color:var(--color-brand-purple)] transition-colors leading-tight mb-2">
                      {item.name}
                    </h4>
                    <p className="text-[14px] text-[color:var(--color-text-body)] m-0">
                      {item.desc}
                    </p>
                  </a>
                )
              })}
            </div>

            {hasMore && !isSearching && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => handleToggleExpand(category.id)}
                  aria-expanded={isExpanded}
                  aria-controls={category.id}
                  className="bg-transparent border border-[color:var(--color-border-card)] text-[color:var(--color-text-heading)] font-[family-name:var(--font-heading)] font-bold uppercase text-[12px] px-[20px] h-[36px] rounded-[4px] inline-flex items-center justify-center hover:border-[color:var(--color-brand-purple)] hover:text-[color:var(--color-brand-purple)] transition-colors"
                >
                  {isExpanded ? "Show fewer" : `Show all ${category.items.length} generators`}
                  <svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" 
                    className={`ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
