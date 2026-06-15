import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import InquiryForm from '../components/home/InquiryForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Contact Us</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Get in touch for a direct consultation or a free sourcing project evaluation.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h2>
            <div className="space-y-8">
              {[
                { title: 'Email', val: 'contact@ssourcingchina.com', icon: Mail },
                { title: 'Phone/WhatsApp', val: '+86 755 8888 8888', icon: Phone },
                { title: 'Office', val: 'R1205, Modern Plaza, Futian District, Shenzhen, China', icon: MapPin },
                { title: 'Business Hours', val: 'Mon - Fri, 9:00 - 18:00 (GMT+8)', icon: Clock }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <item.icon className="h-6 w-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Visit Our Office</h3>
              <p className="text-blue-800/80 text-sm leading-relaxed mb-6">
                We are located in the heart of Shenzhen, the world's electronics capital. Feel free to schedule a visit.
              </p>
              <div className="h-40 bg-slate-200 rounded-lg overflow-hidden grayscale">
                 <img 
                    data-strk-img-id="office-map"
                    data-strk-img="shenzhen city map futian district"
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                    alt="Shenzhen Map"
                  />
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 bg-white border border-slate-100 shadow-xl rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h2>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
