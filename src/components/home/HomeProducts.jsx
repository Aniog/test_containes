const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, cables, displays, sensors, IoT modules',
    imgId: 'electronics-components-d4e5f6',
  },
  {
    title: 'Industrial Machinery',
    desc: 'CNC parts, motors, pumps, valves, bearings, automation equipment, tooling',
    imgId: 'industrial-machinery-g7h8i9',
  },
  {
    title: 'Home & Kitchen Appliances',
    desc: 'Small appliances, cookware, home organization, smart home devices, kitchen gadgets',
    imgId: 'home-kitchen-appliances-j0k1l2',
  },
  {
    title: 'Furniture & Home Decor',
    desc: 'Indoor/outdoor furniture, lighting, textiles, decorative items, storage solutions',
    imgId: 'furniture-home-decor-m3n4o5',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, sportswear, bags, accessories, promotional wear, uniforms',
    imgId: 'textiles-apparel-p6q7r8',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, paper bags, flexible packaging, POS displays, cartons',
    imgId: 'packaging-printing-s9t0u1',
  },
  {
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, construction hardware, safety equipment',
    imgId: 'hardware-tools-v2w3x4',
  },
  {
    title: 'Plastics & Rubber Products',
    desc: 'Injection molding, extrusion, silicone products, rubber seals, plastic packaging',
    imgId: 'plastics-rubber-products-y5z6a7',
  },
];

export default function HomeProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We have experience across a wide range of industries and product categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[home-product-desc-${cat.imgId}] [home-product-title-${cat.imgId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
              <div className="hidden" id={`home-product-title-${cat.imgId}`}>{cat.title}</div>
              <div className="hidden" id={`home-product-desc-${cat.imgId}`}>{cat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
