import SectionHeader from '@/components/SectionHeader'
import InquiryForm from '@/components/InquiryForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <div className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            caption="Contact"
            title="Get in Touch"
            subtitle="Ready to source from China? Fill out the form below and we will get back to you within 1 business day."
          />
        </div>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Office Address</p>
                      <p className="text-sm text-text-secondary">Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email</p>
                      <p className="text-sm text-text-secondary">hello@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Phone</p>
                      <p className="text-sm text-text-secondary">+86 755 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Business Hours</p>
                      <p className="text-sm text-text-secondary">Mon - Fri: 9:00 AM - 6:00 PM CST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bg-alt border border-border">
                <h4 className="text-sm font-semibold text-text-primary mb-2">What to include in your inquiry</h4>
                <ul className="space-y-1.5 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Product name and description
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Target quantity and price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Required certifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Desired delivery timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Destination country/port
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="p-6 lg:p-8 rounded-xl border border-border bg-bg shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-5">Send Us an Inquiry</h3>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
