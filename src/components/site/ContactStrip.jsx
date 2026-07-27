import React from "react";
import { ArrowRight, PhoneCall, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// A high-contrast CTA strip that lives near the bottom of each page.
const ContactStrip = ({
  title = "Ready to source from China with a partner you can actually call?",
  subtitle = "Tell us what you need. We'll come back with a shortlist, a realistic price range, and a plan — within one business day.",
}) => {
  return (
    <section className="bg-ink-900 text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-light">Talk to a project manager</span>
            <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/75">
              {subtitle}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="btn btn-primary w-full md:w-auto md:self-end">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-white/80">
                <a
                  href="mailto:hello@ssourcing-china.com"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent-500" />
                  hello@ssourcing-china.com
                </a>
                <a
                  href="tel:+8675588881234"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <PhoneCall className="h-4 w-4 text-accent-500" />
                  +86 755 8888 1234
                </a>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-accent-500" />
                  WhatsApp · WeChat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
