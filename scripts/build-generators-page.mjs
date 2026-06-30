import fs from 'node:fs'
import path from 'node:path'
import { strings } from '../src/content/generators-page-content.mjs'

const t = strings.en
const rootDir = '/workspace/my-app'

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const slugify = (value = '') =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const totalDirectoryCount = t.directory.sections.reduce(
  (sum, section) => sum + section.items.length,
  0,
)

const pageCss = `
:root {
  color-scheme: light;
  --brand-purple: #8159BB;
  --ai-blue: #7671FF;
  --ai-pink: #CB0C9F;
  --body-text: #636972;
  --heading-text: #4B5056;
  --hero-heading: #2E2E2F;
  --card-border: #C6C9CD;
  --divider: #E2E4E7;
  --surface: #FFFFFF;
  --muted-surface: #F4F6F8;
  --focus-ring: rgba(118, 113, 255, 0.28);
  --shadow-soft: 0 10px 24px rgba(75, 80, 86, 0.08);
  --heading-font: 'Josefin Sans', 'Poppins', sans-serif;
  --body-font: 'Open Sans', Arial, sans-serif;
  --radius-card: 3px;
  --radius-button: 4px;
  --space-5: 5px;
  --space-10: 10px;
  --space-20: 20px;
  --space-30: 30px;
  --space-40: 40px;
  --space-50: 50px;
  --space-60: 60px;
  --space-70: 70px;
  --space-80: 80px;
  --content-max: 1200px;
  --button-height: 36px;
  --button-height-large: 44px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--body-font);
  font-size: 14px;
  line-height: 1.5;
  color: var(--body-text);
  background: var(--surface);
}
img, svg { max-inline-size: 100%; block-size: auto; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
a:focus-visible, button:focus-visible, input:focus-visible {
  outline: 2px solid var(--ai-blue);
  outline-offset: 3px;
  box-shadow: 0 0 0 4px var(--focus-ring);
}
.sr-only {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.container { inline-size: min(calc(100% - 40px), var(--content-max)); margin-inline: auto; }
.top-bar { background: var(--surface); border-block-end: 1px solid var(--divider); }
.top-bar-inner { min-block-size: 70px; display: flex; align-items: center; }
.brand-mark {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-10);
  font-family: var(--heading-font);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--heading-text);
}
.brand-wordmark { color: var(--heading-text); }
.brand-ai {
  background-image: linear-gradient(135deg, var(--ai-blue), var(--ai-pink));
  color: #FFFFFF;
  padding-block: 4px;
  padding-inline: 8px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 0.08em;
}
.breadcrumb { padding-block: var(--space-20); }
.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-10);
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--body-text);
}
.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-10);
}
.breadcrumb-item:not(:last-child)::after {
  content: '>';
  color: var(--brand-purple);
  font-weight: 700;
}
.breadcrumb a:hover { color: var(--brand-purple); }
.hero-section {
  position: relative;
  overflow: hidden;
  padding-block: var(--space-70);
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 20%, rgba(118, 113, 255, 0.14), transparent 32%),
    radial-gradient(circle at 65% 35%, rgba(203, 12, 159, 0.09), transparent 28%);
  pointer-events: none;
}
.hero-layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 520px);
  gap: var(--space-40);
  align-items: center;
}
.hero-copy { display: grid; gap: var(--space-20); }
.hero-title,
.section-heading,
.card-title,
.step-title,
.subsection-heading,
.footer-heading {
  margin: 0;
  font-family: var(--heading-font);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--heading-text);
}
.hero-title {
  display: grid;
  gap: var(--space-10);
  font-size: clamp(30px, 5vw, 48px);
  letter-spacing: 0.03em;
}
.hero-title-base { color: var(--hero-heading); }
.hero-title-gradient {
  background-image: linear-gradient(135deg, var(--ai-blue), var(--ai-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-subheadline,
.section-subheading,
.subsection-description,
.card-description,
.step-description,
.result-count,
.empty-state-link,
.closing-cta-copy,
.faq-panel p,
.footer-links {
  margin: 0;
  color: var(--body-text);
}
.hero-subheadline {
  max-inline-size: 56ch;
  font-size: 15px;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: var(--space-10); }
.button {
  min-block-size: var(--button-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline: 15px;
  padding-block: 9px;
  border-radius: var(--radius-button);
  border: 1px solid transparent;
  font-family: var(--heading-font);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}
.button-large { min-block-size: var(--button-height-large); }
.button-primary {
  background-image: linear-gradient(135deg, var(--ai-blue), var(--ai-pink));
  color: #FFFFFF;
  box-shadow: 0 12px 24px rgba(118, 113, 255, 0.18);
}
.button-primary:hover { box-shadow: 0 16px 30px rgba(118, 113, 255, 0.22); }
.button-ghost {
  border-color: var(--brand-purple);
  color: var(--brand-purple);
  background: transparent;
}
.button-ghost:hover { background: rgba(129, 89, 187, 0.05); }
.hero-artwork { justify-self: end; }
.section-block { padding-block: var(--space-40); }
.section-muted { background: var(--muted-surface); }
.section-heading-block {
  display: grid;
  gap: var(--space-10);
  margin-block-end: var(--space-20);
}
.section-heading {
  font-size: clamp(26px, 4vw, 32px);
  letter-spacing: 0.04em;
}
.section-subheading { max-inline-size: 64ch; }
.card-grid { display: grid; gap: var(--space-20); }
.card-grid-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.card,
.step-card,
.faq-item {
  background: var(--surface);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
}
.card {
  padding: var(--space-20);
  transition: border-color 160ms ease, box-shadow 160ms ease;
}
.card:hover {
  border-color: var(--brand-purple);
  box-shadow: var(--shadow-soft);
}
.feature-card,
.category-card,
.directory-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-20);
  min-block-size: 100%;
}
.feature-card-text,
.category-card-body { display: grid; gap: var(--space-10); }
.card-title {
  font-size: 20px;
  color: var(--heading-text);
  letter-spacing: 0.03em;
}
.tag {
  inline-size: fit-content;
  padding-block: 2px;
  padding-inline: 6px;
  border: 1px solid var(--brand-purple);
  border-radius: 3px;
  color: var(--brand-purple);
  font-family: var(--heading-font);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.category-card {
  position: relative;
  justify-content: space-between;
}
.category-visual,
.directory-thumbnail {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: fit-content;
  padding: var(--space-10);
  background: #FBFAFE;
  border-radius: 12px;
}
.category-arrow {
  margin-block-start: auto;
  color: var(--brand-purple);
}
.directory-section { scroll-margin-block-start: 30px; }
.directory-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-20);
  margin-block-end: var(--space-20);
}
.search-field {
  position: relative;
  flex: 1 1 320px;
  max-inline-size: 480px;
}
.search-icon {
  position: absolute;
  inset-inline-start: 16px;
  inset-block-start: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.search-field input {
  inline-size: 100%;
  min-block-size: 44px;
  border: 1px solid var(--card-border);
  border-radius: var(--radius-button);
  padding-inline-start: 46px;
  padding-inline-end: 14px;
  padding-block: 10px;
  color: var(--heading-text);
  background: var(--surface);
}
.search-field input::placeholder {
  color: var(--body-text);
  opacity: 1;
}
.result-count { font-weight: 600; }
.empty-state {
  margin-block-end: var(--space-20);
  padding: var(--space-20);
  border: 1px dashed var(--card-border);
  border-radius: var(--radius-card);
  background: #FCFCFD;
}
.empty-state-title {
  margin: 0 0 var(--space-10);
  color: var(--heading-text);
  font-weight: 700;
}
.empty-state-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-20);
}
.empty-state-link {
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--brand-purple);
}
.directory-stack { display: grid; gap: var(--space-30); }
.directory-subsection { scroll-margin-block-start: 30px; }
.subsection-heading-block { margin-block-end: var(--space-20); }
.subsection-heading {
  font-size: 22px;
  letter-spacing: 0.04em;
  margin-block-end: var(--space-10);
}
.directory-grid-shell { overflow: visible; }
.show-all-button {
  margin-block-start: var(--space-20);
  border: 1px solid var(--brand-purple);
  border-radius: var(--radius-button);
  background: transparent;
  color: var(--brand-purple);
  min-block-size: 36px;
  padding-inline: 15px;
  font-family: var(--heading-font);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  cursor: pointer;
}
.js-enhanced .directory-grid-shell.is-collapsible {
  overflow: hidden;
  transition: max-height 240ms ease;
}
.steps-grid,
.why-grid {
  display: grid;
  gap: var(--space-20);
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.step-card {
  padding: var(--space-20);
  display: grid;
  gap: var(--space-20);
}
.step-badge {
  inline-size: 40px;
  block-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--brand-purple);
  color: #FFFFFF;
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 18px;
}
.step-title {
  font-size: 20px;
  color: var(--heading-text);
}
.why-card { display: grid; gap: var(--space-20); }
.faq-container { display: grid; gap: var(--space-20); }
.faq-list { display: grid; gap: var(--space-20); }
.faq-item { overflow: clip; }
.faq-trigger {
  inline-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-20);
  padding: var(--space-20);
  border: 0;
  background: var(--surface);
  color: var(--heading-text);
  text-align: start;
  font-family: var(--heading-font);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  cursor: pointer;
}
.faq-chevron {
  flex-shrink: 0;
  transition: transform 180ms ease;
}
.faq-panel {
  padding-inline: var(--space-20);
  padding-block-end: var(--space-20);
}
.faq-panel p + p { margin-block-start: var(--space-10); }
.js-enhanced .faq-panel {
  overflow: hidden;
  padding-block-end: 0;
  transition: max-height 220ms ease, padding 220ms ease;
}
.js-enhanced .faq-item[data-open='false'] .faq-panel {
  max-height: 0 !important;
  padding-block-end: 0;
}
.js-enhanced .faq-item[data-open='true'] .faq-panel {
  padding-block-end: var(--space-20);
}
.js-enhanced .faq-item[data-open='true'] .faq-chevron {
  transform: rotate(180deg);
}
.closing-cta-section { text-align: center; }
.closing-cta-inner {
  display: grid;
  justify-items: center;
  gap: var(--space-20);
}
.site-footer {
  border-block-start: 1px solid var(--divider);
  padding-block-start: var(--space-40);
  padding-block-end: var(--space-20);
  background: var(--surface);
}
.footer-top { display: grid; gap: var(--space-30); }
.footer-grid {
  display: grid;
  gap: var(--space-20);
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.footer-heading {
  font-size: 18px;
  margin-block-end: var(--space-10);
}
.footer-links {
  list-style: none;
  padding: 0;
  display: grid;
  gap: var(--space-10);
}
.footer-links a:hover { color: var(--brand-purple); }
.footer-bottom {
  margin-block-start: var(--space-40);
  padding-block-start: var(--space-20);
  border-block-start: 1px solid var(--divider);
}
@media (max-width: 1023px) {
  .card-grid-three,
  .why-grid,
  .steps-grid,
  .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .hero-layout { grid-template-columns: minmax(0, 1fr); }
  .hero-artwork {
    order: 2;
    justify-self: stretch;
  }
  .hero-copy { order: 1; }
}
@media (max-width: 767px) {
  .container { inline-size: min(calc(100% - 30px), var(--content-max)); }
  .top-bar-inner { min-block-size: 60px; }
  .hero-section { padding-block: var(--space-60); }
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  .button,
  .button-large { inline-size: 100%; }
  .card-grid-three,
  .why-grid,
  .steps-grid,
  .footer-grid { grid-template-columns: minmax(0, 1fr); }
  .directory-tools,
  .empty-state-actions { align-items: stretch; }
  .result-count { inline-size: 100%; }
  .faq-trigger { font-size: 16px; }
}
`

