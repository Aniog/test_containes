import { FileSearch, Building2, ClipboardList, PackageCheck, Container } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Submit Your Request",
    description: "Share product details, target price, and quantity. We review requirements and ask clarifying questions.",
  },
  {
    step: "02",
    icon: Building2,
    title: "Supplier Shortlist",
    description: "We research the market and present 2–5 qualified suppliers with quotes, MOQs, and lead times.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Verify & Sample",
    description: "Factories are audited or verified. We arrange samples and compare against your specifications.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Inspect & Produce",
    description: "Once ordered, we monitor production and conduct inspections at agreed checkpoints.",
  },
  {
    step: "05",
    icon: Container,
    title: "Ship & Deliver",
    description: "We coordinate loading, documentation, and logistics so your goods arrive on time.",
  },
]

export default function Process() {
  return (
    <section className="bg-white py-16 md:py-24" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="process-title" className="section-title">How SSourcing China Works</h2>
          <p id="process-subtitle" className="section-subtitle">
            A clear, five-step process designed to reduce risk and save you time.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="mt-4 block text-xs font-bold text-muted">STEP {item.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
