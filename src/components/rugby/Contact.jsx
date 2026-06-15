import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: '地址', value: '北京市朝阳区体育场路1号' },
  { icon: Phone, label: '电话', value: '+86 010-1234-5678' },
  { icon: Mail, label: '邮箱', value: 'info@abrugbycd.com' },
  { icon: Clock, label: '训练时间', value: '周一至周五 18:00 - 21:00' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-rugby-green">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-block bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              联系我们
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              加入<span className="text-rugby-gold">AB橄榄球CD</span>
            </h2>
            <p className="text-green-100 leading-relaxed mb-8 text-base">
              无论你是想加入球队、观看比赛，还是寻求赞助合作，我们都欢迎你的联系。一起为橄榄球运动的发展贡献力量！
            </p>

            <div className="flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-xl p-2.5 shrink-0">
                    <Icon className="w-5 h-5 text-rugby-gold" />
                  </div>
                  <div>
                    <div className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-0.5">{label}</div>
                    <div className="text-white font-medium text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-7 md:p-8 shadow-2xl">
            <h3 className="text-rugby-dark font-bold text-xl mb-6">发送消息</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1.5">姓名</label>
                  <input
                    type="text"
                    placeholder="你的姓名"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-rugby-green focus:ring-1 focus:ring-rugby-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1.5">电话</label>
                  <input
                    type="tel"
                    placeholder="联系电话"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-rugby-green focus:ring-1 focus:ring-rugby-green transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1.5">邮箱</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-rugby-green focus:ring-1 focus:ring-rugby-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1.5">留言</label>
                <textarea
                  rows={4}
                  placeholder="请输入你的留言..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-rugby-green focus:ring-1 focus:ring-rugby-green transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-rugby-green text-white font-bold py-3 rounded-full hover:bg-rugby-green-light transition-colors text-sm"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
