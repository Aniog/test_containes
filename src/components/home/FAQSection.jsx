import { Link } from "react-router-dom"
import { Section, SectionHeader } from "@/components/ui/Section"
import { FAQ } from "@/components/shared/FAQ"
import { homeFaqs } from "@/data/content"
import { ArrowRight } from "lucide-react"

export function FAQSection() {
  return (
    <Section bg="white" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Quick answers to the most common questions we get from new buyers. Have a different question? Send it through the inquiry form."
            align="left"
            className="!max-w-none"
          />
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600 transition-colors"
          >
            Ask a question <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <FAQ items={homeFaqs} />
        </div>
      </div>
    </Section>
  )
}

export default FAQSection
