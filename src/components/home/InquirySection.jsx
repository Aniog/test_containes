import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import InquiryForm from "@/components/shared/InquiryForm"

export default function InquirySection() {
  return (
    <Section id="inquiry" className="bg-navy-950 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Free sourcing quote"
              title="Tell us what you want to source"
              description="Share a few details about your project and we'll come back within one business day with next steps and a fixed-fee proposal."
              className="[&_h2]:text-white [&_p]:text-slate-300 [&_.eyebrow]:text-amber-300"
            />
            <ul className="mt-8 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                Fixed-fee proposal in writing, no surprise charges
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                3–5 verified factory shortlists within 3–5 business days
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                NDA & supplier code of conduct countersigned on request
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                English-speaking project owner assigned to your order
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 md:p-8 text-slate-900 shadow-xl">
              <InquiryForm sourcePage="/home" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}