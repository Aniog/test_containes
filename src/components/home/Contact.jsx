import { useState } from "react";
import { Send, Mail, Phone, MapPin, Check } from "lucide-react";
import { products } from "@/lib/content";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setError("Please complete name, email and message before sending.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");
    // Simulated submission — in production this would post to a CRM.
    setTimeout(() => {
      setStatus("success");
      setValues(initialForm);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative bg-steel-deep grain text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p id="contact-eyebrow" className="eyebrow text-bronze-light mb-4">
              Start a conversation
            </p>
            <h2
              id="contact-title"
              className="font-display text-4xl md:text-5xl text-white leading-tight"
            >
              Tell us about
              <span className="block italic text-bronze-light">your next part.</span>
            </h2>
            <p
              id="contact-subtitle"
              className="mt-6 text-white/70 text-base md:text-lg leading-relaxed"
            >
              Share a drawing, a sample or a problem statement. Our application
              engineers will respond within one business day with a machine
              recommendation and indicative pricing.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:engineering@artitect-machinery.com"
                className="flex items-start gap-4 group"
              >
                <span className="grid place-items-center w-10 h-10 border border-bronze/40 text-bronze-light group-hover:border-bronze-light transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-eyebrow text-white/50">
                    Email
                  </span>
                  <span className="block text-white group-hover:text-bronze-light transition-colors">
                    engineering@artitect-machinery.com
                  </span>
                </span>
              </a>
              <a href="tel:+10000000000" className="flex items-start gap-4 group">
                <span className="grid place-items-center w-10 h-10 border border-bronze/40 text-bronze-light group-hover:border-bronze-light transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-eyebrow text-white/50">
                    Phone
                  </span>
                  <span className="block text-white group-hover:text-bronze-light transition-colors">
                    +1 (000) 000-0000
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-10 h-10 border border-bronze/40 text-bronze-light flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-eyebrow text-white/50">
                    Headquarters
                  </span>
                  <span className="block text-white">
                    12 Industrial Avenue
                    <br />
                    Precision Park, Suite 400
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-white/[0.04] backdrop-blur-sm border border-white/10 p-8 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Full name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Company name"
                />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 555 000 0000"
                />
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-eyebrow text-white/60 mb-2">
                    Machine of interest
                  </label>
                  <div className="relative">
                    <select
                      name="product"
                      value={values.product}
                      onChange={onChange}
                      className="w-full bg-transparent border-0 border-b border-white/20 focus:border-bronze-light text-white py-2.5 pr-8 appearance-none outline-none transition-colors"
                    >
                      <option value="" className="text-steel-deep">
                        Select a machine…
                      </option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id} className="text-steel-deep">
                          {p.name}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-bronze-light text-xs">
                      ▾
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-eyebrow text-white/60 mb-2">
                    Project details <span className="text-bronze-light">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Material, thickness, tolerances, annual volume…"
                    className="w-full bg-transparent border-0 border-b border-white/20 focus:border-bronze-light text-white py-2.5 outline-none transition-colors placeholder:text-white/30 resize-none"
                    required
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-6 text-sm text-bronze-light border-l-2 border-bronze-light pl-3"
                >
                  {error}
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-white/50">
                  We respect your privacy. Your details are used only to respond
                  to your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 bg-bronze hover:bg-bronze-dark text-white px-7 py-3.5 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send inquiry"}
                  {status !== "submitting" && <Send className="w-4 h-4" />}
                </button>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-center gap-3 border border-bronze/40 bg-bronze/10 px-4 py-3 text-sm text-white"
                >
                  <Check className="w-4 h-4 text-bronze-light" />
                  Thank you. An application engineer will be in touch within one
                  business day.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-eyebrow text-white/60 mb-2">
        {label} {required && <span className="text-bronze-light">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-white/20 focus:border-bronze-light text-white py-2.5 outline-none transition-colors placeholder:text-white/30"
      />
    </div>
  );
}
