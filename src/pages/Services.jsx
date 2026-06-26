import * as Icons from "lucide-react"
import { PageHeader } from "@/components/sections/PageHeader"
import { Container, Button } from "@/components/ui/primitives"
import { services } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"
import CtaSection from "@/components/sections/CtaSection"

export default function Services() {
  const ref = useStrkImages([])

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Sourcing services for every stage of your order"
        description="Each service can be used on its own or combined into full end-to-end order management. You choose the level of support you need."
      />

      <section ref={ref} className="py-16 md:py-24">
        <Container>
          <div className="space-y-12">
            {services.map((s, i) => {
              const Icon = Icons[s.icon] ?? Icons.Circle
              const reversed = i % 2 === 1
              return (
                <div
                  key={s.id}
                  className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10"
                >
                  <div className={reversed ? "md:order-2" : ""}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900">{s.title}</h2>
                    <p className="mt-3 leading-relaxed text-slate-600">{s.description}</p>
                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                          <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <span id={s.titleId} className="sr-only">{s.title}</span>
                    <span id={s.descId} className="sr-only">{s.description}</span>
                  </div>
                  <div className={reversed ? "md:order-1" : ""}>
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imgId}
                      data-strk-img={`[${s.descId}] [${s.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-64 w-full rounded-xl object-cover md:h-72"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-slate-900">Not sure which services you need?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Share your product and goals, and we will recommend the right combination of sourcing, verification, QC, and logistics support.
            </p>
            <Button to="/contact" className="mt-6">Get a Free Sourcing Quote</Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
