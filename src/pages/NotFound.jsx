import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-velmora-ivory px-4 pt-24 text-velmora-ink">
      <div className="max-w-xl rounded-[2rem] border border-velmora-line/70 bg-velmora-paper px-6 py-10 text-center shadow-velmora-card sm:px-8">
        <p className="text-xs uppercase tracking-editorial text-velmora-muted">Page not found</p>
        <h1 className="mt-3 font-serif text-5xl text-velmora-ink">A missing piece</h1>
        <p className="mt-4 text-sm leading-7 text-velmora-muted">
          The page you were looking for has slipped out of the jewelry box.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-velmora-accent px-5 py-3 text-sm font-semibold text-velmora-ink transition hover:bg-velmora-accent-deep"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
