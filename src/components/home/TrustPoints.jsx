import { ShieldCheck, Eye, Receipt, Users } from "lucide-react"
import { trustPoints } from "@/data/trust"
import { SectionHeading } from "@/components/ui/section-heading"

const icons = {
  "trust-1": ShieldCheck,
  "trust-2": Eye,
  "trust-3": Receipt,
  "trust-4": Users,
}

export default function TrustPoints() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Buyers Trust Us"
          title="On the ground in China, on your side"
          description="We are an independent, buyer-side team. Our job is to protect your order, not to sell you a supplier."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = icons[point.id] ?? ShieldCheck
            return (
              <div
                key={point.id}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
