import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Mail, Phone, MapPin, Clock, 
  MessageSquare, ArrowRight, 
  CheckCircle, Send, Loader2
} from 'lucide-react'
import InquiryForm from '../components/InquiryForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['Guangzhou, Guangdong Province', 'China 510000'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ssourcingchina.com', 'We respond within 24 hours'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+86 20 1234 5678', 'Mon-Fri, 9:00 AM - 6:00 PM (CST)'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday - Friday', '9:00 AM - 6:00 PM (CST)'],
  },
]

export default function Contact() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              Ready to start sourcing? Get in touch and we'll get back to you within 2-3 business days 
              with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-light" />
                    </div>
                    <h3 className="font-semibold text-base">{item.title}</h3>
                  </div>
                  {item.details.map((detail) => (
                    <p key={detail} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              ))}

              <div className="card bg-primary text-white">
                <h3 className="font-semibold text-base mb-2">Prefer to Talk?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Schedule a free consultation call with our team to discuss your sourcing needs.
                </p>
                <a href="tel:+862012345678" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-blue-200 transition-colors">
                  <Phone className="w-4 h-4" />
                  +86 20 1234 5678
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 card">
              <h2 className="text-2xl font-bold mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below and we'll get back to you within 2-3 business days with a tailored proposal.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface">
        <div className="container-main py-12">
          <div className="rounded-xl bg-gray-200 h-64 md:h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted mx-auto mb-2" />
              <p className="text-muted text-sm">SSourcing China - Guangzhou Office</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}