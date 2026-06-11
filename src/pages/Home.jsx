import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Settings, Award, Clock, ChevronRight } from 'lucide-react'
import HomeHero from '../components/home/HomeHero.jsx'
import ProductShowcase from '../components/home/ProductShowcase.jsx'
import Features from '../components/home/Features.jsx'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Features />
      <ProductShowcase />
      <CTASection />
    </div>
  )
}

function CTASection() {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your Fabrication Process?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Get in touch with our team of experts to find the perfect folding machine for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
