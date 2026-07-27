import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/site.js";

export default function CTABanner() {
  return (
    <section className="section surface-navy">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="kicker text-accent mb-3">Ready to start?</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Tell us what you need to source. We'll get back within 1 business day.
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              No commitment, no upfront fee for an initial assessment. Just a real
              conversation about your product, your timeline, and whether we can help.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link to="/contact" className="btn-primary !text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-secondary-light !text-sm"
              >
                <Mail className="w-4 h-4" />
                Email us
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-light !text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