const heroIllustration = () => `
<svg class="hero-illustration" width="520" height="360" viewBox="0 0 520 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="heroGradientStroke" x1="88" y1="52" x2="439" y2="311" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7671FF" stop-opacity="0.62" />
      <stop offset="1" stop-color="#CB0C9F" stop-opacity="0.42" />
    </linearGradient>
  </defs>
  <rect x="60" y="40" width="400" height="280" rx="26" fill="#FFFFFF" stroke="url(#heroGradientStroke)" stroke-width="2" />
  <rect x="90" y="74" width="340" height="34" rx="12" fill="#F7F4FD" stroke="#C9B8E8" stroke-width="2" />
  <circle cx="114" cy="91" r="5" fill="#8159BB" fill-opacity="0.9" />
  <circle cx="132" cy="91" r="5" fill="#B39AD9" />
  <circle cx="150" cy="91" r="5" fill="#D8C9F4" />
  <path d="M184 92H325" stroke="#9A82CF" stroke-width="3" stroke-linecap="round" />
  <rect x="90" y="128" width="148" height="150" rx="20" fill="#FAF8FE" stroke="#D9D0F1" stroke-width="2" />
  <rect x="258" y="128" width="172" height="64" rx="18" fill="#FAF8FE" stroke="#D9D0F1" stroke-width="2" />
  <rect x="258" y="210" width="172" height="68" rx="18" fill="#FAF8FE" stroke="#D9D0F1" stroke-width="2" />
  <path d="M114 154H214" stroke="#8159BB" stroke-width="4" stroke-linecap="round" />
  <path d="M114 176H194" stroke="#A48BD2" stroke-width="3" stroke-linecap="round" />
  <path d="M114 201H210" stroke="#A48BD2" stroke-width="3" stroke-linecap="round" />
  <rect x="114" y="228" width="88" height="24" rx="12" fill="url(#heroGradientStroke)" />
  <path d="M280 152H392" stroke="#8159BB" stroke-width="4" stroke-linecap="round" />
  <path d="M280 174H358" stroke="#A48BD2" stroke-width="3" stroke-linecap="round" />
  <path d="M280 233H392" stroke="#8159BB" stroke-width="4" stroke-linecap="round" />
  <path d="M280 255H360" stroke="#A48BD2" stroke-width="3" stroke-linecap="round" />
</svg>`

