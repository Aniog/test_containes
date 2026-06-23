import { ArrowRight, CheckCircle2, Search, ShieldCheck, TrendingUp, Truck, Users, Star, Quote, ChevronRight, HelpCircle } from "lucide-react"
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="flex flex-col gap-16 pb-16" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32">
        <div className="container px-4 px-6 relative z-10 flex flex-col items-center text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Professional B2B China Sourcing Agent
          </span>
          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Hero Background Image via plugin */}
        <div className="absolute inset-0 -z-10 bg-slate-50 mt-40 mx-4 rounded-3xl overflow-hidden shadow-2xl border">
          <div 
             className="w-full h-full object-cover opacity-80"
             data-strk-bg-id="hero-bg-sourcing-main"
             data-strk-bg="[hero-subtitle] [hero-title]"
             data-strk-bg-ratio="16x9"
             data-strk-bg-width="1920"
          ></div>
        </div>
      </section>

      {/* Trust Points / Stats */}
      <section className="container px-4 pt-48 sm:pt-56">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border rounded-xl p-8 bg-card shadow-sm divide-y lg:divide-y-0 lg:divide-x [&>*:nth-child(even)]:border-l-0 [&>*:nth-child(n+3)]:border-t-0 [&>*:nth-child(n+3)]:pt-0 lg:[&>*]:pt-0">
          <div className="flex flex-col gap-2 pt-4 lg:pt-0">
            <span className="text-4xl font-bold text-primary">10+</span>
            <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
          </div>
          <div className="flex flex-col gap-2 pt-4 lg:pt-0">
            <span className="text-4xl font-bold text-primary">500+</span>
            <span className="text-sm font-medium text-muted-foreground">Verified Suppliers</span>
          </div>
          <div className="flex flex-col gap-2 pt-4 lg:pt-0">
            <span className="text-4xl font-bold text-primary">1000+</span>
            <span className="text-sm font-medium text-muted-foreground">Successful Projects</span>
          </div>
          <div className="flex flex-col gap-2 pt-4 lg:pt-0 border-t lg:border-t-0">
            <span className="text-4xl font-bold text-primary">50+</span>
            <span className="text-sm font-medium text-muted-foreground">Countries Served</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 id="services-title" className="text-3xl font-bold sm:text-4xl">Our Core Sourcing Services</h2>
          <p id="services-subtitle" className="max-w-[800px] text-muted-foreground text-lg">A complete end-to-end sourcing solution tailored to your B2B needs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "supplier-verification",
              title: "Supplier Verification",
              desc: "We physically audit real factories in China to ensure they meet your production capacity and compliance requirements.",
              icon: ShieldCheck
            },
            {
              id: "product-sourcing",
              title: "Product Sourcing",
              desc: "Find the best manufacturers for your specific product needs with competitive pricing and quality guarantees.",
              icon: Search
            },
            {
              id: "quality-control",
              title: "Quality Control & Inspection",
              desc: "Pre-shipment inspections and mid-production quality checks to ensure products meet your exact specifications.",
              icon: CheckCircle2
            },
            {
              id: "production-followup",
              title: "Production Follow-up",
              desc: "We manage communication and monitor production timelines so you don't have to stay up late dealing with time zones.",
              icon: TrendingUp
            },
            {
              id: "shipping-logistics",
              title: "Shipping & Logistics",
              desc: "Coordinate sea or air freight, handle customs clearance, and ensure your goods arrive safely at your warehouse.",
              icon: Truck
            }
          ].map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="relative group overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 id={`service-title-${service.id}`} className="font-bold text-xl mb-2">{service.title}</h3>
                <p id={`service-desc-${service.id}`} className="text-muted-foreground">{service.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
      
      {/* Problems We Solve */}
      <section className="bg-slate-50 py-16 md:py-24 border-y">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="problems-title" className="text-3xl font-bold sm:text-4xl mb-6">Stop Worring About China Sourcing Risks</h2>
              <p id="problems-subtitle" className="text-lg text-muted-foreground mb-8">Importing from China shouldn't be a gamble. We are your boots on the ground, protecting your business interests.</p>
              
              <ul className="space-y-4">
                {[
                  "Avoid scams and trading companies pretending to be factories.",
                  "Prevent receiving poor quality or defect-ridden products.",
                  "Overcome language barriers and cultural misunderstandings.",
                  "Reduce delays in production and shipping schedules."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border">
               <img
                  alt="Quality Control Inspector in Factory"
                  className="object-cover w-full h-full"
                  data-strk-img-id="problems-img-qc-factory"
                  data-strk-img="[problems-subtitle] [problems-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="container px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 id="process-title" className="text-3xl font-bold sm:text-4xl">Our 6-Step Sourcing Process</h2>
          <p id="process-subtitle" className="max-w-[800px] text-muted-foreground text-lg">We handle everything from finding the factory to delivering to your door.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {[
            { step: "01", title: "Requirement Analysis", desc: "We review your product specs, target price, and quantity to understand your exact needs." },
            { step: "02", title: "Supplier Search & Shortlist", desc: "We identify factories, compare quotes, and present you with the top 3-5 verified options." },
            { step: "03", title: "Sample Evaluation", desc: "We collect, consolidate, and inspect samples before sending them to you for final approval." },
            { step: "04", title: "Production Management", desc: "Once you place the order, we monitor the manufacturing process and provide regular updates." },
            { step: "05", title: "Quality Inspection", desc: "Our QC team performs detailed inspections based on AQL standards before final payment." },
            { step: "06", title: "Shipping Logistics", desc: "We book freight, manage customs documents, and coordinate final delivery to your warehouse." }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col gap-4 p-6 border rounded-xl bg-card">
              <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-6">{item.step}</span>
              <h3 className="font-bold text-xl relative z-10">{item.title}</h3>
              <p className="text-muted-foreground relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-50 py-16 md:py-24 border-y">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-12">
            <div className="space-y-4 max-w-2xl">
              <h2 id="products-title" className="text-3xl font-bold sm:text-4xl">Products We Source</h2>
              <p id="products-subtitle" className="text-lg text-muted-foreground">With our extensive supplier network in manufacturing hubs across China, we can source almost any product category.</p>
            </div>
            <a href="/products" className="inline-flex items-center text-primary font-medium hover:underline">
              View all categories <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: "electronics", name: "Consumer Electronics" },
              { id: "home-garden", name: "Home & Garden" },
              { id: "apparel", name: "Clothing & Apparel" },
              { id: "machinery", name: "Industrial Machinery" },
              { id: "toys", name: "Toys & Hobbies" },
              { id: "beauty", name: "Beauty & Personal Care" },
              { id: "sports", name: "Sports & Outdoors" },
              { id: "packaging", name: "Custom Packaging" }
            ].map((category) => (
              <a key={category.id} href="/products" className="group rounded-xl overflow-hidden relative aspect-square border shadow-sm">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                <img
                  alt={category.name}
                  className="object-cover w-full h-full"
                  data-strk-img-id={`cat-${category.id}`}
                  data-strk-img={`[cat-name-${category.id}] manufacturing wholesale`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={`cat-name-${category.id}`} className="absolute bottom-4 left-4 right-4 text-white font-semibold z-20 text-lg">
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Trusted by Global Brands</h2>
          <p className="max-w-[800px] text-muted-foreground text-lg">Don't just take our word for it. Here's what our clients have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "SSourcing China helped us find a reliable partner for our new electronics line. Their QC process saved us from a huge defect issue before shipping.",
              author: "Michael T.",
              role: "Purchasing Manager, USA"
            },
            {
              quote: "Communication is excellent. I no longer have to wake up at 2 AM to talk to factories. They handle all the negotiations and follow-ups.",
              author: "Sarah L.",
              role: "E-commerce Founder, UK"
            },
            {
              quote: "They managed our complex supply chain involving 5 different component factories perfectly. Consolidated shipping saved us 30% on logistics.",
              author: "David K.",
              role: "Supply Chain Director, Australia"
            }
          ].map((testimonial, i) => (
            <div key={i} className="flex flex-col p-8 border rounded-2xl bg-card shadow-sm">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="flex-1 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center border font-bold text-muted-foreground">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Source from China with Confidence?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Tell us about your sourcing needs, and we'll get back to you with a customized solution within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-background text-primary px-8 py-4 text-base font-bold shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground">
              Request a Free Quote
            </a>
            <a href="/how-it-works" className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground/20 px-8 py-4 text-base font-bold transition-colors hover:bg-primary-foreground hover:text-primary">
              Learn How We Work
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
