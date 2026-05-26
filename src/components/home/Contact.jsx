import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="text-[#8B6F47]" size={20} />,
    label: '公司地址',
    value: '上海市静安区南京西路1788号',
  },
  {
    icon: <Phone className="text-[#8B6F47]" size={20} />,
    label: '联系电话',
    value: '400-888-6688',
  },
  {
    icon: <Mail className="text-[#8B6F47]" size={20} />,
    label: '电子邮箱',
    value: 'hello@luokelan.com',
  },
  {
    icon: <Clock className="text-[#8B6F47]" size={20} />,
    label: '服务时间',
    value: '周一至周六 9:00 - 18:00',
  },
];

export default function Contact() {
  const containerRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-28 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#8B6F47] text-sm tracking-widest uppercase mb-3 font-medium">联系我们</p>
          <h2 className="font-serif-sc font-bold text-[#5C3D1E] text-3xl md:text-4xl mb-4">
            让我们一起打造温馨的家
          </h2>
          <p className="text-[#7A6552] text-base max-w-xl mx-auto leading-relaxed">
            无论是产品咨询、定制需求还是合作洽谈，我们都期待与您相遇。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info + Image */}
          <div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-[16/9]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="联系罗克岚"
                className="w-full h-full object-cover"
                data-strk-img-id="contact-img-x1y2z3"
                data-strk-img="[contact-desc] [contact-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
              />
            </div>
            <span id="contact-title" className="hidden">温馨家居用品公司办公室</span>
            <span id="contact-desc" className="hidden">现代温馨的家居展厅，木质装饰，自然光线</span>

            {/* Info list */}
            <div className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 border border-[#E8DDD0]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#7A6552] text-xs mb-0.5">{item.label}</p>
                    <p className="text-[#5C3D1E] font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#E8DDD0]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#7A9E7E]/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-[#7A9E7E]" size={28} />
                </div>
                <h3 className="font-serif-sc font-bold text-[#5C3D1E] text-xl mb-3">感谢您的留言！</h3>
                <p className="text-[#7A6552] text-sm leading-relaxed">
                  我们已收到您的消息，将在1个工作日内与您联系。<br />
                  期待与您共同打造温馨的家。
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', message: '' }); }}
                  className="mt-6 text-[#8B6F47] text-sm underline"
                >
                  再次留言
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif-sc font-bold text-[#5C3D1E] text-xl mb-6">在线留言</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-[#7A6552] text-sm mb-1.5" htmlFor="name">您的姓名 *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#3D2B1F] text-sm bg-[#FDF8F0] focus:outline-none focus:border-[#8B6F47] transition-colors placeholder-[#B8A898]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A6552] text-sm mb-1.5" htmlFor="phone">联系电话 *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="请输入您的联系电话"
                      className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#3D2B1F] text-sm bg-[#FDF8F0] focus:outline-none focus:border-[#8B6F47] transition-colors placeholder-[#B8A898]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A6552] text-sm mb-1.5" htmlFor="message">留言内容 *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="请告诉我们您的需求或问题..."
                      className="w-full border border-[#E8DDD0] rounded-xl px-4 py-3 text-[#3D2B1F] text-sm bg-[#FDF8F0] focus:outline-none focus:border-[#8B6F47] transition-colors resize-none placeholder-[#B8A898]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#8B6F47] text-white font-medium py-3 rounded-full hover:bg-[#5C3D1E] transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
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
