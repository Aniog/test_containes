import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { INTEREST_OPTIONS } from "@/data/products";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  interest: "double-folding-machine",
  message: "",
};

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Something went wrong. Please try again.";
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please enter your name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email address.";
    if (!v.message.trim()) return "Please share a few details about your project.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
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
      interest: values.interest,
      message: values.message.trim(),
    };
    Object.keys(payload).forEach(
      (k) => payload[k] === undefined && delete payload[k]
    );

    const { data: response, error: createError } = await client
      .from("ContactFormResponse")
      .insert({ data: payload })
      .select()
      .single();

    if (createError || response?.success === false) {
      setError(getErrorMessage(response, createError));
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(initial);
  };

  if (status === "success") {
    return (
      <div className="bg-paper border border-mist p-10 lg:p-14">
        <CheckCircle2 className="w-10 h-10 text-brass" strokeWidth={1.5} />
        <h3 className="mt-6 font-serif text-3xl text-ink">
          Thank you — we have your message.
        </h3>
        <p className="mt-4 text-base text-steel leading-relaxed max-w-xl">
          One of our application engineers will be in touch within one working
          day, usually with sheet specifications, indicative pricing and a
          delivery window.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center text-xs uppercase tracking-[0.2em] text-ink border-b border-brass pb-1 hover:text-brass-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-paper border border-mist p-8 lg:p-10 space-y-6"
      aria-busy={status === "submitting"}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" value={values.name} onChange={onChange} required />
        <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} required />
        <Field label="Phone (optional)" name="phone" value={values.phone} onChange={onChange} />
        <Field label="Company (optional)" name="company" value={values.company} onChange={onChange} />
        <Field label="Country (optional)" name="country" value={values.country} onChange={onChange} />
        <div className="flex flex-col">
          <label
            htmlFor="interest"
            className="text-[10px] uppercase tracking-[0.25em] text-steel mb-2"
          >
            I am interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={onChange}
            className="border-b border-mist py-2 text-base text-ink focus:border-brass transition-colors bg-transparent"
          >
            {INTEREST_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-[0.25em] text-steel mb-2"
        >
          Message <span className="text-brass">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={onChange}
          placeholder="Sheet sizes, materials, target volumes, application…"
          className="border border-mist p-4 text-base text-ink leading-relaxed focus:border-brass transition-colors resize-y placeholder:text-steel/60"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 border border-brass/40 bg-brass-soft px-4 py-3 text-sm text-ink"
        >
          <AlertCircle className="w-4 h-4 text-brass-dark mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-steel">
          We typically reply within one working day.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-3 bg-ink text-bone px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.25em] text-steel mb-2"
      >
        {label} {required && <span className="text-brass">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="border-b border-mist py-2 text-base text-ink focus:border-brass transition-colors"
      />
    </div>
  );
}
