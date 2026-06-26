import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get a Free Sourcing Quote</h1>
        <p className="text-lg text-muted-foreground">
          Tell us about your product requirements, and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" required placeholder="john@example.com" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="product">Product Name / Category</Label>
          <Input id="product" required placeholder="e.g. Wireless Earbuds" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Detailed Requirements</Label>
          <Textarea 
            id="details" 
            required 
            placeholder="Please include details like target quantity, materials, target price, etc." 
            className="min-h-[120px]"
          />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </Button>

        {status === "success" && (
          <div className="p-4 bg-green-50 text-green-800 rounded-md text-sm text-center">
            Thank you! Your inquiry has been received. We will contact you shortly.
          </div>
        )}
      </form>
    </div>
  );
}