const sectionIcon = (key) => {
  const common = 'stroke="#8159BB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
  const wrap = (inner) => `<svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="1" y="1" width="62" height="46" rx="10" fill="#EEE7FA" />${inner}</svg>`

  switch (key) {
    case 'websites':
      return wrap(`<rect x="10" y="9" width="44" height="30" rx="4" ${common} /><path d="M10 16H54" ${common} /><circle cx="16" cy="12.5" r="1.5" fill="#8159BB" /><circle cx="21" cy="12.5" r="1.5" fill="#8159BB" /><path d="M17 24H28" ${common} /><path d="M17 30H35" ${common} /><path d="M41 23L48 29L41 35" ${common} />`)
    case 'landing-pages':
      return wrap(`<rect x="11" y="8" width="42" height="32" rx="5" ${common} /><path d="M18 17H46" ${common} /><path d="M18 23H42" ${common} /><rect x="18" y="28" width="18" height="6" rx="3" ${common} /><path d="M42 28L47 31L42 34" ${common} />`)
    case 'portfolios':
      return wrap(`<rect x="10" y="10" width="44" height="28" rx="4" ${common} /><rect x="16" y="16" width="12" height="16" rx="2" ${common} /><path d="M34 17H47" ${common} /><path d="M34 23H47" ${common} /><path d="M34 29H43" ${common} /><path d="M19 28L23 23L27 28" ${common} />`)
    case 'blogs':
      return wrap(`<rect x="11" y="8" width="42" height="32" rx="5" ${common} /><path d="M18 16H46" ${common} /><path d="M18 22H46" ${common} /><path d="M18 28H39" ${common} /><path d="M18 34H34" ${common} />`)
    case 'stores':
      return wrap(`<path d="M18 18H46L43 35H21L18 18Z" ${common} /><path d="M22 18C22 13.6 25.6 10 30 10H34C38.4 10 42 13.6 42 18" ${common} /><path d="M27 24H37" ${common} /><path d="M30 28H34" ${common} />`)
    case 'link-in-bio':
      return wrap(`<rect x="18" y="8" width="28" height="32" rx="7" ${common} /><path d="M25 16H39" ${common} /><rect x="24" y="21" width="16" height="4" rx="2" ${common} /><rect x="24" y="28" width="16" height="4" rx="2" ${common} /><circle cx="32" cy="35" r="2" fill="#8159BB" />`)
    default:
      return wrap(`<rect x="10" y="9" width="44" height="30" rx="4" ${common} />`)
  }
}

