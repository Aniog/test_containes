import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-5xl font-bold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
