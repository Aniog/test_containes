import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Cog,
  Home,
  Shirt,
  Package,
  ShoppingBag,
  Car,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import HelmetSEO from "@/components/shared/HelmetSEO";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    icon: Cpu,
    title: "Electronics & Components",
    examples: "PCBs, cables, adapters, chargers, headphones, IoT modules, smart home devices.",
    regions: "Shenzhen, Dongguan, Guangzhou",
  },
  {
    icon: Cog,
    title: "Machinery & Industrial Parts",
    examples: "CNC parts, molds, tooling, fasteners, pumps, valves, automation components.",
    regions: "Ningbo, Taizhou, Shanghai, Suzhou",
  },
  {
    icon: Home,
    title: "Home & Garden",
    examples: "Furniture, kitchenware, lighting, hardware, garden tools, home decor.",
    regions: "Foshan, Zhongshan, Hangzhou",
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    examples: "Fabrics, garments, bags, shoes, accessories, outdoor gear.",
    regions: "Guangzhou, Shenzhen, Yiwu, Quanzhou",
  },
  {
    icon: Package,
    title: "Packaging & Printing",
    examples: "Retail boxes, labels, paper bags, gift boxes, printed inserts.",
    regions: "Shenzhen, Dongguan, Wenzhou",
  },
  {
    icon: ShoppingBag,
    title: "Consumer Goods",
    examples: "Toys, sports equipment, pet supplies, promotional products, stationery.",
    regions: "Yiwu, Shantou, Shenzhen",
  },
  {
    icon: Car,
    title: "Automotive Parts",
    examples: "Interior accessories, lighting, electronics, trim parts, repair tools.",
    regions: "Ningbo, Wenzhou, Guangzhou",
  },
  {
    icon: Sparkles,
    title: "Beauty & Personal Care",
    examples: "Skincare packaging, cosmetics tools, hair accessories, personal care devices.",
    regions: "Guangzhou, Shenzhen, Yiwu",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <HelmetSEO
        title="Products We Source | China Sourcing Agent | SSourcing China"
        description="SSourcing China sources electronics, machinery, home goods, textiles, packaging, consumer goods, automotive parts, and beauty products from verified Chinese suppliers."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Products We Source</h1>
            <p className="mt-4 text-lg text-slate-300">
              Broad category expertise across China's major manufacturing regions. If you do not see your product, contact us — we likely cover it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Category Coverage"
            title="Industries we know well"
            description="Each category has its own supplier base, quality standards, and manufacturing regions. We match your project with the right expertise."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Card key={cat.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{cat.examples}</p>
                  <p className="mt-3 text-xs font-medium text-slate-500">Key regions: {cat.regions}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-50 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Not sure if we cover your product?</h3>
                <p className="mt-4 text-slate-600">
                  Send us your product details, photos, or specifications. We will confirm whether it falls within our sourcing scope and propose a plan.
                </p>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button variant="primary">
                      Request a free quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  data-strk-img-id="products-img-2e5d9c"
                  data-strk-img="[products-heading] [products-subheading]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Wide range of manufactured products from China"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
