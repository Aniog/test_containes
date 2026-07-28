import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PageHero = ({ eyebrow, title, description, imageId, titleId, descId }) => (
  <section className="bg-brand-navy text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold" id={eyebrow ? `${titleId}-eyebrow` : undefined}>
          {eyebrow}
        </p>
        <h1 id={titleId} className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p id={descId} className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
          {description}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-white hover:text-brand-navy"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-soft">
        <img
          alt={title}
          className="h-full min-h-72 w-full object-cover"
          data-strk-img-id={imageId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </div>
  </section>
)

export default PageHero
