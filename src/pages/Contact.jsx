import React, { useEffect, useRef } from 'react'
import InquiryForm from '../components/InquiryForm'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Contact = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your sourcing project. We will respond within 24 business hours with initial thoughts and next steps.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <InquiryForm title="Submit Your Sourcing Inquiry" />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="font-semibold text-lg mb-6">Office & Contact Information</h3>
              
              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">HEAD OFFICE</div>
                  <div className="text-slate-900">Yiwu, Zhejiang, China</div>
                  <div className="text-slate-600 mt-1">International Trade Center, Building A, Suite 1208</div>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">EMAIL</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-slate-900 hover:underline">info@ssourcingchina.com</a>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">PHONE</div>
                  <a href="tel:+8657985588888" className="text-slate-900 hover:underline">+86 579 8558 8888</a>
                  <div className="text-xs text-slate-500 mt-1">WeChat / WhatsApp available</div>
                </div>

                <div>
                  <div className="text-slate-500 text-xs tracking-widest mb-1">BUSINESS HOURS</div>
                  <div className="text-slate-900">Monday – Friday</div>
                  <div className="text-slate-600">8:30am – 5:30pm China Standard Time</div>
                  <div className="text-xs text-slate-500 mt-1">Closed on Chinese public holidays</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">WHAT TO INCLUDE</div>
                <ul className="text-sm text-slate-600 space-y-1.5">
                  <li>• Product description or specifications</li>
                  <li>• Target price range (if known)</li>
                  <li>• Estimated order quantity</li>
                  <li>• Target delivery timeline</li>
                  <li>• Any quality or certification requirements</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500 px-1">
              We do not share your contact information with third parties. All inquiries are handled confidentially.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-600">
          <p>For urgent matters outside business hours, please email and mark the subject line "URGENT". We monitor email and respond to time-sensitive inquiries as quickly as possible.</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
