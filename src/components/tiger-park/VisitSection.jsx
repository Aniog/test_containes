const schedule = [
  { day: '周一至周五', time: '09:00 – 17:00', note: '工作日' },
  { day: '周六至周日', time: '08:30 – 18:00', note: '节假日延长' },
  { day: '法定节假日', time: '08:00 – 19:00', note: '特别开放' },
]

const tickets = [
  { type: '成人票', price: '¥120', desc: '18岁以上' },
  { type: '儿童票', price: '¥60', desc: '3–17岁' },
  { type: '老年票', price: '¥60', desc: '65岁以上' },
  { type: '家庭套票', price: '¥280', desc: '2大2小' },
]

export default function VisitSection() {
  return (
    <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm tracking-widest uppercase font-medium">规划您的旅程</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            参观信息
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opening hours */}
          <div className="rounded-2xl border border-neutral-800 p-8" style={{ backgroundColor: '#111111' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 text-sm">🕐</span>
              开放时间
            </h3>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.day} className="flex items-center justify-between py-3 border-b border-neutral-800 last:border-0">
                  <div>
                    <div className="text-white font-medium text-sm">{item.day}</div>
                    <div className="text-neutral-500 text-xs mt-0.5">{item.note}</div>
                  </div>
                  <div className="text-amber-400 font-semibold text-sm">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tickets */}
          <div className="rounded-2xl border border-neutral-800 p-8" style={{ backgroundColor: '#111111' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 text-sm">🎫</span>
              门票价格
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.type}
                  className="p-4 rounded-xl border border-neutral-700 hover:border-amber-600/40 transition-colors"
                  style={{ backgroundColor: '#0a0a0a' }}
                >
                  <div className="text-2xl font-bold text-amber-500 mb-1">{ticket.price}</div>
                  <div className="text-white text-sm font-medium">{ticket.type}</div>
                  <div className="text-neutral-500 text-xs mt-0.5">{ticket.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border border-neutral-800 p-8" style={{ backgroundColor: '#111111' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 text-sm">📍</span>
              交通指南
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0">🚇</span>
                <div>
                  <div className="text-white font-medium">地铁</div>
                  <div className="text-neutral-400 mt-0.5">乘坐3号线至"动物园站"，B出口步行5分钟</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0">🚌</span>
                <div>
                  <div className="text-white font-medium">公交</div>
                  <div className="text-neutral-400 mt-0.5">乘坐108路、306路至"老虎公园站"下车</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0">🚗</span>
                <div>
                  <div className="text-white font-medium">自驾</div>
                  <div className="text-neutral-400 mt-0.5">园区内设有大型停车场，可停放500辆车</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-neutral-800 p-8" style={{ backgroundColor: '#111111' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 text-sm">📞</span>
              联系我们
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-amber-500 shrink-0">📞</span>
                <div>
                  <div className="text-neutral-500 text-xs mb-0.5">服务热线</div>
                  <div className="text-white font-medium">400-888-0088</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 shrink-0">✉️</span>
                <div>
                  <div className="text-neutral-500 text-xs mb-0.5">电子邮件</div>
                  <div className="text-white font-medium">info@tigerpark.cn</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 shrink-0">📍</span>
                <div>
                  <div className="text-neutral-500 text-xs mb-0.5">地址</div>
                  <div className="text-white font-medium">北京市朝阳区野生动物保护区路88号</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
