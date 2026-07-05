import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-velmora-cream">
      <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-6xl text-velmora-ink mb-4">
        Page Not Found
      </h1>
      <p className="text-velmora-taupe max-w-md mb-8">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Button
        asChild
        className="bg-velmora-gold hover:bg-velmora-goldDark text-white rounded-none h-12 px-10 uppercase tracking-[0.2em] text-xs font-medium"
      >
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  )
}
