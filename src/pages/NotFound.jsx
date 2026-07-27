import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function NotFound() {
  return (
    <Section background="light" className="pt-20 md:pt-28 pb-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          404
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          The page you are looking for has moved or no longer exists. Use the
          links below to find what you need.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="primary" size="md">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/contact" variant="secondary" size="md">
            Contact us
          </Button>
        </div>
      </div>
    </Section>
  )
}
