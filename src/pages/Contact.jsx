import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="contact-hero-title">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="contact-hero-subtitle">
              Tell us about your product requirements and we'll get back to you within 24 hours with a tailored sourcing plan and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send Us Your Requirements</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Your country"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product / Service Description *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Describe the product you want to source including target quantity, budget, quality requirements, and any specific certifications needed..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Target Budget & Timeline</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Target unit price (USD)"
                    />
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      placeholder="Expected delivery timeline"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-accent w-full text-base py-3.5 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Inquiry — Get a Free Quote
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                <h3 className="font-bold text-neutral-900 text-lg mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">Office Address</h4>
                      <p className="text-sm text-neutral-600">Guangzhou, Guangdong Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">Email</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-600 hover:text-brand-700">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">Phone</h4>
                      <a href="tel:+861234567890" className="text-sm text-brand-600 hover:text-brand-700">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">Working Hours</h4>
                      <p className="text-sm text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Response Time</h4>
                  <p className="text-sm text-neutral-600">
                    We typically respond to all inquiries within 24 hours during business days. For urgent requests, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}