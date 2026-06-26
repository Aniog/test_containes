import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/contact/InquiryForm";

export default function Contact() {
  return (
    <div>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a free sourcing quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us what you are looking for. We will review your requirements and respond within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <SectionHeading
                align="left"
                label="Get in touch"
                title="Let's talk about your project"
                description="Our team is based in Shenzhen, China, and works with buyers across multiple time zones."
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-blue-800 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                    <a href="tel:+8613800138000" className="text-slate-600 hover:text-blue-800 transition-colors">
                      +86 138 0013 8000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Office</p>
                    <p className="text-slate-600">
                      Room 1805, Block A, Fortune Plaza<br />
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Response time</p>
                    <p className="text-slate-600">
                      We typically reply to inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us your sourcing inquiry
                </h2>
                <InquiryForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
