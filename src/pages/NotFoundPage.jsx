import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-5">
      <div className="max-w-lg text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-stone-500">404</p>
        <h1 className="mt-4 font-[Cormorant_Garamond] text-6xl text-stone-950">
          This page has slipped out of the jewelry box.
        </h1>
        <p className="mt-5 text-base leading-8 text-stone-600">
          Return to the Velmora collection to continue browsing quiet-luxury essentials.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button>Back home</Button>
        </Link>
      </div>
    </main>
  )
}
