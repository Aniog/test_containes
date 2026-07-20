import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <main className="flex min-h-screen items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
    <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-white px-8 py-16 text-center shadow-soft sm:px-12">
      <p className="eyebrow text-velmora-muted">Page not found</p>
      <h1 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">The piece you were looking for is no longer here.</h1>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-velmora-muted">
        Return to the shop to continue browsing demi-fine earrings, necklaces, and gift-ready sets.
      </p>
      <Link to="/shop" className="btn-primary mt-8 inline-flex">
        Browse the collection <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </main>
)

export default NotFoundPage
