import { Container, Section, SectionHeading } from "@/components/ui"
import { applications } from "@/data/content"

export function Applications() {
  return (
    <Section id="applications" className="bg-ink text-white">
      <Container>
        <SectionHeading
          eyebrow="Applications"
          title="Trusted across industries"
          description="From HVAC ductwork to architectural facades, ARTITECT folders deliver consistent results wherever precision sheet metal folding matters."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => (
            <article
              key={app.id}
              className="group relative overflow-hidden rounded-xl border border-white/10"
            >
              <img
                alt={app.title}
                data-strk-img-id={app.imgId}
                data-strk-img={`[${app.descId}] [${app.titleId}] [applications-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3
                  id={app.titleId}
                  className="text-lg font-bold tracking-tight text-white"
                >
                  {app.title}
                </h3>
                <p
                  id={app.descId}
                  className="mt-2 text-sm leading-relaxed text-white/75"
                >
                  {app.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <span id="applications-section-title" className="sr-only">
          Industrial sheet metal folding applications
        </span>
      </Container>
    </Section>
  )
}

export default Applications
