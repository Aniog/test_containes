import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Ready to start sourcing? Get in touch and we'll respond within 24 hours with a customized plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-surface rounded-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Office Address</p>
                      <p className="text-gray-600 text-sm">Guangzhou, Guangdong Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-gray-600 text-sm hover:text-primary transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Phone</p>
                      <a href="tel:+861234567890" className="text-gray-600 text-sm hover:text-primary transition-colors">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Working Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Response within 24 hours",
                    "Personal account manager",
                    "Transparent pricing",
                    "No hidden fees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="sourcing">Product Sourcing Inquiry</option>
                      <option value="verification">Supplier Verification Request</option>
                      <option value="inspection">Quality Inspection Service</option>
                      <option value="logistics">Shipping & Logistics Inquiry</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Describe your sourcing requirements, product details, target quantity, quality requirements, and any other relevant information."
                    />
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-6 py-3 text-base transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
                <p className="text-xs text-gray-400 text-center mt-4">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}