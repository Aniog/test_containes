import SectionHeader from '../SectionHeader'
import InquiryForm from '../InquiryForm'

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader
              caption="Get Started"
              title="Request Your Free Sourcing Quote"
              subtitle="Tell us what you need and we will respond within 1 business day with a tailored sourcing plan and cost estimate."
              align="left"
            />
            <div className="space-y-4 text-sm text-text-secondary">
              <p className="leading-relaxed">
                No commitment required. Our free quote includes a preliminary supplier shortlist, estimated timeline, and transparent pricing for our services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Free initial consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  No hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Response within 24 hours
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 lg:p-8 rounded-xl border border-border bg-bg shadow-sm">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
