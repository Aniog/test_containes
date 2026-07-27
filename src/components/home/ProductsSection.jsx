import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import SectionHeader from "@/components/shared/SectionHeader"
import { Button } from "@/components/ui/button"
import { Package, Cpu, Sofa, Shirt, Wrench, Lightbulb, Car, ShoppingBag } from "lucide-react"

const products = [
  { icon: Package, title: "Packaging & Printing", description: "Boxes, bags, labels, and custom branded packaging." },
  { icon: Cpu, title: "Electronics & Components", description: "Consumer electronics, cables, PCBA, and accessories." },
  { icon: Sofa, title: "Furniture & Home Goods", description: "Indoor and outdoor furniture, décor, and household items." },
  { icon: Shirt, title: "Apparel & Textiles", description: "Clothing, fabrics, bags, and promotional textiles." },
  { icon: Wrench, title: "Industrial & Hardware", description: "Tools, fasteners, machine parts, and OEM components." },
  { icon: Lightbulb, title: "Lighting & Electrical", description: "LED products, lamps, switches, and electrical fittings." },
  { icon: Car, title: "Automotive & Parts", description: "Car accessories, replacement parts, and maintenance tools." },
  { icon: ShoppingBag, title: "Promotional Products", description: "Custom gifts, branded merchandise, and giveaway items." },
]

export default function ProductsSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Products"
          title="Products we source from China"
          description="We source across a wide range of categories. If you do not see yours, get in touch — we can still help."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <Button variant="outline" onClick={() => navigate("/products")}>See Full Product List</Button>
        </div>
      </div>
    </section>
  )
}
