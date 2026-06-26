import PageHeader from "@/components/shared/PageHeader"
import InquiryForm from "@/components/shared/InquiryForm"
import { Section, Container } from "@/components/ui/Section"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us about your product and what you need. A sourcing specialist will review your requirements and reply within one business day."
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  Request your sourcing quote
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  The more detail you share, the more accurate your quote will
                  be. Fields marked with{" "}
                  <span className="text-[#B45309]">*</span> are required.
                </p>
              </div>
              <InquiryForm />
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#0B2545]">
                  <MessageSquare className="h-5 w-5 text-[#1B6CA8]" />
                  Talk to a specialist
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6CA8]" />
                    <div>
                      <p className="font-medium text-[#0B2545]">Email</p>
                      <p className="text-slate-600">inquiry@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6CA8]" />
                    <div>
                      <p className="font-medium text-[#0B2545]">Phone</p>
                      <p className="text-slate-600">+86 755 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6CA8]" />
                    <div>
                      <p className="font-medium text-[#0B2545]">Office</p>
                      <p className="text-slate-600">
                        Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6CA8]" />
                    <div>
                      <p className="font-medium text-[#0B2545]">Response time</p>
                      <p className="text-slate-600">
                        Within one business day (China time, UTC+8)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-4 text-sm text-slate-600">
                  {[
                    "We review your requirements and confirm feasibility.",
                    "We send a free sourcing quote with a proposed plan.",
                    "On your approval, we begin sourcing and verification.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B2545] text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
