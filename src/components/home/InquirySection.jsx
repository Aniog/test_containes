import { Mail, MessageCircle, Clock } from "lucide-react";
import InquiryForm from "../shared/InquiryForm";

const InquirySection = () => {
  return (
    <section id="inquiry" className="bg-[#EEF2F7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
              Free Sourcing Quote
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
              Tell us what you want to source
            </h2>
            <p className="mt-4 text-[#475569] text-base md:text-lg leading-relaxed">
              Share your product, target price, target quantity and timeline.
              You will receive a written reply with supplier options and a
              clear next step within one business day.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-[#D9E2EC] text-[#1F4E79]">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B2545]">Reply within 1 business day</p>
                  <p className="text-sm text-[#475569]">During China working hours (UTC+8).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-[#D9E2EC] text-[#1F4E79]">
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
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-[#D9E2EC] text-[#1F4E79]">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0B2545]">WhatsApp / WeChat</p>
                  <p className="text-sm text-[#475569]">+86 138 0000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
