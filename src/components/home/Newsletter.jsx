import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">
            Join the Velmora Inner Circle
          </h2>
          <p className="text-white/80 font-light tracking-wide">
            Subscribe to receive styling guides, early access to new collections, 
            and 10% off your first order.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 mt-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-white/30 text-white placeholder:text-white/50 focus-visible:ring-white/50 h-14 rounded-none uppercase tracking-widest text-xs"
            />
            <Button className="bg-white text-black hover:bg-white/90 h-14 px-10 rounded-none uppercase tracking-widest text-xs font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
            By signing up, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};
