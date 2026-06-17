import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productOptions = [
  { v: "double-folding-machine", l: "Double folding machine" },
  { v: "double-folder", l: "Double folder" },
  { v: "sheet-metal-folder", l: "Sheet metal folder" },
  { v: "sheet-metal-folding-machine", l: "Sheet metal folding machine" },
  { v: "metal-folder", l: "Metal folder" },
  { v: "metal-folder-machine", l: "Metal folder machine" },
  { v: "metal-folding-machine", l: "Metal folding machine" },
  { v: "general-inquiry", l: "General inquiry" },
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product_interest: "double-folding-machine",
  message: "",
};

export default function Contact() {
  const containerRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please provide a valid email address.";
    if (!v.message.trim()) return "Please tell us a little about your project.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const v = validate(values);
    if (v) {
      setError(v);
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const payload = {
      ...values,
      created_at: new Date().toISOString(),
    };

    const { data: response, error: insertError } = await client
      .from("ContactInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (insertError || response?.success === false) {
      const msg =
        (Array.isArray(response?.errors) && response.errors.join(", ")) ||
        insertError?.message ||
        "Something went wrong. Please try again.";
      setError(msg);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="bg-ink text-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-brass mb-5">
            Begin a conversation
          </p>
          <h2
            id="contact-title"
            className="font-display text-4xl md:text-5xl font-light leading-[1.08]"
          >
            Tell us what you fold.
            <br />
            <span className="italic text-brass">We'll engineer the rest.</span>
          </h2>
          <p
            id="contact-subtitle"
            className="mt-6 text-white/70 leading-relaxed max-w-md"
          >
            Share a few details about your workshop and the folds you produce.
            One of our application engineers will respond personally within one
            business day.
          </p>

          <div className="mt-12 space-y-5 text-sm">
            <div className="flex items-start gap-4 text-white/80">
              <Mail className="w-5 h-5 text-brass mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-1">
                  Email
                </div>
                sales@artitect-machinery.com
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/80">
              <Phone className="w-5 h-5 text-brass mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-1">
                  Phone
                </div>
                +1 (415) 555-0144
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/80">
              <MapPin className="w-5 h-5 text-brass mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-1">
                  Factory
                </div>
                14 Foundry Way, Industrial District,
                <br />
                Eindhoven, Netherlands
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-graphite p-8 md:p-12 border border-white/10"
          aria-busy={status === "submitting"}
        >
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
            <Field
              label="Full name *"
              name="name"
              value={values.name}
              onChange={onChange}
              autoComplete="name"
              required
            />
            <Field
              label="Email *"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              autoComplete="email"
              required
            />
            <Field
              label="Phone"
              name="phone"
              value={values.phone}
              onChange={onChange}
              autoComplete="tel"
            />
            <Field
              label="Company"
              name="company"
              value={values.company}
              onChange={onChange}
              autoComplete="organization"
            />
            <Field
              label="Country"
              name="country"
              value={values.country}
              onChange={onChange}
              autoComplete="country-name"
            />
            <div className="flex flex-col">
              <label className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">
                Product of interest
              </label>
              <select
                name="product_interest"
                value={values.product_interest}
                onChange={onChange}
                className="bg-transparent border-b border-white/30 focus:border-brass outline-none py-3 text-white text-base"
              >
                {productOptions.map((o) => (
                  <option key={o.v} value={o.v} className="bg-graphite text-white">
                    {o.l}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Sheet thickness, working length, materials, volumes…"
                className="bg-transparent border-b border-white/30 focus:border-brass outline-none py-3 text-white placeholder-white/40 resize-y"
              />
            </div>
          </div>

          {status === "error" && error && (
            <div
              role="alert"
              className="mt-8 flex items-start gap-3 border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-100"
            >
              <AlertCircle className="w-5 h-5 mt-0.5 text-red-300" />
              <span>{error}</span>
            </div>
          )}

          {status === "success" && (
            <div
              role="status"
              className="mt-8 flex items-start gap-3 border border-brass/50 bg-brass/10 p-4 text-sm text-white"
            >
              <CheckCircle2 className="w-5 h-5 mt-0.5 text-brass" />
              <span>
                Thank you. Your inquiry has been received — an engineer will
                contact you within one business day.
              </span>
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-xs text-white/50 max-w-sm">
              By submitting, you agree we may contact you about your inquiry.
              We never share your details.
            </p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-3 bg-white text-ink hover:bg-brass disabled:opacity-60 disabled:cursor-not-allowed px-7 py-4 text-xs uppercase tracking-[0.2em] transition-colors"
            >
              {status === "submitting" ? "Sending…" : "Send inquiry"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", required, autoComplete }) {
  return (
    <div className="flex flex-col">
      <label className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="bg-transparent border-b border-white/30 focus:border-brass outline-none py-3 text-white placeholder-white/40"
      />
    </div>
  );
}
