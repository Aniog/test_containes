import { Link } from 'react-router-dom'

const PageIntro = ({ eyebrow, title, description, primaryCta = true }) => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>
        </div>

        {primaryCta ? (
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Start a project</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">
              Tell us what you need to source and where you need support.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The more specific your brief is, the more practical our response can be.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PageIntro
