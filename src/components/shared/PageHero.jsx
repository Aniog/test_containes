import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StockImage from './StockImage'

const PageHero = ({ eyebrow, title, description, imageId, imageQueryIds, alt }) => (
  <section className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl" id="page-hero-title">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300" id="page-hero-description">{description}</p>
        <Link className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800" to="/contact">
          Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
        <StockImage
          alt={alt}
          className="h-72 w-full object-cover md:h-96"
          id={imageId}
          query={imageQueryIds || '[page-hero-description] [page-hero-title]'}
          ratio="4x3"
          width="1000"
        />
      </div>
    </div>
  </section>
)

export default PageHero
