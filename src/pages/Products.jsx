import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/sections/PageHero.jsx";
import InquiryForm from "@/components/sections/InquiryForm.jsx";

const Products = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let frame;
    if (containerRef.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Eight categories, sourced from the Chinese hub that does each one best"
        subtitle="We focus on categories where our on-the-ground teams can actually walk the production line. If your product is not in the list, ask — chances are we still cover it."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondaryCta={{ to: "/services", label: "See all services" }}
      />

      <section ref={containerRef} className="bg-white">
        <div className="container-page section-pad">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-electronics-img"
                data-strk-img="[page-electronics-desc] [page-electronics-title] consumer electronics factory assembly line worker components"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Consumer Electronics"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-electronics-title" className="text-lg font-semibold text-ink-900">
                  Consumer Electronics
                </h2>
                <p id="page-electronics-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Charging accessories, smart home, audio, wearable and small appliances.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Shenzhen · Dongguan</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-apparel-img"
                data-strk-img="[page-apparel-desc] [page-apparel-title] textile garment factory sewing machines rolls of fabric"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Apparel & Textiles"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-apparel-title" className="text-lg font-semibold text-ink-900">
                  Apparel & Textiles
                </h2>
                <p id="page-apparel-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Garment manufacturing, technical fabrics, OEM / ODM for fashion brands.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Hangzhou · Guangzhou · Huzhou</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-home-img"
                data-strk-img="[page-home-desc] [page-home-title] kitchen cookware stainless steel factory production line"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Home & Kitchen"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-home-title" className="text-lg font-semibold text-ink-900">
                  Home & Kitchen
                </h2>
                <p id="page-home-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Cookware, tableware, storage, cleaning tools, and home organization.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Yongkang · Jieyang</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-furniture-img"
                data-strk-img="[page-furniture-desc] [page-furniture-title] furniture workshop woodworking sanding chair production"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Furniture & Decor"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-furniture-title" className="text-lg font-semibold text-ink-900">
                  Furniture & Decor
                </h2>
                <p id="page-furniture-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Indoor and outdoor furniture, lighting and home decor from real workshops.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Foshan · Zhongshan</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-beauty-img"
                data-strk-img="[page-beauty-desc] [page-beauty-title] cosmetics laboratory bottles filling line cosmetic factory"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Beauty & Personal Care"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-beauty-title" className="text-lg font-semibold text-ink-900">
                  Beauty & Personal Care
                </h2>
                <p id="page-beauty-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Skincare, haircare, cosmetics OEM with formulation and packaging.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Guangzhou · Shanghai</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-industrial-img"
                data-strk-img="[page-industrial-desc] [page-industrial-title] industrial cnc machining metal parts factory worker"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Industrial & Hardware"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-industrial-title" className="text-lg font-semibold text-ink-900">
                  Industrial & Hardware
                </h2>
                <p id="page-industrial-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Custom CNC, sheet metal, casting, fasteners, and OEM machinery parts.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Ningbo · Wuxi</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-outdoor-img"
                data-strk-img="[page-outdoor-desc] [page-outdoor-title] sports outdoor equipment factory camping gear production"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Sports & Outdoors"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-outdoor-title" className="text-lg font-semibold text-ink-900">
                  Sports & Outdoors
                </h2>
                <p id="page-outdoor-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Camping gear, fitness equipment, cycling, and outdoor lifestyle products.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Yongkang · Ningbo</span>
                </div>
              </div>
            </article>

            <article className="card card-hover overflow-hidden flex flex-col">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="page-prod-packaging-img"
                data-strk-img="[page-packaging-desc] [page-packaging-title] packaging boxes printing factory warehouse stacked cartons"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                alt="Packaging & Printing"
                loading="lazy"
                className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 id="page-packaging-title" className="text-lg font-semibold text-ink-900">
                  Packaging & Printing
                </h2>
                <p id="page-packaging-desc" className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  Custom boxes, bags, labels, paper tubes, and sustainable packaging.
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sourcing hubs: Dongguan · Wenzhou</span>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-16 rounded-2xl border border-ink-200 bg-ink-50 p-8 md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow">Not on the list?</p>
                <h2 id="other-title" className="mt-3 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
                  If your product is in China, we can probably source it
                </h2>
                <p id="other-sub" className="mt-3 text-base text-ink-700 leading-relaxed">
                  The eight categories above are where we have the deepest teams and the most supplier relationships. Outside of those, we still run sourcing projects every month — from pet products to auto parts, from educational toys to agricultural equipment. Tell us what you're after and we will give you an honest answer about whether we are the right fit.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                    <span>We will tell you within 1 business day if we can help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                    <span>If not, we can usually point you to a partner who can</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                    <span>No fee for the initial scoping conversation</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5">
                <InquiryForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
