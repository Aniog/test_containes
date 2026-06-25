import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { Loader2, Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { productInterestOptions } from "@/data/products";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  product_interest: "Not Sure Yet",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please share your name.";
    if (!v.email.trim()) return "Please share an email address.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please provide a valid email address.";
    if (!v.message.trim()) return "Please tell us about your project.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate(values);
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      data: {
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
        phone: values.phone.trim(),
        country: values.country.trim(),
        product_interest: values.product_interest,
        message: values.message.trim(),
        created_at: new Date().toISOString(),
      },
    };

    const { data: response, error: submitError } = await client
      .from("ContactInquiry")
      .insert(payload)
      .select()
      .single();

    if (submitError || response?.success === false) {
      const messages = Array.isArray(response?.errors) ? response.errors.join(", ") : null;
      setError(messages || submitError?.message || "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 bp-grid-dark opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            Contact
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-4xl">
            Specify your folder.
          </h1>
          <p className="mt-6 max-w-2xl text-paper/75 leading-relaxed text-lg">
            Tell us about your part, your shop, and your shift pattern — and an
            engineer will reply within one working day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-bone py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-16 lg:grid-cols-3">
          {/* Info column */}
          <aside className="lg:col-span-1 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
                Direct to engineering
              </p>
              <h2 className="mt-4 font-display text-3xl text-ink leading-tight">
                Real engineers. Real answers.
              </h2>
              <p className="mt-4 text-graphite leading-relaxed">
                Your enquiry goes directly to the team that will quote, build
                and commission your machine — no sales filter.
              </p>
            </div>

            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 text-ink">
                <Mail className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-graphite">Email</p>
                  <p className="mt-1">hello@artitect-machinery.com</p>
                </div>
              </li>
              <li className="flex gap-4 text-ink">
                <Phone className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-graphite">Phone</p>
                  <p className="mt-1">+44 (0)114 555 0192</p>
                </div>
              </li>
              <li className="flex gap-4 text-ink">
                <MapPin className="w-5 h-5 text-brass mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-graphite">Workshop</p>
                  <p className="mt-1 leading-relaxed">
                    Unit 14, Steelworks Park<br />
                    Sheffield S9, United Kingdom
                  </p>
                </div>
              </li>
            </ul>

            <div className="border-t border-mist pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-graphite">
                Response time
              </p>
              <p className="mt-2 font-display text-2xl text-ink">
                Within 1 working day.
              </p>
            </div>
          </aside>

          {/* Form column */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="bg-paper border border-mist rounded-sm p-8 md:p-12"
              noValidate
            >
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  label="Full name"
                  required
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                />
                <FormField
                  label="Email"
                  required
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="jane@company.com"
                />
                <FormField
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Acme Fabrication Ltd."
                />
                <FormField
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+44 7700 900 000"
                />
                <FormField
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                  placeholder="United Kingdom"
                />
                <div>
                  <label
                    htmlFor="product_interest"
                    className="block text-xs uppercase tracking-[0.2em] text-graphite mb-2"
                  >
                    Product interest
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className="w-full bg-paper border border-mist rounded-sm px-4 py-3 text-ink focus:border-ink focus:outline-none transition-colors"
                  >
                    {productInterestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.2em] text-graphite mb-2"
                >
                  Your project <span className="text-brass">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={values.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Material, gauge, typical part length, daily volume…"
                  className="w-full bg-paper border border-mist rounded-sm px-4 py-3 text-ink focus:border-ink focus:outline-none transition-colors resize-y"
                />
              </div>

              {status === "error" && error && (
                <div className="mt-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-sm p-4 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              {status === "success" && (
                <div className="mt-6 flex items-start gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm p-4 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>
                    Thank you. Your enquiry has been received — our engineering
                    team will reply within one working day.
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-graphite">
                  By submitting you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 bg-ink text-paper hover:bg-steel disabled:opacity-60 disabled:cursor-not-allowed rounded-sm px-8 py-3.5 text-sm tracking-wide font-medium transition-colors"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, required, name, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-graphite mb-2"
      >
        {label} {required && <span className="text-brass">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-paper border border-mist rounded-sm px-4 py-3 text-ink placeholder:text-graphite/60 focus:border-ink focus:outline-none transition-colors"
      />
    </div>
  );
}
