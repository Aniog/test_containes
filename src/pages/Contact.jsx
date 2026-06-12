import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { Eyebrow } from "@/components/shared/SectionHeading";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const PRODUCT_OPTIONS = [
  { value: "double-folding-machine", label: "Double Folding Machine" },
  { value: "sheet-metal-folder", label: "Sheet Metal Folder" },
  { value: "metal-folding-machine", label: "Metal Folding Machine" },
  { value: "general-inquiry", label: "General Inquiry" },
];

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product_interest: "general-inquiry",
  message: "",
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Something went wrong. Please try again.";
};

const Contact = () => {
  const containerRef = useRef(null);
  const [values, setValues] = useState(INITIAL_VALUES);
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
    if (!v.name.trim()) return "Please tell us your name.";
    if (!v.email.trim()) return "An email address is required.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email.";
    if (!v.message.trim()) return "Please include a short message.";
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
      setError(getErrorMessage(response, insertError));
      setStatus("error");
      return;
    }

    setValues(INITIAL_VALUES);
    setStatus("success");
  };

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-ink text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
          <Eyebrow light>Contact</Eyebrow>
          <h1 className="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl text-bone max-w-3xl">
            Let&rsquo;s talk about the parts you fold.
          </h1>
          <p className="mt-6 text-mist max-w-2xl leading-relaxed text-base md:text-lg">
            Send us a few details about your workshop. Our engineers will
            reply within 24 hours with a tailored configuration and quote.
          </p>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Info */}
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <Eyebrow>Visit us</Eyebrow>
              <p className="mt-4 flex items-start gap-3 text-ink">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Industrial Park 12<br />
                  33100 Udine, Italy
                </span>
              </p>
            </div>
            <div>
              <Eyebrow>Call us</Eyebrow>
              <p className="mt-4 flex items-center gap-3 text-ink">
                <Phone size={18} className="text-gold shrink-0" />
                +39 0432 555 010
              </p>
              <p className="mt-2 text-sm text-steel">
                Monday — Friday, 08:30 to 18:00 CET
              </p>
            </div>
            <div>
              <Eyebrow>Email us</Eyebrow>
              <p className="mt-4 flex items-center gap-3 text-ink">
                <Mail size={18} className="text-gold shrink-0" />
                hello@artitect-machinery.com
              </p>
              <p className="mt-2 text-sm text-steel">
                We respond to every inquiry within one working day.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-paper border border-mist p-8 md:p-12"
              aria-busy={status === "submitting"}
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <Field
                  label="Name"
                  name="name"
                  required
                  value={values.name}
                  onChange={onChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={onChange}
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                />

                <div className="flex flex-col">
                  <label
                    htmlFor="product_interest"
                    className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2"
                  >
                    Interested in
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className="bg-transparent border-0 border-b border-ink py-2 text-ink focus:outline-none focus:border-gold transition-colors"
                  >
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 flex flex-col">
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2"
                >
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us about the parts you fold — material, thickness, length, volumes."
                  className="bg-transparent border border-mist hover:border-ink focus:border-gold transition-colors p-4 text-ink placeholder:text-steel/70 focus:outline-none resize-y"
                />
              </div>

              {status === "error" && error && (
                <div className="mt-6 flex items-start gap-3 border border-signal/40 bg-signal/5 text-signal p-4 text-sm">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {status === "success" && (
                <div className="mt-6 flex items-start gap-3 border border-gold/50 bg-gold/10 text-ink p-4 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-deep" />
                  <span>
                    Thank you. Your inquiry has been received — an Artitect
                    engineer will reply within one working day.
                  </span>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-steel">
                  We respect your privacy. Your details are used only to
                  reply to your inquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-3 bg-ink text-bone px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", required, value, onChange }) => (
  <div className="flex flex-col">
    <label
      htmlFor={name}
      className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2"
    >
      {label} {required && "*"}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="bg-transparent border-0 border-b border-ink py-2 text-ink placeholder:text-steel/70 focus:outline-none focus:border-gold transition-colors"
    />
  </div>
);

export default Contact;
