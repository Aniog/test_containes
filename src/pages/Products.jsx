import React, { useEffect, useRef } from 'react'
import { ArrowRight, Box, Ruler, Weight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    {
      id: 'df-4000',
      name: 'Double folding machine DF-4000',
      category: 'Elite Series',
      desc: 'Our flagship double folder. Dual synchronous drive system for maximum speed and precision.',
      specs: { capacity: '4.0mm Steel', width: '4000mm', weight: '8500kg' },
      img: 'industrial double folding machine sheet metal heavy duty'
    },
    {
      id: 'smf-classic',
      name: 'Sheet Metal Folding Machine Classic',
      category: 'Standard Series',
      desc: 'Versatile sheet metal folder suitable for architectural profiles and general fabrication.',
      specs: { capacity: '2.5mm Steel', width: '3000mm', weight: '4200kg' },
      img: 'sheet metal folder machine professional workshop'
    },
    {
      id: 'mf-compact',
      name: 'Metal Folding Machine Compact',
      category: 'Specialty Series',
      desc: 'Space-saving metal folder designed for small to medium fabrication shops without compromising quality.',
      specs: { capacity: '1.5mm Steel', width: '2000mm', weight: '2100kg' },
      img: 'compact metal folder machine industrial shop'
    },
    {
      id: 'hsmf-ultra',
      name: 'Hydraulic Sheet Metal Folding Machine',
      category: 'Power Series',
      desc: 'Heavy-duty hydraulic metal folding machine for thick gauge material processing.',
      specs: { capacity: '6.0mm Steel', width: '3100mm', weight: '12000kg' },
      img: 'heavy hydraulic sheet metal folding machine industrial'
    }
  ]

  return (
    <div className="py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <span className="text-[#d4af37] font-bold tracking-widest text-sm uppercase block mb-4">Product Catalog</span>
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">Our Machinery. <br /><span className="text-slate-400">Your Competitive Edge.</span></h1>
          <p className="text-slate-600 text-lg">
            From heavy-duty sheet metal folders to precision double folding machines, 
            our lineup is built to handle the toughest industrial challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {products.map((product, index) => (
            <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img 
                    data-strk-img-id={`prod-img-${product.id}`}
                    data-strk-img={product.img}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded inline-block mb-4">
                  {product.category}
                </span>
                <h2 className="text-3xl font-serif font-black mb-4">{product.name}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {product.desc}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-lg">
                    <Box className="w-4 h-4 text-[#d4af37] mb-2" />
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Cap</span>
                    <span className="text-xs font-black">{product.specs.capacity}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-lg">
                    <Ruler className="w-4 h-4 text-[#d4af37] mb-2" />
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Width</span>
                    <span className="text-xs font-black">{product.specs.width}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white border border-slate-100 rounded-lg">
                    <Weight className="w-4 h-4 text-[#d4af37] mb-2" />
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Weight</span>
                    <span className="text-xs font-black">{product.specs.weight}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-[#d4af37] hover:text-slate-900 transition-all">
                    Request Specs <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border border-slate-200 px-6 py-3 rounded-md text-sm font-bold hover:bg-slate-50 transition-all">
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-32 py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic mb-8 opacity-90">
              "The ARTITECT Double Folding machines haven't just increased our throughput; 
              they've fundamentally improved the quality of our finished products."
            </p>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-6" />
            <p className="font-bold uppercase tracking-widest text-[#d4af37]">Henrik Vogt</p>
            <p className="text-slate-400 text-sm">CEO, Elite Fabrication Group GmbH</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
