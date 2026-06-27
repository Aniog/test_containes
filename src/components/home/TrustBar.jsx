import React from "react";
import { trustItems } from "@/data/site";
import Container from "@/components/layout/Container";

export default function TrustBar() {
  return (
    <section className="bg-bone border-y border-line">
      <Container size="wide">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 py-4">
          {trustItems.map((item, i) => (
            <li
              key={item}
              className="flex items-center text-[11px] md:text-xs uppercase tracking-label text-espresso-soft"
            >
              <span>{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block w-1 h-1 rounded-full bg-champagne mx-6" />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}