import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { site } from "@/data/site";
import { productCategories } from "@/data/products";

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product: "",
  message: "",
};

export default function Contact() {
  const containerRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (!values.name.trim()) return setError("Please tell us your name.");
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      return setError("Please provide a valid work email.");
    if (!values.message.trim())
      return setError("Tell us a bit about your application.");

    setStatus("submitting");

    // Simulated submission — ready to wire to backend.
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 700);
  };

  return (
    <div ref={containerRef}>
      <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-precision-grid opacity-40"
        />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          <nav
            className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-copper-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-paper-50">Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-copper-400">Get in touch</span>
              <h1
                id="contact-hero-title"
                className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
              >
                Tell us about your parts — we'll spec the right folder.
              </h1>
            </div>
            <p
              id="contact-hero-subtitle"
              className="lg:col-span-4 text-paper-50/75 text-base md:text-lg leading-relaxed"
            >
              Most quotes returned within one business day.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-6">
              <ContactCard
                icon={Mail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactCard
                icon={Phone}
                label="Sales hotline"
                value={site.phone}
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              />
              <ContactCard
                icon={MapPin}
                label="Headquarters"
                value={site.address}
              />
              <ContactCard icon={Clock} label="Hours" value={site.hours} />

              <div className="bg-paper-100 border border-ink-900/8 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-ink-900">
                  Already a customer?
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  Service and parts inquiries are routed directly to your
                  regional distributor — most tickets are acknowledged within
                  4 hours.
                </p>
                <a
                  href="mailto:service@artitectmachinery.com"
                  className="mt-4 inline-flex items-center gap-2 text-copper-600 hover:text-copper-700 font-semibold text-sm"
                >
                  service@artitectmachinery.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-paper-50 border border-ink-900/8 rounded-3xl p-7 md:p-10 shadow-sm shadow-ink-900/5">
                <h2
                  id="contact-form-title"
                  className="font-display font-semibold text-2xl md:text-3xl text-ink-900"
                >
                  Request a quote
                </h2>
                <p
                  id="contact-form-subtitle"
                  className="mt-2 text-ink-700 text-sm md:text-base"
                >
                  Fill out the form below and our application engineers will
                  respond within one business day.
                </p>

                <form
                  className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <FormField
                    label="Full name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                  <FormField
                    label="Work email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="jane@yourcompany.com"
                    required
                  />
                  <FormField
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    placeholder="Your fabrication shop"
                  />
                  <FormField
                    label="Phone (optional)"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="product"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-ink-500"
                    >
                      Machine of interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={values.product}
                      onChange={handleChange}
                      className="mt-2 w-full bg-paper-50 border border-ink-900/15 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/20 outline-none rounded-xl px-4 py-3 text-ink-900 transition"
                    >
                      <option value="">Not sure yet — please advise</option>
                      {productCategories.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-[0.18em] uppercase text-ink-500"
                    >
                      Tell us about your application
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Sheet thickness, material, tolerances, expected throughput…"
                      className="mt-2 w-full bg-paper-50 border border-ink-900/15 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/20 outline-none rounded-xl px-4 py-3 text-ink-900 resize-y transition"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-xs text-ink-500 max-w-md">
                      By submitting this form you agree to our privacy policy.
                      We'll never share your details with third parties.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-copper-600 disabled:opacity-60 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
                    >
                      {status === "submitting" ? "Sending…" : "Send inquiry"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {status === "success" && (
                    <div
                      role="status"
                      className="sm:col-span-2 flex items-start gap-3 bg-copper-100 border border-copper-200 rounded-2xl p-4 text-copper-700"
                    >
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-display font-semibold">
                          Thanks — your inquiry is on its way.
                        </p>
                        <p className="text-sm mt-1 text-copper-700/80">
                          Our application engineers will reach out within one
                          business day.
                        </p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div
                      role="alert"
                      className="sm:col-span-2 flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700"
                    >
                      <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist-100 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow text-copper-600">Visit us</span>
            <h2
              id="contact-visit-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
            >
              See an ARTITECT machine in operation.
            </h2>
            <p
              id="contact-visit-subtitle"
              className="mt-4 text-ink-700 text-base md:text-lg leading-relaxed"
            >
              Our Hayward facility runs factory acceptance tests every month.
              We welcome serious buyers who want to see their parts being
              folded before they commit.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  const body = (
    <div className="bg-paper-100 border border-ink-900/8 rounded-2xl p-6 hover-lift">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-copper-100 text-copper-600">
        <Icon className="w-5 h-5" />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
        {label}
      </p>
      <p className="mt-2 font-display font-semibold text-ink-900 break-words">
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {body}
    </a>
  ) : (
    body
  );
}

function FormField({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-[0.18em] uppercase text-ink-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-paper-50 border border-ink-900/15 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/20 outline-none rounded-xl px-4 py-3 text-ink-900 transition placeholder:text-ink-400"
      />
    </div>
  );
}