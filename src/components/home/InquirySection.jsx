import SectionHeader from '@/components/SectionHeader'
import InquiryForm from '@/components/InquiryForm'

export default function InquirySection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="section-container">
        <SectionHeader
          label="Get Started"
          title="Get a free sourcing quote"
          subtitle="Tell us what you need. Our team will review your request and respond with next steps within 24 hours."
        />
        <div className="max-w-3xl mx-auto">
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
