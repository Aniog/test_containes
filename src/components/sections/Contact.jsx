import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Eyebrow from "../site/Eyebrow";
import Section from "../site/Section";
import Button from "../site/Button";
import { contactDetails } from "@/lib/site-data";

const products = [
  "Double Folding Machine",
  "Double Folder",
  "Sheet Metal Folder",
  "Sheet Metal Folding Machine",
  "Metal Folder",
  "Metal Folder Machine",
  "Metal Folding Machine",
];

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "Double Folding Machine",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const setField = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (v) => {
    const er = {};
    if (!v.name.trim()) er.name = "Please tell us your name.";
    if (!v.email.trim()) er.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      er.email = "That email doesn't look right.";
    if (!v.message.trim()) er.message = "Tell us a bit about your project.";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate(values);
    setErrors(er);
    if (Object.keys(er).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");

    // Simulate a clean request — in production this would post to a CRM.
    setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 700);
  };

  return (
    <Section id="contact" tone="ink">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-5">
          <Eyebrow>Get in touch</Eyebrow>
          <h2
            id="contact-headline"
            className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-foreground leading-[1.08]"
          >
            Let's specify
            <br />
            your next folder.
          </h2>
          <p
            id="contact-sub"
            className="mt-6 text-base md:text-lg text-ink-foreground/70 leading-relaxed"
          >
            Tell us a little about your parts, volumes and tolerances.
            An engineering lead will get back to you within one business day
            with a tailored recommendation.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
            <ContactRow icon={Mail} label="Email">
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-ink-foreground hover:text-accent transition-colors"
              >
                {contactDetails.email}
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a
                href={`tel:${contactDetails.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="text-ink-foreground hover:text-accent transition-colors"
              >
                {contactDetails.phone}
              </a>
            </ContactRow>
            <ContactRow icon={MapPin} label="Workshop">
              <span className="text-ink-foreground">{contactDetails.address}</span>
            </ContactRow>
            <ContactRow icon={Clock} label="Hours">
              <span className="text-ink-foreground">{contactDetails.hours}</span>
            </ContactRow>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-ink-foreground/10 bg-ink-muted p-7 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Full name"
                name="name"
                value={values.name}
                onChange={setField("name")}
                error={errors.name}
                required
                light
              />
              <Field
                label="Company"
                name="company"
                value={values.company}
                onChange={setField("company")}
                light
              />
              <Field
                label="Work email"
                name="email"
                type="email"
                value={values.email}
                onChange={setField("email")}
                error={errors.email}
                required
                light
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={setField("phone")}
                light
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="product"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground/70 mb-2"
              >
                Product of interest
              </label>
              <div className="relative">
                <select
                  id="product"
                  name="product"
                  value={values.product}
                  onChange={setField("product")}
                  className="w-full appearance-none rounded-xl border border-ink-foreground/15 bg-ink px-4 py-3 text-ink-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                >
                  {products.map((p) => (
                    <option key={p} value={p} className="bg-ink text-ink-foreground">
                      {p}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-foreground/60">
                  ▾
                </span>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground/70 mb-2"
              >
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={setField("message")}
                placeholder="Material thickness, bend length, annual volume, anything else we should know…"
                className={
                  "w-full rounded-xl border bg-ink px-4 py-3 text-ink-foreground placeholder:text-ink-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none " +
                  (errors.message
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-ink-foreground/15 focus:border-accent")
                }
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-300">{errors.message}</p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-ink-foreground/60 max-w-sm">
                We treat your details with care — see our privacy notice for
                how we handle enquiries.
              </p>
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send enquiry"}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {status === "success" && (
              <div
                role="status"
                className="mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink-foreground"
              >
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                <span>
                  Thanks — your enquiry is in. An engineering lead will reply
                  within one business day.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-4 py-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-foreground/15 text-accent shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-foreground/60">
          {label}
        </span>
        <span className="mt-1 text-[15px]">{children}</span>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, error, required, light }) {
  const ringColor = light ? "focus:border-accent focus:ring-accent/40" : "focus:border-primary focus:ring-primary/30";
  const baseBg = light ? "bg-ink" : "bg-background";
  const borderColor = error
    ? "border-red-400/70"
    : light
      ? "border-ink-foreground/15"
      : "border-border";
  const textColor = light ? "text-ink-foreground" : "text-foreground";
  const placeholderColor = light ? "placeholder:text-ink-foreground/40" : "placeholder:text-muted-foreground";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={
          "block text-xs font-medium uppercase tracking-[0.18em] mb-2 " +
          (light ? "text-ink-foreground/70" : "text-muted-foreground")
        }
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className={
          "w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 transition " +
          baseBg + " " + borderColor + " " + textColor + " " + ringColor + " " + placeholderColor
        }
      />
      {error && (
        <p className="mt-2 text-sm text-red-300">{error}</p>
      )}
    </div>
  );
}