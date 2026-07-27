import { useState, useRef, useEffect } from "react";
import { Send, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { client } from "@/api/postgrest-client";
import strkImgConfig from "@/strk-img-config.json";

export default function InquirySection() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    product_description: "",
    estimated_quantity: "",
    target_timeline: "",
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
            product_description: formState.product_description,
            estimated_quantity: formState.estimated_quantity || "",
            target_timeline: formState.target_timeline || "",
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
        product_description: "",
        estimated_quantity: "",
        target_timeline: "",
      });
    } catch (err) {
      console.error("Inquiry submission error:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section ref={containerRef} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get Your Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Tell us about your product requirements and we&apos;ll provide a
              customized sourcing plan with a transparent fee estimate within 24
              hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-muted-foreground">
                    info@ssourcingchina.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-muted-foreground">
                    +86 755 8888 8888
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-xl">
              <img
                data-strk-img-id="inquiry-img-9k0l1m"
                data-strk-img="[inquiry-heading] [inquiry-subtitle]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                className="h-48 w-full rounded-xl object-cover"
              />
              <span id="inquiry-heading" className="hidden">
                Get Your Free Sourcing Quote
              </span>
              <span id="inquiry-subtitle" className="hidden">
                Tell us about your product requirements
              </span>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Send Us Your Inquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and we&apos;ll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
                  <span>
                    Thank you! We&apos;ve received your inquiry and will get back
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
                    htmlFor="inquiry-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inquiry-name"
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
                    htmlFor="inquiry-email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inquiry-email"
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
                  htmlFor="inquiry-company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company Name
                </label>
                <input
                  id="inquiry-company"
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
                  htmlFor="inquiry-product"
                  className="block text-sm font-medium text-foreground"
                >
                  Product Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="inquiry-product"
                  name="product_description"
                  rows={3}
                  required
                  value={formState.product_description}
                  onChange={handleChange}
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Describe the product you want to source, including specifications, quantity, and target budget..."
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="inquiry-quantity"
                    className="block text-sm font-medium text-foreground"
                  >
                    Estimated Quantity
                  </label>
                  <input
                    id="inquiry-quantity"
                    name="estimated_quantity"
                    type="text"
                    value={formState.estimated_quantity}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 500-1000 units"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inquiry-timeline"
                    className="block text-sm font-medium text-foreground"
                  >
                    Target Timeline
                  </label>
                  <input
                    id="inquiry-timeline"
                    name="target_timeline"
                    type="text"
                    value={formState.target_timeline}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 8-10 weeks"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}