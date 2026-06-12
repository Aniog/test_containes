import { useEffect, useRef } from 'react'
import { Mail, MapPin, Phone, Globe, Clock, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import InquiryForm from '../components/InquiryForm.jsx'

export default function Contact() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source. We will respond within 24 working hours with a clear project scope, indicative price range, and next steps."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Talk to a sourcing specialist
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <a
                        href="mailto:hello@ssourcingchina.com"
                        className="text-slate-600 hover:text-brand-blue"
                      >
                        hello@ssourcingchina.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Phone / WhatsApp</div>
                      <div className="text-slate-600">+86 159 8888 0000</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Office</div>
                      <div className="text-slate-600">
                        Futian District, Yiwu, Zhejiang Province, China
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Hours</div>
                      <div className="text-slate-600">
                        Mon - Sat, 09:00 - 18:00 (GMT+8)
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Languages</div>
                      <div className="text-slate-600">English · French · Spanish</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-navy text-white rounded-lg p-6">
                <MessageSquare className="w-6 h-6 text-brand-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2">What to include in your brief</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Product description and key specifications</li>
                  <li>• Target unit price or budget range</li>
                  <li>• Estimated quantity / first order MOQ</li>
                  <li>• Required certifications (CE, FCC, EN71, etc.)</li>
                  <li>• Destination country and timeline</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Confidentiality
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We treat all sourcing briefs as confidential. We can sign an
                  NDA before you share product designs or specifications.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  Send your sourcing brief
                </h2>
                <p className="text-slate-600 mb-6">
                  Required fields are marked with *. The more detail you share,
                  the faster we can come back with an accurate proposal.
                </p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
