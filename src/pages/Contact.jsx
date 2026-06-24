import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { products } from "@/data/catalog";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Please tell us your name.";
    if (!v.email.trim()) return "An email address is required.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email.";
    if (!v.message.trim()) return "Please tell us a little about your needs.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }
    setStatus("submitting");
    // Simulate request — no backend wired yet
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setValues({ name: "", email: "", company: "", interest: "", message: "" });
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow text-amber-700 mb-5">Talk to us</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-neutral-900 leading-[1.05] max-w-4xl">
            Let's specify
            <br />
            <span className="italic text-neutral-700">your next folder.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Tell us a little about what you fold and the volumes you produce.
            Our engineering team will return a tailored recommendation and
            quote within two business days.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 lg:gap-20">
          {/* FORM */}
          <div className="md:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block eyebrow text-neutral-500 mb-3"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block eyebrow text-neutral-500 mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="jane@studio.com"
                    className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="company"
                    className="block eyebrow text-neutral-500 mb-3"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Studio or fabrication shop"
                    className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block eyebrow text-neutral-500 mb-3"
                  >
                    Machine of interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 outline-none transition-colors"
                  >
                    <option value="">— Select a machine —</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block eyebrow text-neutral-500 mb-3"
                >
                  Tell us about your work
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Materials, sheet sizes, expected volumes…"
                  className="w-full bg-transparent border-b border-neutral-300 focus:border-neutral-900 py-3 text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3"
                >
                  {error}
                </p>
              )}

              {status === "success" ? (
                <div className="bg-neutral-900 text-white p-6 flex items-start gap-4">
                  <Check className="w-5 h-5 text-amber-500 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-xl">Thank you.</p>
                    <p className="text-sm text-stone-300 mt-1">
                      Your enquiry has been received. An engineer will be in
                      touch within two business days.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-amber-600 transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>
              )}
            </form>
          </div>

          {/* DETAILS */}
          <aside className="md:col-span-5 md:pl-10 md:border-l border-neutral-200 space-y-10">
            <div>
              <p className="eyebrow text-neutral-500 mb-4">Studio</p>
              <div className="flex gap-4 text-neutral-700">
                <MapPin
                  className="w-5 h-5 mt-0.5 text-amber-600"
                  strokeWidth={1.5}
                />
                <p className="leading-relaxed">
                  ARTITECT MACHINERY GmbH
                  <br />
                  Industrial Park 14
                  <br />
                  70565 Stuttgart, Germany
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow text-neutral-500 mb-4">Direct lines</p>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex gap-4">
                  <Phone
                    className="w-5 h-5 mt-0.5 text-amber-600"
                    strokeWidth={1.5}
                  />
                  <span>+49 711 2200 4500</span>
                </li>
                <li className="flex gap-4">
                  <Mail
                    className="w-5 h-5 mt-0.5 text-amber-600"
                    strokeWidth={1.5}
                  />
                  <span>hello@artitect-machinery.com</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-neutral-500 mb-4">Hours</p>
              <ul className="text-neutral-700 space-y-1">
                <li className="flex justify-between border-b border-neutral-200 py-2">
                  <span>Monday – Thursday</span>
                  <span>08:00 – 17:00</span>
                </li>
                <li className="flex justify-between border-b border-neutral-200 py-2">
                  <span>Friday</span>
                  <span>08:00 – 14:00</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Saturday – Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
