import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const interestOptions = [
  { value: "double-folding-machine", label: "Double Folding Machine" },
  { value: "sheet-metal-folder", label: "Sheet Metal Folder" },
  { value: "metal-folder-machine", label: "Metal Folder Machine" },
  { value: "service-and-support", label: "Service & Support" },
  { value: "general-enquiry", label: "General Enquiry" },
];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  interest: "double-folding-machine",
  message: "",
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please provide a valid email.";
    if (!v.message.trim()) return "Please tell us about your project.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const v = validate(values);
    if (v) {
      setError(v);
      return;
    }
    setStatus("submitting");

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      company: values.company.trim() || undefined,
      country: values.country.trim() || undefined,
      interest: values.interest,
      message: values.message.trim(),
    };

    const { data: response, error: insertError } = await client
      .from("ContactInquiry")
      .insert({ data: payload })
      .select()
      .single();

    if (insertError || response?.success === false) {
      const messages =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(", ")
          : insertError?.message || "We could not send your message. Please try again.";
      setError(messages);
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your fold."
        description="Reach out for specifications, lead times, custom configurations or service support. We typically respond within one working day."
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Studio</p>
              <h3 className="font-serif text-2xl text-ink mb-3">Brooklyn workshop</h3>
              <ul className="space-y-4 text-sm text-steel">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent" strokeWidth={1.5} />
                  <span>14 Foundry Way, Studio B<br />Brooklyn, NY 11222<br />United States</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-accent" strokeWidth={1.5} />
                  <a href="mailto:hello@artitect-machinery.com" className="hover:text-accent transition">
                    hello@artitect-machinery.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-accent" strokeWidth={1.5} />
                  <a href="tel:+14155550142" className="hover:text-accent transition">
                    +1 (415) 555-0142
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-ink/10 pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Hours</p>
              <ul className="space-y-2 text-sm text-steel">
                <li className="flex justify-between"><span>Mon — Fri</span><span className="text-ink">08:00 – 18:00</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="text-ink">10:00 – 14:00</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-steel-soft">Closed</span></li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <form
              onSubmit={onSubmit}
              className="bg-paper border border-bone-soft p-8 md:p-12"
              aria-busy={status === "submitting"}
            >
              <h2 className="font-serif text-3xl text-ink tracking-tight">Request a quote</h2>
              <p className="mt-3 text-sm text-steel max-w-md">
                Share a few details and an ARTITECT engineer will follow up
                with options that fit your work.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name" name="name" value={values.name} onChange={onChange} required />
                <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} required />
                <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={onChange} />
                <Field label="Company / Studio" name="company" value={values.company} onChange={onChange} />
                <Field label="Country" name="country" value={values.country} onChange={onChange} />

                <div className="flex flex-col">
                  <label htmlFor="interest" className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2">
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="bg-bone border border-bone-soft text-ink px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
                  >
                    {interestOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col">
                <label htmlFor="message" className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2">
                  Tell us about the project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={values.message}
                  onChange={onChange}
                  placeholder="Material, bending length, volumes, timeline…"
                  className="bg-bone border border-bone-soft text-ink px-4 py-3 text-sm leading-relaxed focus:outline-none focus:border-accent transition resize-y"
                />
              </div>

              {error && (
                <p role="alert" className="mt-6 text-sm text-accent">
                  {error}
                </p>
              )}

              {status === "success" && (
                <div role="status" className="mt-6 flex items-start gap-3 bg-bone border border-accent/30 text-ink p-4">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
                  <div>
                    <p className="font-medium text-ink">Thank you — your message is on its way.</p>
                    <p className="text-sm text-steel mt-1">
                      An ARTITECT engineer will reply within one working day.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-6 border-t border-ink/10 pt-6">
                <p className="text-xs text-steel-soft">
                  By submitting you agree we may contact you about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-3 bg-ink text-bone hover:bg-accent transition disabled:bg-steel disabled:cursor-not-allowed px-8 py-4 text-xs uppercase tracking-[0.25em]"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-[11px] uppercase tracking-[0.25em] text-steel mb-2">
      {label}{required && <span className="text-accent ml-1">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-bone border border-bone-soft text-ink px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
    />
  </div>
);

export default Contact;
