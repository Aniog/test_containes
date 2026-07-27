import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-6xl font-bold text-[#0f2a4a]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button as={Link} to="/" variant="primary" size="md" className="mt-6">
          Back to home
        </Button>
      </div>
    </section>
  )
}
