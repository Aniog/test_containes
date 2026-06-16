import { useState } from "react";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(", ");
  }
  return error?.message || "Request failed";
};

const initial = {
  name: "",
  email: "",
  company: "",
  product: "",
  message: "",
};

export default function QuoteSection() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please share your name.";
    if (!v.email.trim()) return "An email lets us reply with a quote.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "That email doesn't look quite right.";
    if (!v.message.trim()) return "Tell us a little about your project.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus("submitting");

    try {
      const { data: response, error: createError } = await client
        .from("QuoteRequests")
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            product_interest: values.product,
            message: values.message,
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError));
      }

      setStatus("success");
      setValues(initial);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-cream-soft border-t border-border"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-wider2 text-brass font-medium mb-6">
              Begin a conversation
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink font-light">
              Tell us what you would like to <em className="not-italic text-brass">fold</em>.
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-muted leading-relaxed">
              Share a sketch, a part, or just a sentence about your shop. A real person from our applications team will reply within one business day.
            </p>

            <dl className="mt-12 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-wider2 text-brass font-medium">
                  Direct line
                </dt>
                <dd className="mt-2 font-serif text-2xl text-ink">+49 711 000 0000</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider2 text-brass font-medium">
                  Email
                </dt>
                <dd className="mt-2 font-serif text-2xl text-ink">
                  hello@artitect-machinery.com
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider2 text-brass font-medium">
                  Workshop & showroom
                </dt>
                <dd className="mt-2 text-sm text-ink-muted leading-relaxed">
                  14 Werkstrasse, Stuttgart, Germany
                  <br />
                  Visits by appointment, Monday – Friday
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-surface border border-border p-8 md:p-10"
              noValidate
            >
              {status === "success" ? (
                <div className="py-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-brass/10 text-brass rounded-full">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-ink">
                    Thank you, your note is in.
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted max-w-sm mx-auto">
                    A member of our applications team will reach out within one business day with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider2 text-ink hover:text-brass transition-colors"
                  >
                    Send another inquiry
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Field
                      label="Your name"
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      placeholder="Alex Anders"
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <Field
                      label="Company"
                      name="company"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your fabrication shop"
                    />
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-xs uppercase tracking-wider2 text-ink-muted font-medium mb-2"
                      >
                        Product of interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={values.product}
                        onChange={onChange}
                        className="w-full bg-transparent border border-border px-4 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors rounded-sm"
                      >
                        <option value="">Not sure yet</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider2 text-ink-muted font-medium mb-2"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Materials, part sizes, volume, timeline…"
                      className="w-full bg-transparent border border-border px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink transition-colors rounded-sm resize-none"
                    />
                  </div>

                  {error && (
                    <p className="mt-5 text-sm text-brass-deep" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-xs text-ink-muted">
                      We reply within one business day. No mailing list, ever.
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "submitting"}
                      className="group"
                    >
                      <span className="inline-flex items-center gap-3">
                        {status === "submitting" ? "Sending…" : "Send inquiry"}
                        <Send size={14} strokeWidth={1.5} />
                      </span>
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-wider2 text-ink-muted font-medium mb-2"
      >
        {label}
        {required && <span className="text-brass ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border border-border px-4 py-3 text-base text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink transition-colors rounded-sm"
      />
    </div>
  );
}
