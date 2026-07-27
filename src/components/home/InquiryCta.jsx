import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import InquiryForm from "@/components/shared/InquiryForm"

const InquiryCta = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F6F9]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="uppercase tracking-wider text-xs font-semibold text-[#D62828] mb-3">
              Get started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
              Tell us about your project. We'll respond within 1 business day.
            </h2>
            <p className="mt-4 text-base text-ink-subtle leading-relaxed">
              Send us a short brief and we'll come back with realistic
              timelines, ballpark costs, and a list of 2-3 supplier options
              we can already recommend. No commitment, no spam.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-subtle">
              {[
                "Free, no-obligation scoping conversation",
                "1 business day response, in your time zone",
                "Direct line to your assigned sourcing specialist",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D62828] flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-lg bg-white border border-line">
              <div className="text-sm font-semibold text-[#0B2545]">
                Prefer to talk first?
              </div>
              <p className="text-xs text-ink-subtle mt-1 mb-3">
                Schedule a 20-minute intro call with a sourcing specialist.
              </p>
              <Button as={Link} to="/contact" variant="outline" size="sm">
                Contact us directly
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InquiryCta
