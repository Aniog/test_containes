import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-ink">
      <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-6xl text-cream mb-6">
        Page Not Found
      </h1>
      <p className="text-cream-muted max-w-md mb-8">
        We couldn't find the page you were looking for. Return to the collection
        and discover something beautiful.
      </p>
      <Button
        asChild
        className="bg-champagne text-ink hover:bg-champagne-dark uppercase tracking-[0.15em] text-xs h-12 px-10"
      >
        <Link to="/shop">Back to Shop</Link>
      </Button>
    </div>
  )
}
