import SectionHeader from "@/components/ui/SectionHeader"
import ContactForm from "@/components/ContactForm"

export default function Inquiry() {
  return (
    <section className="section-padding bg-white" id="inquiry">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label="Get Started"
              title="Request a free sourcing quote"
              description="Tell us what you are looking for. Our team will review your requirements and reply with next steps within 24 hours."
              centered={false}
              className="mb-8"
            />
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>No commitment required for the first review.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>Receive a tailored supplier search or inspection plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <span>Direct communication with our bilingual sourcing team.</span>
              </li>
            </ul>
          </div>
          <ContactForm showTitle={false} />
        </div>
      </div>
    </section>
  )
}
