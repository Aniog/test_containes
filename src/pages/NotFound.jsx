import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-32 md:py-40 bg-surface">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-6xl md:text-7xl font-extrabold text-copper">
            404
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-ink">
            Page not found
          </h1>
          <p className="text-muted max-w-md">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  )
}
