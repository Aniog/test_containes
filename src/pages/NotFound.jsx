import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-5 text-center pt-20">
      <h1 className="font-serif text-6xl md:text-8xl text-espresso">404</h1>
      <p className="mt-4 font-serif text-2xl md:text-3xl text-espresso">
        Page Not Found
      </p>
      <p className="mt-3 text-taupe max-w-md">
        We couldn't find the page you were looking for. Let's get you back to
        the collection.
      </p>
      <div className="mt-8">
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