const arrowIcon = () => `<svg class="inline-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 9H14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /><path d="M9.5 4.5L14 9L9.5 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>`
const searchIcon = () => `<svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="#8159BB" stroke-width="1.8" /><path d="M12.5 12.5L15.5 15.5" stroke="#8159BB" stroke-width="1.8" stroke-linecap="round" /></svg>`
const chevronIcon = () => `<svg class="faq-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4.5 7L9 11.5L13.5 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>`
const whyIcon = (index) => [
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="20" cy="20" r="18" stroke="#8159BB" stroke-width="2"/><path d="M20 9V20L27 24" stroke="#8159BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="6" y="8" width="28" height="24" rx="5" stroke="#8159BB" stroke-width="2"/><path d="M15 32H25" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><path d="M13 14H27" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><path d="M16 20H24" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/></svg>`,
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 16H28" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><path d="M12 21H28" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><path d="M12 26H23" stroke="#8159BB" stroke-width="2" stroke-linecap="round"/><rect x="7" y="8" width="26" height="24" rx="6" stroke="#8159BB" stroke-width="2"/></svg>`,
][index]

const featuredCards = t.featured.items
  .map(
    (item) => `
      <a class="card feature-card" href="/generators/${slugify(item.name)}">
        <div class="feature-card-text">
          <h3 class="card-title">${escapeHtml(item.name)}</h3>
          <p class="card-description">${escapeHtml(item.description)}</p>
        </div>
        <span class="tag">${escapeHtml(item.category.toUpperCase())}</span>
      </a>
    `,
  )
  .join('')

