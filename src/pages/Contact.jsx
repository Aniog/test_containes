import InquiryForm from '@/components/home/InquiryForm'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcingchina.com',
    href: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 21 5555 0000',
    href: 'tel:+86-21-5555-0000',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+86 135 0000 0000',
    href: 'https://wa.me/8613500000000',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Shanghai, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)',
    href: null,
  },
]

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            Ready to source from China? Send us your requirements and our team
            will respond within 24 hours with a detailed sourcing proposal.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-gray-600 mb-8">
                Fill in the form below with as much detail as possible. The more
                information you provide, the more accurate our quote will be.
              </p>
              <InquiryForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-7 md:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-100 text-brand-500 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-gray-900 hover:text-brand-500 transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-900 font-medium">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    What to Expect
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Response within 24 hours',
                      'Dedicated sourcing manager assigned',
                      'No obligation free consultation',
                      'Confidential handling of your inquiry',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
