import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import InquiryForm from "../components/shared/InquiryForm";

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Share your product, target price and quantity. We will reply with supplier options and a clear next step within one business day."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B2545]">Contact details</h2>
                <p className="mt-3 text-[#475569] leading-relaxed">
                  We work with buyers from North America, Europe, Australia, the Middle East and Latin America. Reach out by form, email or messenger app &mdash; whichever is easiest for you.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EEF2F7] text-[#1F4E79]">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B2545]">Office</p>
                    <p className="text-sm text-[#475569]">Yiwu, Zhejiang, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EEF2F7] text-[#1F4E79]">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B2545]">Email</p>
                    <a href="mailto:contact@ssourcingchina.com" className="text-sm text-[#1F4E79] hover:text-[#C8102E]">
                      contact@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EEF2F7] text-[#1F4E79]">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B2545]">Phone</p>
                    <p className="text-sm text-[#475569]">+86 138 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EEF2F7] text-[#1F4E79]">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B2545]">WhatsApp / WeChat</p>
                    <p className="text-sm text-[#475569]">+86 138 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#EEF2F7] text-[#1F4E79]">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B2545]">Working hours</p>
                    <p className="text-sm text-[#475569]">Mon &ndash; Sat, 9:00 &ndash; 18:00 (UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#D9E2EC] bg-[#EEF2F7] p-5">
                <p className="text-sm font-semibold text-[#0B2545]">What to include in your message</p>
                <ul className="mt-2 space-y-1.5 text-sm text-[#475569]">
                  <li>• Product description or reference link</li>
                  <li>• Target unit price or budget</li>
                  <li>• Target order quantity</li>
                  <li>• Required certifications, if any</li>
                  <li>• Destination country and timeline</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
