import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Cpu, Shirt, Home, Wrench, ShoppingBag, Watch, Car, Lightbulb, UtensilsCrossed, Dumbbell, Baby, Gem, Paintbrush, Plug, Camera } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, smartphones, tablets, laptops, PCBs, sensors, cables, connectors, and electronic components.',
    examples: ['Bluetooth speakers', 'Smart home devices', 'Phone accessories', 'LED lighting', 'PCB assemblies'],
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, footwear, bags, accessories, and custom garments for all markets.',
    examples: ['Custom t-shirts', 'Sportswear', 'Dresses', 'Leather goods', 'Textile fabrics'],
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, lighting, and household products.',
    examples: ['Wooden furniture', 'Kitchen appliances', 'Garden tools', 'Home decor', 'Bedding'],
  },
  {
    icon: Wrench,
    name: 'Industrial & Machinery',
    description: 'Tools, equipment, auto parts, industrial supplies, and manufacturing components.',
    examples: ['CNC parts', 'Power tools', 'Auto accessories', 'Hydraulic components', 'Safety equipment'],
  },
  {
    icon: ShoppingBag,
    name: 'Consumer Goods',
    description: 'Toys, sports equipment, beauty products, gifts, and everyday consumer products.',
    examples: ['Children\'s toys', 'Fitness equipment', 'Cosmetics packaging', 'Promotional items', 'Pet supplies'],
  },
  {
    icon: Watch,
    name: 'Custom & OEM Products',
    description: 'Private label manufacturing, custom designs, OEM/ODM services, and bespoke products.',
    examples: ['Private label cosmetics', 'Custom packaging', 'OEM electronics', 'Branded merchandise', 'Custom molds'],
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    description: 'Car accessories, replacement parts, motorcycle components, and automotive electronics.',
    examples: ['Car mats', 'LED headlights', 'Dash cameras', 'Seat covers', 'Engine parts'],
  },
  {
    icon: Lightbulb,
    name: 'Lighting & Electrical',
    description: 'LED lights, smart lighting, electrical components, solar products, and lighting fixtures.',
    examples: ['LED strips', 'Solar panels', 'Smart bulbs', 'Industrial lighting', 'Outdoor lighting'],
  },
  {
    icon: UtensilsCrossed,
    name: 'Food & Beverage Packaging',
    description: 'Food packaging, beverage containers, kitchen supplies, and food processing equipment.',
    examples: ['Food containers', 'Bottles and jars', 'Paper packaging', 'Kitchen utensils', 'Food processing machines'],
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoor',
    description: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.',
    examples: ['Yoga mats', 'Camping gear', 'Bicycle accessories', 'Water sports equipment', 'Gym equipment'],
  },
  {
    icon: Baby,
    name: 'Baby & Kids Products',
    description: 'Baby care products, children\'s toys, kids\' furniture, and educational products.',
    examples: ['Baby clothing', 'Strollers', 'Educational toys', 'Baby monitors', 'Kids furniture'],
  },
  {
    icon: Gem,
    name: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, sunglasses, and personal accessories.',
    examples: ['Stainless steel jewelry', 'Fashion watches', 'Sunglasses', 'Hair accessories', 'Belts and wallets'],
  },
  {
    icon: Paintbrush,
    name: 'Art & Craft Supplies',
    description: 'Art materials, craft supplies, stationery, and creative products.',
    examples: ['Paint sets', 'Craft kits', 'Notebooks', 'Calligraphy supplies', 'DIY materials'],
  },
  {
    icon: Plug,
    name: 'Hardware & Building Materials',
    description: 'Building materials, hardware, plumbing supplies, and construction products.',
    examples: ['Door handles', 'Tiles', 'Plumbing fixtures', 'Fasteners', 'Building hardware'],
  },
  {
    icon: Camera,
    name: 'Photography & Video',
    description: 'Camera accessories, video equipment, tripods, and photography supplies.',
    examples: ['Camera bags', 'Tripods', 'Ring lights', 'Lens filters', 'Studio equipment'],
  },
]

export function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-6">Product Categories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Products We Source from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              We source virtually any product manufactured in China. Below are the main categories we work with — if your product is not listed, contact us and we will find the right supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <cat.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((example, eIndex) => (
                      <Badge key={eIndex} variant="outline" className="text-xs text-slate-600 border-slate-300">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We source virtually anything made in China. Tell us what you need and we will find the right supplier for you.
          </p>
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
            <Link to="/contact">
              Submit Your Product Request
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
