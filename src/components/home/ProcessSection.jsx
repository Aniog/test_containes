import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import { PROCESS_STEPS } from "@/data/site"

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F6F9]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionHeader
            eyebrow="How it works"
            title="A clear, 6-step process from brief to delivery"
            subtitle="No black boxes. Every step has a written deliverable, a timeline and a single point of contact on our side."
          />
          <Link
            to="/how-it-works"
            className="text-sm font-semibold text-[#0B2545] hover:text-[#133B6F] inline-flex items-center gap-1.5 self-start md:self-auto"
          >
            Full process details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.n}
              className="relative rounded-xl bg-white border border-line p-6 md:p-7"
            >
              <div className="text-3xl font-extrabold text-[#0B2545]/15 absolute top-5 right-5">
                {step.n}
              </div>
              <div className="w-9 h-9 rounded-md bg-[#0B2545] text-white flex items-center justify-center text-sm font-bold mb-4">
                {step.n}
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-subtle leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection
