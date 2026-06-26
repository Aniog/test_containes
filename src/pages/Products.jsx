import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { productCategories } from '@/data/content';

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We source across a wide range of categories from China&apos;s major manufacturing hubs, including Shenzhen, Guangzhou, Shanghai, Zhejiang, and more.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-ss-border p-6 hover:shadow-md hover:border-ss-blue/30 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-ss-blue" />
                </div>
                <h3 className="text-lg font-semibold text-ss-text mb-2">{cat.title}</h3>
                <p className="text-sm text-ss-body leading-relaxed mb-4">{cat.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-ss-blue hover:text-ss-blue-light transition-colors"
                >
                  Source this category <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="py-16 bg-ss-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ss-text tracking-tight mb-4">
                Can&apos;t Find Your Product Category?
              </h2>
              <p className="text-base text-ss-body leading-relaxed mb-6">
                We are not limited to the categories listed above. China has specialized manufacturing 
                clusters for virtually every industry. Contact us with your product requirements 
                and we will assess the feasibility and find the right suppliers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-ss-body">
                  <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-3 shrink-0" />
                  Custom product sourcing for unique requirements
                </li>
                <li className="flex items-start text-sm text-ss-body">
                  <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-3 shrink-0" />
                  OEM and ODM manufacturing support
                </li>
                <li className="flex items-start text-sm text-ss-body">
                  <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-3 shrink-0" />
                  Prototype and sample development coordination
                </li>
                <li className="flex items-start text-sm text-ss-body">
                  <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-3 shrink-0" />
                  Custom packaging and branding services
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-ss-orange text-white text-sm font-semibold rounded-lg hover:bg-ss-orange-light transition-colors"
              >
                Inquire About Your Product <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-ss-blue-dark text-white rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">China Manufacturing Hubs We Cover</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm">Shenzhen</p>
                  <p className="text-xs text-blue-200">Electronics, hardware</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Guangzhou</p>
                  <p className="text-xs text-blue-200">Apparel, home goods</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Yiwu</p>
                  <p className="text-xs text-blue-200">Small commodities, toys</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Zhejiang</p>
                  <p className="text-xs text-blue-200">Textiles, hardware</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Shanghai</p>
                  <p className="text-xs text-blue-200">Industrial, chemicals</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Foshan</p>
                  <p className="text-xs text-blue-200">Furniture, ceramics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}