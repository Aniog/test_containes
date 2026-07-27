import { ClipboardList, Search, FileCheck, Eye, Package, Ship, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Define Your Requirements",
    desc: "Share product specifications, target pricing, order quantity, quality standards, packaging needs, and delivery timeline. The more detail you provide, the faster we can match you with the right suppliers.",
    deliverable: "Clear RFQ document and sourcing strategy",
  },
  {
    icon: Search,
    number: "02",
    title: "Supplier Research & Shortlist",
    desc: "We tap our network and industrial databases to identify 3–5 qualified factories. Each candidate is screened for experience, capacity, certifications, and export readiness.",
    deliverable: "Supplier shortlist with quotations and factory profiles",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Sample & Factory Verification",
    desc: "We coordinate samples, verify factory credentials, and conduct on-site or remote audits. This step helps you choose a partner with confidence.",
    deliverable: "Verified samples and factory audit report",
  },
  {
    icon: Eye,
    number: "04",
    title: "Order Placement & Quality Control",
    desc: "After contract review and order confirmation, we implement your agreed inspection plan — from incoming materials to pre-shipment checks.",
    deliverable: "Purchase order support and inspection schedule",
  },
  {
    icon: Package,
    number: "05",
    title: "Production Monitoring",
    desc: "We track production milestones, report progress, and intervene when delays or quality issues arise. You receive regular updates in your time zone.",
    deliverable: "Weekly production reports and issue resolution",
  },
  {
    icon: Ship,
    number: "06",
    title: "Shipping & Delivery",
    desc: "We coordinate consolidation, packaging compliance, export documentation, and freight booking. You get tracking support until the goods reach your warehouse.",
    deliverable: "Shipped goods with full documentation",
  },
]

const commitments = [
  "Transparent fees with no hidden factory commissions",
  "Bilingual account manager for every project",
  "On-the-ground support in major manufacturing regions",
  "Inspection reports with photos and clear pass/fail results",
  "Flexible engagement from one-time audits to ongoing sourcing",
]

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">How It Works</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              A Simple, Reliable Sourcing Process
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We have built a six-step workflow that keeps your project moving and your risks under control.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className={`relative flex flex-col gap-6 md:flex-row md:items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 md:text-right">
                    <div className={`rounded-lg border bg-card p-6 shadow-sm ${index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:text-left"}`}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent">Step {step.number}</p>
                      <h3 className="mt-2 text-xl font-semibold text-primary">{step.title}</h3>
                      <p className="mt-3 text-muted-foreground">{step.desc}</p>
                      <p className="mt-4 text-sm font-medium text-primary">Deliverable: {step.deliverable}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:mx-auto">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                What You Can Expect
              </h2>
              <p className="mt-4 text-muted-foreground">
                We treat each project as a partnership. Our team works to protect your interests at every step of the supply chain.
              </p>
              <Button asChild className="mt-8">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <ul className="space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
