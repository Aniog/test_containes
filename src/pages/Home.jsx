import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Shield, ClipboardCheck, Truck, ArrowRight, CheckCircle,
  AlertTriangle, Clock, DollarSign, Globe, Users, Award,
  MessageSquare, FileText, BarChart3, Star
} from 'lucide-react'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProducts from '@/components/home/HomeProducts'
import HomeProblems from '@/components/home/HomeProblems'
import HomeTrust from '@/components/home/HomeTrust'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeFAQ from '@/components/home/HomeFAQ'
import HomeInquiryForm from '@/components/home/HomeInquiryForm'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
              <Globe className="w-4 h-4" />
              Trusted by 500+ buyers in 40+ countries
            </div>
            <h1 id="hero-title" className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping from China. One partner for your entire sourcing process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-700">
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '2,000+', label: 'Projects Completed' },
              { value: '500+', label: 'Verified Suppliers' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <HomeServices />

      {/* Sourcing Process */}
      <HomeProcess />

      {/* Products We Source */}
      <HomeProducts />

      {/* Problems We Solve */}
      <HomeProblems />

      {/* Trust Points */}
      <HomeTrust />

      {/* Case Studies Preview */}
      <HomeCaseStudies />

      {/* FAQ */}
      <HomeFAQ />

      {/* CTA / Inquiry Form */}
      <HomeInquiryForm />
    </div>
  )
}
