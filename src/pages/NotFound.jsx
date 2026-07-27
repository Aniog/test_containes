import { Link } from 'react-router-dom'
import CTAButton from '@/components/layout/CTAButton'

export default function NotFound() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        <p className="text-5xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Page not found</h1>
        <p className="mt-3 text-base text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
          >
            Back to home
          </Link>
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
