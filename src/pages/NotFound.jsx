import { Link } from "react-router-dom"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8">
        <p className="text-6xl font-bold text-brand md:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as={Link} to="/">
            <Home className="h-4 w-4" />
            Back to home
          </Button>
          <Button as={Link} to="/contact" variant="outline">
            <ArrowLeft className="h-4 w-4" />
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
