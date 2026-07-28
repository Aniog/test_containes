import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ProductsSection = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={containerRef} className="bg-white border-b border-ink-200">
      <div className="container-page section-pad">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Products we source</p>
            <h2
              id="products-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              Eight product categories we know from the inside
            </h2>
            <p
              id="products-sub"
              className="mt-4 text-base text-ink-700 leading-relaxed"
            >
              We focus on categories where our on-the-ground teams can
              actually audit the factory, not just forward an email. Each
              category is sourced from the Chinese manufacturing hub where it
              is strongest.
            </p>
          </div>
          <Link to="/products" className="btn-secondary">
            All categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-electronics-img"
              data-strk-img="[electronics-desc] [electronics-title] [products-sub] [products-title] consumer electronics factory assembly line worker components"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Consumer Electronics"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="electronics-title" className="text-base font-semibold text-ink-900">
                Consumer Electronics
              </h3>
              <p id="electronics-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Charging accessories, smart home, audio, wearable and small appliances.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Shenzhen · Dongguan</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-apparel-img"
              data-strk-img="[apparel-desc] [apparel-title] [products-sub] [products-title] textile garment factory sewing machines rolls of fabric"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Apparel & Textiles"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="apparel-title" className="text-base font-semibold text-ink-900">
                Apparel & Textiles
              </h3>
              <p id="apparel-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Garment manufacturing, technical fabrics, OEM / ODM for fashion brands.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Hangzhou · Guangzhou · Huzhou</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-home-img"
              data-strk-img="[home-desc] [home-title] [products-sub] [products-title] kitchen cookware stainless steel factory production line"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Home & Kitchen"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="home-title" className="text-base font-semibold text-ink-900">
                Home & Kitchen
              </h3>
              <p id="home-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Cookware, tableware, storage, cleaning tools, and home organization.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Yongkang · Jieyang</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-furniture-img"
              data-strk-img="[furniture-desc] [furniture-title] [products-sub] [products-title] furniture workshop woodworking sanding chair production"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Furniture & Decor"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="furniture-title" className="text-base font-semibold text-ink-900">
                Furniture & Decor
              </h3>
              <p id="furniture-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Indoor and outdoor furniture, lighting and home decor from real workshops.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Foshan · Zhongshan</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-beauty-img"
              data-strk-img="[beauty-desc] [beauty-title] [products-sub] [products-title] cosmetics laboratory bottles filling line cosmetic factory"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Beauty & Personal Care"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="beauty-title" className="text-base font-semibold text-ink-900">
                Beauty & Personal Care
              </h3>
              <p id="beauty-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Skincare, haircare, cosmetics OEM with formulation and packaging.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Guangzhou · Shanghai</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-industrial-img"
              data-strk-img="[industrial-desc] [industrial-title] [products-sub] [products-title] industrial cnc machining metal parts factory worker"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Industrial & Hardware"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="industrial-title" className="text-base font-semibold text-ink-900">
                Industrial & Hardware
              </h3>
              <p id="industrial-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Custom CNC, sheet metal, casting, fasteners, and OEM machinery parts.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Ningbo · Wuxi</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-outdoor-img"
              data-strk-img="[outdoor-desc] [outdoor-title] [products-sub] [products-title] sports outdoor equipment factory camping gear production"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Sports & Outdoors"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="outdoor-title" className="text-base font-semibold text-ink-900">
                Sports & Outdoors
              </h3>
              <p id="outdoor-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Camping gear, fitness equipment, cycling, and outdoor lifestyle products.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Yongkang · Ningbo</span>
              </div>
            </div>
          </article>

          <article className="card card-hover overflow-hidden flex flex-col">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="prod-packaging-img"
              data-strk-img="[packaging-desc] [packaging-title] [products-sub] [products-title] packaging boxes printing factory warehouse stacked cartons"
              data-strk-img-ratio="3x2"
              data-strk-img-width="600"
              alt="Packaging & Printing"
              loading="lazy"
              className="block aspect-[3/2] w-full bg-ink-100 h-full w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h3 id="packaging-title" className="text-base font-semibold text-ink-900">
                Packaging & Printing
              </h3>
              <p id="packaging-desc" className="mt-1.5 text-sm text-ink-700 leading-relaxed flex-1">
                Custom boxes, bags, labels, paper tubes, and sustainable packaging.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>Dongguan · Wenzhou</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

