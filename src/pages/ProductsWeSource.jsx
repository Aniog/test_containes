import { Smartphone, Shirt, Home, Wrench, Package, Briefcase } from "lucide-react"

export default function ProductsWeSource() {
  const categories = [
    {
      name: 'Consumer Electronics',
      description: 'Smartphones accessories, audio devices, smart home gadgets, and wearable technology.',
      icon: Smartphone,
    },
    {
      name: 'Apparel & Textiles',
      description: 'Clothing for men, women, and children, plus activewear, uniforms, and home textiles.',
      icon: Shirt,
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, kitchenware, outdoor equipment, and home decor items.',
      icon: Home,
    },
    {
      name: 'Hardware & Tools',
      description: 'Hand tools, power tools, building materials, and hardware components.',
      icon: Wrench,
    },
    {
      name: 'Packaging & Print',
      description: 'Custom boxes, bags, labels, and promotional printing materials.',
      icon: Package,
    },
    {
      name: 'Office & Business',
      description: 'Office supplies, corporate gifts, exhibition materials, and commercial equipment.',
      icon: Briefcase,
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Products We Source</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              With access to thousands of verified factories across China's major manufacturing hubs, we can source almost any product.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <category.icon className="h-12 w-12 text-blue-600 mb-6" aria-hidden="true" />
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{category.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center bg-blue-50 rounded-3xl p-12 lg:p-24 border">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">Don't see your product category?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                We handle custom sourcing requests all the time. Contact us with your specific needs.
            </p>
            <div className="mt-10">
                <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Contact Us
                </a>
            </div>
         </div>
      </div>
    </div>
  )
}