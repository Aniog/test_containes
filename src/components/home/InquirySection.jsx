import InquiryForm from "@/components/shared/InquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";

const InquirySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">
              Start Sourcing
            </span>
            <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p id="inquiry-subtitle" className="text-lg text-slate-600 leading-relaxed mb-8">
              Tell us about your product and we will respond within one business day with next steps and a clear service proposal.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                data-strk-img-id="inquiry-img"
                data-strk-img="[inquiry-subtitle] [inquiry-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Business team reviewing supplier documents in Shenzhen office"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-900">hello@ssourcingchina.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-slate-900">+86 755 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Office</p>
                  <p className="font-medium text-slate-900">Shenzhen, Guangdong, China</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
