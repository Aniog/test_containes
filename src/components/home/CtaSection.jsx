import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const CtaSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="text-white">
            <span className="inline-block bg-blue-500 bg-opacity-40 border border-blue-400 border-opacity-50 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              联系我们
            </span>
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              准备好开始您的
              <br />
              数字化之旅了吗？
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              无论您有任何问题或需求，我们的专业团队随时准备为您提供最优质的服务和支持。
              立即联系我们，开启您的成功之路。
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-40 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-200" />
                </div>
                <span>hello@bluesky.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-40 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-200" />
                </div>
                <span>7×24 小时在线客服支持</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">发送成功！</h3>
                <p className="text-gray-600 mb-6">感谢您的留言，我们将在 24 小时内与您联系。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition"
                >
                  再次发送
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">发送消息</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      您的姓名
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的姓名"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      电子邮箱
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="请输入您的邮箱"
                        className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      留言内容
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="请描述您的需求或问题..."
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    发送消息
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
