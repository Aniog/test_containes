import React from "react";
import Container from "@/components/ui/Container.jsx";
import { trustItems } from "@/data/products.js";

const TrustBar = () => (
  <section className="bg-cream border-y border-ink/10">
    <Container>
      <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-y-3 gap-x-6 py-5">
        {trustItems.map((item, i) => (
          <li
            key={item}
            className="flex items-center font-sans text-[0.78rem] uppercase tracking-wider2 text-ink/80"
          >
            <span>{item}</span>
            {i < trustItems.length - 1 && (
              <span
                className="hidden sm:inline-block mx-6 h-3 w-px bg-champagne/40"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default TrustBar;
