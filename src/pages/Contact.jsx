import { useStrkImages } from "@/hooks/useStrkImages";
import PageHeader from "@/components/shared/PageHeader";
import QuoteForm from "@/components/shared/QuoteForm";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ssourcingchina.com",
    href: "mailto:info@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 138 1234 5678",
    href: "tel:+8613812345678",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Room 1208, Block A, Futian District, Shenzhen, Guangdong, China",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Friday, 9:00 AM – 6:00 PM (CST)",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / WeChat",
    value: "+86 138 1234 5678",
    href: "https://wa.me/8613812345678",
  },
];

export default function Contact() {
  const containerRef = useStrkImages([]);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with our sourcing team"
        description="Have a project in mind? Send us a message and we will respond within one business day."
        queryId="contact"
        query="[contact-header-desc] [contact-header-title]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact information</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our team is based in Shenzhen, China, with project managers covering key manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Fujian.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to start sourcing from China?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Whether you need a single supplier audit or full order management, our team is ready to help.
          </p>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email us today
          </a>
        </div>
      </section>
    </div>
  );
}
