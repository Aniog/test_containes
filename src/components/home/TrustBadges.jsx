import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: "全球免费配送",
    desc: "订单满¥199享全球免费配送，快速送达",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "官方正品保证",
    desc: "所有商品均为FIFA官方授权，假一赔十",
  },
  {
    icon: <RotateCcw className="w-7 h-7" />,
    title: "30天无忧退换",
    desc: "收到商品30天内，支持无理由退换货",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "7×24小时客服",
    desc: "专业客服团队全天候为您提供服务",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 px-4 md:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400">
              {f.icon}
            </div>
            <h4 className="text-white font-bold text-sm md:text-base">{f.title}</h4>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
