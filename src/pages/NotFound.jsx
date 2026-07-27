import Button from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-md mx-auto text-center py-12">
        <p className="text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  )
}
