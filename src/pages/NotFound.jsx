import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">404</p>
      <h1 className="mt-4 font-serif text-4xl font-light text-ink md:text-6xl">
        This page has wandered off
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-taupe">
        The page you're looking for doesn't exist — but the collection is very much here.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="solid">Return Home</Button>
      </Link>
    </main>
  );
}
