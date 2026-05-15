import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: '公司地址',
    value: '中国·江苏省南京市江宁经济技术开发区电力装备产业园A区',
  },
  {
    icon: Phone,
    label: '销售热线',
    value: '400-888-6688',
  },
  {
    icon: Mail,
    label: '商务邮箱',
    value: 'sales@wensida-power.com',
  },
  {
    icon: Clock,
    label: '服务时间',
    value: '周一至周五 08:30–17:30（节假日除外）',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28" ref={containerRef}>
      {/* Background: modern business office / professional meeting */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="contact-bg-a1c2e3"
        data-strk-bg="[contact-title] modern business office professional meeting cooperation"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-brand-gray/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            期待与您携手合作
          </h2>
          <p className="text-brand-muted text-base max-w-2xl mx-auto">
            无论是产品咨询、技术支持还是合作洽谈，我们的专业团队随时为您服务。
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-brand-text font-bold text-xl mb-6">联系方式</h3>
            <div className="space-y-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-brand-muted text-xs font-medium mb-0.5">{label}</div>
                    <div className="text-brand-text font-semibold text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-brand-blue/10 rounded-xl h-48 flex items-center justify-center border border-brand-blue/20">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                <p className="text-brand-muted text-sm">南京市江宁经济技术开发区</p>
                <p className="text-brand-muted text-xs mt-1">电力装备产业园A区</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-brand-text font-bold text-xl mb-2">提交成功！</h3>
                <p className="text-brand-muted text-sm">
                  感谢您的留言，我们的销售团队将在1个工作日内与您联系。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', message: '' }); }}
                  className="mt-6 text-brand-sky text-sm font-semibold hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-brand-text font-bold text-xl mb-6">在线留言</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-text text-sm font-medium mb-1.5">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="您的姓名"
                        className="w-full border border-brand-blue/20 rounded-lg px-4 py-2.5 text-brand-text text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-medium mb-1.5">
                        公司名称
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="所在单位"
                        className="w-full border border-brand-blue/20 rounded-lg px-4 py-2.5 text-brand-text text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-text text-sm font-medium mb-1.5">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="手机号码"
                        className="w-full border border-brand-blue/20 rounded-lg px-4 py-2.5 text-brand-text text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-medium mb-1.5">
                        电子邮箱
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="邮箱地址"
                        className="w-full border border-brand-blue/20 rounded-lg px-4 py-2.5 text-brand-text text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-text text-sm font-medium mb-1.5">
                      需求描述 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的产品需求或咨询内容，我们将为您提供专业解答..."
                      className="w-full border border-brand-blue/20 rounded-lg px-4 py-2.5 text-brand-text text-sm focus:outline-none focus:border-brand-sky transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-amber-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    提交留言
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
