import { Link } from 'react-router-dom'

const buttonBaseClass =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors'

const PageHero = ({ eyebrow, title, description, primaryAction, secondaryAction }) => {
  return (
    <section className="border-b border-site-border/70 bg-site-surface/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-site-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-site-muted md:text-lg">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryAction ? (
                <Link
                  className={`${buttonBaseClass} bg-brand text-white hover:bg-brand-dark`}
                  to={primaryAction.to}
                >
                  {primaryAction.label}
                </Link>
              ) : null}

              {secondaryAction ? (
                <Link
                  className={`${buttonBaseClass} border border-site-border bg-white text-site-ink hover:bg-site-bg`}
                  to={secondaryAction.to}
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero
