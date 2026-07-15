import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-velmora-ivory px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Not found</p>
        <h1 className="mt-6 font-serif text-6xl leading-none text-velmora-ink">This page has slipped away</h1>
        <p className="mt-6 text-base leading-8 text-velmora-taupe">
          Return to the Velmora storefront to continue browsing the current jewelry edit.
        </p>
        <Button as={Link} className="mt-8" to="/">
          Back to home
        </Button>
      </div>
    </section>
  )
}
