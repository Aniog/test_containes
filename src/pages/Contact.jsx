import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { client } from "@/api/postgrest-client";
import strkImgConfig from "@/strk-img-config.json";

export default function Contact() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const { data: response, error } = await client
        .from("Sourcing Inquiries")
        .insert({
          data: {
            name: formState.name,
            email: formState.email,
            company: formState.company || "",
            product_description: `Subject: ${formState.subject}\n\nMessage: ${formState.message}`,
            estimated_quantity: "",
            target_timeline: "",
            status: "new",
          },
        })
        .select()
        .single();

      if (error || response?.success === false) {
        const errMsg =
          Array.isArray(response?.errors) && response.errors.length > 0
            ? response.errors.join(", ")
            : error?.message || "Submission failed. Please try again.";
        throw new Error(errMsg);
      }

      setStatus("success");
      setFormState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div ref={containerRef}>
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start sourcing from China? Get in touch with our team
              and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Fill out the form and our team will get back to you within 24
                hours. We typically respond much faster during business hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">
                      info@ssourcingchina.com
                    </div>
                    <div className="text-sm text-muted-foreground">
                      inquiries@ssourcingchina.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">
                      +86 755 8888 8888
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +86 755 8888 8889
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Office Address</div>
                    <div className="text-sm text-muted-foreground">
                      Unit 808, Shenzhen Bay Technology Building
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Nanshan District, Shenzhen, Guangdong, China 518000
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Saturday: 9:00 AM - 12:00 PM (CST)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                All fields marked with <span className="text-red-500">*</span>{" "}
                are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                  <span>
                    Thank you! We&apos;ve received your message and will get back
                    to you within 24 hours.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company Name
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-foreground"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="New Sourcing Project">New Sourcing Project</option>
                  <option value="Supplier Verification">Supplier Verification</option>
                  <option value="Quality Inspection">Quality Inspection</option>
                  <option value="Shipping & Logistics">Shipping & Logistics</option>
                  <option value="Partnership Inquiry">Partnership Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Tell us about your sourcing needs, including product details, target quantity, budget range, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}