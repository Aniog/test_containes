import {
  ShieldCheck,
  ClipboardCheck,
  Clock4,
  MessageSquare,
  Truck,
  LineChart,
} from "lucide-react"
import { PROBLEMS } from "@/data/content"
import { Section, SectionHeader } from "@/components/shared/Section"

const ICONS = {
  ShieldCheck,
  ClipboardCheck,
  Clock4,
  MessageSquare,
  Truck,
  LineChart,
}

export default function Problems() {
  return (
    <Section id="problems" className="bg-navy text-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Problems we solve"
          title="The issues overseas buyers actually face with Chinese suppliers"
          subtitle="Most of the calls we take are not about finding a factory. They are about problems that appeared after the first order. This is the work we do every day."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => {
            const Icon = ICONS[p.icon] || ShieldCheck
            return (
              <div
                key={p.id}
                id={`prob-${p.id}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3
                  id={`prob-${p.id}-title`}
                  className="mt-4 text-lg font-semibold text-white"
                >
                  {p.title}
                </h3>
                <p
                  id={`prob-${p.id}-desc`}
                  className="mt-2 text-sm text-white/75"
                >
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
