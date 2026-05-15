import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Globe, Lightbulb, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const milestones = [
  { year: '2003', event: '公司在上海张江高科技园区正式成立，专注医疗监护设备研发' },
  { year: '2007', event: '获得ISO 13485质量管理体系认证，产品通过CE欧盟认证' },
  { year: '2010', event: '产品线扩展至影像设备领域，推出首款数字化X射线系统' },
  { year: '2014', event: '建立全国销售服务网络，合作医院突破1000家' },
  { year: '2018', event: '成立AI医疗研究院，启动智能医疗器械研发项目' },
  { year: '2021', event: '荣获国家高新技术企业认定，专利数量突破200项' },
  { year: '2024', event: '发布新一代智能监护系统，合作医院超过3000家' },
]

const certs = [
  'ISO 13485 医疗器械质量管理体系',
  'CE 欧盟医疗器械认证',
  '国家医疗器械生产许可证',
  '国家高新技术企业认定',
  'FDA 美国食品药品监督管理局注册',
  '上海市重点企业研究院',
]

const leadership = [
  { name: '张明远', title: '董事长 & 创始人', desc: '医学工程博士，前复旦大学附属医院医疗设备主任，20年医疗器械行业经验。' },
  { name: '李晓华', title: '总经理', desc: 'MBA，曾任职于西门子医疗、飞利浦医疗，主导公司战略规划与市场拓展。' },
  { name: '王建国', title: '首席技术官', desc: '电子工程博士，主持研发项目50余项，持有个人专利30余项。' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-blue-300 text-sm mb-2">
            <Link to="/" className="hover:text-white">首页</Link> / 关于我们
          </div>
          <h1 id="about-page-title" className="text-4xl font-bold mb-3">关于我们</h1>
          <p id="about-page-subtitle" className="text-blue-200 max-w-2xl">
            二十年专注医疗器械领域，以技术创新和品质服务守护生命健康
          </p>
        </div>
      </section>

      {/* Company intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-4">公司简介</div>
            <h2 id="company-intro-title" className="text-3xl font-bold text-brand-navy mb-5">
              专业医疗器械制造商<br />服务全国医疗机构
            </h2>
            <p id="company-intro-desc" className="text-brand-text leading-relaxed mb-4">
              星闪医疗器械有限公司成立于2003年，总部位于上海张江高科技园区医疗器械产业基地。公司专注于高端医疗器械的研发、生产和销售，产品涵盖监护设备、影像设备、手术器械、康复设备、检验设备五大领域。
            </p>
            <p className="text-brand-text leading-relaxed mb-6">
              公司拥有员工2000余人，其中研发人员超过300人，建有国家级企业技术中心和博士后工作站。经过二十余年的发展，公司已成为国内领先的医疗器械制造商，产品销往全国31个省市，并出口至东南亚、中东、非洲等地区。
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: '2000+', label: '员工人数' },
                { icon: Globe, value: '30+', label: '出口国家' },
                { icon: Award, value: '200+', label: '专利技术' },
                { icon: Lightbulb, value: '300+', label: '研发人员' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 bg-brand-light rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-brand-navy font-bold text-xl">{value}</div>
                    <div className="text-brand-text text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="星闪医疗器械公司厂区"
              className="w-full h-[480px] object-cover"
              data-strk-img-id="about-factory-j1k2"
              data-strk-img="[company-intro-desc] [company-intro-title] [about-page-subtitle] [about-page-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">发展历程</div>
            <h2 className="text-3xl font-bold text-brand-navy">二十年发展足迹</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-brand-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-brand-border">
                      <div className="text-brand-blue font-bold text-lg mb-1">{m.year}</div>
                      <p className="text-brand-dark text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">资质认证</div>
            <h2 className="text-3xl font-bold text-brand-navy">权威认证 品质保障</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certs.map((cert) => (
              <div key={cert} className="flex items-center gap-3 p-5 border border-brand-border rounded-xl hover:border-brand-sky hover:shadow-sm transition-all">
                <CheckCircle className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-brand-dark font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">管理团队</div>
            <h2 id="team-title" className="text-3xl font-bold text-brand-navy">专业领导团队</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div key={person.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={person.name}
                  className="w-full h-56 object-cover object-top"
                  data-strk-img-id={`team-img-${person.name}`}
                  data-strk-img={`[team-title] medical executive professional portrait`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                />
                <div className="p-6">
                  <h3 className="text-brand-navy font-bold text-lg mb-1">{person.name}</h3>
                  <div className="text-brand-sky text-sm font-medium mb-3">{person.title}</div>
                  <p className="text-brand-text text-sm leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
