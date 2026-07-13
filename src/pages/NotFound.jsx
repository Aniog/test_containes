import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'

export default function NotFound() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-6xl font-extrabold text-brand-700">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Back to home
        </Link>
      </div>
    </Section>
  )
}
