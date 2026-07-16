import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Welcome to the circle", {
        description: "Check your inbox for 10% off your first order.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <span className="text-xs tracking-[3px] text-[#B89778]">INSIDER ACCESS</span>
      <h2 className="font-serif text-3xl tracking-[1px] mt-2 mb-3">Join for 10% off your first order</h2>
      <p className="text-[#6B6259] mb-8 max-w-sm mx-auto">
        Be the first to know about new arrivals, private sales, and stories from the atelier.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="YOUR EMAIL ADDRESS"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 newsletter-input tracking-[1px] text-sm"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "JOINING..." : "JOIN"}
        </Button>
      </form>
      <p className="text-[10px] text-[#9A8F82] mt-4 tracking-[1px]">
        We respect your inbox. Unsubscribe anytime.
      </p>
    </section>
  );
};

export default Newsletter;
