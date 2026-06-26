import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          The page you are looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as={Link} to="/">
            Back to home
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
