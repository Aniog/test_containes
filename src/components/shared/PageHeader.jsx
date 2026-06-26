import { Container } from "@/components/ui/Section"

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-[#0B2545]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#0A1F38]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1B6CA8]/20 blur-3xl" />
      <Container className="relative py-16 md:py-24">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#1B6CA8]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
