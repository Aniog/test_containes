import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import InquiryForm from "@/components/shared/InquiryForm";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-400 uppercase mb-3">Contact</span>
            <h1 id="contact-title" className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p id="contact-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Have a sourcing project in mind? Send us a message and we will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 mb-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Email</p>
                      <a href="mailto:hello@ssourcingchina.com" className="font-medium text-slate-900 hover:text-teal-600 transition-colors">
                        hello@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Phone</p>
                      <a href="tel:+8675512345678" className="font-medium text-slate-900 hover:text-teal-600 transition-colors">
                        +86 755 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Office</p>
                      <p className="font-medium text-slate-900">Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Response Time</p>
                      <p className="font-medium text-slate-900">Within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                <img
                  data-strk-img-id="contact-office-img"
                  data-strk-img="[contact-subtitle] [contact-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="SSourcing China office in Shenzhen"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Follow us on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <InquiryForm title="Send Us an Inquiry" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
