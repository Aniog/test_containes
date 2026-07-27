import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, Bullet } from "../ui/Primitives.jsx";
import { services } from "../../data/site.js";
import { iconMap } from "../../data/icons.js";

export default function ServicesOverview() {
  const featured = services.slice(0, 6);
  return (
    <Section className="surface-steel" id="services">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <SectionHeader
          kicker="What we do"
          title="End-to-end sourcing services for global buyers"
          subtitle="A single, dedicated team for the whole journey — from finding the right factory to landing goods at your warehouse."
        />
        <Link
          to="/services"
          className="btn-ghost md:self-start md:mt-2 text-sm font-semibold"
        >
          View all services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((s) => {
          const Icon = iconMap[s.icon] || iconMap.Briefcase;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="card card-hover flex flex-col"
            >
              <div className="w-11 h-11 rounded-md bg-navy/5 text-navy flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-navy text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-ink/80 text-sm leading-relaxed">{s.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.slice(0, 2).map((b, i) => (
                  <Bullet key={i}>{b}</Bullet>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
