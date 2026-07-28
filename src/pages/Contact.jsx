import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import InquiryForm from '@/components/forms/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">
              Tell us about your sourcing requirements. We will respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Submit an Inquiry</h2>
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <InquiryForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Office</div>
                  <p className="text-slate-600 text-sm mt-1">Shanghai, China<br />Pudong New Area</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-sm text-teal-600 hover:underline">info@ssourcingchina.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Phone</div>
                  <a href="tel:+862150000000" className="text-sm text-teal-600 hover:underline">+86 21 5000 0000</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Business Hours</div>
                  <p className="text-sm text-slate-600 mt-1">Monday – Friday<br />9:00 AM – 6:00 PM (China Standard Time)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-600">
              <p className="mb-2 font-medium text-slate-900">What to include in your inquiry:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Product description or specifications</li>
                <li>Estimated quantity and timeline</li>
                <li>Target price range if known</li>
                <li>Any compliance or certification needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Prefer to Start with a Call?</h2>
          <p className="text-slate-600 mb-6">Schedule a 20-minute call to discuss your sourcing needs.</p>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:info@ssourcingchina.com?subject=Request%20a%20Call">Request a Call</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Contact
