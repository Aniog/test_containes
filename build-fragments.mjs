// Build helper: emits static HTML fragments for the generators hub.
// Run with: node build-fragments.mjs > fragments.txt
import { strings, categories, featured, directory, VISIBLE_BEFORE_COLLAPSE } from './src/generators/data.js'

const t = strings.en
const BUILDER = '/s/ai_site_builder'

const thumbs = {
  websites: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="8" y="10" width="40" height="36" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M8 18 H48" stroke="#8159BB" stroke-width="2.5"/><circle cx="13" cy="14" r="1.6" fill="#8159BB"/><circle cx="18" cy="14" r="1.6" fill="#8159BB"/><rect x="14" y="24" width="14" height="10" rx="2" stroke="#8159BB" stroke-width="2.5"/><path d="M34 24 H42 M34 30 H42 M34 36 H40" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'landing-pages': `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="14" y="8" width="28" height="40" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M20 18 H36 M20 26 H36 M24 34 H32" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  portfolios: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="8" y="10" width="40" height="36" rx="4" stroke="#8159BB" stroke-width="2.5"/><circle cx="20" cy="24" r="5" stroke="#8159BB" stroke-width="2.5"/><path d="M12 42 L24 30 L32 38 L40 28 L46 34" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  blogs: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><rect x="10" y="8" width="36" height="40" rx="4" stroke="#8159BB" stroke-width="2.5"/><path d="M18 18 H38 M18 26 H38 M18 34 H30" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  stores: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M14 18 H42 L40 44 H16 Z" stroke="#8159BB" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 18 V14 a8 8 0 0 1 16 0 V18" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'link-in-bio': `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M22 12 H34 a6 6 0 0 1 6 6 V38 a6 6 0 0 1 -6 6 H22 a6 6 0 0 1 -6 -6 V18 a6 6 0 0 1 6 -6 Z" stroke="#8159BB" stroke-width="2.5"/><path d="M20 22 H36 M20 30 H36 M20 38 H30" stroke="#8159BB" stroke-width="2.5" stroke-linecap="round"/></svg>`,
}

const arrow = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 10 H15 M10 5 L15 10 L10 15" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`

// Featured
let featuredHtml = featured.map(f => `      <a href="/generators/${f.slug}" class="g-card g-card-featured">
        <span class="g-tag">${f.category}</span>
        <h3 class="g-card-name">${f.name}</h3>
        <p class="g-card-desc">${f.desc}</p>
      </a>`).join('\n')

// Browse by category
let browseHtml = categories.map(c => `      <a href="/generators#${c.id}" class="g-card g-card-category">
        <span class="g-card-thumb">${thumbs[c.id]}</span>
        <h3 class="g-card-name g-card-name-upper">${c.name}</h3>
        <p class="g-card-desc">${c.desc}</p>
        <span class="g-card-arrow" aria-hidden="true">${arrow}</span>
      </a>`).join('\n')

// Directory subsections
let dirHtml = directory.map(sub => {
  const cat = categories.find(c => c.id === sub.categoryId)
  const showToggle = sub.entries.length > VISIBLE_BEFORE_COLLAPSE
  const panelId = `g-panel-${sub.categoryId}`
  const toggleId = `g-toggle-${sub.categoryId}`
  const cards = sub.entries.map(e => `          <a href="/generators/${e.slug}" class="g-card g-card-directory" data-gname="${e.name.toLowerCase()}" data-gdesc="${e.desc.toLowerCase()}" data-gcat="${sub.categoryId}">
            <span class="g-card-thumb">${thumbs[sub.categoryId]}</span>
            <h4 class="g-card-name">${e.name}</h4>
            <p class="g-card-desc">${e.desc}</p>
          </a>`).join('\n')
  const toggle = showToggle ? `
        <button id="${toggleId}" type="button" class="g-show-toggle" aria-expanded="false" aria-controls="${panelId}" data-collapsed="true">
          <span class="g-show-toggle-label">Show all ${sub.entries.length} generators</span>
        </button>` : ''
  return `      <section id="${sub.categoryId}" class="g-subsection" aria-labelledby="g-subhead-${sub.categoryId}">
        <div class="g-subsection-head">
          <h3 id="g-subhead-${sub.categoryId}" class="g-h3">${cat.name}</h3>
          <p class="g-subsection-desc">${cat.desc}</p>
        </div>
        <div id="${panelId}" class="g-subsection-grid-wrap" data-collapsed="true" aria-labelledby="${toggleId}">
          <div class="g-grid-3">
${cards}
          </div>
        </div>${toggle}
      </section>`
}).join('\n')

console.log('=====FEATURED=====')
console.log(featuredHtml)
console.log('=====BROWSE=====')
console.log(browseHtml)
console.log('=====DIRECTORY=====')
console.log(dirHtml)
