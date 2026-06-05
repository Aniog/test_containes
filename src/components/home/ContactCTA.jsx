import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactCTA = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-700/50 border border-blue-500/40 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            联系我们
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            无论您有任何问题或需求，我们的团队随时准备为您提供帮助。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Mail, label: '电子邮件', value: 'hello@bluespark.com' },
              { icon: Phone, label: '联系电话', value: '+86 400-888-8888' },
              { icon: MapPin, label: '公司地址', value: '上海市浦东新区张江高科技园区' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700/60 border border-blue-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-200" />
                </div>
                <div>
                  <div className="text-blue-300 text-sm font-medium mb-1">{label}</div>
                  <div className="text-white font-semibold">{value}</div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-blue-200 text-sm leading-relaxed">
                我们通常在 1 个工作日内回复您的消息。如需紧急支持，请直接拨打我们的服务热线。
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-400/40 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-green-300" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">消息已发送！</h3>
                <p className="text-blue-200">感谢您的留言，我们将尽快与您联系。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">您的姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300/60 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">电子邮件</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的邮箱"
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300/60 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">留言内容</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="请描述您的需求..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300/60 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3.5 rounded-xl transition"
                >
                  <Send className="w-4 h-4" />
                  发送消息
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
