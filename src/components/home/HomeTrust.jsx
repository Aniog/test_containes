import { ShieldCheck, Globe2, FileCheck2, Headphones } from "lucide-react"
import { trustPoints } from "@/data/problems"
import { Container, SectionHeader } from "@/components/shared/Section"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Verified, not assumed",
    description:
      "We confirm every supplier through documents and on-site visits before you place an order.",
  },
  {
    icon: FileCheck2,
    title: "Independent quality control",
    description:
      "Our inspectors work for you, not the factory, using AQL standards and detailed reports.",
  },
  {
    icon: Globe2,
    title: "International shipping experience",
    description:
      "We have shipped to over 40 countries and handle consolidation, freight, and export paperwork.",
  },
  {
    icon: Headphones,
    title: "One coordinator, real updates",
    description:
      "A single point of contact keeps you informed and resolves issues directly with the factory.",
  },
]

export default function HomeTrust() {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <Container>
        <SectionHeader
          eyebrow="Why Buyers Trust Us"
          title="Practical safeguards, not promises"
          description="Trust in sourcing comes from process and verification. Here is what stands behind every order we manage."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="rounded-xl border border-border bg-surface p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-light">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 text-base font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="rounded-xl bg-brand px-6 py-8 text-center text-white"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent">
                {point.stat}
              </p>
              <p className="mt-2 text-sm text-white/85">{point.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
