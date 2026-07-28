import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { COMPANY } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-container mx-auto container-px py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-white/70">Ready to start?</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Send your brief. Get a short-list of vetted suppliers.
            </h2>
            <p className="mt-4 text-base text-white/75 max-w-2xl leading-relaxed">
              Share your spec, target price, and where the goods need to
              land. We acknowledge within one business day and return a
              short-list of qualified Chinese factories with sample quotes.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold rounded-md px-7 py-3.5 hover:bg-brand-redDark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-md px-7 py-3.5 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="text-sm text-white/70 text-center inline-flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
