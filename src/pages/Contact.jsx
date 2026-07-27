import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="contact-header-bg"
          data-strk-bg="[contact-header-title] business meeting handshake"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="contact-header-title" className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Tell us about your sourcing needs. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Sourcing Quote</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Company Ltd" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>Product Sourcing & Manufacturing</option>
                    <option>Quality Control Inspection only</option>
                    <option>Logistics & Shipping only</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Details & Requirements</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
                    placeholder="Please provide product links, specifications, estimated order quantities, and any other relevant details..."
                    required
                  ></textarea>
                </div>

                <Button size="lg" className="w-full bg-blue-600 text-white py-6 text-lg" type="submit">
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our China Headquarters</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Office Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Suite 801, Global Trade Center<br />
                      Tianhe District, Guangzhou<br />
                      Guangdong Province, China 510000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      Inquiries: <a href="mailto:hello@ssourcingchina.com" className="text-blue-600 hover:underline">hello@ssourcingchina.com</a><br/>
                      Support: <a href="mailto:support@ssourcingchina.com" className="text-blue-600 hover:underline">support@ssourcingchina.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      Global: +86 138-0000-0000<br/>
                      US/CA: +1 (800) 555-0100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST/UTC+8)<br/>
                      *We align with your timezone for critical meetings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
