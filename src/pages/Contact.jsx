import React from 'react'
import InquiryForm from '../components/InquiryForm'

const Contact = () => {
  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-gray-300">Tell us about your requirements and we'll respond within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <InquiryForm />
          </div>

          <div className="md:col-span-2">
            <div className="bg-[#F3F4F6] rounded-lg p-8">
              <h3 className="font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Email</div>
                  <a href="mailto:info@ssourcingchina.com" className="text-[#1E40AF]">info@ssourcingchina.com</a>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Phone</div>
                  <a href="tel:+862158880000" className="text-[#1E40AF]">+86 21 5888 0000</a>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Office</div>
                  <p>Shanghai, China</p>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Business Hours</div>
                  <p>Monday - Friday: 8:30 AM - 6:00 PM (CST)</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <h4 className="font-semibold mb-3 text-sm">What to Expect</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Response within 24 business hours</li>
                  <li>• Detailed sourcing proposal</li>
                  <li>• Transparent pricing information</li>
                  <li>• No obligation consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact