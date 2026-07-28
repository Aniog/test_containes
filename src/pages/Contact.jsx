import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import PageHeader from "@/components/shared/PageHeader";
import CtaSection from "@/components/shared/CtaSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const isQuote = searchParams.get("quote") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (isQuote) {
      setFormData((prev) => ({
        ...prev,
        message: "I would like a free sourcing quote for the following product:",
      }));
    }
  }, [isQuote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you. We have received your inquiry and will reply within 1 business day.");
    setFormData({
      name: "",
      email: "",
      company: "",
      product: "",
      quantity: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <PageHeader
        title={isQuote ? "Get a Free Sourcing Quote" : "Contact Us"}
        subtitle="Tell us what you need. Our team will respond within one business day."
        breadcrumbs={[{ label: isQuote ? "Get a Quote" : "Contact" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us an inquiry</CardTitle>
                  <CardDescription>
                    Fill in the form below and we'll get back to you with next steps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product">Product category</Label>
                        <Input
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          placeholder="e.g. Electronics, packaging"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated quantity</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 1,000 units"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service interested in</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, service: value }))
                          }
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sourcing">Supplier Sourcing</SelectItem>
                            <SelectItem value="verification">Factory Verification</SelectItem>
                            <SelectItem value="qc">Quality Control</SelectItem>
                            <SelectItem value="production">Production Follow-Up</SelectItem>
                            <SelectItem value="shipping">Shipping Coordination</SelectItem>
                            <SelectItem value="full-service">Full-Service Sourcing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your product, target price, timeline, and destination market."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      {isQuote ? "Request My Free Quote" : "Send Inquiry"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-blue-800" />
                    <div>
                      <p className="font-medium text-slate-900">SSourcing China</p>
                      <p className="text-sm text-slate-600">Shenzhen & Yiwu, China</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-800" />
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-blue-800">
                      info@ssourcingchina.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-800" />
                    <span className="text-slate-600">+86 755 1234 5678</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-blue-800" />
                    <div>
                      <p className="font-medium text-slate-900">Response time</p>
                      <p className="text-sm text-slate-600">Within 1 business day</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-navy-800 text-white">
                <CardHeader>
                  <CardTitle>Prefer to email?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-100">
                    Send your product specs, target quantity, and destination market to info@ssourcingchina.com and we'll reply with a tailored sourcing plan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
