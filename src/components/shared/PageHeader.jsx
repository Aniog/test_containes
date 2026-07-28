import { Container } from "@/components/ui/section"

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-border bg-card">
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
