import { useState } from "react";
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { PRODUCT_INTEREST_OPTIONS } from "@/lib/products";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product_interest: "general-inquiry",
  message: "",
};

const fieldClass =
  "w-full bg-paper border border-mist text-ink placeholder:text-steel/60 px-4 py-3 text-sm focus:outline-none focus:border-ink transition";

const labelClass =
  "block text-xs uppercase tracking-[0.2em] text-steel mb-2";

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return "Please enter your name.";
    if (!values.email.trim()) return "Please enter your email address.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      return "Please enter a valid email address.";
    if (!values.message.trim()) return "Please tell us a little about your project.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const v = validate();
    if (v) {
      setError(v);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      data: {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company: values.company.trim(),
        country: values.country.trim(),
        product_interest: values.product_interest,
        message: values.message.trim(),
        created_at: new Date().toISOString(),
      },
    };

    const { data: response, error: insertError } = await client
      .from("ContactInquiry")
      .insert(payload)
      .select()
      .single();

    if (insertError || response?.success === false) {
      const messages = Array.isArray(response?.errors) && response.errors.length
        ? response.errors.join(", ")
        : insertError?.message || "Something went wrong. Please try again.";
      setError(messages);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(INITIAL);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-bone pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
            Get in touch
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
            Let's talk about your work.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Tell us about the panels you bend, the materials you fold, and the
            tolerances you hold. Our engineers will help you specify the right
            machine.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Info */}
          <aside className="lg:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Studio
            </h2>
            <p className="mt-4 text-sm text-steel leading-relaxed">
              Visits by appointment, Monday through Friday. We'd be glad to
              show you the machines on the shop floor.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="bg-bone p-2.5 border border-mist">
                  <MapPin size={18} className="text-accent" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-steel mb-1">
                    Address
                  </p>
                  <p className="text-sm text-ink leading-relaxed">
                    Industriestrasse 12<br />
                    8404 Winterthur, Switzerland
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-bone p-2.5 border border-mist">
                  <Phone size={18} className="text-accent" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-steel mb-1">
                    Telephone
                  </p>
                  <p className="text-sm text-ink">+41 52 000 12 00</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-bone p-2.5 border border-mist">
                  <Mail size={18} className="text-accent" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-steel mb-1">
                    Email
                  </p>
                  <p className="text-sm text-ink">sales@artitect-machinery.com</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 pt-8 border-t border-mist">
              <p className="text-xs uppercase tracking-[0.2em] text-steel mb-3">
                Hours
              </p>
              <p className="text-sm text-ink leading-relaxed">
                Monday – Friday<br />
                <span className="text-steel">08:00 – 17:30 CET</span>
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-bone border border-mist p-8 md:p-12">
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
                Request a quote
              </h2>
              <p className="mt-3 text-sm text-steel">
                We'll respond within one business day.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="+00 000 000 0000"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="country">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={values.country}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Country or region"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      className={fieldClass}
                      placeholder="Workshop or company name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="product_interest">
                      Interested in
                    </label>
                    <select
                      id="product_interest"
                      name="product_interest"
                      value={values.product_interest}
                      onChange={handleChange}
                      className={`${fieldClass} appearance-none pr-10 bg-paper`}
                    >
                      {PRODUCT_INTEREST_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell us about the materials, panel sizes, and tolerances you work with."
                    required
                  />
                </div>

                {status === "error" && error && (
                  <div className="flex items-start gap-3 border border-accent/40 bg-accent/5 px-4 py-3 text-sm text-ink">
                    <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-start gap-3 border border-ink/20 bg-ink/5 px-4 py-3 text-sm text-ink">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <p>
                      Thank you. Your inquiry has been received — we'll be in
                      touch within one business day.
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-ink text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
