import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import PageShell from "@/components/shared/PageShell"
import { Container, Section } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <PageShell>
      <Section className="bg-white">
        <Container className="max-w-2xl text-center py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            404
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Page not found
          </h1>
          <p className="mt-3 text-slate-700">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button as={Link} to="/" variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
            <Button as={Link} to="/contact" variant="accent">
              Contact us
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}