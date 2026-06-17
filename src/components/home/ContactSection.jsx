import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

const contactInfo = [
  { icon: MapPin, label: '地址', value: '上海市浦东新区张江高科技园区' },
  { icon: Phone, label: '电话', value: '+86 400-888-9999' },
  { icon: Mail, label: '邮箱', value: 'hello@officehub.cn' },
  { icon: Clock, label: '服务时间', value: '周一至周六 9:00 - 21:00' },
]

const ContactSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="contact" ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">联系我们</p>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            有任何问题？随时联系我们
          </h2>
          <p id="contact-subtitle" className="text-slate-500 text-lg max-w-2xl mx-auto">
            无论是产品咨询、企业采购还是售后服务，我们的专业团队随时为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                alt="办公室联系"
                data-strk-img-id="contact-office-img-n1o2p3"
                data-strk-img="[contact-subtitle] [contact-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-52 object-cover"
              />
            </div>

            <div className="bg-[#1E3A5F] rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-semibold text-lg">联系方式</h3>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-slate-900 font-bold text-xl mb-6">填写联系表单</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
