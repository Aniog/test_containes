import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import InquiryForm from '@/components/sections/InquiryForm'

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Contact Us</h1>
          <p className="max-w-2xl text-lg text-slate-300">Tell us about your sourcing requirements. We typically respond within one business day with a preliminary assessment and next steps.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h2 className="font-semibold text-xl mb-6">SSourcing China</h2>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="font-medium text-slate-700 mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-900 hover:underline">info@ssourcingchina.com</a>
                </div>
                
                <div>
                  <div className="font-medium text-slate-700 mb-1">Phone</div>
                  <a href="tel:+862155556666" className="text-slate-900 hover:underline">+86 21 5555 6666</a>
                </div>
                
                <div>
                  <div className="font-medium text-slate-700 mb-1">Office</div>
                  <div className="text-slate-600 leading-relaxed">
                    Room 1208, Building 3<br />
                    88 Century Avenue<br />
                    Pudong, Shanghai 200120<br />
                    China
                  </div>
                </div>

                <div>
                  <div className="font-medium text-slate-700 mb-1">Business Hours</div>
                  <div className="text-slate-600">Monday – Friday, 8:30 AM – 6:00 PM China Standard Time</div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
                We work with buyers in North America, Europe, Australia, and other markets. Our team communicates in English and Mandarin. All inquiries are handled confidentially.
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact