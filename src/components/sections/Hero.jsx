import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, FileCheck2, Container } from "lucide-react"
import Button from "@/components/ui/Button"
import StrkImage from "./StrkImage"

const Hero = () => {
  return (
    <section className="bg-navy text-ink-onDark overflow-hidden">
      <div className="container-content py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-teal-light">
              China-based Sourcing Agent
            </span>
            <h1
              id="hero-headline"
              className="mt-4 text-4xl md:text-5xl lg:text-[58px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-onDark"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink-onDarkMuted max-w-xl">
              We help overseas brands, retailers, and procurement teams find
              reliable Chinese suppliers, verify their factories, inspect
              quality in person, and ship on time — without the language,
              time-zone, and trust gap.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button
                as={Link}
                to="/contact#inquiry"
                variant="primary"
                size="lg"
                className="sm:w-auto"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={18} />
              </Button>
              <Button
                as={Link}
                to="/how-it-works"
                variant="outlineOnDark"
                size="lg"
                className="sm:w-auto"
              >
                See How It Works
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-onDarkMuted">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-teal-light" />
                AQL-based inspections
              </li>
              <li className="inline-flex items-center gap-2">
                <FileCheck2 size={16} className="text-teal-light" />
                On-site factory audits
              </li>
              <li className="inline-flex items-center gap-2">
                <Container size={16} className="text-teal-light" />
                FOB / CIF / DDP shipping
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <StrkImage
                imgId="home-hero-main-7f3c2a"
                query="[hero-headline] [hero-subtitle]"
                ratio="4x3"
                width={900}
                alt="Inspector at a Chinese factory reviewing product quality"
                ratioClass="aspect-[4/3] rounded-[6px]"
                imgClassName="rounded-[6px]"
                containerClassName="rounded-[6px] border border-navy-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-white text-ink rounded-[6px] border border-warm-300 p-4 max-w-[230px] shadow-card">
                <div className="text-[11px] font-semibold uppercase tracking-eyebrow text-teal">
                  This week
                </div>
                <div className="mt-1.5 text-sm font-semibold leading-snug">
                  7 inspections, 2 audits, 3 container loadings
                </div>
                <div className="mt-1 text-[12px] text-ink-muted">
                  Across Guangdong, Zhejiang, Jiangsu
                </div>
              </div>
            </div>
            <p id="hero-subtitle" className="sr-only">
              SSourcing China provides sourcing, factory verification, quality
              inspection, and shipping for global buyers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
