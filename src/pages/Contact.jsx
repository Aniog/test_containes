import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import InquiryForm from '../components/shared/InquiryForm'

const Contact = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p id="contact-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="bg-surface rounded-xl border border-border p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Email</h3>
                <p className="mt-1 text-text-body text-sm">info@ssourcingchina.com</p>
                <p className="text-text-muted text-xs mt-1">We respond within 24 hours</p>
              </div>
            </div>
            <div className="bg-surface rounded-xl border border-border p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Phone / WhatsApp</h3>
                <p className="mt-1 text-text-body text-sm">+86 138 0000 0000</p>
                <p className="text-text-muted text-xs mt-1">Mon-Fri, 9am-6pm CST</p>
              </div>
            </div>
            <div className="bg-surface rounded-xl border border-border p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">Office</h3>
                <p className="mt-1 text-text-body text-sm">Guangzhou, Guangdong, China</p>
                <p className="text-text-muted text-xs mt-1">Visits by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InquiryForm />

      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-white rounded-xl border border-border p-6">
            <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-text-primary text-sm">What happens after you submit?</h3>
              <ol className="mt-2 space-y-1 text-text-body text-sm list-decimal list-inside">
                <li>We review your requirements (within 24 hours)</li>
                <li>We send you a sourcing plan with estimated timeline and fees</li>
                <li>If you approve, we begin supplier research immediately</li>
                <li>No commitment required for the initial consultation</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
