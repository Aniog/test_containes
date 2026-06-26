import * as React from "react"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import CTASection from "@/components/home/CTASection"
import { FileText, Search, ShieldCheck, PackageCheck, Ship, Headphones } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit your sourcing brief",
    description: "Tell us about the product, target price, quantity, certifications, packaging, and delivery requirements. The more detail, the better the match.",
  },
  {
    step: "02",
    icon: Search,
    title: "Receive supplier shortlist",
    description: "We identify 3–5 qualified manufacturers, request quotations, and share factory profiles, MOQs, lead times, and sample costs.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Verify & negotiate",
    description: "We audit or screen shortlisted factories, negotiate pricing and payment terms, and help you sign a clear purchase contract.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Quality & production monitoring",
    description: "From sample approval to mass production, we track milestones, run inspections, and report progress with photos and data.",
  },
  {
    step: "05",
    icon: Ship,
    title: "Shipping & customs",
    description: "We consolidate shipments if needed, prepare export documents, book freight, and support customs clearance until delivery.",
  },
  {
    step: "06",
    icon: Headphones,
    title: "Ongoing support",
    description: "After delivery, we remain available for reorders, supplier feedback, and continuous improvement of your supply chain.",
  },
]

const expectations = [
  { title: "Transparent reporting", description: "Photo reports, inspection summaries, and milestone updates shared at every key stage." },
  { title: "Bilingual communication", description: "Our team speaks English and Chinese, eliminating misunderstandings with suppliers." },
  { title: "No factory lock-in", description: "We recommend the best-fit supplier for your project, not a single partner we own." },
]

export default function HowItWorks() {
  return (
    <div>
      <PageHeader
        title="How SSourcing China works"
        description="A simple, six-step process designed to reduce risk and keep you in control."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Process"
            title="From brief to delivery in six steps"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((item, idx) => (
              <Card key={idx} className="relative border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-300">STEP {item.step}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="What to expect"
            title="Working with us means clarity and control"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expectations.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
