import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      title: "Signature",
      desc: "Our foundational pieces. Timeless silhouettes designed for everyday wear.",
      count: "12 pieces",
    },
    {
      title: "Lumina",
      desc: "Crystal-embellished designs that catch the light. For moments that matter.",
      count: "8 pieces",
    },
    {
      title: "Heirloom",
      desc: "Statement pieces meant to be treasured and passed down through generations.",
      count: "5 pieces",
    },
  ]

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[3px] text-[#8B7355] mb-3">CURATED WITH INTENTION</p>
        <h1 className="font-serif text-5xl tracking-[1px]">Collections</h1>
      </div>

      <div className="space-y-8">
        {collections.map((col, i) => (
          <Link key={i} to="/shop" className="block group">
            <div className="grid md:grid-cols-5 gap-8 items-center border border-[#D4C5B5] p-8 md:p-12 rounded hover:border-[#8B7355] transition-colors">
              <div className="md:col-span-3">
                <h2 className="font-serif text-4xl tracking-[1px] mb-4 group-hover:text-[#8B7355] transition-colors">{col.title}</h2>
                <p className="text-[#6B635C] leading-relaxed mb-4">{col.desc}</p>
                <span className="text-sm tracking-[1.5px] text-[#8B7355]">{col.count}</span>
              </div>
              <div className="md:col-span-2 aspect-video bg-[#EDE6D9] rounded" />
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/shop" className="btn-outline">EXPLORE ALL PIECES</Link>
      </div>
    </div>
  )
}

export default Collections
