import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-velmora-ivory px-4 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-stone-500">404</p>
        <h1 className="mt-4 font-heading text-5xl text-stone-900">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-8 text-stone-600">
          The page you were looking for has moved. Continue exploring the Velmora collection.
        </p>
        <Link to="/shop">
          <Button className="mt-8">Go to Shop</Button>
        </Link>
      </div>
    </div>
  )
}
