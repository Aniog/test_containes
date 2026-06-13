import { useEffect } from "react";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  MessageSquare, Globe, CheckCircle,
} from "lucide-react";
import InquiryForm from "../components/InquiryForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ssourcingchina.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 755 8888 1234",
    desc: "Mon-Fri, 9 AM - 6 PM CST",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Shenzhen, Guangdong, China",
    desc: "Our team visits factories across China",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday",
    desc: "9:00 AM - 6:00 PM China Time",
  },
];

const whyChoose = [
  {
    icon: CheckCircle,
    title: "Free Initial Quote",
    desc: "No obligation. We review your requirements and send a detailed sourcing plan free of charge.",
  },
  {
    icon: Globe,
    title: "Global Client Base",
    desc: "We have helped buyers from North America, Europe, Australia, and beyond source from China.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Agent",
    desc: "Each client is assigned a personal sourcing agent who handles everything from start to finish.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We respond to all inquiries within 24 hours, keeping your project moving quickly.",
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Get a Free Sourcing Quote | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              Ready to source from China? Fill out the form below and we will
              get back to you with a free sourcing quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Contact Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Let's Talk About Your Sourcing Needs
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Whether you are looking for your first supplier or scaling up
                production, we are here to help. Send us your product
                requirements and we will get back to you with a tailored
                sourcing plan.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/5 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase tracking-wider font-medium mb-0.5">
                        {info.label}
                      </div>
                      <div className="font-semibold text-text-primary text-sm">
                        {info.value}
                      </div>
                      <div className="text-text-muted text-xs">
                        {info.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose */}
              <div>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                  Why Request a Quote?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChoose.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-surface border border-border"
                    >
                      <div className="w-9 h-9 rounded-lg bg-brand/5 flex items-center justify-center mb-2.5">
                        <item.icon className="w-4.5 h-4.5 text-brand" />
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-1">
                Request a Free Sourcing Quote
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                Tell us about your product and we will get back to you within 24
                hours.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
