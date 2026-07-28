import React from 'react';
import { ShieldCheck, Truck, Search, Factory, CheckCircle, TrendingUp, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden py-20">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-992a1b"
          data-strk-bg="[hero-headline] [hero-subheadline]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 z-10 bg-black/60" />
        
        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 id="hero-headline" className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subheadline" className="mb-10 text-xl text-gray-200 md:text-2xl">
              From factory verification to final shipping—we handle everything so you can focus on growing your business.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="w-full text-lg sm:w-auto">Get a Free Sourcing Quote</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full text-lg text-white border-white hover:bg-white hover:text-black sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary/30 py-8 border-b">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted by 500+ Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale md:justify-between md:gap-4">
             {/* Logo placeholders - usually these would be client logos */}
             <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> GLOBAL RETAIL</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Truck className="w-6 h-6" /> LOGI-TECH</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Search className="w-6 h-6" /> SOURCEWISE</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Factory className="w-6 h-6" /> MFG UNITED</div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 id="services-title" className="mb-4 text-3xl font-bold md:text-4xl">Comprehensive Sourcing Solutions</h2>
          <p id="services-subtitle" className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            We provide end-to-end management of your supply chain in China, ensuring quality, compliance, and on-time delivery.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Supplier Sourcing',
                desc: 'We find the most reliable factories that meet your specific requirements and price points.',
                icon: Search,
                id: 's-sourcing'
              },
              {
                title: 'Factory Verification',
                desc: 'On-site audits to verify factory capabilities, certifications, and ethical standards.',
                icon: Factory,
                id: 's-verification'
              },
              {
                title: 'Quality Inspection',
                desc: 'Professional QC at different production stages to prevent defects and ensure standards.',
                icon: CheckCircle,
                id: 's-qc'
              },
              {
                title: 'Order Tracking',
                desc: 'Regular updates on production progress to keep your project on schedule.',
                icon: TrendingUp,
                id: 's-tracking'
              },
              {
                title: 'Shipping Coordination',
                desc: 'Managing freight, consolidation, and customs documentation for seamless logistics.',
                icon: Truck,
                id: 's-shipping'
              },
              {
                title: 'Private Labeling',
                desc: 'Customizing products and packaging to build your own brand directly from China.',
                icon: ShieldCheck,
                id: 's-private'
              }
            ].map((s) => (
              <div key={s.id} className="group flex flex-col items-center p-8 transition-all hover:bg-secondary/50 rounded-lg border border-transparent hover:border-border">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white font-bold">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 id={`${s.id}-title`} className="mb-3 text-xl font-bold">{s.title}</h3>
                <p id={`${s.id}-desc`} className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section: Quality Assurance */}
      <section className="bg-primary text-white overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="qa-inspection-f42a1"
                data-strk-img="[qa-desc] [qa-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality Inspection in China Factory"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 id="qa-title" className="mb-6 text-3xl font-bold md:text-4xl text-white">Uncompromising Quality Assurance</h2>
              <p id="qa-desc" className="mb-8 text-lg text-blue-100">
                Don't leave your product quality to chance. Our team becomes your eyes and ears on the factory floor, ensuring every unit meets your exact specifications before it leaves China.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Initial Production Check (IPC)',
                  'During Production Inspection (DUPRO)',
                  'Final Random Inspection (FRI)',
                  'Container Loading Check (CLC)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services">
                <Button variant="secondary" size="lg">Learn More About QC</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 id="process-title" className="mb-16 text-center text-3xl font-bold md:text-4xl">Our 4-Step Sourcing Process</h2>
          <div className="grid gap-8 md:grid-cols-4 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-[2.75rem] left-[15%] right-[15%] h-[2px] bg-border z-0" />
            
            {[
              { step: '01', title: 'Consultation', desc: 'Tell us about your product needs, volume, and target price.', id: 'p1' },
              { step: '02', title: 'Sourcing & Verification', desc: 'We source suppliers, request samples, and audit factories.', id: 'p2' },
              { step: '03', title: 'Production Management', desc: 'We manage the order, oversee production, and perform QC.', id: 'p3' },
              { step: '04', title: 'Shipping & Delivery', desc: 'We handle logistics and customs to get goods to your door.', id: 'p4' }
            ].map((p, idx) => (
              <div key={p.id} className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                  {p.step}
                </div>
                <h3 id={`${p.id}-title`} className="mb-3 text-xl font-bold">{p.title}</h3>
                <p id={`${p.id}-desc`} className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link to="/how-it-works">
               <Button variant="outline" size="lg">How It Works In Detail <ArrowRight className="ml-2 h-4 w-4" /></Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Sectors */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-left">
            <div>
              <h2 id="products-title" className="text-3xl font-bold md:text-4xl">Products We Source</h2>
              <p id="products-subtitle" className="mt-4 text-lg text-muted-foreground">Expertise across diverse industries and product categories.</p>
            </div>
            <Link to="/products">
              <Button variant="link" className="text-primary font-bold p-0">View All Categories <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Consumer Electronics', imgId: 'electronics-e1a', id: 'cat1' },
              { name: 'Home & Kitchen', imgId: 'home-h2b', id: 'cat2' },
              { name: 'Fashion & Textiles', imgId: 'fashion-f3c', id: 'cat3' },
              { name: 'Industrial Tools', imgId: 'industrial-i4d', id: 'cat4' }
            ].map((cat) => (
              <div key={cat.id} className="group relative overflow-hidden rounded-xl bg-gray-200 aspect-[3/4]">
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  data-strk-bg-id={cat.imgId}
                  data-strk-bg={`[cat-name-${cat.id}] [products-title]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 id={`cat-name-${cat.id}`} className="text-xl font-bold text-white">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-title" className="mb-16 text-center text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                text: "SSourcing China helped us reduce our procurement costs by 30% while actually improving the build quality of our electronic products.",
                author: "Mark S., E-commerce Entrepreneur",
                role: "USA"
              },
              {
                text: "Their factory audits are incredibly thorough. They found issues that we would have missed, saving us thousands in potential losses.",
                author: "Elena D., Product Manager",
                role: "Germany"
              },
              {
                text: "The most reliable sourcing partner we've had. Their communication is clear, English is excellent, and they really understand Western quality standards.",
                author: "David L., Retailer",
                role: "UK"
              }
            ].map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-sm border">
                <Quote className="h-8 w-8 text-primary/20 mb-6" />
                <p className="italic text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Why do I need a sourcing agent in China?", a: "A sourcing agent acts as your local representative to overcome language barriers, verify supplier legitimacy on-site, inspect quality before shipping, and manage complex logistics, significantly reducing your risk." },
              { q: "How do you charge for your services?", a: "We typically work on a commission basis based on the order value, or fixed fees for specific services like factory audits and inspections. Contact us for a precise quote." },
              { q: "Can you source products for a small business?", a: "Yes! We work with businesses of all sizes, from startups and Amazon sellers to larger retail chains, provided the order meets a minimum viable manufacturing quantity." }
            ].map((item, i) => (
              <div key={i} className="border-b pb-6">
                <h3 className="text-xl font-bold mb-3">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 id="final-cta-title" className="mb-6 text-3xl font-bold md:text-5xl text-white">Ready to Secure Your Supply Chain in China?</h2>
          <p id="final-cta-desc" className="mb-10 text-xl text-blue-100 max-w-2xl mx-auto">
            Get professional representation on the ground. Professional sourcing, verification, and QC you can trust.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="h-14 px-10 text-lg">Request A Free Sourcing Quote Now</Button>
          </Link>
          <p className="mt-6 text-sm text-blue-400">Response time typically under 24 hours.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
