import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="bg-ivory pt-24 md:pt-28 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-sm md:text-base text-ink-muted max-w-md">
        The page you're looking for has wandered off. Let's get you back to
        something beautiful.
      </p>
      <div className="mt-10 flex items-center gap-4">
        <Link to="/">
          <Button variant="primary" size="md">Home</Button>
        </Link>
        <Link to="/shop">
          <Button variant="outlineDark" size="md">Shop</Button>
        </Link>
      </div>
    </main>
  );
}
