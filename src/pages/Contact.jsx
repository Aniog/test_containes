import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import InquiryForm from '../components/InquiryForm'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">Contact Us</h1>
            <p className="text-lg text-[#94A3B8]">
              Tell us about your sourcing requirements. We will respond within 24 hours 
              with initial thoughts or questions to clarify your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-[#0A2540] mb-4">Get in Touch</h2>
                  <p className="text-sm text-[#475569]">
                    We work with buyers worldwide. Whether you have a specific project in mind 
                    or want to understand how we can support your sourcing, we are happy to discuss.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2563EB] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#0A2540]">Office</div>
                      <div className="text-sm text-[#475569]">
                        Shanghai, China<br />
                        Pudong New Area
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2563EB] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#0A2540]">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#2563EB] hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2563EB] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#0A2540]">Phone / WhatsApp</div>
                      <div className="text-sm text-[#475569]">+86 21 1234 5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2563EB] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#0A2540]">Response Time</div>
                      <div className="text-sm text-[#475569]">Within 24 hours on business days</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="text-sm text-[#64748B]">
                    We are available for calls during China business hours (GMT+8). 
                    For urgent matters, please indicate in your message.
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-[#0A2540] mb-2">Submit an Inquiry</h2>
                    <p className="text-sm text-[#475569]">
                      Provide as much detail as you can about your requirements. 
                      This helps us prepare a relevant response.
                    </p>
                  </div>
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-[#0A2540] mb-6 text-center">What Happens Next</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 text-xs font-medium text-[#0A2540]">1</div>
                <div className="text-sm text-[#475569]">
                  We review your inquiry and may ask clarifying questions about product specifications, 
                  quantity, timeline, or quality requirements.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 text-xs font-medium text-[#0A2540]">2</div>
                <div className="text-sm text-[#475569]">
                  If your project aligns with our capabilities, we provide an initial assessment 
                  including estimated timeline and scope of work.
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0 text-xs font-medium text-[#0A2540]">3</div>
                <div className="text-sm text-[#475569]">
                  We discuss next steps, which may include a detailed quote, supplier shortlist, 
                  or a call to review requirements in more detail.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
