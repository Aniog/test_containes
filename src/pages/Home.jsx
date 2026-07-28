import Hero from "@/components/home/Hero"
import ServicesPreview from "@/components/home/ServicesPreview"
import ProcessPreview from "@/components/home/ProcessPreview"
import ProductsPreview from "@/components/home/ProductsPreview"
import ProblemsSection from "@/components/home/ProblemsSection"
import TrustSection from "@/components/home/TrustSection"
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview"
import FAQSection from "@/components/shared/FAQSection"
import CTASection from "@/components/shared/CTASection"
import { Section, SectionHeader } from "@/components/shared/Section"
import InquiryForm from "@/components/contact/InquiryForm"
import { Mail, Clock, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessPreview />
      <ProductsPreview />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />

      <Section id="inquiry" className="bg-bg-alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Get a Free Quote"
              title="Tell Us What You Need to Source"
              subtitle="Share your product requirements and we will send back a clear sourcing plan and a free, no-obligation quote within one business day."
            />
            <div className="mt-8 space-y-5">
              {[
                { icon: Mail, title: "Direct email", desc: "inquiry@ssourcingchina.com" },
                { icon: Clock, title: "Fast response", desc: "We reply within one business day" },
                { icon: ShieldCheck, title: "Confidential", desc: "Your project details stay private" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{item.title}</div>
                      <div className="text-sm text-muted">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <InquiryForm />
        </div>
      </Section>

      <FAQSection />
      <CTASection
        title="Ready to source with confidence?"
        subtitle="Tell us what you need to source. We will send back a clear plan and a free, no-obligation quote within one business day."
        buttonText="Get a Free Sourcing Quote"
      />
    </>
  )
}
