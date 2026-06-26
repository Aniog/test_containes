import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { Container } from "@/components/ui/Section"

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-bold text-[#0B2545]">404</p>
      <h1 className="mt-4 text-2xl font-bold text-[#0B2545]">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-slate-600">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          Back to home
        </Button>
      </div>
      <Link
        to="/contact"
        className="mt-4 text-sm font-semibold text-[#1B6CA8] hover:text-[#155A8A]"
      >
        Or get a free sourcing quote
      </Link>
    </Container>
  )
}
