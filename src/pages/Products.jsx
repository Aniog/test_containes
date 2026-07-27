import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Cpu,
  Shirt,
  Sofa,
  Bike,
  Plug,
  Wrench,
  FlaskConical,
  Package,
  ArrowRight,
  Check,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const CATEGORIES = [
  {
    id: "electronics",
    icon: Cpu,
    title: "Electronics & Accessories",
    titleId: "prod-page-electronics-title",
    desc: "Consumer electronics, mobile accessories, smart home devices, audio gear and PC peripherals. We support CE, FCC, RoHS, UKCA and REACH documentation.",
    descId: "prod-page-electronics-desc",
    image:
      "[prod-page-electronics-desc] [prod-page-electronics-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-electronics-1a2b3c",
    bullets: [
      "Consumer electronics OEM/ODM",
      "Smart home and IoT devices",
      "Audio, charging and PC peripherals",
      "Battery and charger support (UL, CE)",
    ],
  },
  {
    id: "apparel",
    icon: Shirt,
    title: "Apparel & Textiles",
    titleId: "prod-page-apparel-title",
    desc: "Garments, technical textiles, fashion accessories, workwear and uniforms. Social audit support (BSCI, SEDEX, WRAP) and fabric sourcing from mills.",
    descId: "prod-page-apparel-desc",
    image:
      "[prod-page-apparel-desc] [prod-page-apparel-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-apparel-2b3c4d",
    bullets: [
      "Knit and woven garments",
      "Workwear and uniforms",
      "Bags, hats and fashion accessories",
      "BSCI, SEDEX and WRAP audits",
    ],
  },
  {
    id: "home",
    icon: Sofa,
    title: "Home & Furniture",
    titleId: "prod-page-home-title",
    desc: "Indoor and outdoor furniture, kitchenware, decor, bedding and storage products. Solid-wood, MDF, rattan and metal fabrication.",
    descId: "prod-page-home-desc",
    image:
      "[prod-page-home-desc] [prod-page-home-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-home-3c4d5e",
    bullets: [
      "Indoor and outdoor furniture",
      "Kitchenware and tableware",
      "Home decor and storage",
      "FSC, CARB and CE documentation",
    ],
  },
  {
    id: "sports",
    icon: Bike,
    title: "Sports & Outdoor",
    titleId: "prod-page-sports-title",
    desc: "Fitness gear, cycling, camping, water sports and outdoor equipment for retail, e-commerce and Amazon FBA.",
    descId: "prod-page-sports-desc",
    image:
      "[prod-page-sports-desc] [prod-page-sports-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-sports-4d5e6f",
    bullets: [
      "Fitness and gym equipment",
      "Cycling, camping and hiking",
      "Water sports and paddling",
      "FBA prep and labelling",
    ],
  },
  {
    id: "electrical",
    icon: Plug,
    title: "Electrical & Lighting",
    titleId: "prod-page-electrical-title",
    desc: "LED lighting, power tools, batteries, wiring and electrical components. CE, UL, ETL, FCC and RoHS testing coordination.",
    descId: "prod-page-electrical-desc",
    image:
      "[prod-page-electrical-desc] [prod-page-electrical-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-electrical-5e6f7a",
    bullets: [
      "LED lighting and fixtures",
      "Power tools and accessories",
      "Batteries, chargers and power banks",
      "CE, UL, ETL and RoHS testing",
    ],
  },
  {
    id: "hardware",
    icon: Wrench,
    title: "Hardware & Industrial",
    titleId: "prod-page-hardware-title",
    desc: "CNC machined parts, castings, sheet metal, fasteners and OEM industrial components. Engineering support and tolerance review.",
    descId: "prod-page-hardware-desc",
    image:
      "[prod-page-hardware-desc] [prod-page-hardware-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-hardware-6f7a8b",
    bullets: [
      "CNC machining and turning",
      "Die casting and sheet metal",
      "Fasteners, springs and stamping",
      "ISO 9001 audits and PPAP",
    ],
  },
  {
    id: "beauty",
    icon: FlaskConical,
    title: "Beauty & Personal Care",
    titleId: "prod-page-beauty-title",
    desc: "Skincare, cosmetics, hair care and OEM/ODM with FDA, CPNP, MoCRA and ISO 22716 support. Formulation and packaging in one place.",
    descId: "prod-page-beauty-desc",
    image:
      "[prod-page-beauty-desc] [prod-page-beauty-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-beauty-7a8b9c",
    bullets: [
      "Skincare, body care and hair care",
      "Cosmetics OEM/ODM",
      "FDA, CPNP, MoCRA registration",
      "ISO 22716 and GMP audits",
    ],
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging & Print",
    titleId: "prod-page-packaging-title",
    desc: "Custom boxes, mailers, labels, bottles and retail packaging with low-MOQ options. Structural design and dieline review.",
    descId: "prod-page-packaging-desc",
    image:
      "[prod-page-packaging-desc] [prod-page-packaging-title] [products-page-eyebrow] [products-page-title]",
    imageId: "prod-page-packaging-8b9c1d",
    bullets: [
      "Custom mailer boxes and cartons",
      "Labels, stickers and shrink sleeves",
      "Bottles, jars and pumps",
      "FSC and recycled materials",
    ],
  },
];

const NOT_COVERED = [
  "Food and perishable goods",
  "Live plants, animals and seeds",
  "Weapons, ammunition and restricted chemicals",
  "Pharmaceuticals and prescription medication",
];

export function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="The consumer goods categories we cover in China"
        titleId="products-page-title"
        description="Most of our buyers source from 2–4 of these categories at the same time. If yours is not listed, ask — we likely cover it through our regional partners."
        descriptionId="products-page-desc"
        imageId="products-page-hero-9c1d2e"
        imageQuery="[products-page-desc] [products-page-title] [products-page-eyebrow]"
        imageAlt="Shelves of consumer goods ready for export at a Chinese factory"
        breadcrumb={[{ label: "Products We Source" }]}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x space-y-16">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={c.id}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      alt={c.title}
                      data-strk-img-id={c.imageId}
                      data-strk-img={c.image}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="aspect-[3/2] w-full object-cover"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h2
                    id={c.titleId}
                    className="mt-4 text-2xl font-semibold tracking-tight text-primary sm:text-3xl"
                  >
                    {c.title}
                  </h2>
                  <p
                    id={c.descId}
                    className="mt-3 text-base text-muted-foreground"
                  >
                    {c.desc}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-ink"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Not in our scope"
                title="Categories we do not handle"
                titleId="products-notcovered-title"
                description="We focus on consumer goods. A few product types are out of scope for licensing, regulatory or ethical reasons."
                descriptionId="products-notcovered-desc"
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {NOT_COVERED.map((n) => (
                <li
                  key={n}
                  className="rounded-xl border border-border bg-white p-5 text-sm font-medium text-ink shadow-card"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get started"
              title="Don't see your category? Ask us."
              titleId="products-cta-title"
              description="If you don't see your product above, send us a brief. We will tell you within 1 business day whether we can help and which factory cluster makes sense."
              descriptionId="products-cta-desc"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="btn-ghost">
                See case studies
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
