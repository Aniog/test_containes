

import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const equipment = [
  {
    title: '羽毛球拍',
    desc: '现代羽毛球拍通常由碳纤维制成，重量约 75-95 克，拍框形状和磅数影响击球性能。',
    features: ['碳纤维材质', '重量适中', '高弹性拍杆'],
  },
  {
    title: '羽毛球',
    desc: '比赛用球由天然鹅毛制成，共有 16 根羽毛固定在软木底座上，飞行轨迹极佳。',
    features: ['天然鹅毛', '16根羽毛', '软木底座'],
  },
  {
    title: '球鞋',
    desc: '专业羽毛球鞋采用生胶大底提供抓地力，鞋底薄而柔软以保证场地感。',
    features: ['生胶大底', '缓震鞋垫', '侧向支撑'],
  },
  {
    title: '运动服',
    desc: '采用吸湿排汗面料制成，轻便透气，确保运动员在激烈对抗中保持舒适。',
    features: ['吸湿排汗', '轻量面料', '自由伸展'],
  },
]

export default function EquipmentSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="equipment" ref={containerRef} className="py-24 md:py-32 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-court-100 text-court-700 text-sm font-semibold rounded-full mb-6">
            装备指南
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            精选装备推荐
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            合适的装备能大幅提升您的球场表现。了解羽毛球设备的关键参数和选购要点。
          </p>
        </div>

        {/* Equipment cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div
                className="h-48 bg-gradient-to-br from-badminton-100 to-badminton-200 relative overflow-hidden"
                data-strk-bg-id={`equip-${idx}-bg-9f3k${idx}`}
                data-strk-bg={`[equip-title-${idx}]`}
                data-strk-bg-ratio="3x2"
                data-strk-bg-width="600"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 id={`equip-title-${idx}`} className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-badminton-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tips box */}
        <div className="mt-16 bg-gradient-to-r from-court-500 to-court-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">新手选购建议</h3>
              <p className="text-white/80 leading-relaxed">
                初学者建议选择重量适中（4U/G5）、中杆偏软的球拍，搭配 22-24 磅的拍线，
                这样更容易上手并减少受伤风险。随着技术提升再逐步升级装备。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


