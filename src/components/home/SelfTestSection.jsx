import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, ChevronRight, RotateCcw } from 'lucide-react';

const questions = [
  { id: 1, text: '您是否经常需要别人重复说话内容？' },
  { id: 2, text: '您是否在嘈杂环境中难以听清对话？' },
  { id: 3, text: '您是否经常将电视或收音机音量调得很高？' },
  { id: 4, text: '您是否有时听不到门铃或电话铃声？' },
  { id: 5, text: '您是否在电话通话中感到听力困难？' },
  { id: 6, text: '您是否曾长期在噪音环境中工作或生活？' },
  { id: 7, text: '您是否有耳鸣（耳朵里有嗡嗡声）的情况？' },
  { id: 8, text: '您是否超过一年没有进行过听力检查？' },
];

function getResult(yesCount) {
  if (yesCount <= 1) {
    return {
      level: '听力状况良好',
      color: 'text-green-600',
      bg: 'bg-green-50 border-green-200',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      desc: '您的听力状况看起来不错！继续保持良好的听力保护习惯，定期进行听力检查。',
      action: '建议每2年进行一次专业听力检查。',
    };
  } else if (yesCount <= 4) {
    return {
      level: '存在轻度风险',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200',
      icon: AlertCircle,
      iconColor: 'text-amber-500',
      desc: '您可能存在一定程度的听力问题或风险因素，建议尽快进行专业听力评估。',
      action: '建议在3个月内预约专业听力检查。',
    };
  } else {
    return {
      level: '建议尽快就医',
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-200',
      icon: XCircle,
      iconColor: 'text-red-500',
      desc: '您的回答显示可能存在明显的听力问题，强烈建议尽快前往医院耳鼻喉科或听力中心进行专业检查。',
      action: '请尽快预约耳鼻喉科或听力专科医生。',
    };
  }
}

export default function SelfTestSection() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const yesCount = Object.values(answers).filter(Boolean).length;
  const result = submitted ? getResult(yesCount) : null;

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section id="selftest" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            风险自测
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            听力风险自我评估
          </h2>
          <p className="text-lg text-slate-600">
            回答以下8个问题，初步了解您的听力健康状况。
            <br />
            <span className="text-sm text-slate-400">（本测试仅供参考，不能替代专业医学诊断）</span>
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="space-y-5">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    answers[q.id] === true
                      ? 'border-orange-300 bg-orange-50'
                      : answers[q.id] === false
                      ? 'border-green-300 bg-green-50'
                      : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-800 font-medium text-sm md:text-base">{q.text}</p>
                  </div>
                  <div className="flex gap-3 ml-9">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                        answers[q.id] === true
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600'
                      }`}
                    >
                      是
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                        answers[q.id] === false
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-600'
                      }`}
                    >
                      否
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-slate-400">
                已回答 {Object.keys(answers).length}/{questions.length} 题
              </span>
              <button
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                className={`flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 ${
                  allAnswered
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                查看结果
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl border-2 p-8 ${result.bg}`}>
            <div className="text-center mb-6">
              {(() => {
                const Icon = result.icon;
                return <Icon className={`w-16 h-16 mx-auto mb-4 ${result.iconColor}`} />;
              })()}
              <h3 className={`text-2xl font-bold mb-2 ${result.color}`}>{result.level}</h3>
              <p className="text-slate-700 leading-relaxed mb-4">{result.desc}</p>
              <div className="inline-block bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-sm font-semibold text-slate-700">{result.action}</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-4 mb-6">
              <p className="text-sm text-slate-600 text-center">
                您回答了 <span className="font-bold text-orange-600">{yesCount}</span> 个"是"，
                共 <span className="font-bold">{questions.length}</span> 题
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={reset}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-600 hover:border-cyan-400 hover:text-cyan-600 font-semibold py-3 rounded-xl transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                重新测试
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#tips');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md"
              >
                查看保护建议
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
