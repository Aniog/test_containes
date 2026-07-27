import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1a0a35]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">联系我们</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            开始您的紫色之旅
          </h2>
          <p className="text-violet-300">
            有任何问题或合作意向，欢迎随时联系我们
          </p>
        </div>

        {sent ? (
          <div className="text-center py-16 bg-purple-900/30 border border-purple-600/30 rounded-2xl">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-purple-100 mb-2">消息已发送！</h3>
            <p className="text-violet-300">我们会在 24 小时内回复您</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-600/30 rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-1.5" htmlFor="name">
                姓名
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="您的姓名"
                className="w-full bg-purple-950/50 border border-purple-700/50 text-purple-100 placeholder-violet-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-1.5" htmlFor="email">
                邮箱
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-purple-950/50 border border-purple-700/50 text-purple-100 placeholder-violet-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-1.5" htmlFor="message">
                留言
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="请输入您的留言..."
                className="w-full bg-purple-950/50 border border-purple-700/50 text-purple-100 placeholder-violet-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-purple-900/50"
            >
              <Send className="w-4 h-4" />
              发送消息
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
