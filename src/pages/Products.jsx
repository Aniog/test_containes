import { useEffect } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Package, Cpu, Sofa, Shirt, Wrench, Lightbulb, Car, ShoppingBag, Stethoscope, ToyBrick, Hammer, Utensils } from "lucide-react"

const products = [
  { icon: Package, title: "Packaging & Printing", description: "Corrugated boxes, retail boxes, paper bags, labels, stickers, and custom printed packaging." },
  { icon: Cpu, title: "Electronics & Components", description: "Consumer electronics, mobile accessories, cables, chargers, PCBA, and IoT devices." },
  { icon: Sofa, title: "Furniture & Home Goods", description: "Indoor and outdoor furniture, lighting fixtures, home décor, kitchenware, and storage items." },
  { icon: Shirt, title: "Apparel & Textiles", description: "Men's and women's clothing, uniforms, bags, fabrics, and promotional textiles." },
  { icon: Wrench, title: "Industrial & Hardware", description: "Hand tools, power tools, fasteners, machine parts, OEM metal parts, and hardware." },
  { icon: Lightbulb, title: "Lighting & Electrical", description: "LED bulbs, lamps, strip lights, switches, sockets, and electrical fittings." },
  { icon: Car, title: "Automotive & Parts", description: "Car accessories, replacement parts, maintenance tools, and interior upgrades." },
  { icon: ShoppingBag, title: "Promotional Products", description: "Branded gifts, corporate giveaways, custom merchandise, and event items." },
  { icon: Stethoscope, title: "Medical & Health", description: "Disposable medical supplies, wellness products, personal protective equipment, and health devices." },
  { icon: ToyBrick, title: "Toys & Baby Products", description: "Educational toys, plush toys, baby care products, and children's accessories." },
  { icon: Hammer, title: "Building Materials", description: "Tiles, hardware, sanitary ware, faucets, flooring, and construction accessories." },
  { icon: Utensils, title: "Food & Beverage Items", description: "Food-safe containers, drinkware, bar accessories, and kitchen gadgets." },
]

export default function Products() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Products We Source | SSourcing China"
  }, [])

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Products We Source
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            A broad range of categories across consumer, industrial, and promotional goods.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Categories we support"
            description="If your product category is not listed, contact us. Our network covers many niche industries."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <product.icon className="h-8 w-8 text-brand mb-3" />
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => navigate("/contact")}>
              Request a Product Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
