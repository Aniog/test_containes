import { useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight,
  Globe, CheckCircle
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ready to start sourcing from China? Fill out the form or reach out directly. We respond to every inquiry within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you are looking for a supplier, need a factory audit, or want help with shipping, our team is here to help. Reach out however is most convenient for you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-0.5">Email</p>
                    <a href="mailto:hello@ssourcingchina.com" className="text-slate-500 hover:text-blue-700 transition-colors">
                      hello@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-0.5">Phone</p>
                    <a href="tel:+8675588881234" className="text-slate-500 hover:text-blue-700 transition-colors">
                      +86 755 8888 1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-0.5">Office Address</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Room 1208, Block A, Shennan Avenue<br />
                      Futian District, Shenzhen, China<br />
                      518000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm mb-0.5">Business Hours</p>
                    <p className="text-slate-500 text-sm">
                      Monday – Friday: 9:00 AM – 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'Our team sends a free sourcing assessment',
                    'We schedule a call if needed to clarify details',
                    'You receive supplier options and pricing',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-slate-500 text-sm mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Office Visual */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="contact-office-title" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Based in Shenzhen, Connected Globally</h2>
              <p id="contact-office-desc" className="text-slate-500 leading-relaxed mb-6">
                Our headquarters in Shenzhen — the heart of China electronics and manufacturing industry — gives us direct access to thousands of factories, suppliers, and logistics partners. We combine local presence with global standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-slate-100">
                  <Globe className="w-5 h-5 text-blue-700 mb-2" />
                  <p className="text-sm font-medium text-slate-900">120+ Clients</p>
                  <p className="text-xs text-slate-500">Across 40+ countries</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-100">
                  <MessageSquare className="w-5 h-5 text-blue-700 mb-2" />
                  <p className="text-sm font-medium text-slate-900">24-Hour Response</p>
                  <p className="text-xs text-slate-500">On every inquiry</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-100">
                  <MapPin className="w-5 h-5 text-blue-700 mb-2" />
                  <p className="text-sm font-medium text-slate-900">On-Site Presence</p>
                  <p className="text-xs text-slate-500">Shenzhen & Guangzhou</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-blue-700 mb-2" />
                  <p className="text-sm font-medium text-slate-900">98% On-Time</p>
                  <p className="text-xs text-slate-500">Delivery rate</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
              <img
                data-strk-img-id="contact-office-img"
                data-strk-img="[contact-office-desc] [contact-office-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="SSourcing China Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prefer to Talk Directly?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation call with our sourcing team. We will discuss your project and give you honest, practical advice.</p>
          <a
            href="mailto:hello@ssourcingchina.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Email Us to Schedule a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
