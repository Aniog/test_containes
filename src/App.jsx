import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

// Placeholder pages for others
const Products = () => (
    <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Products We Source</h1>
        <p className="text-gray-500 italic max-w-2xl mx-auto px-4">From consumer electronics to industrial machinery, we cover 15+ major product categories across China's key manufacturing regions.</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
            {['Electronics', 'Home & Kitchen', 'Beauty & Care', 'Auto Parts', 'Machinery', 'Furniture', 'Toys', 'Sports'].map(p => (
                <div key={p} className="bg-gray-50 p-12 rounded-xl border border-dashed text-gray-400 font-bold">{p}</div>
            ))}
        </div>
    </div>
);

const CaseStudies = () => (
    <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-gray-500 italic max-w-2xl mx-auto px-4">Real stories of how we helped clients achieve 30% cost reduction and 0% defect rates.</p>
        <div className="mt-12 space-y-8 max-w-5xl mx-auto px-4 text-left">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white border rounded-2xl p-8 shadow-sm flex flex-col md:row items-center gap-8">
                    <div className="md:w-1/3 w-full h-48 bg-gray-100 rounded-xl" />
                    <div className="md:w-2/3">
                        <div className="text-secondary font-bold text-xs uppercase mb-2">Success Story 0{i}</div>
                        <h3 className="text-2xl font-bold mb-3">Project Title for Industrial Client {i}</h3>
                        <p className="text-gray-500 mb-4">Optimized supply chain for a major retailer by vetting 12 factories and implementing a custom QC protocol.</p>
                        <div className="flex gap-4">
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-bold">-22% Costs</span>
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs font-bold">+15% Speed</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Blog = () => (
    <div className="py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Sourcing Blog</h1>
        <p className="text-gray-500 italic max-w-2xl mx-auto px-4">Insights, tips, and news about manufacturing and supply chain in China.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto text-left">
            {[1, 2, 3].map(i => (
                <div key={i} className="bg-white border rounded-2xl overflow-hidden group">
                    <div className="h-48 bg-gray-100" />
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-3 group-hover:text-secondary transition">Top 5 Mistakes When Importing from China</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">Avoid these common pitfalls to save time and money in your sourcing journey...</p>
                        <span className="text-xs text-gray-400">June 28, 2026 • 5 min read</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
