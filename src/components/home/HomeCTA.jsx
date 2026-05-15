import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-sky">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          寻找适合您的医疗器械解决方案？
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          我们的专业团队随时为您提供产品咨询、方案定制和技术支持服务
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-colors shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
            立即咨询
          </Link>
          <a
            href="tel:4008889999"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            400-888-9999
          </a>
        </div>
      </div>
    </section>
  )
}
