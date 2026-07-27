import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-ink">
          Page not found
        </h1>
        <p className="mt-4 text-base text-brand-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
