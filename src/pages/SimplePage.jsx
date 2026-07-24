import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

export default function SimplePage({ eyebrow, title, body, cta }) {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-cream min-h-[60vh]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-eyebrow text-muted">{eyebrow}</span>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight"
            style={{ fontWeight: 400 }}
          >
            {title}
          </h1>
          {body && (
            <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed">{body}</p>
          )}
          {cta && (
            <Link to={cta.to} className="btn btn-primary mt-10">
              {cta.label}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
