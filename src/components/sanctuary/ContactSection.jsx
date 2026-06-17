import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: '地址', value: '云南省西双版纳傣族自治州景洪市野象谷路88号' },
  { icon: Phone, label: '电话', value: '+86 (0691) 888-9999' },
  { icon: Mail, label: '邮箱', value: 'info@huyuan-sanctuary.org' },
  { icon: Clock, label: '开放时间', value: '周二至周日 09:00–17:00（周一闭馆）' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            与我们取得联系
          </h2>
          <p className="text-stone-600 text-lg max-w-xl mx-auto">
            无论是参观预约、捐款咨询还是媒体合作，我们都期待听到您的声音。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-stone-800 font-medium">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-4 rounded-2xl overflow-hidden bg-stone-200 h-48 flex items-center justify-center">
              <div className="text-center text-stone-500">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                <p className="text-sm font-medium">云南省西双版纳</p>
                <p className="text-xs text-stone-400">虎缘救护站</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="bg-white border border-stone-200 rounded-3xl p-8 shadow-md flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">姓名</label>
                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">邮箱</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">主题</label>
              <select className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm bg-white">
                <option value="">请选择主题</option>
                <option>参观预约</option>
                <option>捐款咨询</option>
                <option>老虎认养</option>
                <option>媒体合作</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">留言</label>
              <textarea
                rows={5}
                placeholder="请输入您的留言..."
                className="w-full border border-stone-300 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              发送留言
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