const categoryCards = t.browseByCategory.items
  .map(
    (item) => `
      <a class="card category-card" href="${escapeHtml(item.href)}">
        <div class="category-visual">${sectionIcon(item.key)}</div>
        <div class="category-card-body">
          <h3 class="card-title">${escapeHtml(item.name.toUpperCase())}</h3>
          <p class="card-description">${escapeHtml(item.description)}</p>
        </div>
        <span class="category-arrow">${arrowIcon()}</span>
      </a>
    `,
  )
  .join('')

const directorySections = t.directory.sections
  .map(
    (section) => `
      <section class="directory-subsection" id="${section.key}">
        <div class="subsection-heading-block">
          <div>
            <h3 class="subsection-heading">${escapeHtml(section.name)}</h3>
            <p class="subsection-description">${escapeHtml(section.description)}</p>
          </div>
        </div>
        <div class="directory-grid-shell" data-collapsible-shell>
          <div class="card-grid card-grid-three directory-grid" id="directory-grid-${section.key}" data-grid>
            ${section.items
              .map(
                (item) => `
                  <a class="card directory-card" href="/generators/${slugify(item.name)}" data-generator-card data-search-text="${escapeHtml(`${item.name} ${item.description} ${section.name}`.toLowerCase())}">
                    <div class="directory-thumbnail">${sectionIcon(section.key)}</div>
                    <h4 class="card-title">${escapeHtml(item.name)}</h4>
                    <p class="card-description">${escapeHtml(item.description)}</p>
                  </a>
                `,
              )
              .join('')}
          </div>
        </div>
        <button class="show-all-button" type="button" aria-expanded="false" aria-controls="directory-grid-${section.key}" data-show-all hidden>
          ${escapeHtml(t.directory.showAllLabel.replace('{count}', String(section.items.length)))}
        </button>
      </section>
    `,
  )
  .join('')

