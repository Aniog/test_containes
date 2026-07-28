import CTAButton from './CTAButton.jsx'
import StockImage from './StockImage.jsx'

const PageHero = ({ eyebrow, title, description, imageId, imageQuery, imageAlt }) => (
  <section className="bg-brand-mist py-14 md:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
      <div>
        <p id="page-hero-eyebrow" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">{eyebrow}</p>
        <h1 id="page-hero-title" className="text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">{title}</h1>
        <p id="page-hero-description" className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">{description}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row"><CTAButton>Get a Free Sourcing Quote</CTAButton><CTAButton to="/how-it-works" variant="secondary">See Process</CTAButton></div>
      </div>
      {imageId && (
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-white p-3 shadow-card">
          <StockImage imgId={imageId} query={imageQuery || '[page-hero-description] [page-hero-title] [page-hero-eyebrow]'} ratio="4x3" width="900" alt={imageAlt || title} className="h-80 w-full rounded-2xl object-cover" />
        </div>
      )}
    </div>
  </section>
)

export default PageHero
