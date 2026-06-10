import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { interestOptions } from "@/data/products";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  interest: "",
  message: "",
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Something went wrong. Please try again.";
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address.";
    if (!v.message.trim()) return "Please share a few words about your project.";
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
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      company: values.company.trim() || undefined,
      country: values.country.trim() || undefined,
      interest: values.interest || undefined,
      message: values.message.trim(),
      created_at: new Date().toISOString(),
    };

    Object.keys(payload).forEach(
      (k) => payload[k] === undefined && delete payload[k]
    );

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

    setValues(initialValues);
    setStatus("success");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink text-bone pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
              Contact
            </span>
          </div>
          <h1 className="mt-6 font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Talk to an <span className="italic text-accentSoft">engineer.</span>
          </h1>
          <p className="mt-8 text-silver text-[17px] md:text-lg max-w-2xl leading-relaxed">
            Tell us about your application and we'll get back to you within
            two working days — usually with a question, sometimes with an
            answer, always with a recommendation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === "submitting"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required
                    className={inputCls}
                    placeholder="Jane Mueller"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    className={inputCls}
                    placeholder="jane@company.com"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="+41 44 000 12 34"
                  />
                </Field>
                <Field label="Company">
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Mueller Fabrication AG"
                  />
                </Field>
                <Field label="Country">
                  <input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Switzerland"
                  />
                </Field>
                <Field label="I'm interested in">
                  <select
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className={`${inputCls} appearance-none bg-bone pr-10`}
                  >
                    <option value="">Select a category</option>
                    {interestOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Project details" required>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us about your sheet, your throughput, your application…"
                />
              </Field>

              {status === "error" && error && (
                <div className="flex items-start gap-3 border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-start gap-3 border border-accent bg-accentSoft/40 p-4 text-sm text-ink">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <p>
                    Thank you — your inquiry is on our desk. An ARTITECT
                    engineer will be in touch within two working days.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-3 bg-ink text-bone px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending…" : "Send inquiry"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-silver">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
                Direct line
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-ink leading-tight tracking-tight">
              Or reach us directly.
            </h2>

            <ul className="mt-10 space-y-8">
              <li className="flex gap-5">
                <span className="w-10 h-10 border border-silver flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-steel">Headquarters</p>
                  <p className="mt-2 text-ink leading-relaxed">
                    Industriestrasse 14<br />
                    8005 Zürich, Switzerland
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="w-10 h-10 border border-silver flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-steel">Telephone</p>
                  <a href="tel:+41440001234" className="mt-2 block text-ink hover:text-accent transition-colors font-mono">
                    +41 44 000 12 34
                  </a>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="w-10 h-10 border border-silver flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-steel">Email</p>
                  <a href="mailto:hello@artitect-machinery.com" className="mt-2 block text-ink hover:text-accent transition-colors">
                    hello@artitect-machinery.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-12 bg-mist border border-silver p-6">
              <p className="text-xs uppercase tracking-widest2 text-accent">Service hours</p>
              <p className="mt-3 text-ink text-sm leading-relaxed">
                Monday — Friday<br />
                08:00 — 18:00 CET
              </p>
              <p className="mt-3 text-steel text-xs leading-relaxed">
                Emergency service support available 24/7 for clients under
                active maintenance contracts.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

const inputCls =
  "w-full bg-bone border border-silver px-4 py-3.5 text-ink text-[15px] placeholder:text-steel/60 focus:outline-none focus:border-ink transition-colors";

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="block text-[11px] uppercase tracking-widest2 text-steel font-medium">
      {label}
      {required && <span className="text-accent ml-1">*</span>}
    </span>
    <div className="mt-2">{children}</div>
  </label>
);

export default Contact;
