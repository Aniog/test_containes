import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/sections/FAQ.jsx";
import { faqItems } from "@/data/content.js";

const HomeFAQ = () => {
  return (
    <section className="bg-white border-b border-ink-200">
      <div className="container-page section-pad">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2
              id="home-faq-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              The questions buyers ask before their first order
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              Not finding your question? Mention it in the inquiry and we
              will answer it directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/blog" className="btn-secondary">
                Read the blog
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            <FAQ items={faqItems} title="" eyebrow="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
