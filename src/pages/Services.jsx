import { CheckCircle2 } from "lucide-react"
import PageHero from "@/components/ui/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import Card from "@/components/ui/Card"
import CtaBanner from "@/components/sections/CtaBanner"
import { useStrkImages } from "@/lib/useStrkImages"
import { services } from "@/data/content"

function ServiceDetail({ service }) {
  const ref = useStrkImages([service.id])
  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2">
      <div
        className={
          "aspect-[4/3] w-full rounded-2xl border border-line bg-surface " +
          (service.imageSide === "right" ? "lg:order-2" : "")
        }
        data-strk-bg-id={`svc-bg-${service.id}`}
        data-strk-bg={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="800"
      />
      <div>
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <service.icon className="h-6 w-6 text-primary" />
        </span>
        <h2 className="heading-2 mt-5" id={`svc-${service.id}-title`}>
          {service.title}
        </h2>
        <p className="lead mt-3" id={`svc-${service.id}-desc`}>
          {service.desc}
        </p>
        <ul className="mt-5 space-y-3">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-body">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for every stage of your order"
        description="Each service can be engaged individually or combined into a full end-to-end sourcing program. You choose the level of support you need."
      />

      <Section className="space-y-20">
        {services.map((s, i) => (
          <ServiceDetail
            key={s.id}
            service={{ ...s, imageSide: i % 2 === 0 ? "left" : "right" }}
          />
        ))}
      </Section>

      <Section className="bg-white pt-0">
        <SectionHeader
          eyebrow="Engagement Models"
          title="Flexible ways to work with us"
          description="Choose the model that fits your order volume and internal resources."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="heading-3">Project-based</h3>
            <p className="mt-2 text-body">
              Best for one-off orders or new product launches. A fixed service
              fee covers sourcing, verification, and QC for a defined project.
            </p>
          </Card>
          <Card>
            <h3 className="heading-3">Retainer</h3>
            <p className="mt-2 text-body">
              For buyers with regular orders across multiple SKUs. A monthly
              retainer gives you ongoing supplier management and priority QC.
            </p>
          </Card>
          <Card>
            <h3 className="heading-3">Commission</h3>
            <p className="mt-2 text-body">
              Suited to larger volume programs. A transparent commission on
              shipped value, with full visibility into factory pricing.
            </p>
          </Card>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