const stepsMarkup = t.howItWorks.steps
  .map(
    (step) => `
      <article class="step-card">
        <span class="step-badge">${escapeHtml(step.number)}</span>
        <h3 class="step-title">${escapeHtml(step.title)}</h3>
        <p class="step-description">${escapeHtml(step.description)}</p>
      </article>
    `,
  )
  .join('')

const whyMarkup = t.whyStrikingly.items
  .map(
    (item, index) => `
      <article class="card why-card">
        <div class="why-icon">${whyIcon(index)}</div>
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-description">${escapeHtml(item.description)}</p>
      </article>
    `,
  )
  .join('')

const faqMarkup = t.faq.items
  .map(
    (item, index) => `
      <article class="faq-item">
        <button class="faq-trigger" type="button" id="faq-button-${index + 1}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-panel-${index + 1}">
          <span>${escapeHtml(item.question)}</span>
          ${chevronIcon()}
        </button>
        <div class="faq-panel" id="faq-panel-${index + 1}" role="region" aria-labelledby="faq-button-${index + 1}">
          ${item.answer.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        </div>
      </article>
    `,
  )
  .join('')

const footerMarkup = t.footer.columns
  .map(
    (column) => `
      <div class="footer-column">
        <h2 class="footer-heading">${escapeHtml(column.heading)}</h2>
        <ul class="footer-links">
          ${column.links
            .map((link) =>
              link.href
                ? `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`
                : `<li><span>${escapeHtml(link.label)}</span></li>`,
            )
            .join('')}
        </ul>
      </div>
    `,
  )
  .join('')

