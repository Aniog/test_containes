import { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquirySection from '@/components/home/InquirySection'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: 'Guangzhou, Guangdong Province, China',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@ssourcingchina.com',
    href: 'mailto:info@ssourcingchina.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+86 123 4567 890',
    href: 'tel:+861234567890',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday – Friday, 9:00 – 18:00 (CST)',
  },
]

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="contact-bg-1a2b3c"
          data-strk-bg="[contact-title] [contact-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p id="contact-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Ready to start your China sourcing project? Get in touch and we will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <InquirySection />
            </div>
            <div>
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-700" />
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-brand-700" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                          {item.title}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-slate-900 hover:text-brand-700 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-900">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">Prefer to email us directly?</h4>
                  <a
                    href="mailto:info@ssourcingchina.com"
                    className="block w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors text-center"
                  >
                    Send Us an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}