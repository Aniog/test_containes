import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import PageHero from '@/components/PageHero.jsx'
import InquiryForm from '@/components/InquiryForm.jsx'

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Get a free sourcing quote within one working day"
        desc="Tell us about your product, target quantity and timeline. A senior sourcing manager will review your brief and reply with a feasibility check and next steps."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Talk to our sourcing team</h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Whether you need a single factory audit or full-service sourcing, we are happy to discuss
                feasibility before any commitment.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <a href="mailto:hello@ssourcing-china.com" className="text-sm text-slate-600 hover:text-red-600">
                      hello@ssourcing-china.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone / WhatsApp</div>
                    <p className="text-sm text-slate-600">+86 755 8888 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">WeChat ID</div>
                    <p className="text-sm text-slate-600">ssourcing-china</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office</div>
                    <p className="text-sm text-slate-600">
                      Room 1208, Block A, Tian'an Cyber Park,<br />
                      Futian District, Shenzhen, China 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 shrink-0">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office hours</div>
                    <p className="text-sm text-slate-600">Mon–Sat, 09:00–18:00 (GMT+8)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Confidentiality:</strong> we sign NDAs on request before reviewing
                  any product brief, drawings or supplier information.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Sourcing inquiry form</h2>
                <p className="mt-1.5 text-sm text-slate-600">
                  Required fields are marked with <span className="text-red-600">*</span>.
                </p>
                <div className="mt-6">
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
