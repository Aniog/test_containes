import { Container } from "@/components/ui/primitives"

export function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-200 bg-slate-900">
      <Container>
        <div className="max-w-3xl py-14 md:py-20">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">{eyebrow}</p>
          )}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
          )}
        </div>
      </Container>
    </section>
  )
}
