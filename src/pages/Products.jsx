import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import StrkImageLoader from "@/components/shared/StrkImageLoader"
import {
  Cpu,
  Cog,
  ShoppingBag,
  Package,
  Shirt,
  Sofa,
  Lamp,
  Hammer,
  ToyBrick,
  Sprout,
} from "lucide-react"

const categories = [
  {
    icon: Cpu,
    title: "Electronics & Components",
    examples: ["PCBA", "cables & connectors", "chargers & adapters", "IoT modules", "LED displays"],
  },
  {
    icon: Cog,
    title: "Machinery & Industrial",
    examples: ["power tools", "spare parts", "automation equipment", "hardware fittings", "molds"],
  },
  {
    icon: ShoppingBag,
    title: "Consumer Goods",
    examples: ["kitchenware", "personal care", "sports accessories", "stationery", "pet products"],
  },
  {
    icon: Package,
    title: "Packaging & Printing",
    examples: ["retail boxes", "paper bags", "labels & stickers", "tubes & bottles", "gift boxes"],
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    examples: ["fabrics", "garments", "bags & luggage", "caps", "accessories"],
  },
  {
    icon: Sofa,
    title: "Furniture & Home",
    examples: ["office furniture", "outdoor furniture", "lighting", "home decor", "mirrors"],
  },
  {
    icon: Lamp,
    title: "Lighting & Electrical",
    examples: ["LED bulbs", "panel lights", "switches", "solar lights", "stage lighting"],
  },
  {
    icon: Hammer,
    title: "Building Materials",
    examples: ["tiles", "hardware", "bathroom fixtures", "flooring", "adhesives"],
  },
  {
    icon: ToyBrick,
    title: "Toys & Baby Products",
    examples: ["educational toys", "plush toys", "baby gear", "children's furniture"],
  },
  {
    icon: Sprout,
    title: "Food-Contact & Agriculture",
    examples: ["packaging machinery", "disposable tableware", "processing equipment"],
  },
]

export default function Products() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 id="products-page-title" className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Products We Source
              </h1>
              <p id="products-page-subtitle" className="mt-4 text-lg text-muted">
                We source across a wide range of manufacturing categories. If your product is not listed, ask us — we will be honest about fit.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lift">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{category.title}</CardTitle>
                    <p className="mt-2 text-sm text-muted">{category.examples.join(" · ")}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
              <div>
                <img
                  data-strk-img-id="products-page-img-c4d5e6"
                  data-strk-img="[products-page-title] [products-page-subtitle]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Various products sourced from Chinese manufacturers"
                  className="rounded-2xl object-cover shadow-card"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                  Get matched with the right factory
                </h2>
                <p className="mt-4 text-muted">
                  Our team understands the manufacturing clusters across China. We know which regions specialize in electronics, textiles, hardware, packaging, and more.
                </p>
                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Regional expertise: Guangdong, Zhejiang, Jiangsu, Fujian</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Experience with custom OEM and private-label products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>Support for certifications: CE, FCC, RoHS, REACH, FDA</span>
                  </li>
                </ul>
                <Button className="mt-8" asChild>
                  <Link to="/contact">Request a Product Search</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
