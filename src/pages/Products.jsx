import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check, Ruler, Gauge, Layers, Settings } from 'lucide-react'

const productCategories = [
  {
    id: 'double-folding-machines',
    title: 'Double Folding Machines',
    subtitle: 'Precision double folding for high-volume production',
    description: 'Our double folding machines are engineered for shops that demand the highest accuracy and repeatability. Featuring CNC backgauges, programmable bend sequences, and robust steel frames, these machines deliver flawless folds on sheet metal up to 3200mm in length.',
    imgId: 'prod-cat-double-fold-a1b2',
    titleId: 'prod-cat-double-title',
    descId: 'prod-cat-double-desc',
    specs: [
      'Working length: 2000mm - 3200mm',
      'Material thickness: up to 1.5mm mild steel',
      'CNC-controlled backgauge with 0.01mm resolution',
      'Automatic clamping beam with adjustable pressure',
      'Programmable bend angle with digital display',
      'Heavy-duty welded steel frame construction',
    ],
    applications: ['HVAC ductwork', 'Architectural cladding', 'Automotive panels', 'Electrical enclosures'],
  },
  {
    id: 'sheet-metal-folders',
    title: 'Sheet Metal Folders',
    subtitle: 'Versatile manual and semi-automatic solutions',
    description: 'Our sheet metal folders combine rugged construction with user-friendly operation. Available in manual and semi-automatic configurations, these machines are perfect for workshops that need flexibility across a wide range of folding tasks.',
    imgId: 'prod-cat-sheet-folder-c3d4',
    titleId: 'prod-cat-sheet-title',
    descId: 'prod-cat-sheet-desc',
    specs: [
      'Working length: 1250mm - 2500mm',
      'Material thickness: up to 2.0mm mild steel',
      'Segmented clamping beam for box and pan folding',
      'Counterbalanced folding beam for easy operation',
      'Adjustable folding angle stop',
      'Floor-standing design with leveling feet',
    ],
    applications: ['General sheet metal work', 'Roofing and flashing', 'Custom fabrication', 'Prototype development'],
  },
  {
    id: 'metal-folding-machines',
    title: 'Metal Folding Machines',
    subtitle: 'Heavy-duty industrial folding workhorses',
    description: 'When your production demands the utmost in power and durability, our heavy-duty metal folding machines deliver. With hydraulic drive systems and massive steel frames, these machines handle the thickest materials and longest runs with ease.',
    imgId: 'prod-cat-metal-fold-e5f6',
    titleId: 'prod-cat-metal-title',
    descId: 'prod-cat-metal-desc',
    specs: [
      'Working length: 2500mm - 4000mm',
      'Material thickness: up to 3.0mm mild steel',
      'Hydraulic clamping and folding drive',
      'Industrial-grade PLC control system',
      'Automatic tool change capability',
      'Integrated safety light curtains',
    ],
    applications: ['Heavy fabrication', 'Shipbuilding', 'Structural steel', 'Industrial equipment manufacturing'],
  },
  {
    id: 'metal-folders',
    title: 'Metal Folders',
    subtitle: 'Compact and efficient folding solutions',
    description: 'Our standard metal folders offer an ideal balance of performance and value. Designed for everyday use in busy workshops, these machines provide reliable, accurate folding for a wide range of sheet metal applications.',
    imgId: 'prod-cat-metal-folder-g7h8',
    titleId: 'prod-cat-metal-folder-title',
    descId: 'prod-cat-metal-folder-desc',
    specs: [
      'Working length: 1000mm - 2000mm',
      'Material thickness: up to 1.5mm mild steel',
      'Manual clamping with quick-release mechanism',
      'Precision-ground folding beam',
      'Compact footprint for space-constrained shops',
      'Available in bench-top and floor-standing models',
    ],
    applications: ['Small workshops', 'Educational facilities', 'Maintenance departments', 'Light fabrication'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
            Product Catalog
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Folding Machines
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our complete range of precision metal folding machines. Each model is built to order with your specific requirements in mind.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, idx) => (
              <div
                key={category.id}
                id={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
                    {category.subtitle}
                  </span>
                  <h2 id={category.titleId} className="mt-2 text-2xl md:text-3xl font-bold text-brand-primary-dark tracking-tight">
                    {category.title}
                  </h2>
                  <p id={category.descId} className="mt-4 text-[#5A6278] leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2 text-sm text-[#5A6278]">
                        <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-brand-primary-dark mb-2 flex items-center gap-2">
                      <Settings className="w-4 h-4 text-brand-accent" />
                      Common Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-brand-primary-light text-brand-primary text-xs font-medium rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                    <div
                      className="w-full h-full"
                      data-strk-bg-id={category.imgId}
                      data-strk-bg={`[${category.descId}] [${category.titleId}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-dark tracking-tight">
              Technical Specifications at a Glance
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">Model Series</th>
                  <th className="text-left px-6 py-4 font-semibold">Max Length</th>
                  <th className="text-left px-6 py-4 font-semibold">Max Thickness</th>
                  <th className="text-left px-6 py-4 font-semibold">Drive Type</th>
                  <th className="text-left px-6 py-4 font-semibold">Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { model: 'DF-2000', length: '2000mm', thickness: '1.5mm Steel', drive: 'Electric', control: 'CNC' },
                  { model: 'DF-3200', length: '3200mm', thickness: '1.5mm Steel', drive: 'Electric', control: 'CNC' },
                  { model: 'SF-1250', length: '1250mm', thickness: '2.0mm Steel', drive: 'Manual', control: 'Manual' },
                  { model: 'SF-2500', length: '2500mm', thickness: '2.0mm Steel', drive: 'Semi-Auto', control: 'Digital' },
                  { model: 'MF-2500', length: '2500mm', thickness: '3.0mm Steel', drive: 'Hydraulic', control: 'PLC' },
                  { model: 'MF-4000', length: '4000mm', thickness: '3.0mm Steel', drive: 'Hydraulic', control: 'PLC' },
                  { model: 'MF-1000', length: '1000mm', thickness: '1.5mm Steel', drive: 'Manual', control: 'Manual' },
                  { model: 'MF-2000', length: '2000mm', thickness: '1.5mm Steel', drive: 'Manual', control: 'Manual' },
                ].map((row) => (
                  <tr key={row.model} className="hover:bg-brand-primary-light/30 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-brand-primary-dark">{row.model}</td>
                    <td className="px-6 py-3.5 text-[#5A6278]">{row.length}</td>
                    <td className="px-6 py-3.5 text-[#5A6278]">{row.thickness}</td>
                    <td className="px-6 py-3.5 text-[#5A6278]">{row.drive}</td>
                    <td className="px-6 py-3.5 text-[#5A6278]">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}