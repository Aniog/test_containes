import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Award, Globe2, Wrench } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { team } from "@/data/content";
import { stats } from "@/data/site";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-precision-grid opacity-40"
        />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          <nav
            className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-copper-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-paper-50">About</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-copper-400">About ARTITECT</span>
              <h1
                id="about-title"
                className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
              >
                A small team of engineers obsessed with how steel folds.
              </h1>
            </div>
            <p
              id="about-subtitle"
              className="lg:col-span-4 text-paper-50/75 text-base md:text-lg leading-relaxed"
            >
              ARTITECT MACHINERY was founded in 2003 in a converted foundry in
              Hayward, California. Two decades later we ship folders to 47
              countries, but our mission hasn't changed.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy-900">
                <img
                  alt="ARTITECT precision engineering team"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="about-team-img-c91b07"
                  data-strk-img="[about-subtitle] [about-title] ARTITECT precision engineering team"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              </div>
              <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 rounded-3xl border-2 border-copper-500/50 -z-10" aria-hidden="true" />
            </div>

            <div className="lg:col-span-7">
              <span className="eyebrow text-copper-600">Our story</span>
              <h2
                id="story-title"
                className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
              >
                From a single folder to a global product family.
              </h2>
              <p
                id="story-subtitle"
                className="mt-5 text-ink-700 text-base md:text-lg leading-relaxed"
              >
                It started with one broken press brake and an engineer who
                believed there was a better way. Today we operate a 70,000 sqft
                facility in California, a regional assembly hub in Stuttgart,
                and a distributor network across 47 countries. The machines
                evolved, the obsession didn't.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="bg-paper-100 rounded-2xl p-6">
                    <p className="font-display text-3xl font-bold text-navy-950">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase text-ink-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist-100 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="eyebrow text-copper-600">Our values</span>
            <h2
              id="values-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
            >
              Three principles, applied to every machine we ship.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Wrench,
                title: "Build for the long run",
                text: "Stress-relieved frames, oversized bearings, conservative ratings — our machines outlast their warranties.",
              },
              {
                icon: Award,
                title: "Obsess over details",
                text: "From linear encoder resolution to HMI response time, every detail is a craft decision.",
              },
              {
                icon: Globe2,
                title: "Stand behind our work",
                text: "Lifetime remote support, 48-hour critical spares, and a 2-year warranty that's honored, not negotiated.",
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-paper-50 border border-ink-900/8 rounded-2xl p-8 hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-copper-100 text-copper-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    id={`value-${value.title.replace(/\s+/g, '-').toLowerCase()}-title`}
                    className="mt-5 font-display font-semibold text-xl text-ink-900"
                  >
                    {value.title}
                  </h3>
                  <p
                    id={`value-${value.title.replace(/\s+/g, '-').toLowerCase()}-desc`}
                    className="mt-3 text-sm text-ink-700 leading-relaxed"
                  >
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="eyebrow text-copper-600">The team</span>
            <h2
              id="team-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
            >
              Engineers, machinists, and service specialists.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((person, idx) => (
              <div
                key={person.name}
                className="bg-paper-50 border border-ink-900/8 rounded-2xl p-8"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-copper-200 to-copper-100 flex items-center justify-center mb-5">
                  <span className="font-display font-bold text-6xl text-copper-700/70">
                    {person.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                </div>
                <h3
                  id={`team-${idx}-name`}
                  className="font-display font-semibold text-xl text-ink-900"
                >
                  {person.name}
                </h3>
                <p
                  id={`team-${idx}-role`}
                  className="mt-1 text-sm font-medium text-copper-600"
                >
                  {person.role}
                </p>
                <p
                  id={`team-${idx}-bio`}
                  className="mt-4 text-sm text-ink-700 leading-relaxed"
                >
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24 border-t border-ink-900/8">
        <Container>
          <div className="relative rounded-3xl bg-navy-950 text-paper-50 overflow-hidden p-10 md:p-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-precision-grid opacity-30"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  id="about-cta-title"
                  className="font-display font-semibold text-3xl md:text-4xl leading-tight text-paper-50 text-balance"
                >
                  Ready to see an ARTITECT machine in action?
                </h3>
                <p
                  id="about-cta-subtitle"
                  className="mt-4 text-paper-50/75 leading-relaxed max-w-md"
                >
                  We host factory acceptance tests every month. We'd love to
                  show you yours.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  Schedule a visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}