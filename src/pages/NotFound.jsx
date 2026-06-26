import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-xl px-4 text-center md:px-6">
        <p className="text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-slate-body">
          The page you are looking for doesn't exist or has moved.
        </p>
        <Button as={Link} to="/" className="mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Button>
      </div>
    </section>
  )
}
