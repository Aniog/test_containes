import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import InquiryForm from "@/components/site/InquiryForm";

const Contact = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get a free sourcing quote"
        description="Tell us what you want to source and we'll come back within one business day with a clear sourcing plan, vetted supplier shortlist, and transparent fees."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-border-soft bg-white p-6 md:p-7">
                <h2 className="text-xl font-semibold text-brand">Talk to a sourcing manager</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We typically reply within one business day. For urgent
                  requests, message us on WhatsApp or WeChat.
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Email</p>
                      <a href="mailto:hello@ssourcing-china.com" className="text-brand font-semibold hover:text-accent">
                        hello@ssourcing-china.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Phone</p>
                      <p className="text-brand font-semibold">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">WhatsApp / WeChat</p>
                      <p className="text-brand font-semibold">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Office</p>
                      <p className="text-slate-700">Room 1208, Yiwu International Trade City, Zhejiang, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Hours</p>
                      <p className="text-slate-700">Mon – Fri, 9:00 – 18:00 (China Standard Time)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-border-soft bg-brand text-white p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70 font-semibold">
                  What you'll get
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                    A response from a senior sourcing manager
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                    A clear sourcing plan with milestones and fees
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                    Initial 3 – 5 supplier shortlist with quotes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                    NDA available on request
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
