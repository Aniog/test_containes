import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8">
      <h1 className="font-serif text-6xl md:text-8xl">404</h1>
      <p className="mt-4 text-velmora-stone">This page could not be found.</p>
      <Button className="mt-8" asChild>
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  )
}
