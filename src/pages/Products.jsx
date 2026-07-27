import { Link } from "react-router-dom";
import {
  Monitor,
  Cog,
  Shirt,
  Home,
  ShoppingBag,
  Car,
  Package,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    name: "Electronics",
    desc: "Consumer electronics, mobile accessories, audio devices, smart home products, and PC peripherals.",
    clusters: "Shenzhen, Dongguan",
  },
  {
    icon: Cog,
    name: "Machinery & Industrial",
    desc: "Industrial equipment, tools, automation components, hardware, and metal fabrication.",
    clusters: "Ningbo, Shanghai, Suzhou",
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    desc: "Garments, fabrics, bags, footwear, and fashion accessories for retail and wholesale.",
    clusters: "Guangzhou, Keqiao, Yiwu",
  },
  {
    icon: Home,
    name: "Home & Garden",
    desc: "Furniture, kitchenware, lighting, decor, gardening tools, and outdoor furniture.",
    clusters: "Foshan, Zhongshan, Ningbo",
  },
  {
    icon: ShoppingBag,
    name: "Consumer Goods",
    desc: "Toys, sports equipment, beauty products, stationery, and promotional items.",
    clusters: "Yiwu, Shantou, Shenzhen",
  },
  {
    icon: Car,
    name: "Automotive Parts",
    desc: "Auto parts, EV components, accessories, and aftermarket products.",
    clusters: "Wenzhou, Ningbo, Guangzhou",
  },
  {
    icon: Package,
    name: "Packaging & Printing",
    desc: "Custom boxes, labels, bags, and printed materials for branding and retail.",
    clusters: "Shenzhen, Dongguan, Wenzhou",
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Products
          </p>
          <h1 className="text-white mb-4">Products We Source</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            We source across virtually every major product category in China.
            If it is manufactured here, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((c) => (
              <div
                key={c.name}
                className="bg-surface rounded-lg p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {c.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <p className="text-xs text-slate-400">
                  <span className="font-medium text-slate-500">
                    Key clusters:
                  </span>{" "}
                  {c.clusters}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary mb-4">Do Not See Your Category?</h2>
          <p className="text-slate-600 mb-8">
            Our network extends far beyond these categories. Tell us what you
            need and we will confirm whether we can source it — usually within
            one business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
          >
            Submit Your Product Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