const interactionScript = `
<script>
(() => {
  const root = document.documentElement
  root.classList.add('js-enhanced')

  const searchInput = document.getElementById('generator-search')
  const resultCount = document.getElementById('generator-result-count')
  const emptyState = document.getElementById('directory-empty-state')
  const clearButton = document.getElementById('clear-search-button')
  const sections = Array.from(document.querySelectorAll('.directory-subsection'))
  const COLLAPSED_COUNT = 6

  const countLabel = (count) =>
    count === 1 ? '1 generator matches' : count + ' generators match'

  const collapsibleSections = sections.map((section) => {
    const shell = section.querySelector('[data-collapsible-shell]')
    const grid = section.querySelector('[data-grid]')
    const cards = Array.from(section.querySelectorAll('[data-generator-card]'))
    const button = section.querySelector('[data-show-all]')
    const state = { section, shell, grid, cards, button, expanded: false }

    if (cards.length > COLLAPSED_COUNT && button) {
      button.hidden = false
      shell.classList.add('is-collapsible')
      button.addEventListener('click', () => {
        state.expanded = !state.expanded
        applySectionState(state)
      })
    }

    return state
  })

  const getCollapsedHeight = (cards) => {
    const visibleCards = cards.filter((card) => !card.hidden)
    if (visibleCards.length <= COLLAPSED_COUNT) return null
    const targetCard = visibleCards[COLLAPSED_COUNT - 1]
    return targetCard.offsetTop + targetCard.offsetHeight
  }

  const applySectionState = (state) => {
    const visibleCards = state.cards.filter((card) => !card.hidden)
    const isFiltering = searchInput.value.trim().length > 0

    if (!state.button || state.cards.length <= COLLAPSED_COUNT) {
      state.shell.style.maxHeight = state.grid.scrollHeight + 'px'
      return
    }

    if (isFiltering || visibleCards.length <= COLLAPSED_COUNT) {
      state.button.hidden = true
      state.button.setAttribute('aria-expanded', 'true')
      state.shell.style.maxHeight = state.grid.scrollHeight + 'px'
      return
    }

    state.button.hidden = false

    if (state.expanded) {
      state.button.textContent = 'Show fewer generators'
      state.button.setAttribute('aria-expanded', 'true')
      state.shell.style.maxHeight = state.grid.scrollHeight + 'px'
    } else {
      const collapsedHeight = getCollapsedHeight(state.cards)
      state.button.textContent = 'Show all ' + visibleCards.length + ' generators'
      state.button.setAttribute('aria-expanded', 'false')
      state.shell.style.maxHeight = (collapsedHeight || state.grid.scrollHeight) + 'px'
    }
  }

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase()
    let matchCount = 0

    sections.forEach((section) => {
      const cards = Array.from(section.querySelectorAll('[data-generator-card]'))
      let sectionMatches = 0

      cards.forEach((card) => {
        const haystack = (card.getAttribute('data-search-text') || '').toLowerCase()
        const matches = !query || haystack.includes(query)
        card.hidden = !matches
        if (matches) {
          sectionMatches += 1
          matchCount += 1
        }
      })

      section.hidden = sectionMatches === 0
    })

    resultCount.textContent = countLabel(matchCount)
    emptyState.hidden = matchCount !== 0
    collapsibleSections.forEach((state) => applySectionState(state))
  }

  searchInput.addEventListener('input', applyFilter)
  clearButton.addEventListener('click', () => {
    searchInput.value = ''
    searchInput.focus()
    applyFilter()
  })

  const faqItems = Array.from(document.querySelectorAll('.faq-item')).map((item, index) => {
    const button = item.querySelector('.faq-trigger')
    const panel = item.querySelector('.faq-panel')
    const state = { item, button, panel, open: index === 0 }

    const sync = () => {
      state.item.dataset.open = state.open ? 'true' : 'false'
      state.button.setAttribute('aria-expanded', state.open ? 'true' : 'false')
      state.panel.style.maxHeight = state.open ? state.panel.scrollHeight + 'px' : '0px'
    }

    button.addEventListener('click', () => {
      state.open = !state.open
      sync()
    })

    sync()
    return { sync }
  })

  window.addEventListener('resize', () => {
    collapsibleSections.forEach((state) => applySectionState(state))
    faqItems.forEach((item) => item.sync())
  })

  collapsibleSections.forEach((state) => applySectionState(state))
  applyFilter()
})()
</script>`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strikingly', item: 'https://www.strikingly.com/' },
    { '@type': 'ListItem', position: 2, name: 'AI Generators' },
  ],
}

