import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
      <div className="max-w-xl rounded-[2rem] border border-velmora-line bg-velmora-ivory p-10 text-center shadow-velmora-soft">
        <p className="text-xs uppercase tracking-brand text-velmora-taupe">404</p>
        <h1 className="mt-4 font-display text-6xl leading-none text-velmora-ink">
          This page slipped away.
        </h1>
        <p className="mt-5 text-base leading-8 text-velmora-taupe">
          Explore the latest Velmora pieces, collections, and editorial notes instead.
        </p>
        <Link to="/shop">
          <Button size="lg" className="mt-7">
            Back to Shop
          </Button>
        </Link>
      </div>
    </div>
  )
}
