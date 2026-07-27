import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, cables, wire harnesses, power supplies, LEDs, sensors, consumer electronics, and IoT devices.',
    items: ['Printed Circuit Boards (PCB)', 'Semiconductors & ICs', 'Connectors & Cable Assemblies', 'Power Supplies & Adapters', 'LED Lighting Components', 'Sensors & Modules', 'Consumer Electronics', 'IoT & Smart Devices'],
    imgId: 'prod-detail-electronics-r9s0t1',
  },
  {
    title: 'Industrial Machinery & Parts',
    desc: 'CNC machined parts, molds, dies, bearings, hydraulic components, pneumatic parts, automation equipment, and industrial tools.',
    items: ['CNC Machined Parts', 'Injection Molds & Dies', 'Bearings & Bushings', 'Hydraulic Components', 'Pneumatic Parts', 'Automation Equipment', 'Conveyor Systems', 'Industrial Tools'],
    imgId: 'prod-detail-machinery-u2v3w4',
  },
  {
    title: 'Metal Parts & Fabrication',
    desc: 'Sheet metal fabrication, stamping, casting (sand, investment, die), welding assemblies, powder coating, and surface finishing.',
    items: ['Sheet Metal Fabrication', 'Metal Stamping Parts', 'Die Casting Components', 'Sand & Investment Casting', 'Welding Assemblies', 'CNC Turning & Milling', 'Powder Coating Services', 'Surface Finishing'],
    imgId: 'prod-detail-metal-x5y6z7',
  },
  {
    title: 'Plastic & Rubber Products',
    desc: 'Injection molded parts, extrusion profiles, blow molding, silicone products, rubber gaskets, seals, and O-rings.',
    items: ['Plastic Injection Molding', 'Extrusion Profiles', 'Blow Molded Products', 'Silicone Rubber Parts', 'Rubber Gaskets & Seals', 'O-Rings', 'Overmolding', 'Plastic Assembly'],
    imgId: 'prod-detail-plastic-a8b9c0',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Garments, sportswear, home textiles, technical fabrics, bags, backpacks, promotional textiles, and accessories.',
    items: ['Casual & Formal Wear', 'Sportswear & Activewear', 'Home Textiles', 'Technical & Industrial Fabrics', 'Bags & Backpacks', 'Promotional Textiles', 'Towels & Linens', 'Fashion Accessories'],
    imgId: 'prod-detail-textiles-d1e2f3',
  },
  {
    title: 'Home & Kitchen Products',
    desc: 'Housewares, kitchenware, cookware, storage solutions, furniture hardware, bathroom accessories, and home organization.',
    items: ['Kitchenware & Cookware', 'Storage & Organization', 'Furniture Hardware', 'Bathroom Accessories', 'Home Decor Items', 'Cleaning Tools', 'Pet Supplies', 'Garden Tools'],
    imgId: 'prod-detail-home-g4h5i6',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, paper bags, labels, flexible packaging, corrugated cartons, display stands, and promotional print materials.',
    items: ['Custom Paper Boxes', 'Corrugated Cartons', 'Flexible Packaging', 'Labels & Stickers', 'Paper & Plastic Bags', 'Display Stands', 'Gift Packaging', 'Promotional Print'],
    imgId: 'prod-detail-packaging-j7k8l9',
  },
  {
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, EV components, motorcycle parts, car accessories, tooling, and automotive electronics.',
    items: ['Aftermarket Auto Parts', 'EV Components', 'Motorcycle Parts', 'Car Accessories', 'Automotive Tooling', 'Brake System Parts', 'Engine Components', 'Automotive Electronics'],
    imgId: 'prod-detail-auto-m0n1o2',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We have experience across diverse industries. Browse our product categories to see how we can help.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/6] bg-neutral-200 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-cat-${cat.title.replace(/[\s&]+/g, '-').replace(/--+/g, '-').toLowerCase()}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span className="hidden" id={`prod-cat-${cat.title.replace(/[\s&]+/g, '-').replace(/--+/g, '-').toLowerCase()}`}>
                    {cat.title} products China manufacturing
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-white border border-neutral-200 text-neutral-600 px-2.5 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Don&apos;t See Your Product?</h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            We source across many more categories. Contact us with your requirements and we&apos;ll let you know how we can help.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}