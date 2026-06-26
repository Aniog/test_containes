import { Link } from "react-router-dom"
import * as Icons from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { services } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"

export default function ServicesSection({ withImages = false }) {
  const ref = useStrkImages(withImages ? [withImages] : [])

  return (
    <section ref={ref} className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Sourcing services that cover the whole order"
          description="From the first supplier search to the final delivery, each service is handled by a dedicated team on the ground in China."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = Icons[s.icon] ?? Icons.Circle
            return (
              <div
                key={s.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>

                {withImages && (
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="mt-4 h-40 w-full rounded-lg object-cover"
                  />
                )}

                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <span id={s.titleId} className="sr-only">{s.title}</span>
                <span id={s.descId} className="sr-only">{s.description}</span>

                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Learn more <Icons.ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
