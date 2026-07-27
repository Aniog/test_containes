import { useEffect, useRef } from 'react'
import InquiryForm from '@/components/shared/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { company } from '@/data/site'

export default function InquirySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="section-pad bg-canvas">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="eyebrow mb-3">Get a Free Sourcing Quote</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Tell us what you want to source
            </h2>
            <p className="mt-4 text-lg text-muted">
              Share your product, target price, and quantity. We will reply within one business day with a transparent quote and a suggested next step — no commitment required.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: company.email },
                { icon: Phone, label: 'Phone', value: company.phone },
                { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp },
                { icon: MapPin, label: 'Office', value: company.address },
                { icon: Clock, label: 'Hours', value: company.hours },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <row.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted">{row.label}</div>
                    <div className="text-sm font-medium text-ink">{row.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="inquiry-form">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
