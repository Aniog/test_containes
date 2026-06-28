import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { SectionContainer } from "@/components/ui/Section"

export default function NotFound() {
  return (
    <SectionContainer className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl font-extrabold text-primary/15">404</span>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-base text-slate-600">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/">Back to Home</Button>
        <Button to="/contact" variant="outline">
          Get a Free Sourcing Quote
        </Button>
      </div>
    </SectionContainer>
  )
}
