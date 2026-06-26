import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { products } from "@/data/content";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const machineOptions = [
  ...products.map((p) => ({ value: p.id, label: p.name })),
  { value: "not-sure", label: "Not sure yet — please advise" },
];

const initialValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  machineInterest: "not-sure",
  material: "",
  thickness: "",
  foldingLength: "",
  message: "",
};

function getErrorMessage(response, error) {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Submission failed. Please try again.";
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.fullName.trim()) return "Please enter your full name.";
    if (!v.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email.";
    if (!v.machineInterest) return "Please select a machine of interest.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const validationError = validate(values);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");

    try {
      const { data: response, error } = await client
        .from("Quote Request")
        .insert({
          data: {
            fullName: values.fullName.trim(),
            companyName: values.companyName.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            country: values.country.trim(),
            machineInterest: values.machineInterest,
            material: values.material.trim(),
            thickness: values.thickness.trim(),
            foldingLength: values.foldingLength.trim(),
            message: values.message.trim(),
          },
        })
        .select()
        .maybeSingle();

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error));
      }

      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      console.error("Quote submission failed:", err);
      setErrorMessage(err.message || "Submission failed. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
              Request a Quote
            </p>
            <h2
              id="contact-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
            >
              Tell us about your project. We respond within one business day.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#3D4A5C]">
              Share your part drawings, materials, and throughput targets. Our
              application engineers will recommend the right machine and prepare
              a quotation tailored to your fabrication workflow.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#E8EEF5] text-[#1B3A6B]">
                  <Mail size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
                    Email
                  </p>
                  <a
                    href="mailto:sales@artitect-machinery.com"
                    className="mt-0.5 block text-base font-medium text-[#0E1726] hover:text-[#1B3A6B]"
                  >
                    sales@artitect-machinery.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#E8EEF5] text-[#1B3A6B]">
                  <Phone size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
                    Phone
                  </p>
                  <a
                    href="tel:+8651280000000"
                    className="mt-0.5 block text-base font-medium text-[#0E1726] hover:text-[#1B3A6B]"
                  >
                    +86 512 8000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#E8EEF5] text-[#1B3A6B]">
                  <MapPin size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
                    Headquarters
                  </p>
                  <p className="mt-0.5 text-base font-medium text-[#0E1726]">
                    No. 88 Industrial Park Road, Suzhou, Jiangsu, China
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 md:p-10 shadow-sm"
              aria-busy={status === "submitting"}
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F4EE] text-[#1F8A5C]">
                    <CheckCircle2 size={28} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[#0E1726]">
                    Thank you — your request is in.
                  </h3>
                  <p className="mt-2 max-w-md text-base text-[#3D4A5C]">
                    Our application engineering team will be in touch within one
                    business day with a configuration and quotation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-[#1B3A6B] bg-white px-5 py-2.5 text-sm font-semibold text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Full name"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Company"
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      placeholder="Acme Fabrication Co."
                    />
                    <Field
                      label="Business email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+1 555 123 4567"
                    />
                    <Field
                      label="Country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      placeholder="United States"
                    />
                    <SelectField
                      label="Machine of interest"
                      name="machineInterest"
                      value={values.machineInterest}
                      onChange={handleChange}
                      options={machineOptions}
                      required
                    />
                    <Field
                      label="Material"
                      name="material"
                      value={values.material}
                      onChange={handleChange}
                      placeholder="e.g. Mild steel, stainless 304"
                    />
                    <Field
                      label="Thickness"
                      name="thickness"
                      value={values.thickness}
                      onChange={handleChange}
                      placeholder="e.g. 1.5 mm"
                    />
                    <Field
                      label="Max folding length"
                      name="foldingLength"
                      value={values.foldingLength}
                      onChange={handleChange}
                      placeholder="e.g. 2500 mm"
                      className="md:col-span-2"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#6B7280]"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell us about your parts, tolerances, and production targets…"
                      className="mt-2 w-full rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-base text-[#0E1726] placeholder:text-[#9CA3AF] focus:border-[#1B3A6B] focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20"
                    />
                  </div>

                  {errorMessage && (
                    <p
                      role="alert"
                      className="mt-5 rounded-md border border-[#B23A48]/30 bg-[#B23A48]/5 px-4 py-3 text-sm text-[#B23A48]"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-[#6B7280]">
                      We respect your privacy. Your information is used only to
                      respond to your inquiry.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1B3A6B] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#152d54] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit request
                          <Send size={16} strokeWidth={1.75} />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#6B7280]"
      >
        {label}
        {required && <span className="ml-1 text-[#C77B3F]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-base text-[#0E1726] placeholder:text-[#9CA3AF] focus:border-[#1B3A6B] focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-[0.16em] uppercase text-[#6B7280]"
      >
        {label}
        {required && <span className="ml-1 text-[#C77B3F]">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-base text-[#0E1726] focus:border-[#1B3A6B] focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}