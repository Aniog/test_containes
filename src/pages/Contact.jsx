import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { Mail, MessageSquare, User as UserIcon, Tag, Send, CheckCircle, AlertCircle, MapPin, Clock, Globe } from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SUBJECTS = [
  { value: 'general',       label: '一般咨询',   desc: 'General inquiry' },
  { value: 'research',      label: '科研合作',   desc: 'Research collaboration' },
  { value: 'collaboration', label: '内容合作',   desc: 'Content partnership' },
  { value: 'feedback',      label: '反馈建议',   desc: 'Feedback & suggestions' },
  { value: 'media',         label: '媒体采访',   desc: 'Media & press' },
];

const INFO_CARDS = [
  {
    icon: Mail,
    title: '电子邮件',
    value: 'hello@microcosmos.science',
    sub: '我们通常在 24 小时内回复',
  },
  {
    icon: MapPin,
    title: '研究基地',
    value: '上海，中国',
    sub: '微观世界探索中心',
  },
  {
    icon: Clock,
    title: '工作时间',
    value: '周一 — 周五',
    sub: '09:00 — 18:00 (CST)',
  },
  {
    icon: Globe,
    title: '社交媒体',
    value: '@MicroCosmosLab',
    sub: '关注我们获取最新资讯',
  },
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || '提交失败，请稍后重试';
};

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [charCount, setCharCount] = useState(0);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const validate = () => {
    if (!values.name.trim()) return '请填写您的姓名';
    if (!values.email.trim()) return '请填写您的邮箱';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return '请填写有效的邮箱地址';
    if (!values.subject) return '请选择咨询主题';
    if (values.message.trim().length < 10) return '留言内容至少需要 10 个字符';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');
    try {
      const { data: response, error } = await client
        .from('ContactFormResponses')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
        })
        .select()
        .single();

      if (error || response?.success === false) {
        setErrorMsg(getErrorMessage(response, error));
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '' });
      setCharCount(0);
    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMsg(err.message || '提交失败，请稍后重试');
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-cosmos-950 text-cosmos-100">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-900/60 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-56 h-56 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-400 uppercase mb-4">
            联系我们
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            与我们探索<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              微观世界
            </span>
          </h1>
          <p className="text-lg text-cosmos-300 max-w-2xl mx-auto leading-relaxed">
            无论您是科研工作者、学生还是对微生物世界充满好奇的探索者，我们都期待与您交流。
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INFO_CARDS.map(({ icon: Icon, title, value, sub }) => (
            <div
              key={title}
              className="bg-cosmos-900/60 border border-cosmos-700/40 rounded-2xl p-5 text-center hover:border-teal-500/40 transition-colors"
            >
              <div className="w-10 h-10 bg-teal-500/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-teal-400" />
              </div>
              <p className="text-xs text-cosmos-400 mb-1">{title}</p>
              <p className="text-sm font-semibold text-white mb-1">{value}</p>
              <p className="text-xs text-cosmos-500">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div className="bg-cosmos-900/70 border border-cosmos-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">消息已发送！</h2>
              <p className="text-cosmos-300 mb-8 max-w-sm mx-auto">
                感谢您的留言，我们的团队将在 24 小时内通过邮件与您联系。
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-300 rounded-xl font-medium transition-all"
              >
                再次发送
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-teal-400" />
                  发送留言
                </h2>
                <p className="text-cosmos-400 text-sm">所有标有 * 的字段为必填项</p>
              </div>

              {errorMsg && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-cosmos-300 mb-2">
                      <UserIcon className="w-4 h-4 inline mr-1.5 text-teal-400" />
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      placeholder="您的姓名"
                      className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cosmos-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-1.5 text-teal-400" />
                      邮箱地址 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-cosmos-300 mb-3">
                    <Tag className="w-4 h-4 inline mr-1.5 text-teal-400" />
                    咨询主题 *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SUBJECTS.map(({ value, label, desc }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setValues((v) => ({ ...v, subject: value }))}
                        className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                          values.subject === value
                            ? 'bg-teal-500/20 border-teal-500/60 text-teal-300'
                            : 'bg-cosmos-800/40 border-cosmos-600/40 text-cosmos-300 hover:border-cosmos-500/60'
                        }`}
                      >
                        <span className="font-medium block">{label}</span>
                        <span className="text-xs opacity-60">{desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-cosmos-300 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1.5 text-teal-400" />
                    留言内容 *
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={6}
                    placeholder="请详细描述您的问题或想法..."
                    className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm resize-none"
                  />
                  <div className="flex justify-between mt-1.5">
                    <span className="text-xs text-cosmos-500">最少 10 个字符</span>
                    <span className={`text-xs ${charCount > 1800 ? 'text-amber-400' : 'text-cosmos-500'}`}>
                      {charCount} / 2000
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-cosmos-950 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cosmos-950/30 border-t-cosmos-950 rounded-full animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      发送留言
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
