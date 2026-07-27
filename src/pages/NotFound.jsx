import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import ContactStrip from "@/components/site/ContactStrip";

const NotFound = () => {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page does not exist (yet)."
        subtitle="The page you are looking for may have moved. Use the navigation above, or send us a sourcing brief and we will route you to the right person."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn btn-outline btn-sm">
              Go to home
            </Link>
            <Link to="/services" className="btn btn-outline btn-sm">
              See our services
            </Link>
            <Link to="/how-it-works" className="btn btn-outline btn-sm">
              How it works
            </Link>
            <Link to="/case-studies" className="btn btn-primary btn-sm">
              Read case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
};

export default NotFound;
