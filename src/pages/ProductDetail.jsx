import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ChevronRight, Ruler, Wrench, Zap } from 'lucide-react'
import { fetchProductById } from '../api/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id)
        setProduct(data)
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [id])

  useEffect(() => {
    if (product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product])

  if (loading) return <div className="min-h-screen py-24 flex items-center justify-center">Loading machinery specifications...</div>
  if (!product) return <div className="min-h-screen py-24 flex items-center justify-center">Product not found.</div>

  const details = product.data

  return (
    <div ref={containerRef} className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <div className="sticky top-28">
              <img
                data-strk-img-id={`detail-img-${product.id}`}
                data-strk-img={`[detail-name] industrial machinery`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={details.name}
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-square bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                     <img 
                       data-strk-img-id={`detail-thumb-${product.id}-${i}`}
                       data-strk-img={`[detail-name] detail view ${i}`}
                       data-strk-img-ratio="1x1"
                       data-strk-img-width="300"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                     />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
              {details.category}
            </div>
            <h1 id="detail-name" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {details.name}
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              {details.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Ruler className="w-5 h-5 text-blue-600 mb-3" />
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Max Width</p>
                <p className="text-lg font-bold text-slate-900">{details.specifications?.maxWidth || '3,200 mm'}</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Zap className="w-5 h-5 text-blue-600 mb-3" />
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Max Sheet</p>
                <p className="text-lg font-bold text-slate-900">{details.specifications?.maxThickness || '4.0 mm'}</p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Wrench className="w-5 h-5 mr-3 text-blue-600" />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.features?.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              state={{ productName: details.name }}
              className="w-full inline-flex items-center justify-center px-8 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl group"
            >
              Request Technical Datasheet & Quote
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <section className="border-t border-slate-100 pt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
             {Object.entries(details.specifications || {}).map(([key, value]) => (
               <div key={key} className="flex justify-between py-4 border-b border-slate-50">
                 <span className="text-slate-500 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                 <span className="text-slate-900 font-bold">{value}</span>
               </div>
             ))}
             <div className="flex justify-between py-4 border-b border-slate-50">
               <span className="text-slate-500 font-medium">Drive System</span>
               <span className="text-slate-900 font-bold">Heidenhain CNC</span>
             </div>
             <div className="flex justify-between py-4 border-b border-slate-50">
               <span className="text-slate-500 font-medium">Clamping Pressure</span>
               <span className="text-slate-900 font-bold">Variable 0-100t</span>
             </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
