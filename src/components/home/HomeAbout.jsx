import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  '国家高新技术企业认定',
  'ISO 13485 质量管理体系认证',
  'CE欧盟医疗器械认证',
  '国家医疗器械生产许可证',
  '上海市重点企业研究院',
]

export default function HomeAbout() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="星闪医疗器械公司"
                className="w-full h-[420px] object-cover"
                data-strk-img-id="about-img-g7h8i9"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-brand-blue text-white p-5 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">2003</div>
              <div className="text-blue-200 text-sm">年创立</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              关于我们
            </div>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              二十年专注<br />医疗器械领域
            </h2>
            <p id="about-desc" className="text-brand-text leading-relaxed mb-6">
              星闪医疗器械有限公司成立于2003年，总部位于上海张江高科技园区。公司专注于高端医疗器械的研发、生产和销售，产品涵盖监护设备、影像设备、手术器械、康复设备等多个领域。
            </p>
            <p className="text-brand-text leading-relaxed mb-8">
              经过二十余年的发展，公司已成为国内领先的医疗器械制造商，产品销往全国31个省市，并出口至东南亚、中东等地区，服务超过3000家医疗机构。
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-brand-dark text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-7 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors"
            >
              了解更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
