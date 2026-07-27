import { useRef, useEffect } from "react";
import { Send, Mail, Phone } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function InquirySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for your inquiry! We will get back to you within 24 hours.",
    );
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
                data-strk-bg-id="inquiry-bg-9k0l1m"
                data-strk-bg="[inquiry-heading] [inquiry-subtitle]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="800"
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-foreground"
                >
                  Product Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="product"
                  rows={3}
                  required
                  className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Describe the product you want to source, including specifications, quantity, and target budget..."
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-foreground"
                  >
                    Estimated Quantity
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 500-1000 units"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-foreground"
                  >
                    Target Timeline
                  </label>
                  <input
                    id="timeline"
                    type="text"
                    className="mt-1.5 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 8-10 weeks"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}