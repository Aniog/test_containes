import React from 'react'
import Process from '@/components/home/Process'
import InquiryForm from '@/components/home/InquiryForm'

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">How It Works</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">A transparent and professional workflow designed for offshore buyers.</p>
      </div>
      <Process />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 lg:flex items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why our process is different</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">✓</div>
                <div>
                  <h3 className="font-bold">Real-time Dashboard</h3>
                  <p className="text-slate-600 text-sm">Follow your order progress, QC reports, and shipping status through our client portal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">✓</div>
                <div>
                  <h3 className="font-bold">On-site Presence</h3>
                  <p className="text-slate-600 text-sm">We don't just call factories; we visit them. We are your eyes and ears on the factory floor.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">✓</div>
                <div>
                  <h3 className="font-bold">No Hidden Fees</h3>
                  <p className="text-slate-600 text-sm">Your quote includes everything. No surprise costs or "tea money" requests.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img 
              data-strk-img-id="how-it-works-visual"
              data-strk-img="China sourcing agent professional office meeting factory tour"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
              alt="Our Process"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
      <InquiryForm />
    </div>
  )
}
EOF && cat > src/pages/Products.jsx <<EOF
import React from 'react'
import KeyProducts from '@/components/home/KeyProducts'
import InquiryForm from '@/components/home/InquiryForm'

export default function Products() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Products We Source</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">Expertise across 100+ categories. From consumer goods to industrial equipment.</p>
      </div>
      <KeyProducts />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Can't find your category?</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">We have a vast network of suppliers in almost every industry in China. Tell us what you need and we will find it.</p>
        <InquiryForm />
      </div>
    </div>
  )
}
EOF && cat > src/pages/CaseStudies.jsx <<EOF
import React from 'react'
import InquiryForm from '@/components/home/InquiryForm'

export default function CaseStudies() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Case Studies</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">Real success stories from our global clients.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-sm">
             <img 
               data-strk-img-id="case-1"
               data-strk-img="European furniture retailer China sourcing warehouse"
               data-strk-img-ratio="16x9"
               data-strk-img-width="600"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
               alt="Case Study"
             />
             <div className="p-8">
               <span className="text-accent font-bold uppercase text-xs tracking-wider">Furniture Industry</span>
               <h3 className="text-2xl font-bold mt-2 mb-4">Reduced costs by 22% for UK Retailer</h3>
               <p className="text-slate-600 mb-6">We helped a major UK furniture retailer bypass middlemen and source directly from specialized factories in Foshan.</p>
             </div>
          </div>
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-sm">
             <img 
               data-strk-img-id="case-2"
               data-strk-img="US electronics startup product production line"
               data-strk-img-ratio="16x9"
               data-strk-img-width="600"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"
               alt="Case Study"
             />
             <div className="p-8">
               <span className="text-accent font-bold uppercase text-xs tracking-wider">Electronics Industry</span>
               <h3 className="text-2xl font-bold mt-2 mb-4">Quality Improvement for US Tech Startup</h3>
               <p className="text-slate-600 mb-6">Our on-site QC team reduced the defect rate from 8% to 0.5% for an innovative Bluetooth speaker line.</p>
             </div>
          </div>
        </div>
      </div>
      <InquiryForm />
    </div>
  )
}
EOF && cat > src/pages/Blog.jsx <<EOF
import React from 'react'
import InquiryForm from '@/components/home/InquiryForm'

export default function Blog() {
  return (
    <div className="bg-white">
      <div className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Insights & Resources</h1>
        <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">Tips and guides on how to source from China like a pro.</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
               <img data-strk-img-id="blog-1" data-strk-img="Importing from China guide business documents" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="Blog" className="rounded-xl" />
               <h3 className="text-xl font-bold line-clamp-2">How to verify a China factory in 2024</h3>
               <p className="text-slate-600 text-sm line-clamp-3">Verification is more than just checking a business license. Learn the 5 pillars of factory legitimacy.</p>
            </div>
            <div className="space-y-4">
               <img data-strk-img-id="blog-2" data-strk-img="Shipping container port logistics" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="Blog" className="rounded-xl" />
               <h3 className="text-xl font-bold line-clamp-2">Sea Freight vs Air Freight: Choosing the right method</h3>
               <p className="text-slate-600 text-sm line-clamp-3">Cost is important, but timing and reliability matter too. Here is how to choose.</p>
            </div>
            <div className="space-y-4">
               <img data-strk-img-id="blog-3" data-strk-img="Chinese New Year business impact" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E" alt="Blog" className="rounded-xl" />
               <h3 className="text-xl font-bold line-clamp-2">Preparing for Chinese New Year shutdown</h3>
               <p className="text-slate-600 text-sm line-clamp-3">Plan ahead to avoid production delays during China's most important holiday.</p>
            </div>
         </div>
      </div>
      <InquiryForm />
    </div>
  )
}