const html = `<!doctype html>
<html lang="${escapeHtml(t.locale)}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(t.meta.title)}</title>
    <meta name="description" content="${escapeHtml(t.meta.description)}" />
    <link rel="canonical" href="${escapeHtml(t.meta.canonical)}" />
    <meta property="og:title" content="${escapeHtml(t.meta.ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(t.meta.ogDescription)}" />
    <meta property="og:url" content="${escapeHtml(t.meta.ogUrl)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>
    <style>${pageCss}</style>
  </head>
  <body>
    <header class="top-bar">
      <div class="container top-bar-inner">
        <a class="brand-mark" href="/" aria-label="Strikingly home"><span class="brand-wordmark">strikingly</span><span class="brand-ai">AI</span></a>
      </div>
    </header>

    <nav class="breadcrumb" aria-label="${escapeHtml(t.breadcrumb.label)}">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="/">${escapeHtml(t.breadcrumb.items[0].label)}</a></li>
          <li class="breadcrumb-item" aria-current="page">${escapeHtml(t.breadcrumb.items[1].label)}</li>
        </ol>
      </div>
    </nav>

    <main>
      <section class="hero-section">
        <div class="container hero-layout">
          <div class="hero-copy">
            <h1 class="hero-title">
              <span class="hero-title-base">${escapeHtml(t.hero.line1)}</span>
              <span class="hero-title-gradient">${escapeHtml(t.hero.line2)}</span>
            </h1>
            <p class="hero-subheadline">${escapeHtml(t.hero.subheadline)}</p>
            <div class="hero-actions">
              <a class="button button-primary button-large" href="${escapeHtml(t.hero.primaryCta.href)}">${escapeHtml(t.hero.primaryCta.label)}</a>
              <a class="button button-ghost button-large" href="${escapeHtml(t.hero.secondaryCta.href)}">${escapeHtml(t.hero.secondaryCta.label)}</a>
            </div>
          </div>
          <div class="hero-artwork">${heroIllustration()}</div>
        </div>
      </section>

      <section class="section-block">
        <div class="container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.featured.heading)}</h2>
            <p class="section-subheading">${escapeHtml(t.featured.subheading)}</p>
          </div>
          <div class="card-grid card-grid-three">${featuredCards}</div>
        </div>
      </section>

      <section class="section-block">
        <div class="container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.browseByCategory.heading)}</h2>
          </div>
          <div class="card-grid card-grid-three">${categoryCards}</div>
        </div>
      </section>

      <section class="section-block directory-section" id="all-generators">
        <div class="container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.directory.heading)}</h2>
            <p class="section-subheading">${escapeHtml(t.directory.subheading)}</p>
          </div>
          <div class="directory-tools">
            <div class="search-field">
              <label class="sr-only" for="generator-search">${escapeHtml(t.directory.searchLabel)}</label>
              ${searchIcon()}
              <input id="generator-search" type="search" placeholder="${escapeHtml(t.directory.searchPlaceholder)}" aria-label="${escapeHtml(t.directory.searchLabel)}" autocomplete="off" />
            </div>
            <p class="result-count" id="generator-result-count" aria-live="polite">${totalDirectoryCount} generators match</p>
          </div>
          <div class="empty-state" id="directory-empty-state" hidden>
            <p class="empty-state-title">${escapeHtml(t.directory.emptyTitle)}</p>
            <div class="empty-state-actions">
              <button class="button button-ghost" type="button" id="clear-search-button">${escapeHtml(t.directory.clearSearch)}</button>
              <a class="empty-state-link" href="/s/ai_site_builder">${escapeHtml(t.directory.emptyLinkText)}</a>
            </div>
          </div>
          <div class="directory-stack">${directorySections}</div>
        </div>
      </section>

      <section class="section-block section-muted">
        <div class="container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.howItWorks.heading)}</h2>
          </div>
          <div class="steps-grid">${stepsMarkup}</div>
        </div>
      </section>

      <section class="section-block">
        <div class="container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.whyStrikingly.heading)}</h2>
          </div>
          <div class="card-grid why-grid">${whyMarkup}</div>
        </div>
      </section>

      <section class="section-block section-muted">
        <div class="container faq-container">
          <div class="section-heading-block">
            <h2 class="section-heading">${escapeHtml(t.faq.heading)}</h2>
          </div>
          <div class="faq-list" id="faq-list">${faqMarkup}</div>
        </div>
      </section>

      <section class="section-block closing-cta-section">
        <div class="container closing-cta-inner">
          <h2 class="section-heading">${escapeHtml(t.closingCta.heading)}</h2>
          <p class="section-subheading closing-cta-copy">${escapeHtml(t.closingCta.description)}</p>
          <a class="button button-primary button-large" href="${escapeHtml(t.closingCta.cta.href)}">${escapeHtml(t.closingCta.cta.label)}</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-top">
        <a class="brand-mark footer-brand" href="/" aria-label="Strikingly home"><span class="brand-wordmark">strikingly</span><span class="brand-ai">AI</span></a>
        <div class="footer-grid">${footerMarkup}</div>
      </div>
      <div class="container footer-bottom">
        <p>${escapeHtml(t.footer.copyright)}</p>
      </div>
    </footer>

    ${interactionScript}
  </body>
</html>`

const outputs = [
  path.join(rootDir, 'generators.html'),
  path.join(rootDir, 'generators', 'index.html'),
]

outputs.forEach((filePath) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)
})

console.log(`Generated ${outputs.length} files.`)
